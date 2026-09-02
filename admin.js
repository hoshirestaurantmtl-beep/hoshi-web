// ===== Hoshi — Panneau d'administration =====

// ⚠️ MOT DE PASSE : changez la valeur ci-dessous (puis re-téléversez admin.js).
// Note honnête : sur un site statique ce mot de passe n'est qu'une barrière légère —
// il empêche les curieux, pas un attaquant déterminé. Les données du menu sont
// publiques de toute façon (elles s'affichent sur le site).
// Le mot de passe n'est plus stocké en clair : seul son empreinte SHA-256 apparaît ici.
// Pour le changer : dans la console du navigateur (F12) exécutez
//   crypto.subtle.digest("SHA-256", new TextEncoder().encode("NouveauMotDePasse")).then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("")))
// puis remplacez la valeur ci-dessous ET dans api/translate.js (même empreinte aux deux endroits).
const ADMIN_PASSWORD_HASH = "bd97f611897789b0eaabbecaba69f7fee6242b7587afec76af13ce844e54e514";
let ADMIN_PASSWORD = ""; // gardé en mémoire (pas persisté) pour authentifier les appels à /api/translate

async function sha256Hex(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

let data = JSON.parse(JSON.stringify(MENU_DATA)); // copie de travail
const $ = (id) => document.getElementById(id);

// ---- Login ----
$("loginBtn").addEventListener("click", tryLogin);
$("pwd").addEventListener("keydown", (e) => { if (e.key === "Enter") tryLogin(); });

async function tryLogin() {
  let hash = "";
  try { hash = await sha256Hex($("pwd").value); }
  catch (e) { $("loginErr").textContent = "Ouvrez cette page en HTTPS (hoshimtl.ca/admin)."; return; }
  if (hash === ADMIN_PASSWORD_HASH) {
    ADMIN_PASSWORD = $("pwd").value;
    $("loginBox").classList.add("hidden");
    $("panel").classList.remove("hidden");
    $("saveBar").classList.remove("hidden");
    $("logoutBtn").classList.remove("hidden");
    refreshTakeoutBtn();
    refreshNoticeBtn();
    refreshExtras();
    render();
  } else {
    $("loginErr").textContent = "Mot de passe incorrect.";
  }
}
$("logoutBtn").addEventListener("click", () => location.reload());

// ---- Rendu du panneau ----
function render() {
  const root = $("menusRoot");
  root.innerHTML = "";
  data.menus.forEach((menu, mi) => {
    const block = document.createElement("div");
    block.className = "menu-block";

    const head = document.createElement("div");
    head.className = "mb-head";
    head.innerHTML = `<strong>Menu :</strong>`;
    head.appendChild(txt(menu.title, "fr", "Titre FR"));
    head.appendChild(txt(menu.title, "en", "Titre EN"));
    if (!["principal", "midi"].includes(menu.id)) {
      const del = document.createElement("button");
      del.className = "btn btn-sm";
      del.textContent = "Supprimer ce menu";
      del.addEventListener("click", () => { if (confirm("Supprimer ce menu ?")) { data.menus.splice(mi, 1); render(); } });
      head.appendChild(del);
    }
    block.appendChild(head);

    menu.sections.forEach((sec, si) => {
      const sdiv = document.createElement("div");
      sdiv.className = "sec-block";

      const shead = document.createElement("div");
      shead.className = "sec-head";
      const kanji = document.createElement("input");
      kanji.className = "kanji-in"; kanji.value = sec.kanji || ""; kanji.placeholder = "漢字";
      kanji.addEventListener("input", () => sec.kanji = kanji.value);
      shead.appendChild(kanji);
      shead.appendChild(txt(sec.title, "fr", "Section FR"));
      shead.appendChild(txt(sec.title, "en", "Section EN"));
      const upS = document.createElement("button");
      upS.className = "btn btn-ghost btn-sm"; upS.textContent = "↑"; upS.title = "Monter la section";
      upS.addEventListener("click", () => { if (si > 0) { [menu.sections[si-1], menu.sections[si]] = [menu.sections[si], menu.sections[si-1]]; render(); } });
      shead.appendChild(upS);
      const dnS = document.createElement("button");
      dnS.className = "btn btn-ghost btn-sm"; dnS.textContent = "↓"; dnS.title = "Descendre la section";
      dnS.addEventListener("click", () => { if (si < menu.sections.length-1) { [menu.sections[si+1], menu.sections[si]] = [menu.sections[si], menu.sections[si+1]]; render(); } });
      shead.appendChild(dnS);
      const delS = document.createElement("button");
      delS.className = "btn btn-ghost btn-sm"; delS.textContent = "✕ section";
      delS.addEventListener("click", () => { if (confirm("Supprimer cette section et ses plats ?")) { menu.sections.splice(si, 1); render(); } });
      shead.appendChild(delS);
      sdiv.appendChild(shead);

      const table = document.createElement("table");
      table.innerHTML = `<thead><tr>
        <th>Nom (FR)</th><th>Nom (EN)</th>
        <th>Description (FR)</th><th>Description (EN)</th>
        <th>Prix $</th><th>Photo (img/...)</th><th>Actions</th>
      </tr></thead>`;
      const tbody = document.createElement("tbody");
      sec.items.forEach((it, ii) => {
        const tr = document.createElement("tr");
        tr.appendChild(tdIn(it.name, "fr"));
        tr.appendChild(tdIn(it.name, "en"));
        tr.appendChild(tdIn(it.desc = it.desc || { fr: "", en: "" }, "fr"));
        tr.appendChild(tdIn(it.desc, "en"));
        const tdP = document.createElement("td"); tdP.className = "price-td";
        const inP = document.createElement("input");
        inP.type = "number"; inP.step = "0.25"; inP.min = "0"; inP.value = it.price;
        inP.addEventListener("input", () => it.price = parseFloat(inP.value) || 0);
        tdP.appendChild(inP); tr.appendChild(tdP);
        const tdF = document.createElement("td"); tdF.className = "photo-td";
        const inF = document.createElement("input");
        inF.value = it.photo || ""; inF.placeholder = "img/plat.jpg";
        inF.addEventListener("input", () => { it.photo = inF.value.trim() || undefined; });
        tdF.appendChild(inF); tr.appendChild(tdF);
        const tdD = document.createElement("td"); tdD.className = "act-td";
        const mk = (label, title, fn, cls) => {
          const b = document.createElement("button");
          b.className = "act-btn" + (cls ? " " + cls : "");
          b.textContent = label; b.title = title; b.type = "button";
          b.addEventListener("click", fn);
          return b;
        };
        tdD.appendChild(mk("↑", "Monter", () => { if (ii > 0) { [sec.items[ii-1], sec.items[ii]] = [sec.items[ii], sec.items[ii-1]]; render(); } }));
        tdD.appendChild(mk("↓", "Descendre", () => { if (ii < sec.items.length-1) { [sec.items[ii+1], sec.items[ii]] = [sec.items[ii], sec.items[ii+1]]; render(); } }));
        tdD.appendChild(mk(it.soldout ? "🚫" : "✅", it.soldout ? "Épuisé — cliquer pour remettre en vente" : "En vente — cliquer pour marquer épuisé",
          () => { it.soldout = !it.soldout; if (!it.soldout) delete it.soldout; render(); }, it.soldout ? "sold-on" : ""));
        tdD.appendChild(mk("🍺", it.alcohol ? "Alcool : sur place seulement — cliquer pour autoriser au take-out" : "Take-out autorisé — cliquer pour marquer « alcool, sur place seulement »",
          () => { it.alcohol = !it.alcohol; if (!it.alcohol) delete it.alcohol; render(); }, it.alcohol ? "sold-on" : ""));
        tdD.appendChild(mk("📷", "Téléverser une photo pour ce plat", () => uploadPhoto(it)));
        const hasJaKo = !!(it.name.ja && it.name.ko);
        tdD.appendChild(mk("🌐", hasJaKo ? "Japonais/coréen déjà traduits — cliquer pour revoir" : "Traduire en japonais/coréen (à partir du FR/EN)",
          () => openTranslateModal(it), hasJaKo ? "sold-on" : ""));
        tdD.appendChild(mk("✕", "Supprimer ce plat", () => { if (confirm("Supprimer ce plat ?")) { sec.items.splice(ii, 1); render(); } }));
        tr.appendChild(tdD);
        if (it.soldout) tr.style.opacity = "0.55";
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      sdiv.appendChild(table);

      const ra = document.createElement("div");
      ra.className = "row-actions";
      const addI = document.createElement("button");
      addI.className = "btn btn-ghost btn-sm"; addI.textContent = "+ Ajouter un plat";
      addI.addEventListener("click", () => {
        sec.items.push({ id: newId(), name: { fr: "", en: "" }, desc: { fr: "", en: "" }, price: 0 });
        render();
      });
      ra.appendChild(addI);
      sdiv.appendChild(ra);
      block.appendChild(sdiv);
    });

    const addSecWrap = document.createElement("div");
    addSecWrap.className = "sec-block";
    const addSec = document.createElement("button");
    addSec.className = "btn btn-ghost btn-sm"; addSec.textContent = "+ Ajouter une section";
    addSec.addEventListener("click", () => {
      menu.sections.push({ kanji: "", title: { fr: "Nouvelle section", en: "New section" }, items: [] });
      render();
    });
    addSecWrap.appendChild(addSec);
    block.appendChild(addSecWrap);

    root.appendChild(block);
  });
}

function txt(obj, lang, ph) {
  const input = document.createElement("input");
  input.value = obj[lang] || ""; input.placeholder = ph;
  input.addEventListener("input", () => obj[lang] = input.value);
  return input;
}
function tdIn(obj, lang) {
  const td = document.createElement("td");
  td.appendChild(txt(obj, lang, lang.toUpperCase()));
  return td;
}
function newId() {
  let n = 1;
  const ids = new Set();
  data.menus.forEach(m => m.sections.forEach(s => s.items.forEach(i => ids.add(i.id))));
  while (ids.has("n" + n)) n++;
  return "n" + n;
}

// ---- Take-out on/off ----
function refreshTakeoutBtn() {
  const on = !(data.settings && data.settings.takeout === false);
  const b = $("takeoutToggle");
  b.textContent = on ? "🥡 Take-out : ACTIVÉ ✅" : "🥡 Take-out : DÉSACTIVÉ ⛔";
  b.style.background = on ? "#2e7d32" : "#8a8a8a";
}
$("takeoutToggle").addEventListener("click", () => {
  data.settings = data.settings || {};
  const on = !(data.settings.takeout === false);
  data.settings.takeout = !on;
  refreshTakeoutBtn();
  $("savedMsg").textContent = "N'oubliez pas de cliquer « 🚀 Publier en ligne » pour appliquer.";
});

// ---- Avis / popup on/off ----
const NOTICE_DEFAULT = {
  on: true,
  fr: "🍳 Fermeture temporaire — les 15 et 16 août\n\nNous installons de nouveaux équipements de cuisine pour des katsu encore plus croustillants ! De retour le 17 août. Merci de votre patience 🙏",
  en: "🍳 Temporarily closed — August 15 & 16\n\nWe're installing new kitchen equipment for even crispier katsu! Back on August 17. Thank you for your patience 🙏",
  ja: "🍳 臨時休業のお知らせ — 8月15日・16日\n\nより美味しいカツをお届けするため、新しい厨房設備を設置しています。8月17日より営業を再開いたします 🙏",
  ko: "🍳 임시 휴업 안내 — 8월 15일·16일\n\n더 바삭한 카츠를 위해 새 주방 설비를 설치 중입니다. 8월 17일부터 정상 영업합니다 🙏"
};
function refreshNoticeBtn() {
  const n = (data.settings && data.settings.notice) || {};
  const on = !!n.on;
  const b = $("noticeToggle");
  b.textContent = on ? "Avis : ACTIVÉ ✅" : "Avis : DÉSACTIVÉ";
  b.style.background = on ? "#2e7d32" : "#8a8a8a";
  $("noticeFr").value = n.fr || "";
  $("noticeEn").value = n.en || "";
}
function noticeInput() {
  data.settings = data.settings || {};
  data.settings.notice = data.settings.notice || { on: false };
  data.settings.notice.fr = $("noticeFr").value;
  data.settings.notice.en = $("noticeEn").value;
  // texte personnalisé : les visiteurs JA/KO verront la version EN
  delete data.settings.notice.ja;
  delete data.settings.notice.ko;
}
$("noticeFr").addEventListener("input", noticeInput);
$("noticeEn").addEventListener("input", noticeInput);
$("noticeToggle").addEventListener("click", () => {
  data.settings = data.settings || {};
  const n = data.settings.notice;
  if (n && n.on) {
    n.on = false;
  } else if (n && (n.fr || n.en)) {
    n.on = true;
  } else {
    data.settings.notice = Object.assign({}, NOTICE_DEFAULT, { on: true });
  }
  refreshNoticeBtn();
  $("savedMsg").textContent = "N'oubliez pas de cliquer « 🚀 Publier en ligne » pour appliquer.";
});

// ---- Nouveau menu ----
$("addMenuBtn").addEventListener("click", () => {
  const name = prompt("Nom du nouveau menu (ex. : Menu du soir, Spéciaux du mois) :");
  if (!name) return;
  data.menus.push({
    id: "m" + Date.now().toString(36),
    title: { fr: name, en: name },
    sections: [{ kanji: "", title: { fr: "Section", en: "Section" }, items: [] }]
  });
  render();
});

// ---- Annuler ----
$("resetBtn").addEventListener("click", () => {
  if (confirm("Annuler toutes les modifications non téléchargées ?")) {
    data = JSON.parse(JSON.stringify(MENU_DATA));
    render();
  }
});

// ---- Génération du fichier ----
function serialize() {
  // nettoie les descriptions vides
  const clean = JSON.parse(JSON.stringify(data));
  clean.menus.forEach(m => m.sections.forEach(s => s.items.forEach(it => {
    if (it.desc && !it.desc.fr && !it.desc.en) delete it.desc;
    if (!it.photo) delete it.photo;
    if (!it.soldout) delete it.soldout;
    if (!it.alcohol) delete it.alcohol;
  })));
  return "// ===== Hoshi — Données du menu / Menu data =====\n" +
         "// Fichier généré par admin.html — remplacez menu-data.js du site par ce fichier.\n" +
         "const MENU_DATA = " + JSON.stringify(clean, null, 2) + ";\n";
}

$("downloadBtn").addEventListener("click", () => {
  const blob = new Blob([serialize()], { type: "text/javascript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "menu-data.js";
  a.click();
  URL.revokeObjectURL(a.href);
  $("savedMsg").textContent = "Fichier téléchargé ✓ — remplacez menu-data.js sur le site.";
});

// ---- Aperçu local ----
$("previewBtn").addEventListener("click", () => {
  const w = window.open("index.html", "_blank");
  const code = serialize();
  const check = setInterval(() => {
    try {
      if (w && w.document && w.document.readyState === "complete") {
        clearInterval(check);
        const s = w.document.createElement("script");
        s.textContent = code.replace("const MENU_DATA", "window.MENU_DATA_OVERRIDE") +
          "\nMENU_DATA.menus = MENU_DATA_OVERRIDE.menus;" +
          "\nif (typeof renderMenus === 'function') renderMenus(document.documentElement.lang || 'fr');";
        w.document.body.appendChild(s);
      }
    } catch (e) { clearInterval(check); }
  }, 300);
});


// ---- Publication directe via l'API GitHub ----
const GH_OWNER = "hoshirestaurantmtl-beep";
const GH_REPO = "hoshi-web";
const GH_FILE = "menu-data.js";
const GH_BRANCH = "main";

function getToken() {
  let t = localStorage.getItem("hoshi_gh_token");
  if (!t) {
    t = prompt(
      "Collez votre token GitHub (fine-grained, accès Contents en écriture sur " +
      GH_OWNER + "/" + GH_REPO + ").\n" +
      "Il sera gardé uniquement dans ce navigateur."
    );
    if (t) localStorage.setItem("hoshi_gh_token", t.trim());
  }
  return t ? t.trim() : null;
}

$("publishBtn").addEventListener("click", async () => {
  const token = getToken();
  if (!token) return;
  const btn = $("publishBtn");
  btn.disabled = true;
  btn.textContent = "⏳ Publication…";
  $("savedMsg").textContent = "";
  try {
    const apiUrl = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`;
    const headers = {
      "Authorization": "Bearer " + token,
      "Accept": "application/vnd.github+json"
    };
    // 1) SHA actuel du fichier
    const getRes = await fetch(apiUrl + "?ref=" + GH_BRANCH, { headers });
    if (getRes.status === 401 || getRes.status === 403) {
      localStorage.removeItem("hoshi_gh_token");
      throw new Error("Token invalide ou expiré — recliquez sur Publier et entrez un nouveau token.");
    }
    if (!getRes.ok) throw new Error("Impossible de lire le fichier sur GitHub (" + getRes.status + ")");
    const current = await getRes.json();
    // 2) Mise à jour
    const content = btoa(unescape(encodeURIComponent(serialize())));
    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        message: "Mise à jour du menu via le panneau admin",
        content,
        sha: current.sha,
        branch: GH_BRANCH
      })
    });
    if (!putRes.ok) {
      const err = await putRes.json().catch(() => ({}));
      throw new Error("Échec de la publication (" + putRes.status + ") " + (err.message || ""));
    }
    $("savedMsg").textContent = "Publié ✓ — le site se met à jour d'ici ~1 minute (Vercel).";
  } catch (e) {
    $("savedMsg").textContent = "";
    alert("Erreur : " + e.message);
  } finally {
    btn.disabled = false;
    btn.textContent = "🚀 Publier en ligne";
  }
});

// ===== Configuration du site (bandeau, horaires, coordonnées, photos) =====
// Les jours cochés (0=dimanche … 6=samedi) sont ce qui contrôle VRAIMENT la
// disponibilité des commandes — le texte FR/EN n'est qu'un libellé d'affichage.
const DEFAULT_HOURS = [
  { fr: "Lundi – Mercredi", en: "Monday – Wednesday", time: "11:30 – 15:00 · 17:00 – 21:00", days: [1, 2, 3] },
  { fr: "Jeudi", en: "Thursday", time: "11:30 – 15:00 · 17:00 – 21:30", days: [4] },
  { fr: "Vendredi", en: "Friday", time: "11:30 – 23:00", days: [5] },
  { fr: "Samedi", en: "Saturday", time: "11:00 – 23:00", days: [6] },
  { fr: "Dimanche", en: "Sunday", time: "11:00 – 23:00", days: [0] }
];
const DAY_DEFS = [
  { d: 1, label: "Lu" }, { d: 2, label: "Ma" }, { d: 3, label: "Me" }, { d: 4, label: "Je" },
  { d: 5, label: "Ve" }, { d: 6, label: "Sa" }, { d: 0, label: "Di" }
];

function refreshExtras() {
  data.settings = data.settings || {};
  const s = data.settings;
  $("bannerFr").value = (s.banner && s.banner.fr) || "";
  $("bannerEn").value = (s.banner && s.banner.en) || "";
  $("contactPhone").value = (s.contact && s.contact.phone) || "";
  $("contactInsta").value = (s.contact && s.contact.instagram) || "";
  if (!Array.isArray(s.hours) || s.hours.length === 0) s.hours = JSON.parse(JSON.stringify(DEFAULT_HOURS));
  renderHoursEditor();
  refreshPhotosBtn();
}

["bannerFr", "bannerEn"].forEach(id => $(id).addEventListener("input", () => {
  data.settings = data.settings || {};
  const fr = $("bannerFr").value.trim(), en = $("bannerEn").value.trim();
  if (fr || en) data.settings.banner = { fr, en };
  else delete data.settings.banner;
}));

["contactPhone", "contactInsta"].forEach(id => $(id).addEventListener("input", () => {
  data.settings = data.settings || {};
  const phone = $("contactPhone").value.trim(), instagram = $("contactInsta").value.trim();
  if (phone || instagram) data.settings.contact = { phone, instagram };
  else delete data.settings.contact;
}));

function renderHoursEditor() {
  const box = $("hoursRows");
  box.innerHTML = "";
  data.settings.hours.forEach((r, i) => {
    if (!Array.isArray(r.days)) r.days = [];
    const wrap = document.createElement("div");
    wrap.style.marginBottom = "0.7rem";

    // jours actifs de cette ligne — c'est ce qui contrôle vraiment les commandes
    const days = document.createElement("div");
    days.style.cssText = "display:flex; gap:0.3rem; margin-bottom:0.3rem;";
    DAY_DEFS.forEach(dd => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = dd.label;
      b.className = "act-btn" + (r.days.includes(dd.d) ? " sold-on" : "");
      b.title = r.days.includes(dd.d) ? "Ouvert ce jour — cliquer pour désactiver" : "Fermé ce jour — cliquer pour activer";
      b.addEventListener("click", () => {
        const idx = r.days.indexOf(dd.d);
        if (idx === -1) r.days.push(dd.d); else r.days.splice(idx, 1);
        renderHoursEditor();
      });
      days.appendChild(b);
    });
    wrap.appendChild(days);

    const row = document.createElement("div");
    row.className = "hour-row";
    const mkIn = (val, ph, key) => {
      const inp = document.createElement("input");
      inp.value = val || ""; inp.placeholder = ph;
      inp.addEventListener("input", () => r[key] = inp.value);
      return inp;
    };
    row.appendChild(mkIn(r.fr, "Jour (FR)", "fr"));
    row.appendChild(mkIn(r.en, "Day (EN)", "en"));
    row.appendChild(mkIn(r.time, "Heures", "time"));
    const del = document.createElement("button");
    del.className = "del-x"; del.textContent = "✕"; del.type = "button";
    del.addEventListener("click", () => { data.settings.hours.splice(i, 1); renderHoursEditor(); });
    row.appendChild(del);
    wrap.appendChild(row);

    box.appendChild(wrap);
  });
}
$("addHourRow").addEventListener("click", () => {
  data.settings.hours.push({ fr: "", en: "", time: "", days: [] });
  renderHoursEditor();
});

// ---- Photos on/off ----
function refreshPhotosBtn() {
  const on = data.settings.photos === true;
  const b = $("photosToggle");
  b.textContent = on ? "📷 Photos : ACTIVÉES ✅" : "📷 Photos : MASQUÉES";
  b.style.background = on ? "#2e7d32" : "#8a8a8a";
}
$("photosToggle").addEventListener("click", () => {
  data.settings = data.settings || {};
  data.settings.photos = data.settings.photos !== true;
  refreshPhotosBtn();
  $("savedMsg").textContent = "N'oubliez pas de cliquer « 🚀 Publier en ligne » pour appliquer.";
});

// ---- Téléverser une photo de plat vers GitHub ----
function uploadPhoto(item) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/jpeg,image/png,image/webp";
  input.addEventListener("change", async () => {
    const file = input.files[0];
    if (!file) return;
    if (file.size > 3.5 * 1024 * 1024) { alert("Image trop lourde (max 3,5 Mo). Réduisez-la d'abord."); return; }
    const token = getToken();
    if (!token) return;
    $("savedMsg").textContent = "⏳ Téléversement de la photo…";
    try {
      const b64 = await new Promise((res, rej) => {
        const rd = new FileReader();
        rd.onload = () => res(rd.result.split(",")[1]);
        rd.onerror = rej;
        rd.readAsDataURL(file);
      });
      const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace("jpeg", "jpg");
      const path = "img/" + item.id + "-" + Date.now() + "." + ext;
      const resp = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${path}`, {
        method: "PUT",
        headers: { "Authorization": "Bearer " + token, "Accept": "application/vnd.github+json" },
        body: JSON.stringify({ message: "Photo de plat via le panneau admin", content: b64, branch: GH_BRANCH })
      });
      if (!resp.ok) { const e = await resp.json().catch(() => ({})); throw new Error(e.message || resp.status); }
      item.photo = path;
      render();
      $("savedMsg").textContent = "Photo téléversée ✓ — cliquez « 🚀 Publier en ligne » pour l'associer au plat.";
    } catch (e) {
      $("savedMsg").textContent = "";
      alert("Erreur photo : " + e.message);
    }
  });
  input.click();
}

// ---- Restaurer la version précédente du menu ----
$("restoreBtn").addEventListener("click", async () => {
  if (!confirm("Restaurer la version PRÉCÉDENTE du menu ? Les changements publiés les plus récents seront annulés.")) return;
  const token = getToken();
  if (!token) return;
  const headers = { "Authorization": "Bearer " + token, "Accept": "application/vnd.github+json" };
  try {
    const commits = await (await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/commits?path=${GH_FILE}&per_page=2&sha=${GH_BRANCH}`, { headers })).json();
    if (!Array.isArray(commits) || commits.length < 2) throw new Error("Aucune version précédente trouvée.");
    const prevSha = commits[1].sha;
    const prevFile = await (await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}?ref=${prevSha}`, { headers })).json();
    const current = await (await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}?ref=${GH_BRANCH}`, { headers })).json();
    const put = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ message: "Restauration de la version précédente", content: prevFile.content.replace(/\n/g, ""), sha: current.sha, branch: GH_BRANCH })
    });
    if (!put.ok) { const e = await put.json().catch(() => ({})); throw new Error(e.message || put.status); }
    alert("Version précédente restaurée ✓ — le site se met à jour d'ici ~1 minute. Le panneau va se recharger.");
    location.reload();
  } catch (e) {
    alert("Erreur : " + e.message);
  }
});

// ---- Traduction JA/KO (DeepL, via /api/translate) ----
let currentTranslateItem = null;

async function callTranslate(texts, targetLang) {
  const resp = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password: ADMIN_PASSWORD, texts, source_lang: "FR", target_lang: targetLang })
  });
  const data = await resp.json().catch(() => ({}));
  if (!resp.ok) throw new Error(data.error || "Erreur de traduction (" + resp.status + ")");
  return data.translations || [];
}

async function openTranslateModal(it) {
  currentTranslateItem = it;
  $("translateItemLabel").textContent = it.name.fr || it.name.en || it.id;
  $("translateFields").style.display = "none";
  $("translateSaveBtn").disabled = true;
  $("translateStatus").textContent = "⏳ Traduction en cours…";
  $("translateOverlay").classList.remove("hidden");

  const nameSrc = it.name.fr || it.name.en || "";
  const descSrc = (it.desc && (it.desc.fr || it.desc.en)) || "";
  if (!nameSrc) {
    $("translateStatus").textContent = "Écrivez d'abord un nom en FR ou EN pour ce plat.";
    return;
  }
  try {
    const texts = descSrc ? [nameSrc, descSrc] : [nameSrc];
    const [ja, ko] = await Promise.all([callTranslate(texts, "JA"), callTranslate(texts, "KO")]);
    $("trNameJa").value = it.name.ja || ja[0] || "";
    $("trNameKo").value = it.name.ko || ko[0] || "";
    $("trDescJa").value = (it.desc && it.desc.ja) || ja[1] || "";
    $("trDescKo").value = (it.desc && it.desc.ko) || ko[1] || "";
    $("translateStatus").textContent = "Vérifiez et corrigez si besoin avant d'enregistrer :";
    $("translateFields").style.display = "";
    $("translateSaveBtn").disabled = false;
  } catch (e) {
    $("translateStatus").textContent = "Erreur : " + e.message;
  }
}

function closeTranslateModal() {
  $("translateOverlay").classList.add("hidden");
  currentTranslateItem = null;
}

$("translateCancelBtn").addEventListener("click", closeTranslateModal);
$("translateOverlay").addEventListener("click", (e) => { if (e.target.id === "translateOverlay") closeTranslateModal(); });
$("translateSaveBtn").addEventListener("click", () => {
  const it = currentTranslateItem;
  if (!it) return;
  it.name.ja = $("trNameJa").value.trim();
  it.name.ko = $("trNameKo").value.trim();
  const descJa = $("trDescJa").value.trim(), descKo = $("trDescKo").value.trim();
  if (descJa || descKo) { it.desc = it.desc || {}; it.desc.ja = descJa; it.desc.ko = descKo; }
  closeTranslateModal();
  render();
  $("savedMsg").textContent = "N'oubliez pas de cliquer « 🚀 Publier en ligne » pour appliquer.";
});
