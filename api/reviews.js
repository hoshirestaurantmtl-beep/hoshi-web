// ===== Hoshi — Avis Google (Places API New) =====
// Requiert GOOGLE_PLACES_API_KEY et GOOGLE_PLACE_ID dans les variables d'environnement Vercel.
module.exports = async (req, res) => {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return res.status(500).json({ error: "Configuration manquante" });

  try {
    const resp = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews,googleMapsUri"
      }
    });
    const data = await resp.json();
    if (!resp.ok) return res.status(502).json({ error: (data.error && data.error.message) || "Erreur Google Places" });

    const reviews = (data.reviews || []).map(r => ({
      author: (r.authorAttribution && r.authorAttribution.displayName) || "",
      rating: r.rating || 0,
      text: (r.text && r.text.text) || "",
      relativeTime: r.relativePublishTimeDescription || ""
    })).filter(r => r.text);

    // mis en cache ~1h (édge Vercel) : garde l'usage très en dessous du quota gratuit de Google
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    return res.status(200).json({
      rating: data.rating || null,
      userRatingCount: data.userRatingCount || 0,
      mapsUri: data.googleMapsUri || null,
      reviews
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
