// ===== Hoshi — Recipes (protected by the kitchen PIN) =====
// Uses the same ORDERS_PIN as api/orders.js: one single code to remember in the kitchen.
// The recipes themselves live in api/_recettes-data.js (never served publicly).

module.exports = async (req, res) => {
  const pin = process.env.ORDERS_PIN;
  if (!pin) return res.status(500).json({ error: "Missing configuration" });

  const given = String((req.query && req.query.k) || "");
  // constant-time comparison, same as api/orders.js
  const crypto = require("crypto");
  const a = crypto.createHash("sha256").update(given).digest();
  const b = crypto.createHash("sha256").update(String(pin)).digest();
  if (!crypto.timingSafeEqual(a, b)) return res.status(401).json({ error: "Invalid PIN" });

  try {
    const data = require("./_recettes-data.js");
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({
      categories: data.categories || [],
      recettes: data.recettes || []
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
};
