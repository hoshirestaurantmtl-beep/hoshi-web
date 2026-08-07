// ===== Hoshi 星 — Interactivité / Interactivity =====

// ---- Traductions FR / EN ----
const i18n = {
  fr: {
    nav_menu: "Menu",
    nav_midi: "Midi",
    nav_about: "À propos",
    nav_hours: "Horaires",
    nav_contact: "Contact",
    nav_takeout: "À emporter",
    hero_sub: "Restaurant japonais au cœur du Quartier chinois de Montréal.",
    hero_btn_menu: "Voir le menu",
    menu_title: "Notre Menu",
    menu_intro: "Préparé à la minute avec des ingrédients frais.",
    cat_app: "Entrées",
    e1: "Menchi Katsu (2 mcx)",
    e1d: "Boulette de porc haché panée — 3 mcx : 13 $",
    e2: "Tartare de saumon",
    e3: "Saumon flambé au tare",
    e4: "Salade de chou",
    e5: "Coleslaw",
    cat_ton: "Menu Principal — Tonkatsu",
    k1: "Rosu katsu plate",
    k1d: "Longe de porc avec chou — soupe miso + riz (soupe udon : 22 $)",
    k2: "Hire katsu plate",
    k2d: "Filet de porc avec chou — soupe miso + riz (soupe udon : 24 $)",
    k3: "Rosu & Hire katsu plate",
    k3d: "Avec chou — soupe miso + riz (soupe udon : 25 $)",
    k4: "Katsu Don",
    k4d: "Longe de porc + omelette — soupe miso incluse",
    cat_sando: "Katsu Sando",
    ks1: "Katsu Sando (3 pièces)",
    ks2: "Katsu Sando avec coleslaw",
    cat_curry: "Curry Tonkatsu",
    curry_note: "Avec œuf sous-vide — soupe miso incluse",
    c1: "Rosu Katsu Curry Don",
    c2: "Hire Katsu Curry Don (3 pcs)",
    c3: "Rosu & Hire Katsu Curry Don",
    c4: "Udon au curry avec Rosu Katsu",
    c5: "Udon au curry avec Hire Katsu (3 pcs)",
    c6: "Udon au curry avec Rosu & Hire Katsu",
    cat_sea: "Fruits de mer",
    f1: "Sake Don",
    f1d: "Bol de riz garni de saumon cru — soupe miso incluse",
    f2: "Morue Katsu",
    f2d: "Avec sauce tartare et chou — soupe miso + riz (soupe udon : 23 $)",
    f3: "Udon Hoshi Katsu",
    f3d: "Morue katsu, pétoncle katsu, guacamole, ikura, œuf sous-vide — soupe miso",
    cat_ham: "Hambāgu — Steak Haché Japonais",
    ham_note: "Préparé avec du bœuf canadien AAA — 130 g / 2 pcs. Steak hamburg supplémentaire (1 mcx) : +7 $",
    h1: "Teppan hamburger steak, sauce hayashi",
    h1d: "Sauce maison, œuf sous-vide et coleslaw — soupe miso + riz (udon : 25 $)",
    h2: "Teppan hamburger steak, hayashi + fromage",
    h2d: "Garni de fromage — soupe miso + riz (udon : 27 $)",
    h3: "Teppan hamburger steak au curry",
    h3d: "Sauce curry ajoutée — soupe miso + riz (udon : 26 $)",
    cat_lunch: "Menu du Midi — Lunch",
    lunch_note: "Servi de 12 h à 14 h — Prix M (moyen) / G (grand) entre parenthèses",
    lunch_note2: "Les plats du midi sont servis rapidement ; les autres plats nécessitent plus de 15 minutes de préparation.",
    l0: "Soupe du jour",
    l1: "Lunch rosu katsu plate",
    l1d: "Avec chou — soupe miso + riz (G : 20 $ · soupe udon : M 18 $ / G 21 $)",
    l2: "Lunch rosu katsu don",
    l2d: "Avec omelette — soupe miso (G : 19 $)",
    l3: "Lunch rosu curry don",
    l3d: "Avec œuf sous-vide — soupe miso (G : 19 $)",
    l4: "Lunch rosu curry udon",
    l4d: "Avec œuf sous-vide — soupe miso (G : 20 $)",
    l5: "Lunch Sake don",
    l5d: "Saumon 130 g (G 180 g : 27 $)",
    l6: "Lunch hoshi tempura udon",
    l6d: "2 crevettes, 1 pétoncle, 2 légumes, guacamole, ikura (G : 24 $, +1 crevette +1 pétoncle)",
    l7: "Lunch Ten don",
    l7d: "3 crevettes, 1 pétoncle, 2 légumes, 1 œuf (G : 23 $, +1 crevette +1 pétoncle)",
    l8: "Ebi Soup Udon",
    l8d: "2 crevettes, 1 pétoncle, 1 champignon shiitake (G : 21 $, +1 crevette +1 pétoncle)",
    l9: "Rosu katsu sando",
    l9d: "Sandwich katsu de longe de porc (+ coleslaw : 18 $)",
    cat_extra: "Extras",
    x1: "Sauce onsen tamago",
    x2: "Sauce curry",
    x3: "Riz",
    x4: "Nouilles udon",
    x5: "Soupe udon simple",
    x6: "Hire katsu (1 pc)",
    x7: "Rosu katsu (1 pc)",
    x8: "Menchi katsu (1 pc)",
    x9: "Morue katsu (1 pc)",
    x10: "Pétoncle katsu (1 pc)",
    x11: "Œuf sous-vide (1 pc)",
    cat_bev: "Boissons",
    v1: "Boissons gazeuses",
    v1d: "Coke, Coke Zéro, Sprite, Brisk",
    v2: "Thé vert",
    v3: "Eau pétillante Montellier 355 ml",
    v4: "Bière au gingembre 200 ml",
    v5: "Eau ESKA 500 ml",
    v6: "Oyster Bay Pinot Noir (verre 150 ml)",
    v6d: "Bouteille 750 ml : 56 $",
    v7: "Oyster Bay Chardonnay (verre 150 ml)",
    v7d: "Bouteille 750 ml : 52 $",
    v8: "Jameson Triple Triple Highball",
    v9: "Ginger Beer Highball",
    v10: "Thé Noir Highball",
    v11: "Saké Shichiken Junmai Ginjo 300 ml",
    v12: "Bière Sapporo 500 ml",
    v13: "Bière Blanche de Chambly 473 ml",
    menu_note: "* Menu et prix à titre indicatif — sujets à changement.",
    gallery_title: "Galerie",
    about_title: "À propos",
    about_p1: "<strong>Hoshi</strong> (星, « étoile » en japonais) est un restaurant japonais situé au cœur du Quartier chinois de Montréal.",
    about_p2: "Chaque plat est préparé à la minute, avec le soin et le respect propres à la cuisine japonaise : <em>omotenashi</em>, l'hospitalité qui vient du cœur.",
    hours_title: "Horaires",
    h_mon: "Lundi",
    h_tuefri: "Mardi – Vendredi",
    h_sat: "Samedi",
    h_sun: "Dimanche",
    h_closed: "Fermé",
    hours_note: "* Horaires à confirmer — consultez notre Instagram.",
    contact_title: "Contact",
    c_addr_label: "Adresse :",
    c_area: "Quartier chinois / Chinatown — Montréal",
    order_sect: "Commande Take-out",
    order_sect_intro: "Vérifiez votre commande, puis passez au paiement.",
    order_title: "Votre commande 🥡",
    order_subtotal: "Sous-total :",
    pay_title: "Paiement",
    pay_pickup: "Payer au ramassage (comptant ou carte)",
    pay_online: "Paiement en ligne — bientôt disponible",
    mail_pay: "Paiement",
    order_hint: "Ajoutez des plats depuis le menu avec le bouton « + ».",
    order_total: "Total :",
    order_time_label: "Heure de ramassage :",
    order_btn: "Confirmer la commande",
    order_note: "* Sans livraison — venez chercher votre commande au restaurant.",
    order_empty: "Votre panier est vide.",
    order_missing: "Veuillez remplir votre nom, téléphone et l'heure de ramassage.",
    ph_name: "Votre nom",
    ph_phone: "Téléphone",
    form_ok: (n) => `Merci, ${n} ! Votre courriel de commande est prêt — appuyez sur « Envoyer » dans votre messagerie. 🌟`,
    mail_subject: "Commande à emporter — Hoshi",
    mail_pickup: "Heure de ramassage",
    mail_name: "Nom",
    mail_phone: "Téléphone",
    footer_txt: "© 2026 Hoshi — Restaurant japonais, Montréal. Tous droits réservés."
  },
  en: {
    nav_menu: "Menu",
    nav_midi: "Lunch",
    nav_about: "About",
    nav_hours: "Hours",
    nav_contact: "Contact",
    nav_takeout: "Take-out",
    hero_sub: "Japanese restaurant in the heart of Montreal's Chinatown.",
    hero_btn_menu: "View menu",
    menu_title: "Our Menu",
    menu_intro: "Made to order with fresh ingredients.",
    cat_app: "Appetizers",
    e1: "Menchi Katsu (2 pcs)",
    e1d: "Breaded pork meatball cutlet — 3 pcs: $13",
    e2: "Salmon tartare",
    e3: "Salmon flambé with tare",
    e4: "Cabbage salad",
    e5: "Coleslaw",
    cat_ton: "Mains — Tonkatsu",
    k1: "Rosu katsu plate",
    k1d: "Pork loin katsu with cabbage — miso soup + rice (udon soup: $22)",
    k2: "Hire katsu plate",
    k2d: "Pork fillet katsu with cabbage — miso soup + rice (udon soup: $24)",
    k3: "Rosu & Hire katsu plate",
    k3d: "With cabbage — miso soup + rice (udon soup: $25)",
    k4: "Katsu Don",
    k4d: "Pork loin + omelette — miso soup included",
    cat_sando: "Katsu Sando",
    ks1: "Katsu Sando (3 pieces)",
    ks2: "Katsu Sando with coleslaw",
    cat_curry: "Curry Tonkatsu",
    curry_note: "With sous-vide egg — miso soup included",
    c1: "Rosu Katsu Curry Don",
    c2: "Hire Katsu Curry Don (3 pcs)",
    c3: "Rosu & Hire Katsu Curry Don",
    c4: "Curry udon with Rosu Katsu",
    c5: "Curry udon with Hire Katsu (3 pcs)",
    c6: "Curry udon with Rosu & Hire Katsu",
    cat_sea: "Seafood",
    f1: "Sake Don",
    f1d: "Rice bowl topped with fresh salmon — miso soup included",
    f2: "Cod Katsu",
    f2d: "With tartar sauce and cabbage — miso soup + rice (udon soup: $23)",
    f3: "Udon Hoshi Katsu",
    f3d: "Cod katsu, scallop katsu, guacamole, ikura, sous-vide egg — miso soup",
    cat_ham: "Hambāgu — Japanese Hamburger Steak",
    ham_note: "Made with AAA Canadian beef — 130 g / 2 pcs. Extra hamburg steak (1 pc): +$7",
    h1: "Teppan hamburger steak, hayashi sauce",
    h1d: "Homemade sauce, sous-vide egg and coleslaw — miso soup + rice (udon: $25)",
    h2: "Teppan hamburger steak, hayashi + cheese",
    h2d: "Topped with cheese — miso soup + rice (udon: $27)",
    h3: "Teppan hamburger steak with curry",
    h3d: "Added curry sauce — miso soup + rice (udon: $26)",
    cat_lunch: "Lunch Menu",
    lunch_note: "Served 12:00–2:00 pm — M (medium) / L (large) prices in brackets",
    lunch_note2: "Lunch items are served quickly; other dishes take more than 15 minutes to prepare.",
    l0: "Soup of the day",
    l1: "Lunch rosu katsu plate",
    l1d: "With cabbage — miso soup + rice (L: $20 · udon soup: M $18 / L $21)",
    l2: "Lunch rosu katsu don",
    l2d: "With omelette — miso soup (L: $19)",
    l3: "Lunch rosu curry don",
    l3d: "With sous-vide egg — miso soup (L: $19)",
    l4: "Lunch rosu curry udon",
    l4d: "With sous-vide egg — miso soup (L: $20)",
    l5: "Lunch Sake don",
    l5d: "Salmon 130 g (L 180 g: $27)",
    l6: "Lunch hoshi tempura udon",
    l6d: "2 shrimps, 1 scallop, 2 veggies, guacamole, ikura (L: $24, +1 shrimp +1 scallop)",
    l7: "Lunch Ten don",
    l7d: "3 shrimps, 1 scallop, 2 veggies, 1 egg (L: $23, +1 shrimp +1 scallop)",
    l8: "Ebi Soup Udon",
    l8d: "2 shrimps, 1 scallop, 1 shiitake mushroom (L: $21, +1 shrimp +1 scallop)",
    l9: "Rosu katsu sando",
    l9d: "Pork loin katsu sandwich (+ coleslaw: $18)",
    cat_extra: "Extras",
    x1: "Onsen tamago sauce",
    x2: "Curry sauce",
    x3: "Rice",
    x4: "Udon noodles",
    x5: "Plain udon soup",
    x6: "Hire katsu (1 pc)",
    x7: "Rosu katsu (1 pc)",
    x8: "Menchi katsu (1 pc)",
    x9: "Cod katsu (1 pc)",
    x10: "Scallop katsu (1 pc)",
    x11: "Sous-vide egg (1 pc)",
    cat_bev: "Drinks",
    v1: "Soft drinks",
    v1d: "Coke, Coke Zero, Sprite, Brisk",
    v2: "Green tea",
    v3: "Montellier sparkling water 355 ml",
    v4: "Ginger beer 200 ml",
    v5: "ESKA water 500 ml",
    v6: "Oyster Bay Pinot Noir (glass 150 ml)",
    v6d: "750 ml bottle: $56",
    v7: "Oyster Bay Chardonnay (glass 150 ml)",
    v7d: "750 ml bottle: $52",
    v8: "Jameson Triple Triple Highball",
    v9: "Ginger Beer Highball",
    v10: "Black Tea Highball",
    v11: "Shichiken Junmai Ginjo sake 300 ml",
    v12: "Sapporo beer 500 ml",
    v13: "Blanche de Chambly beer 473 ml",
    menu_note: "* Menu and prices shown as examples — subject to change.",
    gallery_title: "Gallery",
    about_title: "About",
    about_p1: "<strong>Hoshi</strong> (星, “star” in Japanese) is a Japanese restaurant in the heart of Montreal's Chinatown.",
    about_p2: "Every dish is made to order, with the care and respect of Japanese cuisine: <em>omotenashi</em>, hospitality from the heart.",
    hours_title: "Hours",
    h_mon: "Monday",
    h_tuefri: "Tuesday – Friday",
    h_sat: "Saturday",
    h_sun: "Sunday",
    h_closed: "Closed",
    hours_note: "* Hours to be confirmed — check our Instagram.",
    contact_title: "Contact",
    c_addr_label: "Address:",
    c_area: "Chinatown — Montreal",
    order_sect: "Take-out Order",
    order_sect_intro: "Review your order, then proceed to payment.",
    order_title: "Your order 🥡",
    order_subtotal: "Subtotal:",
    pay_title: "Payment",
    pay_pickup: "Pay at pickup (cash or card)",
    pay_online: "Online payment — coming soon",
    mail_pay: "Payment",
    order_hint: "Add dishes from the menu using the “+” button.",
    order_total: "Total:",
    order_time_label: "Pickup time:",
    order_btn: "Confirm order",
    order_note: "* No delivery — pick up your order at the restaurant.",
    order_empty: "Your cart is empty.",
    order_missing: "Please fill in your name, phone and pickup time.",
    ph_name: "Your name",
    ph_phone: "Phone",
    form_ok: (n) => `Thank you, ${n}! Your order email is ready — press “Send” in your mail app. 🌟`,
    mail_subject: "Take-out order — Hoshi",
    mail_pickup: "Pickup time",
    mail_name: "Name",
    mail_phone: "Phone",
    footer_txt: "© 2026 Hoshi — Japanese restaurant, Montreal. All rights reserved."
  }
};

let currentLang = "fr";

function setLang(lang) {
  currentLang = lang;
  const dict = i18n[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.getElementById("btnFr").classList.toggle("active", lang === "fr");
  document.getElementById("btnEn").classList.toggle("active", lang === "en");

  renderMenus(lang);
  if (typeof renderCart === "function" && cartList) renderCart();
}

document.getElementById("btnFr").addEventListener("click", () => setLang("fr"));
document.getElementById("btnEn").addEventListener("click", () => setLang("en"));

// ---- Menu mobile (hamburger) ----
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// ---- Commande à emporter / Take-out ----
// ⚠️ CAMBIA ESTE CORREO por el correo real del restaurante:
const ORDER_EMAIL = "hoshirestaurantmtl@gmail.com";

const cart = {}; // { itemKey: { name, price, qty } }
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const formMsg = document.getElementById("formMsg");

// ---- Rendu du menu depuis MENU_DATA ----
const ITEM_INDEX = {};
MENU_DATA.menus.forEach(m => m.sections.forEach(s => s.items.forEach(it => ITEM_INDEX[it.id] = it)));

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCap");
document.getElementById("lightboxClose").addEventListener("click", () => lightbox.hidden = true);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.hidden = true; });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lightbox.hidden = true; });

function fmtPrice(p) {
  return (Number.isInteger(p) ? p : p.toFixed(2).replace(".", ",")) + " $";
}

function buildSection(sec, lang) {
  const div = document.createElement("div");
  div.className = "menu-section";
  let inner = `<h3 class="menu-cat"><span class="cat-kanji">${sec.kanji || ""}</span> <span>${sec.title[lang]}</span></h3>`;
  if (sec.note) inner += `<p class="mi-desc">${sec.note[lang]}</p>`;
  inner += '<ul class="menu-list"></ul>';
  div.innerHTML = inner;
  const ul = div.querySelector("ul");
  sec.items.forEach(it => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="mi-head"><span>${it.name[lang]}</span><span class="dots"></span><span class="price">${fmtPrice(it.price)}</span></div>` +
      (it.desc ? `<p class="mi-desc">${it.desc[lang]}</p>` : "");
    const actions = document.createElement("span");
    actions.className = "item-actions";
    if (it.photo) {
      const pbtn = document.createElement("button");
      pbtn.className = "photo-btn"; pbtn.type = "button"; pbtn.textContent = "📷";
      pbtn.setAttribute("aria-label", "Photo");
      pbtn.addEventListener("click", () => {
        lightboxImg.src = it.photo;
        lightboxCap.textContent = it.name[currentLang];
        lightbox.hidden = false;
      });
      actions.appendChild(pbtn);
    }
    const btn = document.createElement("button");
    btn.className = "add-btn"; btn.type = "button"; btn.textContent = "+";
    btn.setAttribute("aria-label", "Ajouter / Add");
    btn.addEventListener("click", () => {
      if (!cart[it.id]) cart[it.id] = { key: it.id, price: it.price, qty: 0 };
      cart[it.id].qty++;
      renderCart();
      document.getElementById("cart").classList.add("pulse");
      setTimeout(() => document.getElementById("cart").classList.remove("pulse"), 400);
    });
    actions.appendChild(btn);
    li.appendChild(actions);
    ul.appendChild(li);
  });
  return div;
}

function renderMenus(lang) {
  const menuBook = document.getElementById("menuBook");
  const lunchBook = document.getElementById("lunchBook");
  const extra = document.getElementById("extraMenus");
  menuBook.innerHTML = ""; lunchBook.innerHTML = ""; extra.innerHTML = "";

  MENU_DATA.menus.forEach((m, i) => {
    if (m.id === "principal") {
      m.sections.forEach(sec => menuBook.appendChild(buildSection(sec, lang)));
    } else if (m.id === "midi") {
      document.getElementById("lunchNote").textContent = m.note ? m.note[lang] : "";
      document.getElementById("lunchFootnote").textContent = m.footnote ? m.footnote[lang] : "";
      m.sections.forEach(sec => lunchBook.appendChild(buildSection(sec, lang)));
    } else {
      // menus supplémentaires créés depuis le panneau admin
      const section = document.createElement("section");
      section.className = "section" + (i % 2 ? " section-alt" : "");
      section.id = "menu-" + m.id;
      section.innerHTML = `<h2><span class="jp">お品書き</span> <span>${m.title[lang]}</span></h2>` +
        (m.note ? `<p class="section-intro">${m.note[lang]}</p>` : "");
      const book = document.createElement("div");
      book.className = "menu-book lunch-book";
      m.sections.forEach(sec => book.appendChild(buildSection(sec, lang)));
      section.appendChild(book);
      if (m.footnote) {
        const fn = document.createElement("p");
        fn.className = "menu-note";
        fn.textContent = m.footnote[lang];
        section.appendChild(fn);
      }
      extra.appendChild(section);
    }
  });
}

function itemName(key) {
  const it = ITEM_INDEX[key];
  return it ? it.name[currentLang] : key;
}

function renderCart() {
  const dict = i18n[currentLang];
  cartList.innerHTML = "";
  const items = Object.values(cart).filter(it => it.qty > 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  const badge = document.getElementById("cartCount");
  badge.hidden = count === 0;
  badge.textContent = count;
  if (items.length === 0) {
    cartList.innerHTML = `<li class="cart-empty">${dict.order_empty}</li>`;
    ["cartSubtotal","cartTps","cartTvq"].forEach(id => document.getElementById(id).textContent = "0 $");
    cartTotal.textContent = "0 $";
    return;
  }
  let subtotal = 0;
  items.forEach(it => {
    subtotal += it.price * it.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <button class="qty-btn" data-k="${it.key}" data-d="-1">−</button>
      <span class="qty">${it.qty}×</span>
      <span class="cart-name">${itemName(it.key)}</span>
      <span class="cart-price">${(it.price * it.qty).toFixed(2)} $</span>`;
    cartList.appendChild(li);
  });
  const tps = subtotal * 0.05;
  const tvq = subtotal * 0.09975;
  document.getElementById("cartSubtotal").textContent = subtotal.toFixed(2) + " $";
  document.getElementById("cartTps").textContent = tps.toFixed(2) + " $";
  document.getElementById("cartTvq").textContent = tvq.toFixed(2) + " $";
  cartTotal.textContent = (subtotal + tps + tvq).toFixed(2) + " $";
  cartList.querySelectorAll(".qty-btn").forEach(b => {
    b.addEventListener("click", () => {
      const k = b.getAttribute("data-k");
      cart[k].qty--;
      if (cart[k].qty <= 0) delete cart[k];
      renderCart();
    });
  });
}

document.getElementById("sendOrder").addEventListener("click", () => {
  const dict = i18n[currentLang];
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const time = document.getElementById("orderTime").value;
  const items = Object.values(cart).filter(it => it.qty > 0);

  if (items.length === 0) { formMsg.textContent = dict.order_empty; return; }
  if (!name || !phone || !time) { formMsg.textContent = dict.order_missing; return; }

  let subtotal = 0;
  const lines = items.map(it => {
    subtotal += it.price * it.qty;
    return `${it.qty} x ${itemName(it.key)} — ${(it.price * it.qty).toFixed(2)} $`;
  });
  const tps = subtotal * 0.05;
  const tvq = subtotal * 0.09975;
  const body =
    `${dict.mail_name}: ${name}\n` +
    `${dict.mail_phone}: ${phone}\n` +
    `${dict.mail_pickup}: ${time}\n` +
    `${dict.mail_pay}: ${dict.pay_pickup}\n\n` +
    lines.join("\n") +
    `\n\n${dict.order_subtotal} ${subtotal.toFixed(2)} $` +
    `\nTPS (5 %): ${tps.toFixed(2)} $` +
    `\nTVQ (9,975 %): ${tvq.toFixed(2)} $` +
    `\nTotal: ${(subtotal + tps + tvq).toFixed(2)} $`;

  window.location.href =
    `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(dict.mail_subject)}&body=${encodeURIComponent(body)}`;
  formMsg.textContent = dict.form_ok(name);
});

renderMenus(currentLang);
renderCart();
