// ===== Hoshi — Recettes de la cuisine =====
// Ce fichier commence par « _ » : Vercel ne le publie PAS comme fonction ni comme
// fichier public. Il n'est lu que par api/recettes.js, après vérification du PIN
// (le même ORDERS_PIN que l'écran cuisine / commandes.html).
//
// Source : première version du livre de recettes rédigée par le chef (octobre 2026).
// Texte conservé tel quel (en anglais).
//
// Pour ajouter une recette : copiez un bloc { ... } ci-dessous, changez l'« id »
// (unique, sans espaces) et le contenu, puis publiez le site (git push).
//
// Champs :
//   id          identifiant unique (ex. "sauce-tonkatsu")
//   nom         nom affiché
//   categorie   une des catégories listées dans « categories » ci-dessous
//   portions    texte libre (ex. "1 L", "10 portions")
//   temps       texte libre (ex. "20 min", "2 h + repos 1 nuit")
//   ingredients liste de lignes (une ligne commençant par « ▸ » sert de sous-titre)
//   etapes      liste de lignes, dans l'ordre
//   notes       (optionnel) astuces, conservation, allergènes…
//   tags        (optionnel) mots-clés pour la recherche

module.exports = {
  categories: ["Sauces & bases", "Soupes", "Entrées", "Plats", "Préparations"],

  recettes: [
    {
      id: "butadon-gyudon-sauce",
      nom: "Buta Don / Gyudon Sauce",
      categorie: "Sauces & bases",
      portions: "",
      temps: "",
      ingredients: [
        "Sliced Beef: 700 g",
        "Onion: 300 g",
        "Gyudon Sauce: 340 g",
        "▸ Sauce sub-recipe",
        "Somi Sobatsyu: 300 ml",
        "Sake: 250 ml",
        "Mirin: 200 ml",
        "Coca-Cola: 355 ml (1 can)",
        "Ginger: 10 g"
      ],
      etapes: [
        "Blend the ginger and sake together in a blender until smooth.",
        "Combine all ingredients in a pot.",
        "Bring to a gentle simmer."
      ],
      tags: ["butadon", "gyudon", "boeuf", "porc", "donburi"]
    },
    {
      id: "cabbage-dressing",
      nom: "Cabbage Dressing",
      categorie: "Sauces & bases",
      ingredients: [
        "Soy Sauce: 1,000 g",
        "Vinegar: 1,000 g",
        "Sugar: 700 g",
        "Yuzu Syrup: 700 g",
        "MSG (Ajinomoto): 50 g"
      ],
      etapes: [
        "Combine all ingredients in a pot.",
        "Bring to a gentle simmer, stirring continuously until the sugar is fully dissolved."
      ],
      tags: ["chou", "vinaigrette", "salade"]
    },
    {
      id: "coleslaw-sauce",
      nom: "Coleslaw Sauce",
      categorie: "Sauces & bases",
      ingredients: [
        "Mayonnaise: 1,700 g (2 bottles × 850 g)",
        "Yuzu Vinegar Sauce: 30 g",
        "Sugar: 30 g",
        "Honey: 20 g",
        "Capers: 20 g",
        "Umeboshi Pickled Plum: 5 g",
        "Yuzu Juice: 5 g"
      ],
      etapes: [],
      tags: ["salade de chou", "mayo"]
    },
    {
      id: "curry",
      nom: "Curry",
      categorie: "Plats",
      ingredients: [
        "Onion: 5,000 g",
        "Water: 6,000 ml",
        "Curry Roux / Powder: 1,200 g",
        "Tare Sauce: 200 ml",
        "Cream: 150 ml",
        "Butter: 75 g"
      ],
      etapes: [
        "Sauté the onions over low heat until deeply caramelized.",
        "Add all remaining ingredients to the pot.",
        "Bring to a gentle simmer, stirring continuously until the roux is completely melted and incorporated.",
        "Blend with an immersion (hand) blender until the curry sauce is perfectly smooth."
      ],
      tags: ["katsu curry", "cari"]
    },
    {
      id: "hamburger-steak",
      nom: "Hamburger Steak (Hamburg)",
      categorie: "Préparations",
      portions: "130 g patties",
      ingredients: [
        "Ground Beef: 1,000 g",
        "Panko (Bread Crumbs): 130 g",
        "Egg: 100 g",
        "35% Heavy Cream: 100 g",
        "Beef Dashida: 10 g",
        "Black Pepper: 4 g"
      ],
      etapes: [
        "Thoroughly mix all ingredients until the meat mixture becomes cohesive and tacky.",
        "Portion and shape the mixture into exact 130-gram patties."
      ],
      tags: ["hambagu", "boeuf", "boulette"]
    },
    {
      id: "menchi-katsu",
      nom: "Menchi-katsu (Minced Meat Cutlet)",
      categorie: "Préparations",
      portions: "105 g balls",
      ingredients: [
        "Ground Pork: 1,000 g",
        "Worcestershire Sauce: 20 g",
        "Sauce (Tare): 15 g",
        "Black Pepper: 3 g"
      ],
      etapes: [
        "Thoroughly mix all ingredients until the meat mixture becomes cohesive and tacky.",
        "Portion and shape the mixture into exact 105-gram balls."
      ],
      tags: ["porc", "boulette", "panée"]
    },
    {
      id: "miso-soup",
      nom: "Miso Soup",
      categorie: "Soupes",
      portions: "6 L",
      ingredients: [
        "Water: 6,000 ml",
        "Hondashi Powder: 6 tbsp",
        "Liquid Konbu: 6 tbsp",
        "MSG: 3 tbsp",
        "Miso: 450 g"
      ],
      etapes: [],
      tags: ["soupe", "dashi"]
    },
    {
      id: "roux",
      nom: "Roux",
      categorie: "Sauces & bases",
      ingredients: [
        "Butter: 4 sticks (or units)",
        "Flour: Equal weight to the butter used"
      ],
      etapes: [
        "Melt the butter completely over low heat.",
        "Add the flour and whisk thoroughly. Continue cooking and adjusting with flour until the texture resembles wet sand."
      ],
      tags: ["beurre", "farine", "curry"]
    },
    {
      id: "salmon-tare",
      nom: "Salmon Tare (Base Marinating Sauce)",
      categorie: "Sauces & bases",
      ingredients: [
        "Somi Sobatsyu: 3,000 g",
        "Mirin: 1,500 g",
        "Sake: 900 g",
        "Ginger: 150 g"
      ],
      etapes: [
        "Blend the ginger and sake together in a blender until smooth.",
        "Combine all ingredients in a pot.",
        "Bring to a gentle simmer."
      ],
      tags: ["saumon", "marinade"]
    },
    {
      id: "salmon-tartare",
      nom: "Salmon Tartare",
      categorie: "Entrées",
      temps: "30 min rest",
      ingredients: [
        "Gochujang (Korean Chilli Paste): 100 g",
        "Somi Sobatsyu: 80 g",
        "Mirin: 80 g",
        "Pear Purée: 80 g",
        "Garlic: 20 g",
        "Ginger: 10 g",
        "Sesame Oil: 20 g",
        "Dark Brown Sugar: 40 g",
        "Onion Chips: 20 g",
        "▸ Finishing garnish",
        "Fried Onion Chips: 30 g",
        "Green Onion: 15 g",
        "Cut Nori: 4 pcs"
      ],
      etapes: [
        "Mix all sauce ingredients thoroughly and rest in the refrigerator for 30 minutes to marry the flavors.",
        "Dice the salmon, then toss well with the prepared sauce.",
        "Top with the fried onion chips, green onions, and nori right before serving to maintain maximum crisp texture."
      ],
      tags: ["saumon", "tartare", "gochujang"]
    },
    {
      id: "spicy-mayo",
      nom: "Spicy Mayo",
      categorie: "Sauces & bases",
      ingredients: [
        "Mayonnaise: 850 g",
        "Sriracha: 100 g",
        "Mustard: 40 g",
        "Lemon Juice: 10 g"
      ],
      etapes: [],
      tags: ["mayo épicée", "sriracha"]
    },
    {
      id: "spicy-sauce",
      nom: "Spicy Sauce",
      categorie: "Sauces & bases",
      ingredients: [
        "Gochujang: 180 g",
        "Ultra Spicy Paste: 100 g",
        "Mirin: 80 g",
        "Layu (Chilli Oil): 15 g",
        "Garlic: 10 g"
      ],
      etapes: [],
      tags: ["piquant", "gochujang"]
    },
    {
      id: "tare-sauce",
      nom: "Tare Sauce",
      categorie: "Sauces & bases",
      temps: "45 min simmer",
      ingredients: [
        "Soy Sauce: 2,000 g",
        "Mirin: 3,000 g",
        "Sake: 1,500 g",
        "Brown Sugar: 300 g",
        "Chicken Stock: 300 g",
        "Mentsuyu: 2,000 g",
        "MSG: 100 g",
        "Onion: 500 g",
        "Ginger: 150 g",
        "Garlic: 100 g",
        "Scallion Roots (Green Onion Roots): 300 g"
      ],
      etapes: [
        "Sear aromatics: Sauté the onion, ginger, garlic, and scallion roots directly in the pot, using a blowtorch simultaneously to char and blacken their surfaces.",
        "Combine liquids: Add the soy sauce, mirin, sake, brown sugar, and chicken stock to the pot.",
        "Simmer: Bring up to temperature and simmer over low heat for 45 minutes.",
        "Strain: Pass the sauce through a fine strainer to remove all solids."
      ],
      tags: ["tare", "base"]
    },
    {
      id: "tonkatsu-sauce",
      nom: "Tonkatsu Sauce",
      categorie: "Sauces & bases",
      temps: "30–40 min + overnight rest",
      ingredients: [
        "Tonkatsu Sauce: 3,000 g",
        "Worcestershire Sauce: 800 g",
        "Ketchup: 500 g",
        "Apple Juice: 500 g",
        "Sugar: 500 g",
        "Mirin: 500 g",
        "Mentsuyu (2× Concentrate): 400 g",
        "Grated Onion: 300 g",
        "Grated Ginger: 100 g",
        "Grated Garlic: 100 g"
      ],
      etapes: [
        "Process the onion, ginger, garlic, and apple juice in a blender until smooth (work in two separate batches).",
        "Combine all ingredients in a heavy-bottomed pot.",
        "Bring to a gentle simmer over low heat and cook for 30–40 minutes (do not hard boil).",
        "Allow the sauce to cool completely, then rest overnight in the refrigerator to mature the flavor profile."
      ],
      tags: ["tonkatsu", "katsu"]
    },
    {
      id: "udon-soup",
      nom: "Udon Soup",
      categorie: "Soupes",
      portions: "6 L",
      ingredients: [
        "Water: 6,000 ml",
        "Hondashi Powder: 4 tbsp",
        "Liquid Konbu: 6 tbsp",
        "MSG: 3 tbsp",
        "Somi Sobatsyu: 375 ml"
      ],
      etapes: [
        "Combine all ingredients in a pot.",
        "Bring to a gentle simmer."
      ],
      tags: ["udon", "bouillon", "dashi"]
    },
    {
      id: "vegan-tempura-sauce",
      nom: "Vegan Tempura Sauce",
      categorie: "Sauces & bases",
      temps: "overnight soak",
      ingredients: [
        "Water: 1,000 ml",
        "Soy Sauce: 80 g",
        "Sake: 50 g",
        "Mirin: 100 g",
        "Liquid Kombu Dashi: 30 g",
        "Dried Shiitake Mushrooms: 30 g",
        "Sugar: 10 g"
      ],
      etapes: [
        "Cold-soak the 30 g of dried shiitake mushrooms in the 1,000 ml of water inside the refrigerator overnight.",
        "Transfer both the mushrooms and their soaking liquid into a pot and bring up to temperature.",
        "Remove the shiitake mushrooms right before the liquid reaches a rolling boil.",
        "Stir in the liquid kombu dashi, soy sauce, mirin, sake, and sugar.",
        "Bring to a boil once to burn off the raw alcohol content, then adjust the final flavor balance."
      ],
      tags: ["tempura", "tentsuyu", "végane", "vegan"]
    },
    {
      id: "yuzu-vinegar",
      nom: "Yuzu Vinegar",
      categorie: "Sauces & bases",
      ingredients: [
        "Rice Vinegar: 100 g",
        "Sugar: 50 g",
        "Yuzu Juice: 10 g",
        "MSG: 5 g"
      ],
      etapes: [],
      tags: ["yuzu", "vinaigre", "coleslaw"]
    }
  ]
};
