// ===== Hoshi — Menu de TEST (protégé par le PIN commandes) =====
// Visible seulement sur hoshimtl.ca/test (après le PIN), jamais sur le site public.
//
// « menu »  : menu complet de test (remplace les menus de menu-data.js ; les réglages / horaires restent ceux du site).
//             null = utiliser le menu public.
// « items » : petites modifications par plat { "<id>": { champs } } appliquées par-dessus (null supprime un champ).
//
// État : NOUVEAU MENU du 19 octobre (2 courriels du chef Shozo) — midi et soir unifiés, tempura, nouveaux prix.
// Plats « en préparation » (Aji Fry, Mini Butadon, salade de pommes de terre, choux de Bruxelles) : soldout + preparing.
// Allergènes : ceux du menu actuel (corrigés selon le chef) ; nouveaux plats (tempura, Aji Fry…) encore sans allergènes.
// Généré le 2026-10-13 à partir de menu-data.js.
module.exports = {
  menu: {
    "menus": [
      {
        "id": "principal",
        "title": {
          "fr": "Notre Menu",
          "en": "Our Menu",
          "ja": "お品書き",
          "ko": "메뉴"
        },
        "sections": [
          {
            "kanji": "前菜",
            "title": {
              "fr": "Entrées",
              "en": "Appetizers",
              "ja": "前菜",
              "ko": "에피타이저"
            },
            "items": [
              {
                "id": "e1",
                "name": {
                  "fr": "Menchi Katsu (2 mcx)",
                  "en": "Menchi Katsu (2 pcs)",
                  "ja": "メンチカツ（2個）",
                  "ko": "멘치카츠 (2개)"
                },
                "desc": {
                  "fr": "Boulette de porc haché panée — 3 mcx : 13 $",
                  "en": "Breaded pork meatball cutlet — 3 pcs: $13",
                  "ja": "揚げ豚ひき肉カツ — 3個: 13$",
                  "ko": "다진 돼지고기 커틀릿 — 3개: 13$"
                },
                "price": 10,
                "photo": "img/e1-1788304341079.jpg",
                "allergens": [
                  "gluten",
                  "soy",
                  "fish",
                  "eggs"
                ]
              },
              {
                "id": "n5",
                "name": {
                  "fr": "Edamame",
                  "en": "Edamame",
                  "ja": "枝豆",
                  "ko": "에다마메"
                },
                "price": 5.5,
                "photo": "img/n5-1788796576682.jpg",
                "allergens": [
                  "soy"
                ],
                "vegetarian": true,
                "glutenFree": true,
                "vegan": true
              },
              {
                "id": "e5",
                "name": {
                  "fr": "Coleslaw",
                  "en": "Coleslaw",
                  "ja": "コールスロー",
                  "ko": "코울슬로"
                },
                "price": 4.5,
                "photo": "img/e5-1788882356617.jpg",
                "allergens": [
                  "eggs",
                  "dairy"
                ],
                "vegetarian": true,
                "desc": {
                  "fr": "Avec parmesan et oignons frits",
                  "en": "With parmesan and fried onions",
                  "ja": "パルメザンチーズとフライドオニオン入り",
                  "ko": "파르메산 치즈와 튀긴 양파"
                }
              },
              {
                "id": "ks1",
                "name": {
                  "fr": "Katsu Sando (3 pièces)",
                  "en": "Katsu Sando (3 pieces)",
                  "ja": "カツサンド（3切れ）",
                  "ko": "카츠산도 (3조각)"
                },
                "price": 16,
                "photo": "img/ks1-1788302047787.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "mustard"
                ],
                "dineInOnly": true
              },
              {
                "id": "x5",
                "name": {
                  "fr": "Soupe udon simple",
                  "en": "Plain udon soup",
                  "ja": "かけうどん",
                  "ko": "우동국"
                },
                "price": 7,
                "photo": "img/x5-1788484540505.jpg",
                "allergens": [
                  "fish",
                  "soy",
                  "gluten"
                ]
              },
              {
                "id": "x18",
                "name": {
                  "fr": "Mini Butadon",
                  "en": "Mini Butadon (pork don)",
                  "ja": "ミニ豚丼",
                  "ko": "미니 부타동"
                },
                "price": 8,
                "soldout": true,
                "preparing": true
              },
              {
                "id": "x19",
                "name": {
                  "fr": "Salade de pommes de terre",
                  "en": "Potato salad",
                  "ja": "ポテトサラダ",
                  "ko": "감자 샐러드"
                },
                "price": 5.5,
                "soldout": true,
                "preparing": true
              },
              {
                "id": "x20",
                "name": {
                  "fr": "Choux de Bruxelles",
                  "en": "Brussels sprouts",
                  "ja": "芽キャベツ",
                  "ko": "방울양배추"
                },
                "price": 6.5,
                "soldout": true,
                "preparing": true
              }
            ],
            "alwaysAvailable": true
          },
          {
            "kanji": "豚カツ",
            "title": {
              "fr": "Tonkatsu",
              "en": "Tonkatsu",
              "ja": "とんかつ",
              "ko": "돈카츠"
            },
            "note": {
              "fr": "Plats servis avec pickles japonais (takuan et shibazuke). Tailles — Moyen : 2 morceaux (80–100 g chacun) · Régulier : 1 pièce (200–205 g) · Grand : 3 morceaux (80–100 g chacun).",
              "en": "Plates served with Japanese pickles (takuan and shibazuke). Sizes — Medium: 2 pieces (80–100 g each) · Regular: 1 piece (200–205 g) · Large: 3 pieces (80–100 g each).",
              "ja": "定食には漬物（たくあん・しば漬け）が付きます。サイズ — ミディアム：2枚（各80〜100g）・レギュラー：1枚（200〜205g）・ラージ：3枚（各80〜100g）。",
              "ko": "정식에는 일본식 절임(다쿠앙, 시바즈케)이 함께 나옵니다. 사이즈 — 미디엄: 2조각(각 80~100g) · 레귤러: 1조각(200~205g) · 라지: 3조각(각 80~100g)."
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "k1",
                "name": {
                  "fr": "Rosu katsu plate — Moyen",
                  "en": "Rosu katsu plate — Medium",
                  "ja": "ロースカツ定食（ミディアム）",
                  "ko": "로스카츠 정식 (미디엄)"
                },
                "desc": {
                  "fr": "Longe de porc avec chou — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Pork loin katsu with cabbage — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "キャベツ付き豚ロース — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "양배추와 돼지 등심 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 21,
                "photo": "img/k1-1788296217572.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "sizeOf": "k1",
                "size": {
                  "fr": "M",
                  "en": "M",
                  "ja": "M",
                  "ko": "M"
                },
                "groupName": {
                  "fr": "Rosu katsu plate",
                  "en": "Rosu katsu plate",
                  "ja": "ロースカツ定食",
                  "ko": "로스카츠 정식"
                }
              },
              {
                "id": "k1r",
                "name": {
                  "fr": "Rosu katsu plate — Régulier",
                  "en": "Rosu katsu plate — Regular",
                  "ja": "ロースカツ定食（レギュラー）",
                  "ko": "로스카츠 정식 (레귤러)"
                },
                "desc": {
                  "fr": "Longe de porc avec chou — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Pork loin katsu with cabbage — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "キャベツ付き豚ロース — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "양배추와 돼지 등심 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 22,
                "photo": "img/k1-1788296217572.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "dineInOnly": true,
                "sizeOf": "k1",
                "size": {
                  "fr": "R",
                  "en": "R",
                  "ja": "R",
                  "ko": "R"
                },
                "groupName": {
                  "fr": "Rosu katsu plate",
                  "en": "Rosu katsu plate",
                  "ja": "ロースカツ定食",
                  "ko": "로스카츠 정식"
                }
              },
              {
                "id": "k1l",
                "name": {
                  "fr": "Rosu katsu plate — Grand",
                  "en": "Rosu katsu plate — Large",
                  "ja": "ロースカツ定食（ラージ）",
                  "ko": "로스카츠 정식 (라지)"
                },
                "desc": {
                  "fr": "Longe de porc avec chou — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Pork loin katsu with cabbage — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "キャベツ付き豚ロース — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "양배추와 돼지 등심 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 23,
                "photo": "img/k1-1788296217572.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "sizeOf": "k1",
                "size": {
                  "fr": "G",
                  "en": "L",
                  "ja": "L",
                  "ko": "L"
                },
                "groupName": {
                  "fr": "Rosu katsu plate",
                  "en": "Rosu katsu plate",
                  "ja": "ロースカツ定食",
                  "ko": "로스카츠 정식"
                }
              },
              {
                "id": "k2",
                "name": {
                  "fr": "Hire katsu plate",
                  "en": "Hire katsu plate",
                  "ja": "ヒレカツ定食",
                  "ko": "히레카츠 정식"
                },
                "desc": {
                  "fr": "Filet de porc avec chou — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Pork fillet katsu with cabbage — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "キャベツ付き豚ヒレ — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "양배추와 돼지 안심 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 24,
                "photo": "img/k2-1788884605130.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "dineInOnly": true
              },
              {
                "id": "k4",
                "name": {
                  "fr": "Katsu Don — Moyen",
                  "en": "Katsu Don — Medium",
                  "ja": "カツ丼（ミディアム）",
                  "ko": "카츠동 (미디엄)"
                },
                "desc": {
                  "fr": "Longe de porc + omelette — soupe miso incluse",
                  "en": "Pork loin + omelette — miso soup included",
                  "ja": "豚ロース+卵とじ — 味噌汁付き",
                  "ko": "돼지 등심+계란 — 미소국 포함"
                },
                "price": 21,
                "photo": "img/k4-1788296226268.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "sizeOf": "k4",
                "size": {
                  "fr": "M",
                  "en": "M",
                  "ja": "M",
                  "ko": "M"
                },
                "groupName": {
                  "fr": "Katsu Don",
                  "en": "Katsu Don",
                  "ja": "カツ丼",
                  "ko": "카츠동"
                }
              },
              {
                "id": "k4r",
                "name": {
                  "fr": "Katsu Don — Régulier",
                  "en": "Katsu Don — Regular",
                  "ja": "カツ丼（レギュラー）",
                  "ko": "카츠동 (레귤러)"
                },
                "desc": {
                  "fr": "Longe de porc + omelette — soupe miso incluse",
                  "en": "Pork loin + omelette — miso soup included",
                  "ja": "豚ロース+卵とじ — 味噌汁付き",
                  "ko": "돼지 등심+계란 — 미소국 포함"
                },
                "price": 22,
                "photo": "img/k4-1788296226268.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "dineInOnly": true,
                "sizeOf": "k4",
                "size": {
                  "fr": "R",
                  "en": "R",
                  "ja": "R",
                  "ko": "R"
                },
                "groupName": {
                  "fr": "Katsu Don",
                  "en": "Katsu Don",
                  "ja": "カツ丼",
                  "ko": "카츠동"
                }
              },
              {
                "id": "k4l",
                "name": {
                  "fr": "Katsu Don — Grand",
                  "en": "Katsu Don — Large",
                  "ja": "カツ丼（ラージ）",
                  "ko": "카츠동 (라지)"
                },
                "desc": {
                  "fr": "Longe de porc + omelette — soupe miso incluse",
                  "en": "Pork loin + omelette — miso soup included",
                  "ja": "豚ロース+卵とじ — 味噌汁付き",
                  "ko": "돼지 등심+계란 — 미소국 포함"
                },
                "price": 23,
                "photo": "img/k4-1788296226268.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "sizeOf": "k4",
                "size": {
                  "fr": "G",
                  "en": "L",
                  "ja": "L",
                  "ko": "L"
                },
                "groupName": {
                  "fr": "Katsu Don",
                  "en": "Katsu Don",
                  "ja": "カツ丼",
                  "ko": "카츠동"
                }
              },
              {
                "id": "x7",
                "name": {
                  "fr": "Rosu katsu (1 pc)",
                  "en": "Rosu katsu (1 pc)",
                  "ja": "ロースカツ（1枚）",
                  "ko": "로스카츠 (1개)"
                },
                "price": 13,
                "photo": "img/x7-1788882386318.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ]
              },
              {
                "id": "x6",
                "name": {
                  "fr": "Hire katsu (1 pc)",
                  "en": "Hire katsu (1 pc)",
                  "ja": "ヒレカツ（1個）",
                  "ko": "히레카츠 (1개)"
                },
                "price": 5,
                "photo": "img/x6-1788484635964.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish"
                ],
                "dineInOnly": true
              }
            ]
          },
          {
            "kanji": "カレー",
            "title": {
              "fr": "Curry Tonkatsu",
              "en": "Curry Tonkatsu",
              "ja": "カレーとんかつ",
              "ko": "카레 돈카츠"
            },
            "note": {
              "fr": "Avec œuf onsen — soupe miso incluse. Tailles — Moyen : 2 morceaux (80–100 g chacun) · Régulier : 1 pièce (200–205 g) · Grand : 3 morceaux (80–100 g chacun).",
              "en": "With onsen egg — miso soup included. Sizes — Medium: 2 pieces (80–100 g each) · Regular: 1 piece (200–205 g) · Large: 3 pieces (80–100 g each).",
              "ja": "温泉卵付き — 味噌汁付き。サイズ — ミディアム：2枚（各80〜100g）・レギュラー：1枚（200〜205g）・ラージ：3枚（各80〜100g）。",
              "ko": "온센 계란 포함 — 미소국 포함. 사이즈 — 미디엄: 2조각(각 80~100g) · 레귤러: 1조각(200~205g) · 라지: 3조각(각 80~100g)."
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "c1",
                "name": {
                  "fr": "Rosu Katsu Curry Don — Moyen",
                  "en": "Rosu Katsu Curry Don — Medium",
                  "ja": "ロースカツカレー丼（ミディアム）",
                  "ko": "로스카츠 카레동 (미디엄)"
                },
                "price": 22,
                "photo": "img/c1-1788448670670.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "sizeOf": "c1",
                "size": {
                  "fr": "M",
                  "en": "M",
                  "ja": "M",
                  "ko": "M"
                },
                "groupName": {
                  "fr": "Rosu Katsu Curry Don",
                  "en": "Rosu Katsu Curry Don",
                  "ja": "ロースカツカレー丼",
                  "ko": "로스카츠 카레동"
                }
              },
              {
                "id": "c1r",
                "name": {
                  "fr": "Rosu Katsu Curry Don — Régulier",
                  "en": "Rosu Katsu Curry Don — Regular",
                  "ja": "ロースカツカレー丼（レギュラー）",
                  "ko": "로스카츠 카레동 (레귤러)"
                },
                "price": 23,
                "photo": "img/c1-1788448670670.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "dineInOnly": true,
                "sizeOf": "c1",
                "size": {
                  "fr": "R",
                  "en": "R",
                  "ja": "R",
                  "ko": "R"
                },
                "groupName": {
                  "fr": "Rosu Katsu Curry Don",
                  "en": "Rosu Katsu Curry Don",
                  "ja": "ロースカツカレー丼",
                  "ko": "로스카츠 카레동"
                }
              },
              {
                "id": "c1l",
                "name": {
                  "fr": "Rosu Katsu Curry Don — Grand",
                  "en": "Rosu Katsu Curry Don — Large",
                  "ja": "ロースカツカレー丼（ラージ）",
                  "ko": "로스카츠 카레동 (라지)"
                },
                "price": 24,
                "photo": "img/c1-1788448670670.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "sizeOf": "c1",
                "size": {
                  "fr": "G",
                  "en": "L",
                  "ja": "L",
                  "ko": "L"
                },
                "groupName": {
                  "fr": "Rosu Katsu Curry Don",
                  "en": "Rosu Katsu Curry Don",
                  "ja": "ロースカツカレー丼",
                  "ko": "로스카츠 카레동"
                }
              },
              {
                "id": "c2",
                "name": {
                  "fr": "Hire Katsu Curry Don (3 pcs)",
                  "en": "Hire Katsu Curry Don (3 pcs)",
                  "ja": "ヒレカツカレー丼（3個）",
                  "ko": "히레카츠 카레동 (3개)"
                },
                "price": 25,
                "photo": "img/c2-1788448675377.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "dineInOnly": true
              },
              {
                "id": "c4",
                "name": {
                  "fr": "Udon au curry avec Rosu Katsu — Moyen",
                  "en": "Curry udon with Rosu Katsu — Medium",
                  "ja": "カレーうどん（ロースカツ）（ミディアム）",
                  "ko": "카레우동 + 로스카츠 (미디엄)"
                },
                "price": 23,
                "photo": "img/c4-1788296238814.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "sizeOf": "c4",
                "size": {
                  "fr": "M",
                  "en": "M",
                  "ja": "M",
                  "ko": "M"
                },
                "groupName": {
                  "fr": "Udon au curry avec Rosu Katsu",
                  "en": "Curry udon with Rosu Katsu",
                  "ja": "カレーうどん（ロースカツ）",
                  "ko": "카레우동 + 로스카츠"
                }
              },
              {
                "id": "c4r",
                "name": {
                  "fr": "Udon au curry avec Rosu Katsu — Régulier",
                  "en": "Curry udon with Rosu Katsu — Regular",
                  "ja": "カレーうどん（ロースカツ）（レギュラー）",
                  "ko": "카레우동 + 로스카츠 (레귤러)"
                },
                "price": 24,
                "photo": "img/c4-1788296238814.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "dineInOnly": true,
                "sizeOf": "c4",
                "size": {
                  "fr": "R",
                  "en": "R",
                  "ja": "R",
                  "ko": "R"
                },
                "groupName": {
                  "fr": "Udon au curry avec Rosu Katsu",
                  "en": "Curry udon with Rosu Katsu",
                  "ja": "カレーうどん（ロースカツ）",
                  "ko": "카레우동 + 로스카츠"
                }
              },
              {
                "id": "c4l",
                "name": {
                  "fr": "Udon au curry avec Rosu Katsu — Grand",
                  "en": "Curry udon with Rosu Katsu — Large",
                  "ja": "カレーうどん（ロースカツ）（ラージ）",
                  "ko": "카레우동 + 로스카츠 (라지)"
                },
                "price": 25,
                "photo": "img/c4-1788296238814.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "sizeOf": "c4",
                "size": {
                  "fr": "G",
                  "en": "L",
                  "ja": "L",
                  "ko": "L"
                },
                "groupName": {
                  "fr": "Udon au curry avec Rosu Katsu",
                  "en": "Curry udon with Rosu Katsu",
                  "ja": "カレーうどん（ロースカツ）",
                  "ko": "카레우동 + 로스카츠"
                }
              },
              {
                "id": "c5",
                "name": {
                  "fr": "Udon au curry avec Hire Katsu (3 pcs)",
                  "en": "Curry udon with Hire Katsu (3 pcs)",
                  "ja": "カレーうどん（ヒレカツ3個）",
                  "ko": "카레우동 + 히레카츠 (3개)"
                },
                "price": 26,
                "photo": "img/c5-1788296256941.jpg",
                "allergens": [
                  "gluten",
                  "eggs",
                  "soy",
                  "fish",
                  "dairy"
                ],
                "dineInOnly": true
              },
              {
                "id": "x2",
                "name": {
                  "fr": "Sauce curry",
                  "en": "Curry sauce",
                  "ja": "カレーソース",
                  "ko": "카레 소스"
                },
                "price": 5,
                "photo": "img/x2-1789062960988.jpg",
                "allergens": [
                  "dairy",
                  "gluten",
                  "soy"
                ]
              }
            ]
          },
          {
            "kanji": "天ぷら",
            "title": {
              "fr": "Tempura",
              "en": "Tempura",
              "ja": "天ぷら",
              "ko": "덴푸라"
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "t1",
                "name": {
                  "fr": "Assiette tempura",
                  "en": "Tempura Plate",
                  "ja": "天ぷら定食",
                  "ko": "덴푸라 정식"
                },
                "price": 26,
                "desc": {
                  "fr": "2 crevettes, citrouille, racine de lotus, chikuwa, kakiage — riz, tentsuyu, soupe miso, pickles (soupe udon simple au lieu du riz : +3 $)",
                  "en": "2 shrimp, pumpkin, lotus root, chikuwa, kakiage — rice, tentsuyu, miso soup, pickles (plain udon soup instead of rice: +$3)",
                  "ja": "海老2本・かぼちゃ・れんこん・ちくわ・かき揚げ — ご飯・天つゆ・味噌汁・漬物（ご飯→かけうどん +3$）",
                  "ko": "새우 2, 단호박, 연근, 치쿠와, 가키아게 — 밥, 텐츠유, 미소국, 절임 (밥→우동국 +3$)"
                }
              },
              {
                "id": "t2",
                "name": {
                  "fr": "Assortiment tempura végétarien",
                  "en": "Vegetarian Tempura Assortment",
                  "ja": "野菜天ぷら盛り合わせ",
                  "ko": "채식 덴푸라 모둠"
                },
                "price": 21,
                "vegetarian": true,
                "desc": {
                  "fr": "2 tofu, citrouille, racine de lotus, kakiage, aubergine, shiitake — tentsuyu végétarien. Sans riz ni soupe : riz ou udon en extra.",
                  "en": "2 tofu, pumpkin, lotus root, kakiage, eggplant, shiitake — vegetarian tentsuyu. No rice or soup: add rice or udon as an extra.",
                  "ja": "豆腐2・かぼちゃ・れんこん・かき揚げ・なす・椎茸 — ベジ天つゆ。ご飯・汁物なし（ご飯・うどんは追加で）。",
                  "ko": "두부 2, 단호박, 연근, 가키아게, 가지, 표고버섯 — 채식 텐츠유. 밥·국 미포함 (밥 또는 우동 추가 가능)."
                }
              },
              {
                "id": "t4",
                "name": {
                  "fr": "Crevette tempura (1 pc)",
                  "en": "Tempura shrimp (1 pc)",
                  "ja": "海老天（1本）",
                  "ko": "새우 덴푸라 (1개)"
                },
                "price": 4
              },
              {
                "id": "t5",
                "name": {
                  "fr": "Chikuwa tempura (1 pc)",
                  "en": "Tempura chikuwa (1 pc)",
                  "ja": "ちくわ天（1本）",
                  "ko": "치쿠와 덴푸라 (1개)"
                },
                "price": 3.5
              },
              {
                "id": "t6",
                "name": {
                  "fr": "Légume tempura (1 pc)",
                  "en": "Tempura vegetable (1 pc)",
                  "ja": "野菜天（1個）",
                  "ko": "야채 덴푸라 (1개)"
                },
                "price": 3
              }
            ]
          },
          {
            "kanji": "魚介類",
            "title": {
              "fr": "Poissons et fruits de mer",
              "en": "Seafood",
              "ja": "魚介類",
              "ko": "해산물"
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "a1",
                "name": {
                  "fr": "Assiette Aji Fry",
                  "en": "Aji Fry Plate",
                  "ja": "アジフライ定食",
                  "ko": "아지후라이 정식"
                },
                "price": 22,
                "desc": {
                  "fr": "2 chinchards panés et frits, chou, sauce tonkatsu, sauce tartare — riz, soupe miso, pickles",
                  "en": "2 deep-fried breaded horse mackerel, cabbage, tonkatsu sauce, tartar sauce — rice, miso soup, pickles",
                  "ja": "アジフライ2枚・キャベツ・とんかつソース・タルタルソース — ご飯・味噌汁・漬物",
                  "ko": "전갱이 튀김 2, 양배추, 돈카츠 소스, 타르타르 소스 — 밥, 미소국, 절임"
                },
                "soldout": true,
                "preparing": true
              },
              {
                "id": "f1",
                "name": {
                  "fr": "Sake Don",
                  "en": "Sake Don",
                  "ja": "サーモン丼",
                  "ko": "사케동 (연어덮밥)"
                },
                "desc": {
                  "fr": "Bol de riz garni de saumon cru — soupe miso incluse",
                  "en": "Rice bowl topped with fresh salmon — miso soup included",
                  "ja": "新鮮なサーモンの丼 — 味噌汁付き",
                  "ko": "신선한 연어 덮밥 — 미소국 포함"
                },
                "price": 29,
                "photo": "img/f1-1788302078398.jpg",
                "allergens": [
                  "fish",
                  "soy"
                ]
              },
              {
                "id": "e3",
                "name": {
                  "fr": "Saumon flambé au tare",
                  "en": "Salmon flambé with tare",
                  "ja": "炙りサーモン タレがけ",
                  "ko": "타레 연어 아부리"
                },
                "price": 16,
                "photo": "img/e3-1788458549114.jpg",
                "allergens": [
                  "fish",
                  "soy",
                  "gluten"
                ]
              },
              {
                "id": "e2",
                "name": {
                  "fr": "Tartare de saumon",
                  "en": "Salmon tartare",
                  "ja": "サーモンタルタル",
                  "ko": "연어 타르타르"
                },
                "price": 12,
                "photo": "img/e2-1788302067939.jpg",
                "allergens": [
                  "fish",
                  "sesame",
                  "soy",
                  "gluten",
                  "eggs",
                  "mustard"
                ]
              },
              {
                "id": "a2",
                "name": {
                  "fr": "Aji Fry (1 pc)",
                  "en": "Aji Fry (1 pc)",
                  "ja": "アジフライ（1枚）",
                  "ko": "아지후라이 (1개)"
                },
                "price": 6,
                "soldout": true,
                "preparing": true
              }
            ]
          },
          {
            "kanji": "ハンバーグ",
            "title": {
              "fr": "Hambāgu — Steak Haché Japonais",
              "en": "Hambāgu — Japanese Hamburger Steak",
              "ja": "ハンバーグ",
              "ko": "함바그 — 일본식 햄버그 스테이크"
            },
            "note": {
              "fr": "Préparé avec du bœuf canadien AAA — 130 g / 2 pcs. Steak hamburg supplémentaire (1 mcx) : +7 $",
              "en": "Made with AAA Canadian beef — 130 g / 2 pcs. Extra hamburg steak (1 pc): +$7",
              "ja": "カナダ産AAA牛使用 — 130g/2個。ハンバーグ追加（1個）: +7$",
              "ko": "캐나다산 AAA 소고기 — 130g/2개. 햄버그 추가(1개): +7$"
            },
            "items": [
              {
                "id": "h1",
                "name": {
                  "fr": "Teppan hamburger steak, sauce hayashi",
                  "en": "Teppan hamburger steak, hayashi sauce",
                  "ja": "鉄板ハンバーグ（ハヤシソース）",
                  "ko": "철판 함바그 (하야시 소스)"
                },
                "desc": {
                  "fr": "Sauce maison, œuf onsen et coleslaw — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Homemade sauce, onsen egg and coleslaw — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "自家製ソース・温泉卵・コールスロー — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "수제 소스, 온센 계란, 코울슬로 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 24,
                "photo": "img/h1-1788469747086.jpg",
                "dineInOnly": true,
                "allergens": [
                  "dairy",
                  "eggs",
                  "gluten",
                  "soy",
                  "fish"
                ]
              },
              {
                "id": "h2",
                "name": {
                  "fr": "Teppan hamburger steak, hayashi + fromage",
                  "en": "Teppan hamburger steak, hayashi + cheese",
                  "ja": "鉄板ハンバーグ（ハヤシ+チーズ）",
                  "ko": "철판 함바그 (하야시+치즈)"
                },
                "desc": {
                  "fr": "Garni de fromage — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Topped with cheese — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "チーズのせ — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "치즈 토핑 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 26,
                "photo": "img/h2-1788469751576.jpg",
                "dineInOnly": true,
                "allergens": [
                  "dairy",
                  "eggs",
                  "gluten",
                  "soy",
                  "fish"
                ]
              },
              {
                "id": "h3",
                "name": {
                  "fr": "Teppan hamburger steak au curry",
                  "en": "Teppan hamburger steak with curry",
                  "ja": "鉄板ハンバーグ（カレー）",
                  "ko": "철판 함바그 (카레)"
                },
                "desc": {
                  "fr": "Sauce curry ajoutée — soupe miso + riz (soupe udon simple au lieu du riz : +3 $)",
                  "en": "Added curry sauce — miso soup + rice (plain udon soup instead of rice: +$3)",
                  "ja": "カレーソース添え — 味噌汁+ご飯（ご飯→かけうどん +3$）",
                  "ko": "카레 소스 추가 — 미소국+밥 (밥→우동국 +3$)"
                },
                "price": 25,
                "photo": "img/h3-1788469815116.jpg",
                "dineInOnly": true,
                "allergens": [
                  "dairy",
                  "eggs",
                  "gluten",
                  "soy",
                  "fish"
                ]
              }
            ],
            "alwaysAvailable": true
          },
          {
            "kanji": "追加",
            "title": {
              "fr": "Extras",
              "en": "Extras",
              "ja": "追加",
              "ko": "추가 메뉴"
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "x3",
                "name": {
                  "fr": "Riz",
                  "en": "Rice",
                  "ja": "ご飯",
                  "ko": "밥"
                },
                "price": 3,
                "photo": "img/x3-1788484523357.jpg",
                "vegetarian": true,
                "glutenFree": true,
                "vegan": true
              },
              {
                "id": "x4",
                "name": {
                  "fr": "Nouilles udon",
                  "en": "Udon noodles",
                  "ja": "うどん麺",
                  "ko": "우동면"
                },
                "price": 4,
                "photo": "img/x4-1788484531724.jpg",
                "allergens": [
                  "gluten"
                ],
                "vegetarian": true,
                "vegan": true
              },
              {
                "id": "x14",
                "name": {
                  "fr": "Soupe miso",
                  "en": "Miso soup",
                  "ja": "味噌汁",
                  "ko": "미소국"
                },
                "price": 3
              },
              {
                "id": "x15",
                "name": {
                  "fr": "Soupe crème",
                  "en": "Cream soup",
                  "ja": "クリームスープ",
                  "ko": "크림 수프"
                },
                "price": 5.5
              },
              {
                "id": "x1",
                "name": {
                  "fr": "Œuf onsen (1 pc)",
                  "en": "Onsen egg (1 pc)",
                  "ja": "温泉卵（1個）",
                  "ko": "온센 계란 (1개)"
                },
                "price": 2,
                "allergens": [
                  "eggs"
                ]
              },
              {
                "id": "x12",
                "name": {
                  "fr": "Sauce ultra piquante",
                  "en": "Ultra spicy sauce",
                  "ja": "激辛ソース",
                  "ko": "초매운 소스"
                },
                "price": 2,
                "allergens": [
                  "gluten"
                ]
              },
              {
                "id": "x13",
                "name": {
                  "fr": "Sauce supplémentaire (au choix)",
                  "en": "Extra sauce (any)",
                  "ja": "追加ソース（お好みで）",
                  "ko": "소스 추가 (선택)"
                },
                "price": 2
              },
              {
                "id": "x16",
                "name": {
                  "fr": "Gingembre",
                  "en": "Ginger",
                  "ja": "ガリ",
                  "ko": "생강"
                },
                "price": 1
              },
              {
                "id": "x17",
                "name": {
                  "fr": "Wasabi",
                  "en": "Wasabi",
                  "ja": "わさび",
                  "ko": "와사비"
                },
                "price": 1
              },
              {
                "id": "x8",
                "name": {
                  "fr": "Menchi katsu (1 pc)",
                  "en": "Menchi katsu (1 pc)",
                  "ja": "メンチカツ（1個）",
                  "ko": "멘치카츠 (1개)"
                },
                "price": 4,
                "allergens": [
                  "gluten",
                  "soy",
                  "fish",
                  "eggs"
                ]
              }
            ]
          },
          {
            "kanji": "飲み物",
            "title": {
              "fr": "Boissons",
              "en": "Drinks",
              "ja": "お飲み物",
              "ko": "음료"
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "v1",
                "name": {
                  "fr": "Boissons gazeuses",
                  "en": "Soft drinks",
                  "ja": "ソフトドリンク",
                  "ko": "탄산음료"
                },
                "desc": {
                  "fr": "Coke, Coke Zéro, Sprite, Brisk",
                  "en": "Coke, Coke Zero, Sprite, Brisk",
                  "ja": "コーラ、コーラゼロ、スプライト、ブリスク",
                  "ko": "콜라, 콜라 제로, 스프라이트, 브리스크"
                },
                "price": 3,
                "photo": "img/v1-1788304230140.jpg"
              },
              {
                "id": "n1",
                "name": {
                  "fr": "Ramune",
                  "en": "Ramune",
                  "ja": "ラムネ",
                  "ko": "라무네"
                },
                "desc": {
                  "fr": "Bouteille 200ml",
                  "en": "200ml bottle",
                  "ja": "200ml瓶",
                  "ko": "200ml 병"
                },
                "price": 5.5,
                "photo": "img/n1-1788303624378.jpg"
              },
              {
                "id": "v2",
                "name": {
                  "fr": "Thé vert",
                  "en": "Green tea",
                  "ja": "緑茶",
                  "ko": "녹차"
                },
                "price": 4,
                "photo": "img/v2-1788471292759.jpg"
              },
              {
                "id": "v3",
                "name": {
                  "fr": "Eau pétillante Montellier 355 ml",
                  "en": "Montellier sparkling water 355 ml",
                  "ja": "炭酸水 Montellier 355ml",
                  "ko": "탄산수 Montellier 355ml"
                },
                "price": 2.5,
                "photo": "img/v3-1788471303082.jpg"
              },
              {
                "id": "v4",
                "name": {
                  "fr": "Bière au gingembre 200 ml",
                  "en": "Ginger beer 200 ml",
                  "ja": "ジンジャービール 200ml",
                  "ko": "진저비어 200ml"
                },
                "price": 5,
                "photo": "img/v4-1788471308585.jpg"
              },
              {
                "id": "v5",
                "name": {
                  "fr": "Eau ESKA 500 ml",
                  "en": "ESKA water 500 ml",
                  "ja": "ESKA 水 500ml",
                  "ko": "ESKA 생수 500ml"
                },
                "price": 3,
                "photo": "img/v5-1788471314926.jpg"
              },
              {
                "id": "v6",
                "name": {
                  "fr": "Oyster Bay Pinot Noir (verre 150 ml)",
                  "en": "Oyster Bay Pinot Noir (glass 150 ml)",
                  "ja": "Oyster Bay ピノ・ノワール（グラス150ml）",
                  "ko": "Oyster Bay 피노 누아 (잔 150ml)"
                },
                "desc": {
                  "fr": "Bouteille 750 ml : 56 $",
                  "en": "750 ml bottle: $56",
                  "ja": "ボトル750ml: 56$",
                  "ko": "병 750ml: 56$"
                },
                "price": 12,
                "alcohol": true,
                "photo": "img/v6-1788471684904.jpg",
                "allergens": [
                  "sulphites"
                ]
              },
              {
                "id": "v7",
                "name": {
                  "fr": "Oyster Bay Chardonnay (verre 150 ml)",
                  "en": "Oyster Bay Chardonnay (glass 150 ml)",
                  "ja": "Oyster Bay シャルドネ（グラス150ml）",
                  "ko": "Oyster Bay 샤르도네 (잔 150ml)"
                },
                "desc": {
                  "fr": "Bouteille 750 ml : 52 $",
                  "en": "750 ml bottle: $52",
                  "ja": "ボトル750ml: 52$",
                  "ko": "병 750ml: 52$"
                },
                "price": 11,
                "alcohol": true,
                "photo": "img/v7-1788471691188.jpg",
                "soldout": true,
                "allergens": [
                  "sulphites"
                ]
              },
              {
                "id": "v8",
                "name": {
                  "fr": "Jameson Triple Triple Highball",
                  "en": "Jameson Triple Triple Highball",
                  "ja": "ジェムソン・トリプル ハイボール",
                  "ko": "제임슨 트리플 하이볼"
                },
                "price": 11,
                "alcohol": true,
                "photo": "img/v8-1788307174056.jpg"
              },
              {
                "id": "v9",
                "name": {
                  "fr": "Ginger Beer Highball",
                  "en": "Ginger Beer Highball",
                  "ja": "ジンジャービア・ハイボール",
                  "ko": "진저비어 하이볼"
                },
                "price": 12,
                "alcohol": true,
                "photo": "img/v9-1788307180054.jpg"
              },
              {
                "id": "v10",
                "name": {
                  "fr": "Thé Noir Highball",
                  "en": "Black Tea Highball",
                  "ja": "紅茶ハイボール",
                  "ko": "홍차 하이볼"
                },
                "price": 12,
                "alcohol": true,
                "photo": "img/v10-1788307186530.jpg"
              },
              {
                "id": "v11",
                "name": {
                  "fr": "Saké Shichiken Junmai Ginjo 300 ml",
                  "en": "Shichiken Junmai Ginjo sake 300 ml",
                  "ja": "七賢 純米吟醸 300ml",
                  "ko": "시치켄 준마이긴조 사케 300ml"
                },
                "price": 34,
                "photo": "img/v11-1788303226720.jpg",
                "alcohol": true
              },
              {
                "id": "v12",
                "name": {
                  "fr": "Bière Sapporo 500 ml",
                  "en": "Sapporo beer 500 ml",
                  "ja": "サッポロビール 500ml",
                  "ko": "삿포로 맥주 500ml"
                },
                "price": 9,
                "alcohol": true,
                "photo": "img/v12-1788307470467.jpg",
                "allergens": [
                  "gluten"
                ]
              },
              {
                "id": "v13",
                "name": {
                  "fr": "Bière Blanche de Chambly 473 ml",
                  "en": "Blanche de Chambly beer 473 ml",
                  "ja": "ブランシュ・ド・シャンブリー 473ml",
                  "ko": "블랑슈 드 샹블리 맥주 473ml"
                },
                "price": 9,
                "alcohol": true,
                "photo": "img/v13-1788307476531.jpg",
                "allergens": [
                  "gluten"
                ]
              },
              {
                "id": "n2",
                "name": {
                  "fr": "Suntory Highball",
                  "en": "Suntory Highball",
                  "ja": "サントリー ハイボール",
                  "ko": "산토리 하이볼"
                },
                "price": 13.5,
                "alcohol": true,
                "photo": "img/n2-1788307152023.jpg"
              },
              {
                "id": "n3",
                "name": {
                  "fr": "Suntory Ginger Highball",
                  "en": "Suntory Ginger Highball",
                  "ja": "サントリー ジンジャーハイボール",
                  "ko": "산토리 진저 하이볼"
                },
                "price": 14.5,
                "alcohol": true,
                "photo": "img/n3-1788307159449.jpg"
              },
              {
                "id": "n4",
                "name": {
                  "fr": "Suntory Thé Noir Highball",
                  "en": "Suntory Black Tea Highball",
                  "ja": "サントリー 紅茶ハイボール",
                  "ko": "산토리 홍차 하이볼"
                },
                "price": 14.5,
                "alcohol": true,
                "photo": "img/n4-1788307165982.jpg"
              }
            ]
          },
          {
            "kanji": "",
            "title": {
              "fr": "Desserts",
              "en": "Desserts"
            },
            "alwaysAvailable": true,
            "items": [
              {
                "id": "n6",
                "name": {
                  "fr": "Gela Mochi",
                  "en": "Gela Mochi",
                  "ja": "ジェラ餅",
                  "ko": "젤라 모치"
                },
                "price": 12.5,
                "desc": {
                  "fr": "Mochi au thé matcha, gelato au choix (vanille ou yuzu), physalis frais — poudre de matcha en extra.",
                  "en": "Matcha mochi with your choice of gelato, fresh physalis — matcha powder available as an extra.",
                  "ja": "抹茶もち、お好みのジェラート（バニラまたはゆず）、新鮮なフィサリス — 抹茶パウダーが別添え。",
                  "ko": "말차 모찌, 원하는 맛의 젤라토(바닐라 또는 유자), 신선한 피살리스 — 말차 가루 추가."
                },
                "promoPrice": 9.5,
                "dineInOnly": true,
                "photo": "img/n6-1788882409148.jpg",
                "allergens": [
                  "dairy",
                  "eggs"
                ],
                "vegetarian": true,
                "glutenFree": true
              },
              {
                "id": "n7",
                "name": {
                  "fr": "Gelato à la vanille",
                  "en": "Vanilla Gelato",
                  "ja": "バニラジェラート",
                  "ko": "바닐라 젤라토"
                },
                "price": 6,
                "desc": {
                  "fr": "Gelato à la vanille, recette maison — une collaboration avec Gelatopia.",
                  "en": "Vanilla gelato, house recipe — a collaboration with Gelatopia.",
                  "ja": "バニラジェラート、手作りレシピ — Gelatopiaとのコラボレーション。",
                  "ko": "바닐라 젤라토, 집에서 만드는 레시피 — Gelatopia와의 협업."
                },
                "dineInOnly": true,
                "photo": "img/n7-1788885627990.jpg",
                "allergens": [
                  "dairy",
                  "eggs"
                ],
                "vegetarian": true,
                "glutenFree": true
              },
              {
                "id": "n8",
                "name": {
                  "fr": "Gelato au yuzu",
                  "en": "Yuzu Gelato",
                  "ja": "ゆずのジェラート",
                  "ko": "유자 젤라토"
                },
                "price": 6,
                "desc": {
                  "fr": "Gelato au yuzu, recette maison — une collaboration avec Gelatopia. Sorbet à base d'eau, sans lactose, sans gélatine (aucun produit animal).",
                  "en": "Yuzu gelato, house recipe — a collaboration with Gelatopia. Water-based sorbet, dairy-free, no gelatine (no animal products).",
                  "ja": "手作りの柚子ジェラート — Gelatopiaとのコラボレーション。水ベースのソルベで、乳糖不使用、ゼラチン不使用（動物性原料不使用）。",
                  "ko": "유자 젤라토, 홈메이드 레시피 — Gelatopia와의 협업. 물 베이스의 셔벗으로, 유당 무첨가, 젤라틴 무첨가(동물성 성분 없음)."
                },
                "dineInOnly": true,
                "lactoseFree": true,
                "photo": "img/n8-1788882417081.jpg",
                "vegetarian": true,
                "glutenFree": true,
                "vegan": true
              },
              {
                "id": "n9",
                "name": {
                  "fr": "Poudre de matcha",
                  "en": "Matcha Powder",
                  "ja": "抹茶パウダー",
                  "ko": "말차 가루"
                },
                "price": 0.5,
                "dineInOnly": true,
                "photo": "img/n9-1788885473098.webp",
                "vegetarian": true,
                "glutenFree": true,
                "vegan": true
              }
            ]
          }
        ]
      }
    ]
  },
  items: {}
};
