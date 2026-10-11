// ===== Hoshi — Kitchen recipe book =====
// This file starts with "_": Vercel does NOT publish it as a function or as a
// public file. It is only read by api/recettes.js after the PIN check
// (the same ORDERS_PIN as the kitchen screen / commandes.html).
//
// Source: first draft of the recipe book written by the chef (October 2026).
//
// To add a recipe: copy a { ... } block below, change the "id" (unique, no spaces)
// and the content, then publish the site (git push).
//
// Fields:
//   id          unique identifier (e.g. "tonkatsu-sauce")
//   nom         displayed name
//   categorie   one of the "categories" listed below
//   portions    free text (e.g. "1 L", "10 portions")
//   temps       free text (e.g. "20 min", "2 h + overnight rest")
//   ingredients list of lines (a line starting with "▸" is shown as a sub-heading)
//   etapes      list of steps, in order
//   notes       (optional) tips, storage, allergens…
//   tags        (optional) search keywords

module.exports = {
  categories: ["Sauces & Bases", "Soups", "Starters", "Mains", "Prep"],

  recettes: [
    {
      id: "butadon-gyudon-sauce",
      nom: "Buta Don / Gyudon Sauce",
      categorie: "Sauces & Bases",
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
      tags: ["butadon", "gyudon", "beef", "pork", "donburi"]
    },
    {
      id: "cabbage-dressing",
      nom: "Cabbage Dressing",
      categorie: "Sauces & Bases",
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
      tags: ["cabbage", "dressing", "salad"]
    },
    {
      id: "coleslaw-sauce",
      nom: "Coleslaw Sauce",
      categorie: "Sauces & Bases",
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
      tags: ["coleslaw", "mayo"]
    },
    {
      id: "curry",
      nom: "Curry",
      categorie: "Mains",
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
      tags: ["katsu curry"]
    },
    {
      id: "hamburger-steak",
      nom: "Hamburger Steak (Hamburg)",
      categorie: "Prep",
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
      tags: ["hambagu", "beef", "patty"]
    },
    {
      id: "menchi-katsu",
      nom: "Menchi-katsu (Minced Meat Cutlet)",
      categorie: "Prep",
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
      tags: ["pork", "cutlet", "breaded"]
    },
    {
      id: "miso-soup",
      nom: "Miso Soup",
      categorie: "Soups",
      portions: "6 L",
      ingredients: [
        "Water: 6,000 ml",
        "Hondashi Powder: 6 tbsp",
        "Liquid Konbu: 6 tbsp",
        "MSG: 3 tbsp",
        "Miso: 450 g"
      ],
      etapes: [],
      tags: ["soup", "dashi"]
    },
    {
      id: "roux",
      nom: "Roux",
      categorie: "Sauces & Bases",
      ingredients: [
        "Butter: 4 sticks (or units)",
        "Flour: Equal weight to the butter used"
      ],
      etapes: [
        "Melt the butter completely over low heat.",
        "Add the flour and whisk thoroughly. Continue cooking and adjusting with flour until the texture resembles wet sand."
      ],
      tags: ["butter", "flour", "curry"]
    },
    {
      id: "salmon-tare",
      nom: "Salmon Tare (Base Marinating Sauce)",
      categorie: "Sauces & Bases",
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
      tags: ["salmon", "marinade"]
    },
    {
      id: "salmon-tartare",
      nom: "Salmon Tartare",
      categorie: "Starters",
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
      tags: ["salmon", "tartare", "gochujang"]
    },
    {
      id: "spicy-mayo",
      nom: "Spicy Mayo",
      categorie: "Sauces & Bases",
      ingredients: [
        "Mayonnaise: 850 g",
        "Sriracha: 100 g",
        "Mustard: 40 g",
        "Lemon Juice: 10 g"
      ],
      etapes: [],
      tags: ["spicy mayo", "sriracha"]
    },
    {
      id: "spicy-sauce",
      nom: "Spicy Sauce",
      categorie: "Sauces & Bases",
      ingredients: [
        "Gochujang: 180 g",
        "Ultra Spicy Paste: 100 g",
        "Mirin: 80 g",
        "Layu (Chilli Oil): 15 g",
        "Garlic: 10 g"
      ],
      etapes: [],
      tags: ["spicy", "gochujang"]
    },
    {
      id: "tare-sauce",
      nom: "Tare Sauce",
      categorie: "Sauces & Bases",
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
      categorie: "Sauces & Bases",
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
      categorie: "Soups",
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
      tags: ["udon", "broth", "dashi"]
    },
    {
      id: "vegan-tempura-sauce",
      nom: "Vegan Tempura Sauce",
      categorie: "Sauces & Bases",
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
      tags: ["tempura", "tentsuyu", "vegan"]
    },
    {
      id: "yuzu-vinegar",
      nom: "Yuzu Vinegar",
      categorie: "Sauces & Bases",
      ingredients: [
        "Rice Vinegar: 100 g",
        "Sugar: 50 g",
        "Yuzu Juice: 10 g",
        "MSG: 5 g"
      ],
      etapes: [],
      tags: ["yuzu", "vinegar", "coleslaw"]
    }
  ]
};
