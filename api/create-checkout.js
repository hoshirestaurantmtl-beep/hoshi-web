// ===== Hoshi — Création du paiement Stripe Checkout =====
// Fonction serverless Vercel. Requiert la variable d'environnement STRIPE_SECRET_KEY.
const fs = require("fs");
const path = require("path");

const TPS = 0.05;
const TVQ = 0.09975;

function loadMenu() {
  const src = fs.readFileSync(path.join(process.cwd(), "menu-data.js"), "utf8");
  // eslint-disable-next-line no-eval
  const MENU_DATA = eval(src + "; MENU_DATA");
  const index = {};
  MENU_DATA.menus.forEach(m => m.sections.forEach(s => s.items.forEach(it => index[it.id] = it)));
  return index;
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
    const { items, name, phone, time, lang } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: "Panier vide" });
    if (!name || !phone || !time) return res.status(400).json({ error: "Informations manquantes" });

    const menu = loadMenu();
    const L = ["fr", "en", "ja", "ko"].includes(lang) ? lang : "fr";

    let subtotal = 0;
    const lineItems = {};
    let i = 0;
    const summaryLines = [];
    for (const { id, qty } of items) {
      const it = menu[id];
      const q = Math.max(1, Math.min(20, parseInt(qty, 10) || 0));
      if (!it || !q) continue;
      const cents = Math.round(it.price * 100); // prix côté serveur — non falsifiable
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
