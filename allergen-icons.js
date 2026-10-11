// ===== Hoshi — Icônes allergènes / régimes (partagées : index.html et nouveau-menu.html) =====
// SVG provisoires, trait = currentColor. À remplacer par les icônes finales du graphiste.
const WHEAT_SVG = '<path d="M12 22V8"/><path d="M12 8c-1.2-1.2-1.2-3.8 0-6 1.2 2.2 1.2 4.8 0 6z"/>' +
  [11, 15, 19].map(y => `<path d="M12 ${y}c-2.5-.5-3.5-2.5-3.5-4.5 2.5.5 3.5 2.5 3.5 4.5z"/><path d="M12 ${y}c2.5-.5 3.5-2.5 3.5-4.5-2.5.5-3.5 2.5-3.5 4.5z"/>`).join("");
const CARTON_SVG = '<path d="M7 9l2-5h6l2 5v12H7z"/><path d="M7 9h10"/><path d="M9 4l1.5 5"/>';
const NO_SVG = inner => `<g transform="translate(12 12) scale(.7) translate(-12 -12)">${inner}</g><circle cx="12" cy="12" r="10.5"/><path d="M4.6 4.6l14.8 14.8"/>`;
const ICON_SVG = {
  gluten: WHEAT_SVG,
  soy: '<g transform="rotate(-40 12 12)"><path d="M3 12c0-2.5 2-3.5 4.5-3.5h9c2.5 0 4.5 1 4.5 3.5s-2 3.5-4.5 3.5h-9C5 15.5 3 14.5 3 12z"/><circle cx="7.5" cy="12" r="1.7"/><circle cx="12" cy="12" r="1.7"/><circle cx="16.5" cy="12" r="1.7"/></g>',
  fish: '<path d="M3 12c3-5 9-6 13-2l5-3v10l-5-3c-4 4-10 3-13-2z"/><circle cx="7.5" cy="11" r=".9" fill="currentColor"/>',
  shellfish: '<path d="M12 19L4 10a8 8 0 0 1 16 0z"/><path d="M12 19L7 3.8M12 19V2M12 19l5-15.2"/><path d="M10 19h4v2h-4z"/>',
  eggs: '<path d="M12 3c-3.5 0-6.5 6-6.5 10a6.5 6.5 0 0 0 13 0c0-4-3-10-6.5-10z"/>',
  dairy: CARTON_SVG,
  sesame: [[8, 10, -25], [16, 9, 20], [12, 17, 0]].map(([x, y, r]) => `<g transform="translate(${x} ${y}) rotate(${r})"><path d="M0-4.5c1.8 1.5 2.6 4 0 7-2.6-3-1.8-5.5 0-7z"/></g>`).join(""),
  mustard: '<path d="M11 2h2l1 4h-4z"/><path d="M8 6h8l1 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"/><path d="M10 14h4"/>',
  nuts: '<path d="M5 10c0-3.5 3-6 7-6s7 2.5 7 6z"/><path d="M12 4V2"/><path d="M6.5 10c0 6 3 10 5.5 11.5 2.5-1.5 5.5-5.5 5.5-11.5"/>',
  sulphites: '<text x="12" y="15.5" text-anchor="middle" font-size="8.5" font-weight="700" font-family="sans-serif" fill="currentColor" stroke="none">SO₂</text>',
  alcohol: '<path d="M7 3h10c0 5-2 8-5 8s-5-3-5-8z"/><path d="M12 11v9M8 21h8"/>',
  vegetarian: '<path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19l9-9"/>',
  vegan: '<path d="M12 21v-9"/><path d="M12 12C12 7 9 4 4 4c0 5 3 8 8 8z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7z"/>',
  glutenFree: NO_SVG(WHEAT_SVG),
  lactoseFree: NO_SVG(CARTON_SVG),
  halal: '<text x="12" y="15" text-anchor="middle" font-size="8" font-weight="700" fill="currentColor" stroke="none">حلال</text>'
};
const ALLERGEN_ORDER = ["gluten", "soy", "fish", "shellfish", "eggs", "dairy", "sesame", "mustard", "nuts", "sulphites", "alcohol"];
const DIET_ORDER = ["vegetarian", "vegan", "glutenFree", "lactoseFree", "halal"];

// Libellés pour les pages sans le dictionnaire i18n de script.js (ex. nouveau-menu.html)
const ICON_LABELS = {
  fr: { gluten: "gluten", soy: "soya", fish: "poisson", shellfish: "fruits de mer", eggs: "œufs", dairy: "lait", sesame: "sésame", mustard: "moutarde", nuts: "noix", sulphites: "sulfites", alcohol: "alcool",
        vegetarian: "végétarien", vegan: "végane", glutenFree: "sans gluten", lactoseFree: "sans lactose", halal: "halal" },
  en: { gluten: "gluten", soy: "soy", fish: "fish", shellfish: "shellfish", eggs: "eggs", dairy: "dairy", sesame: "sesame", mustard: "mustard", nuts: "nuts", sulphites: "sulphites", alcohol: "alcohol",
        vegetarian: "vegetarian", vegan: "vegan", glutenFree: "gluten-free", lactoseFree: "dairy-free", halal: "halal" },
  ja: { gluten: "小麦", soy: "大豆", fish: "魚", shellfish: "甲殻類・貝", eggs: "卵", dairy: "乳", sesame: "ごま", mustard: "マスタード", nuts: "ナッツ", sulphites: "亜硫酸塩", alcohol: "アルコール",
        vegetarian: "ベジタリアン", vegan: "ヴィーガン", glutenFree: "グルテンフリー", lactoseFree: "乳製品不使用", halal: "ハラール" },
  ko: { gluten: "밀(글루텐)", soy: "대두", fish: "생선", shellfish: "갑각류·조개", eggs: "달걀", dairy: "유제품", sesame: "참깨", mustard: "겨자", nuts: "견과류", sulphites: "아황산염", alcohol: "알코올",
        vegetarian: "채식", vegan: "비건", glutenFree: "글루텐 프리", lactoseFree: "유제품 무첨가", halal: "할랄" }
};
