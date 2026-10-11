// ===== Hoshi — Menu de test (protégé par le PIN commandes) =====
// Même ORDERS_PIN que api/orders.js et api/recettes.js : un seul code pour la cuisine.
// Les changements en test vivent dans api/_menu-test-data.js (jamais servi publiquement).

module.exports = async (req, res) => {
  const pin = process.env.ORDERS_PIN;
  if (!pin) return res.status(500).json({ error: "Missing configuration" });

  const given = String((req.query && req.query.k) || "");
  // comparaison à temps constant, comme api/orders.js
  const crypto = require("crypto");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(String(pin)).digest();
  if (!crypto.timingSafeEqual(a, b)) return res.status(401).json({ error: "Invalid PIN" });

  try {
    const data = require("./_menu-test-data.js");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Robots-Tag", "noindex");
    return res.status(200).json({ menu: data.menu || null, items: data.items || {} });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};
