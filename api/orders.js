// ===== Hoshi — Liste des commandes payées (pour l'écran cuisine) =====
// Requiert STRIPE_SECRET_KEY et ORDERS_PIN dans les variables d'environnement Vercel.

module.exports = async (req, res) => {
  const key = process.env.STRIPE_SECRET_KEY;
  const pin = process.env.ORDERS_PIN;
  if (!key || !pin) return res.status(500).json({ error: "Configuration manquante" });

  const given = (req.query && req.query.k) || "";
  if (given !== pin) return res.status(401).json({ error: "PIN invalide" });

  try {
    // paiements des dernières 24 h
    const since = Math.floor(Date.now() / 1000) - 24 * 3600;
    const resp = await fetch(
      `https://api.stripe.com/v1/payment_intents?limit=50&created[gte]=${since}`,
      { headers: { "Authorization": "Bearer " + key } }
    );
    const data = await resp.json();
    if (!resp.ok) return res.status(502).json({ error: data.error?.message || "Erreur Stripe" });

    const orders = (data.data || [])
      .filter(p => p.status === "succeeded")
      .map(p => ({
        id: p.id,
        created: p.created,
        amount: p.amount_received || p.amount,
        currency: p.currency,
        client: p.metadata?.client || "",
        telephone: p.metadata?.telephone || "",
        ramassage: p.metadata?.ramassage || "",
        commande: p.metadata?.commande || p.description || ""
      }));

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ orders });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
