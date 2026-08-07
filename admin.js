// ===== Hoshi — Panneau d'administration =====

// ⚠️ MOT DE PASSE : changez la valeur ci-dessous (puis re-téléversez admin.js).
// Note honnête : sur un site statique ce mot de passe n'est qu'une barrière légère —
// il empêche les curieux, pas un attaquant déterminé. Les données du menu sont
// publiques de toute façon (elles s'affichent sur le site).
const ADMIN_PASSWORD = "hoshi2026";

let data = JSON.parse(JSON.stringify(MENU_DATA)); // copie de travail
const $ = (id) => document.getElementById(id);

// ---- Login ----
$("loginBtn").addEventListener("click", tryLogin);
$("pwd").addEventListener("keydown", (e) => { if (e.key === "Enter") tryLogin(); });

function tryLogin() {
  if ($("pwd").value === ADMIN_PASSWORD) {
    $("loginBox").classList.add("hidden");
    $("panel").classList.remove("hidden");
    $("saveBar").classList.remove("hidden");
    $("logoutBtn").classList.remove("hidden");
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
      const delS = document.createElement("button");
      delS.className = "btn btn-ghost btn-sm"; delS.textContent = "✕ section";
      delS.addEventListener("click", () => { if (confirm("Supprimer cette section et ses plats ?")) { menu.sections.splice(si, 1); render(); } });
      shead.appendChild(delS);
      sdiv.appendChild(shead);

      const table = document.createElement("table");
      table.innerHTML = `<thead><tr>
        <th>Nom (FR)</th><th>Nom (EN)</th>
        <th>Description (FR)</th><th>Description (EN)</th>
        <th>Prix $</th><th>Photo (img/...)</th><th></th>
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
        const tdD = document.createElement("td"); tdD.className = "del-td";
        const delI = document.createElement("button");
        delI.className = "del-x"; delI.textContent = "✕"; delI.title = "Supprimer ce plat";
        delI.addEventListener("click", () => { sec.items.splice(ii, 1); render(); });
        tdD.appendChild(delI); tr.appendChild(tdD);
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
