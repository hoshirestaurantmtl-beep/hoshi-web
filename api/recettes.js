// ===== Hoshi — Recettes (accès protégé par le PIN cuisine) =====
// Utilise le même ORDERS_PIN que api/orders.js : un seul code à retenir en cuisine.
// Les recettes elles-mêmes vivent dans api/_recettes-data.js (jamais servi publiquement).

module.exports = async (req, res) => {
  const pin = process.env.ORDERS_PIN;
  if (!pin) return res.status(500).json({ error: "Configuration manquante" });

  const given = String((req.query && req.query.k) || "");
  // comparaison à temps constant, identique à api/orders.js
  const crypto = require("crypto");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(String(pin)).digest();
  if (!crypto.timingSafeEqual(a, b)) return res.status(401).json({ error: "PIN invalide" });

  try {
    const data = require("./_recettes-data.js");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({
      categories: data.categories || [],
      recettes: data.recettes || []
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
