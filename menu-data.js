// ===== Hoshi — Données du menu / Menu data =====
// Ce fichier est généré par admin.html. Remplacez-le pour mettre à jour le menu.
// Este archivo lo genera admin.html. Reemplázalo para actualizar el menú.
const MENU_DATA = {
  menus: [
    {
      id: "principal",
      title: { fr: "Notre Menu", en: "Our Menu" },
      sections: [
        {
          kanji: "前菜",
          title: { fr: "Entrées", en: "Appetizers" },
          items: [
            { id: "e1", name: { fr: "Menchi Katsu (2 mcx)", en: "Menchi Katsu (2 pcs)" }, desc: { fr: "Boulette de porc haché panée — 3 mcx : 13 $", en: "Breaded pork meatball cutlet — 3 pcs: $13" }, price: 10 },
            { id: "e2", name: { fr: "Tartare de saumon", en: "Salmon tartare" }, price: 11, photo: "img/salmon-don.jpg" },
            { id: "e3", name: { fr: "Saumon flambé au tare", en: "Salmon flambé with tare" }, price: 15 },
            { id: "e4", name: { fr: "Salade de chou", en: "Cabbage salad" }, price: 4 },
            { id: "e5", name: { fr: "Coleslaw", en: "Coleslaw" }, price: 4 }
          ]
        },
        {
          kanji: "豚カツ",
          title: { fr: "Menu Principal — Tonkatsu", en: "Mains — Tonkatsu" },
          items: [
            { id: "k1", name: { fr: "Rosu katsu plate", en: "Rosu katsu plate" }, desc: { fr: "Longe de porc avec chou — soupe miso + riz (soupe udon : 22 $)", en: "Pork loin katsu with cabbage — miso soup + rice (udon soup: $22)" }, price: 21, photo: "img/tendon-katsu.jpg" },
            { id: "k2", name: { fr: "Hire katsu plate", en: "Hire katsu plate" }, desc: { fr: "Filet de porc avec chou — soupe miso + riz (soupe udon : 24 $)", en: "Pork fillet katsu with cabbage — miso soup + rice (udon soup: $24)" }, price: 23 },
            { id: "k3", name: { fr: "Rosu & Hire katsu plate", en: "Rosu & Hire katsu plate" }, desc: { fr: "Avec chou — soupe miso + riz (soupe udon : 25 $)", en: "With cabbage — miso soup + rice (udon soup: $25)" }, price: 24 },
            { id: "k4", name: { fr: "Katsu Don", en: "Katsu Don" }, desc: { fr: "Longe de porc + omelette — soupe miso incluse", en: "Pork loin + omelette — miso soup included" }, price: 21, photo: "img/katsu-don.jpg" }
          ]
        },
        {
          kanji: "サンド",
          title: { fr: "Katsu Sando", en: "Katsu Sando" },
          items: [
            { id: "ks1", name: { fr: "Katsu Sando (3 pièces)", en: "Katsu Sando (3 pieces)" }, price: 15 },
            { id: "ks2", name: { fr: "Katsu Sando avec coleslaw", en: "Katsu Sando with coleslaw" }, price: 18 }
          ]
        },
        {
          kanji: "カレー",
          title: { fr: "Curry Tonkatsu", en: "Curry Tonkatsu" },
          note: { fr: "Avec œuf sous-vide — soupe miso incluse", en: "With sous-vide egg — miso soup included" },
          items: [
            { id: "c1", name: { fr: "Rosu Katsu Curry Don", en: "Rosu Katsu Curry Don" }, price: 21 },
            { id: "c2", name: { fr: "Hire Katsu Curry Don (3 pcs)", en: "Hire Katsu Curry Don (3 pcs)" }, price: 23 },
            { id: "c3", name: { fr: "Rosu & Hire Katsu Curry Don", en: "Rosu & Hire Katsu Curry Don" }, price: 24 },
            { id: "c4", name: { fr: "Udon au curry avec Rosu Katsu", en: "Curry udon with Rosu Katsu" }, price: 22 },
            { id: "c5", name: { fr: "Udon au curry avec Hire Katsu (3 pcs)", en: "Curry udon with Hire Katsu (3 pcs)" }, price: 24 },
            { id: "c6", name: { fr: "Udon au curry avec Rosu & Hire Katsu", en: "Curry udon with Rosu & Hire Katsu" }, price: 25 }
          ]
        },
        {
          kanji: "海鮮",
          title: { fr: "Fruits de mer", en: "Seafood" },
          items: [
            { id: "f1", name: { fr: "Sake Don", en: "Sake Don" }, desc: { fr: "Bol de riz garni de saumon cru — soupe miso incluse", en: "Rice bowl topped with fresh salmon — miso soup included" }, price: 29, photo: "img/salmon-bowl.jpg" },
            { id: "f2", name: { fr: "Morue Katsu", en: "Cod Katsu" }, desc: { fr: "Avec sauce tartare et chou — soupe miso + riz (soupe udon : 23 $)", en: "With tartar sauce and cabbage — miso soup + rice (udon soup: $23)" }, price: 22 },
            { id: "f3", name: { fr: "Udon Hoshi Katsu", en: "Udon Hoshi Katsu" }, desc: { fr: "Morue katsu, pétoncle katsu, guacamole, ikura, œuf sous-vide — soupe miso", en: "Cod katsu, scallop katsu, guacamole, ikura, sous-vide egg — miso soup" }, price: 24 }
          ]
        },
        {
          kanji: "ハンバーグ",
          title: { fr: "Hambāgu — Steak Haché Japonais", en: "Hambāgu — Japanese Hamburger Steak" },
          note: { fr: "Préparé avec du bœuf canadien AAA — 130 g / 2 pcs. Steak hamburg supplémentaire (1 mcx) : +7 $", en: "Made with AAA Canadian beef — 130 g / 2 pcs. Extra hamburg steak (1 pc): +$7" },
          items: [
            { id: "h1", name: { fr: "Teppan hamburger steak, sauce hayashi", en: "Teppan hamburger steak, hayashi sauce" }, desc: { fr: "Sauce maison, œuf sous-vide et coleslaw — soupe miso + riz (udon : 25 $)", en: "Homemade sauce, sous-vide egg and coleslaw — miso soup + rice (udon: $25)" }, price: 24 },
            { id: "h2", name: { fr: "Teppan hamburger steak, hayashi + fromage", en: "Teppan hamburger steak, hayashi + cheese" }, desc: { fr: "Garni de fromage — soupe miso + riz (udon : 27 $)", en: "Topped with cheese — miso soup + rice (udon: $27)" }, price: 26 },
            { id: "h3", name: { fr: "Teppan hamburger steak au curry", en: "Teppan hamburger steak with curry" }, desc: { fr: "Sauce curry ajoutée — soupe miso + riz (udon : 26 $)", en: "Added curry sauce — miso soup + rice (udon: $26)" }, price: 25 }
          ]
        },
        {
          kanji: "追加",
          title: { fr: "Extras", en: "Extras" },
          items: [
            { id: "x1", name: { fr: "Sauce onsen tamago", en: "Onsen tamago sauce" }, price: 2.5 },
            { id: "x2", name: { fr: "Sauce curry", en: "Curry sauce" }, price: 4 },
            { id: "x3", name: { fr: "Riz", en: "Rice" }, price: 3 },
            { id: "x4", name: { fr: "Nouilles udon", en: "Udon noodles" }, price: 4 },
            { id: "x5", name: { fr: "Soupe udon simple", en: "Plain udon soup" }, price: 7 },
            { id: "x6", name: { fr: "Hire katsu (1 pc)", en: "Hire katsu (1 pc)" }, price: 5 },
            { id: "x7", name: { fr: "Rosu katsu (1 pc)", en: "Rosu katsu (1 pc)" }, price: 13 },
            { id: "x8", name: { fr: "Menchi katsu (1 pc)", en: "Menchi katsu (1 pc)" }, price: 4 },
            { id: "x9", name: { fr: "Morue katsu (1 pc)", en: "Cod katsu (1 pc)" }, price: 15 },
            { id: "x10", name: { fr: "Pétoncle katsu (1 pc)", en: "Scallop katsu (1 pc)" }, price: 4 },
            { id: "x11", name: { fr: "Œuf sous-vide (1 pc)", en: "Sous-vide egg (1 pc)" }, price: 1.5 }
          ]
        },
        {
          kanji: "飲み物",
          title: { fr: "Boissons", en: "Drinks" },
          items: [
            { id: "v1", name: { fr: "Boissons gazeuses", en: "Soft drinks" }, desc: { fr: "Coke, Coke Zéro, Sprite, Brisk", en: "Coke, Coke Zero, Sprite, Brisk" }, price: 2.5 },
            { id: "v2", name: { fr: "Thé vert", en: "Green tea" }, price: 4 },
            { id: "v3", name: { fr: "Eau pétillante Montellier 355 ml", en: "Montellier sparkling water 355 ml" }, price: 2.5 },
            { id: "v4", name: { fr: "Bière au gingembre 200 ml", en: "Ginger beer 200 ml" }, price: 5 },
            { id: "v5", name: { fr: "Eau ESKA 500 ml", en: "ESKA water 500 ml" }, price: 2 },
            { id: "v6", name: { fr: "Oyster Bay Pinot Noir (verre 150 ml)", en: "Oyster Bay Pinot Noir (glass 150 ml)" }, desc: { fr: "Bouteille 750 ml : 56 $", en: "750 ml bottle: $56" }, price: 12 },
            { id: "v7", name: { fr: "Oyster Bay Chardonnay (verre 150 ml)", en: "Oyster Bay Chardonnay (glass 150 ml)" }, desc: { fr: "Bouteille 750 ml : 52 $", en: "750 ml bottle: $52" }, price: 11 },
            { id: "v8", name: { fr: "Jameson Triple Triple Highball", en: "Jameson Triple Triple Highball" }, price: 11 },
            { id: "v9", name: { fr: "Ginger Beer Highball", en: "Ginger Beer Highball" }, price: 12 },
            { id: "v10", name: { fr: "Thé Noir Highball", en: "Black Tea Highball" }, price: 12 },
            { id: "v11", name: { fr: "Saké Shichiken Junmai Ginjo 300 ml", en: "Shichiken Junmai Ginjo sake 300 ml" }, price: 34, photo: "img/sake.jpg" },
            { id: "v12", name: { fr: "Bière Sapporo 500 ml", en: "Sapporo beer 500 ml" }, price: 9 },
            { id: "v13", name: { fr: "Bière Blanche de Chambly 473 ml", en: "Blanche de Chambly beer 473 ml" }, price: 9 }
          ]
        }
      ]
    },
    {
      id: "midi",
      title: { fr: "Menu du Midi — Lunch", en: "Lunch Menu" },
      note: { fr: "Servi de 12 h à 14 h — Prix M (moyen) / G (grand) entre parenthèses", en: "Served 12:00–2:00 pm — M (medium) / L (large) prices in brackets" },
      footnote: { fr: "Les plats du midi sont servis rapidement ; les autres plats nécessitent plus de 15 minutes de préparation.", en: "Lunch items are served quickly; other dishes take more than 15 minutes to prepare." },
      sections: [
        {
          kanji: "昼",
          title: { fr: "Menu du Midi", en: "Lunch" },
          items: [
            { id: "l0", name: { fr: "Soupe du jour", en: "Soup of the day" }, price: 1.5 },
            { id: "l1", name: { fr: "Lunch rosu katsu plate", en: "Lunch rosu katsu plate" }, desc: { fr: "Avec chou — soupe miso + riz (G : 20 $ · soupe udon : M 18 $ / G 21 $)", en: "With cabbage — miso soup + rice (L: $20 · udon soup: M $18 / L $21)" }, price: 17 },
            { id: "l2", name: { fr: "Lunch rosu katsu don", en: "Lunch rosu katsu don" }, desc: { fr: "Avec omelette — soupe miso (G : 19 $)", en: "With omelette — miso soup (L: $19)" }, price: 16, photo: "img/katsu-don.jpg" },
            { id: "l3", name: { fr: "Lunch rosu curry don", en: "Lunch rosu curry don" }, desc: { fr: "Avec œuf sous-vide — soupe miso (G : 19 $)", en: "With sous-vide egg — miso soup (L: $19)" }, price: 16 },
            { id: "l4", name: { fr: "Lunch rosu curry udon", en: "Lunch rosu curry udon" }, desc: { fr: "Avec œuf sous-vide — soupe miso (G : 20 $)", en: "With sous-vide egg — miso soup (L: $20)" }, price: 17 },
            { id: "l5", name: { fr: "Lunch Sake don", en: "Lunch Sake don" }, desc: { fr: "Saumon 130 g (G 180 g : 27 $)", en: "Salmon 130 g (L 180 g: $27)" }, price: 22, photo: "img/salmon-bowl.jpg" },
            { id: "l6", name: { fr: "Lunch hoshi tempura udon", en: "Lunch hoshi tempura udon" }, desc: { fr: "2 crevettes, 1 pétoncle, 2 légumes, guacamole, ikura (G : 24 $, +1 crevette +1 pétoncle)", en: "2 shrimps, 1 scallop, 2 veggies, guacamole, ikura (L: $24, +1 shrimp +1 scallop)" }, price: 19, photo: "img/tempura-don.jpg" },
            { id: "l7", name: { fr: "Lunch Ten don", en: "Lunch Ten don" }, desc: { fr: "3 crevettes, 1 pétoncle, 2 légumes, 1 œuf (G : 23 $, +1 crevette +1 pétoncle)", en: "3 shrimps, 1 scallop, 2 veggies, 1 egg (L: $23, +1 shrimp +1 scallop)" }, price: 18, photo: "img/tempura-don.jpg" },
            { id: "l8", name: { fr: "Ebi Soup Udon", en: "Ebi Soup Udon" }, desc: { fr: "2 crevettes, 1 pétoncle, 1 champignon shiitake (G : 21 $, +1 crevette +1 pétoncle)", en: "2 shrimps, 1 scallop, 1 shiitake mushroom (L: $21, +1 shrimp +1 scallop)" }, price: 16 },
            { id: "l9", name: { fr: "Rosu katsu sando", en: "Rosu katsu sando" }, desc: { fr: "Sandwich katsu de longe de porc (+ coleslaw : 18 $)", en: "Pork loin katsu sandwich (+ coleslaw: $18)" }, price: 15 }
          ]
        }
      ]
    }
  ]
};
