// ===== Hoshi — Traduction FR/EN → JA/KO pour le panneau admin (DeepL) =====
// Requiert DEEPL_API_KEY dans les variables d'environnement Vercel.
// Protégé par le même mot de passe que le panneau admin (empreinte SHA-256 ci-dessous) —
// si vous changez ADMIN_PASSWORD_HASH dans admin.js, changez-le aussi ici.
const crypto = require("crypto");
const ADMIN_PASSWORD_HASH = "bd97f611897789b0eaabbecaba69f7fee6242b7587afec76af13ce844e54e514";

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const key = process.env.DEEPL_API_KEY;
  if (!key) return res.status(500).json({ error: "DEEPL_API_KEY manquante" });

  try {
    const body = req.body || {};
    const given = String(body.password || "");
    const givenHash = crypto.createHash("sha256").update(given).digest();
    const expectedHash = Buffer.from(ADMIN_PASSWORD_HASH, "hex");
    if (givenHash.length !== expectedHash.length || !crypto.timingSafeEqual(givenHash, expectedHash)) {
      return res.status(401).json({ error: "Non autorisé" });
    }

    const texts = body.texts;
    const sourceLang = ["FR", "EN"].includes(body.source_lang) ? body.source_lang : "FR";
    const targetLang = body.target_lang;
    if (!Array.isArray(texts) || texts.length === 0 || texts.length > 20) return res.status(400).json({ error: "texts invalide" });
    if (!["JA", "KO"].includes(targetLang)) return res.status(400).json({ error: "target_lang invalide" });
    const clean = texts.map(t => String(t == null ? "" : t).slice(0, 500));

    const params = new URLSearchParams();
    clean.forEach(t => params.append("text", t));
    params.append("source_lang", sourceLang);
    params.append("target_lang", targetLang);

    // les clés du plan gratuit se terminent par ":fx" et utilisent un hôte dédié
    const host = key.endsWith(":fx") ? "api-free.deepl.com" : "api.deepl.com";
    const resp = await fetch(`https://${host}/v2/translate`, {
      method: "POST",
      headers: {
        "Authorization": "DeepL-Auth-Key " + key,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: params.toString()
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(502).json({ error: data.message || "Erreur DeepL" });

    return res.status(200).json({ translations: (data.translations || []).map(t => t.text) });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
