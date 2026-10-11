// ===== Hoshi — Aperçu public du nouveau menu (page /nouveau-menu) =====
// Lit le menu de test (api/_menu-test-data.js) et n'en publie que les noms et descriptions :
// pas de prix, pas de photos, pas d'allergènes (encore en brouillon), pas d'options internes.
// L'aperçu s'arrête au lancement : ensuite le nouveau menu est le menu principal du site.

const LAUNCH = Date.parse("2026-10-19T00:00:00-04:00"); // lundi 19 octobre, heure de Montréal

// Retire toute mention de prix d'un texte : parenthèses avec « $ », puis phrases avec « $ »
function stripPrices(text) {
  if (!text) return "";
  let t = String(text).replace(/\s*[（(][^（()）]*\$[^（()）]*[)）]/g, "");
  t = t.split(/(?<=[.。])\s*/).filter(s => !s.includes("$")).join(" ").trim();
  return t;
}
function stripObj(o) {
  if (!o) return null;
  const out = {};
  for (const [lang, t] of Object.entries(o)) {
    const s = stripPrices(t);
    if (s) out[lang] = s;
  }
  return Object.keys(out).length ? out : null;
}
// « Rosu katsu plate — Moyen » - « Rosu katsu plate » → « Moyen »
function sizeLabel(name, groupName) {
  const out = {};
  for (const lang of Object.keys(name || {})) {
    const base = (groupName && groupName[lang]) || "";
    out[lang] = String(name[lang]).replace(base, "").replace(/[（()）]/g, "").replace(/^[\s—–-]+/, "").trim();
  }
  return out;
}

module.exports = async (req, res) => {
  if (Date.now() >= LAUNCH) return res.status(410).json({ error: "launched" });
  try {
    const data = require("./_menu-test-data.js");
    const menu = data.menu;
    if (!menu || !Array.isArray(menu.menus)) return res.status(404).json({ error: "No preview" });

    // Plats du menu actuel, pour marquer les nouveautés
    const fs = require("fs"), path = require("path");
    const src = fs.readFileSync(path.join(process.cwd(), "menu-data.js"), "utf8");
    const LIVE = new Function(src + "; return MENU_DATA;")();
    const liveIds = new Set();
    LIVE.menus.forEach(m => m.sections.forEach(s => s.items.forEach(it => liveIds.add(it.id))));

    const sections = [];
    menu.menus.forEach(m => m.sections.forEach(sec => {
      const items = [];
      sec.items.forEach(it => {
        if (it.sizeOf) {
          // les tailles d'un même plat → une seule entrée
          let g = items.find(x => x.group === it.sizeOf);
          if (!g) {
            g = { group: it.sizeOf, name: it.groupName || it.name, desc: stripObj(it.desc), sizes: [], isNew: !liveIds.has(it.sizeOf) };
            items.push(g);
          }
          g.sizes.push(sizeLabel(it.name, it.groupName));
          return;
        }
        items.push({ name: it.name, desc: stripObj(it.desc), soon: !!it.preparing, isNew: !liveIds.has(it.id) });
      });
      items.forEach(x => { delete x.group; });
      sections.push({ kanji: sec.kanji || "", title: sec.title, note: stripObj(sec.note), items });
    }));

    // Garde-fou : aucun prix ne doit sortir
    const json = JSON.stringify({ sections });
    if (json.includes("$")) return res.status(500).json({ error: "Price leak" });

    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    res.setHeader("X-Robots-Tag", "noindex");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.status(200).send(json);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};
