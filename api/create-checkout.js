// ===== Hoshi — Création du paiement Stripe Checkout =====
// Fonction serverless Vercel. Requiert la variable d'environnement STRIPE_SECRET_KEY.
const fs = require("fs");
const path = require("path");

const TPS = 0.05;
const TVQ = 0.09975;

// Horaires de service (minutes depuis minuit, heure de Montréal ; 0 = dimanche).
// Dérivés de menu-data.js > settings.hours (panneau admin) pour que la validation
// de paiement ne diverge jamais des horaires affichés sur le site. Repli sur ces
// valeurs par défaut si le panneau admin n'a pas encore été utilisé.
const DEFAULT_SERVICE = {
  0: [[660, 1380]],
  1: [[690, 900], [1020, 1260]],
  2: [[690, 900], [1020, 1260]],
  3: [[690, 900], [1020, 1260]],
  4: [[690, 900], [1020, 1290]],
  5: [[690, 1380]],
  6: [[660, 1380]]
};
const PREP_MIN = 25;
const LAST_PICKUP_MIN = 10;

// Extrait les paires HH:MM d'un texte libre (« 11:30 – 15:00 · 17:00 – 21:00 ») en plages [ouverture, fermeture]
function parseTimeRanges(text) {
  const nums = String(text || "").match(/\d{1,2}:\d{2}/g) || [];
  const toMin = s => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
  const ranges = [];
  for (let i = 0; i + 1 < nums.length; i += 2) {
    const a = toMin(nums[i]), b = toMin(nums[i + 1]);
    if (b > a) ranges.push([a, b]);
  }
  return ranges;
}
function buildService(hoursRows) {
  const svc = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
  let any = false;
  (hoursRows || []).forEach(row => {
    const ranges = parseTimeRanges(row.time);
    (row.days || []).forEach(d => { if (svc[d]) { svc[d] = svc[d].concat(ranges); any = true; } });
  });
  return any ? svc : null;
}

function montrealNow() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Montreal", hour12: false,
    weekday: "short", hour: "2-digit", minute: "2-digit"
  }).formatToParts(new Date());
  const get = t => parts.find(p => p.type === t).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, min: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10) };
}

function validPickup(timeStr, SERVICE) {
  const m = /^(\d{1,2}):(\d{2})$/.exec((timeStr || "").trim());
  if (!m) return false;
  const t = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
  const now = montrealNow();
  // le restaurant doit être ouvert au moment de la commande…
  const openNow = (SERVICE[now.day] || []).some(([a, b]) => now.min >= a && now.min + PREP_MIN <= b - LAST_PICKUP_MIN);
  if (!openNow) return false;
  // …et l'heure de ramassage doit tomber dans une plage valide
  return (SERVICE[now.day] || []).some(([a, b]) =>
    t >= Math.max(a, now.min + PREP_MIN) && t <= b - LAST_PICKUP_MIN
  );
}

function loadMenu() {
  const src = fs.readFileSync(path.join(process.cwd(), "menu-data.js"), "utf8");
  // eslint-disable-next-line no-eval
  const MENU_DATA = eval(src + "; MENU_DATA");
  const index = {};
  MENU_DATA.menus.forEach(m => m.sections.forEach(s => s.items.forEach(it => index[it.id] = it)));
  const SERVICE = buildService(MENU_DATA.settings && MENU_DATA.settings.hours) || DEFAULT_SERVICE;
  return { index, SERVICE };
}

// encode les paramètres imbriqués au format attendu par l'API Stripe
function encodeForm(obj, prefix, out) {
  out = out || [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (v === null || v === undefined) continue;
    if (typeof v === "object") encodeForm(v, key, out);
    else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(v));
  }
  return out.join("&");
}

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return res.status(500).json({ error: "STRIPE_SECRET_KEY manquante" });

  try {
    const body = req.body || {};
    const items = body.items;
    // nettoie et borne les champs saisis par le client
    const clean = (v, max) => String(v == null ? "" : v).replace(/[\r\n\t<>]/g, " ").trim().slice(0, max);
    const name = clean(body.name, 60);
    const phone = clean(body.phone, 25);
    const time = clean(body.time, 5);
    const lang = body.lang;
    if (!Array.isArray(items) || items.length === 0 || items.length > 40) return res.status(400).json({ error: "Panier invalide" });
    if (!name || !phone || !time) return res.status(400).json({ error: "Informations manquantes" });
    if (!/^[0-9+\-() .]{7,25}$/.test(phone)) return res.status(400).json({ error: "Numéro de téléphone invalide" });

    const { index: menu, SERVICE } = loadMenu();
    if (!validPickup(time, SERVICE)) return res.status(400).json({ error: "Heure de ramassage hors des horaires d'ouverture" });

    const L = ["fr", "en", "ja", "ko"].includes(lang) ? lang : "fr";

    let subtotal = 0;
    const lineItems = {};
    let i = 0;
    const summaryLines = [];
    for (const { id, qty } of items) {
      const it = menu[id];
      const q = Math.max(1, Math.min(20, parseInt(qty, 10) || 0));
      if (!it || !q) continue;
      if (it.soldout) return res.status(400).json({ error: "Un article du panier est épuisé" });
      if (it.alcohol) return res.status(400).json({ error: "Les boissons alcoolisées sont disponibles sur place seulement" });
      const cents = Math.round(Number(it.price) * 100); // prix côté serveur — non falsifiable
      if (!Number.isFinite(cents) || cents <= 0) continue;
      subtotal += cents * q;
      const dishName = it.name[L] || it.name.en || it.name.fr;
      lineItems[i++] = {
        quantity: q,
        price_data: { currency: "cad", unit_amount: cents, product_data: { name: dishName } }
      };
      summaryLines.push(`${q}x ${it.name.fr || dishName}`);
    }
    if (subtotal === 0) return res.status(400).json({ error: "Panier invalide" });

    const tps = Math.round(subtotal * TPS);
    const tvq = Math.round(subtotal * TVQ);
    lineItems[i++] = { quantity: 1, price_data: { currency: "cad", unit_amount: tps, product_data: { name: "TPS (5 %)" } } };
    lineItems[i++] = { quantity: 1, price_data: { currency: "cad", unit_amount: tvq, product_data: { name: "TVQ (9,975 %)" } } };

    const description = `🥡 ${time} — ${name} (${phone}) — ${summaryLines.join(", ")}`.slice(0, 950);

    const params = {
      mode: "payment",
      locale: L === "fr" ? "fr" : L,
      success_url: "https://hoshimtl.ca/merci.html",
      cancel_url: "https://hoshimtl.ca/#commande",
      line_items: lineItems,
      payment_intent_data: {
        description,
        metadata: { client: name, telephone: phone, ramassage: time, commande: summaryLines.join(" | ").slice(0, 480) }
      },
      metadata: { client: name, telephone: phone, ramassage: time }
    };

    const resp = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + key,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encodeForm(params)
    });
    const session = await resp.json();
    if (!resp.ok) {
      console.error("Stripe error:", session.error);
      return res.status(502).json({ error: session.error?.message || "Erreur Stripe" });
    }
    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
