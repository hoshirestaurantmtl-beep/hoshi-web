// ===== Hoshi 星 — Interactivité / Interactivity =====

// ⚙️ Take-out : mettre à true pour réactiver la commande en ligne
const TAKEOUT_ENABLED = true;

// ⚙️ Photos : mettre à true quand les vraies photos des plats seront prêtes
const PHOTOS_ENABLED = false;

// ---- Traductions FR / EN ----
const i18n = {
  fr: {
    nav_menu: "Menu",
    nav_midi: "Midi",
    nav_about: "À propos",
    nav_hours: "Horaires",
    nav_contact: "Contact",
    nav_takeout: "À emporter",
    announce_txt: "🏮 En raison de notre espace limité, nous n'acceptons pas de réservations — premier arrivé, premier servi !",
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
    rev_title: "Avis de nos clients",
    rev_sub: "sur Google — plus de 600 avis",
    rev_link: "Lire tous les avis sur Google →",
    about_title: "À propos",
    about_p1: "<strong>Hoshi</strong> (星, « étoile » en japonais) est un restaurant japonais situé au cœur du Quartier chinois de Montréal.",
    about_p2: "Notre cuisine met à l'honneur des plats japonais préparés à la minute, à partir d'ingrédients soigneusement sélectionnés. Chaque assiette est préparée avec attention, dans le respect des saveurs et du savoir-faire japonais.",
    about_p3: "Chez Hoshi, nous souhaitons offrir bien plus qu'un repas : un moment chaleureux et authentique, inspiré par l'<strong>omotenashi</strong>, l'art japonais de recevoir avec attention et sincérité.",
    hours_title: "Horaires",
    h_monwed: "Lundi – Mercredi",
    h_thu: "Jeudi",
    h_fri: "Vendredi",
    h_sat: "Samedi",
    h_sun: "Dimanche",
    contact_title: "Contact",
    c_addr_label: "Adresse :",
    c_area: "Quartier chinois / Chinatown — Montréal",
    c_maps: "Voir sur Google Maps",
    order_sect: "Commande Take-out",
    order_sect_intro: "Vérifiez votre commande, puis passez au paiement.",
    order_title: "Votre commande 🥡",
    order_subtotal: "Sous-total :",
    pay_title: "Paiement",
    pay_online_only: "💳 Paiement sécurisé en ligne — votre commande est confirmée une fois payée.",
    pay_wait: "Redirection vers le paiement sécurisé…",
    pay_err: "Erreur de paiement — réessayez ou choisissez « payer au ramassage ».",
    mail_pay: "Paiement",
    order_hint: "Ajoutez des plats depuis le menu avec le bouton « + ».",
    order_total: "Total :",
    order_time_label: "Heure de ramassage :",
    order_btn: "Payer et confirmer 💳",
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
    announce_txt: "🏮 Due to our limited space, we do not take reservations — first come, first served!",
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
    rev_title: "What our guests say",
    rev_sub: "on Google — 600+ reviews",
    rev_link: "Read all reviews on Google →",
    about_title: "About",
    about_p1: "<strong>Hoshi</strong> (星, “star” in Japanese) is a Japanese restaurant in the heart of Montreal's Chinatown.",
    about_p2: "Our kitchen celebrates Japanese dishes made to order, from carefully selected ingredients. Every plate is prepared with care, honouring Japanese flavours and craftsmanship.",
    about_p3: "At Hoshi, we want to offer much more than a meal: a warm, authentic moment inspired by <strong>omotenashi</strong>, the Japanese art of welcoming with attention and sincerity.",
    hours_title: "Hours",
    h_monwed: "Monday – Wednesday",
    h_thu: "Thursday",
    h_fri: "Friday",
    h_sat: "Saturday",
    h_sun: "Sunday",
    contact_title: "Contact",
    c_addr_label: "Address:",
    c_area: "Chinatown — Montreal",
    c_maps: "View on Google Maps",
    order_sect: "Take-out Order",
    order_sect_intro: "Review your order, then proceed to payment.",
    order_title: "Your order 🥡",
    order_subtotal: "Subtotal:",
    pay_title: "Payment",
    pay_online_only: "💳 Secure online payment — your order is confirmed once paid.",
    pay_wait: "Redirecting to secure payment…",
    pay_err: "Payment error — try again or choose “pay at pickup”.",
    mail_pay: "Payment",
    order_hint: "Add dishes from the menu using the “+” button.",
    order_total: "Total:",
    order_time_label: "Pickup time:",
    order_btn: "Pay & confirm 💳",
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
  },
  ja: {
    nav_menu: "メニュー",
    nav_midi: "ランチ",
    nav_about: "私たちについて",
    nav_hours: "営業時間",
    nav_contact: "お問い合わせ",
    nav_takeout: "テイクアウト",
    announce_txt: "🏮 店内が狭いため、ご予約は承っておりません — 先着順でのご案内となります。",
    hero_sub: "モントリオール・チャイナタウンの中心にある日本食レストラン。",
    hero_btn_menu: "メニューを見る",
    menu_title: "お品書き",
    menu_intro: "新鮮な食材で、一品ずつお作りします。",
    cat_lunch: "ランチメニュー",
    menu_note: "* メニューと価格は変更される場合があります。",
    gallery_title: "ギャラリー",
    rev_title: "お客様の声",
    rev_sub: "Google — 600件以上のレビュー",
    rev_link: "Googleですべてのレビューを見る →",
    about_title: "私たちについて",
    about_p1: "<strong>Hoshi</strong>（星）は、モントリオールのチャイナタウンの中心にある日本食レストランです。",
    about_p2: "厳選した食材を使い、注文を受けてから一品ずつ丁寧にお作りする日本料理をご提供しています。日本の味と技を大切に、心を込めて仕上げます。",
    about_p3: "Hoshiがお届けしたいのは、食事だけではありません。<strong>おもてなし</strong>の心 — 真心を込めてお迎えする日本の文化 — に基づいた、温かく本物のひとときです。",
    hours_title: "営業時間",
    h_monwed: "月曜〜水曜",
    h_thu: "木曜",
    h_fri: "金曜",
    h_sat: "土曜",
    h_sun: "日曜",
    contact_title: "お問い合わせ",
    c_addr_label: "住所：",
    c_area: "チャイナタウン — モントリオール",
    c_maps: "Google マップで見る",
    order_sect: "テイクアウト注文",
    order_sect_intro: "ご注文内容を確認し、お支払いへお進みください。",
    order_title: "ご注文 🥡",
    order_subtotal: "小計：",
    pay_title: "お支払い",
    pay_online_only: "💳 安全なオンライン決済 — お支払い完了後に注文が確定します。",
    pay_wait: "安全な決済ページへ移動しています…",
    pay_err: "決済エラー — もう一度お試しいただくか、受け取り時支払いをお選びください。",
    mail_pay: "お支払い",
    order_hint: "メニューの「+」ボタンで料理を追加してください。",
    order_total: "合計：",
    order_time_label: "受け取り時間：",
    order_btn: "支払って注文を確定 💳",
    order_note: "* 配達は行っておりません — 店舗でお受け取りください。",
    order_empty: "カートは空です。",
    order_missing: "お名前・電話番号・受け取り時間をご記入ください。",
    ph_name: "お名前",
    ph_phone: "電話番号",
    form_ok: (n) => `${n}様、ありがとうございます！メールアプリで「送信」を押してください。🌟`,
    mail_subject: "テイクアウト注文 — Hoshi",
    mail_pickup: "受け取り時間",
    mail_name: "お名前",
    mail_phone: "電話番号",
    footer_txt: "© 2026 Hoshi — 日本食レストラン、モントリオール。"
  },
  ko: {
    nav_menu: "메뉴",
    nav_midi: "런치",
    nav_about: "소개",
    nav_hours: "영업시간",
    nav_contact: "연락처",
    nav_takeout: "테이크아웃",
    announce_txt: "🏮 매장이 협소하여 예약을 받지 않습니다 — 선착순으로 안내해 드립니다.",
    hero_sub: "몬트리올 차이나타운 중심에 있는 일식 레스토랑.",
    hero_btn_menu: "메뉴 보기",
    menu_title: "메뉴",
    menu_intro: "신선한 재료로 주문 즉시 조리합니다.",
    cat_lunch: "런치 메뉴",
    menu_note: "* 메뉴와 가격은 변경될 수 있습니다.",
    gallery_title: "갤러리",
    rev_title: "고객 후기",
    rev_sub: "Google — 600개 이상의 리뷰",
    rev_link: "Google에서 모든 리뷰 보기 →",
    about_title: "소개",
    about_p1: "<strong>Hoshi</strong>(星, 일본어로 '별')는 몬트리올 차이나타운 중심에 있는 일식 레스토랑입니다.",
    about_p2: "엄선한 재료로 주문 즉시 조리하는 일본 요리를 선보입니다. 일본의 맛과 장인 정신을 존중하며, 한 접시 한 접시 정성껏 준비합니다.",
    about_p3: "Hoshi는 단순한 식사 그 이상을 드리고자 합니다. 정성과 진심으로 손님을 맞이하는 일본의 환대 문화, <strong>오모테나시</strong>에서 영감을 받은 따뜻하고 진정성 있는 시간입니다.",
    hours_title: "영업시간",
    h_monwed: "월요일–수요일",
    h_thu: "목요일",
    h_fri: "금요일",
    h_sat: "토요일",
    h_sun: "일요일",
    contact_title: "연락처",
    c_addr_label: "주소:",
    c_area: "차이나타운 — 몬트리올",
    c_maps: "Google 지도에서 보기",
    order_sect: "테이크아웃 주문",
    order_sect_intro: "주문 내용을 확인한 후 결제로 진행하세요.",
    order_title: "주문 내역 🥡",
    order_subtotal: "소계:",
    pay_title: "결제",
    pay_online_only: "💳 안전한 온라인 결제 — 결제 완료 후 주문이 확정됩니다.",
    pay_wait: "안전한 결제 페이지로 이동 중…",
    pay_err: "결제 오류 — 다시 시도하거나 픽업 시 결제를 선택해 주세요.",
    mail_pay: "결제",
    order_hint: "메뉴에서 「+」 버튼으로 요리를 추가하세요.",
    order_total: "합계:",
    order_time_label: "픽업 시간:",
    order_btn: "결제 후 주문 확정 💳",
    order_note: "* 배달은 하지 않습니다 — 매장에서 픽업해 주세요.",
    order_empty: "장바구니가 비어 있습니다.",
    order_missing: "이름, 전화번호, 픽업 시간을 입력해 주세요.",
    ph_name: "이름",
    ph_phone: "전화번호",
    form_ok: (n) => `${n}님, 감사합니다! 메일 앱에서 '보내기'를 눌러 주세요. 🌟`,
    mail_subject: "테이크아웃 주문 — Hoshi",
    mail_pickup: "픽업 시간",
    mail_name: "이름",
    mail_phone: "전화번호",
    footer_txt: "© 2026 Hoshi — 일식 레스토랑, 몬트리올."
  }
};

let currentLang = "fr";

function dictFor(lang) {
  return Object.assign({}, i18n.en, i18n[lang] || {});
}

function setLang(lang) {
  currentLang = lang;
  const dict = dictFor(lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll("[data-setlang]").forEach(b =>
    b.classList.toggle("active", b.getAttribute("data-setlang") === lang));

  renderMenus(lang);
  if (typeof renderCart === "function" && cartList) renderCart();
}

document.querySelectorAll("[data-setlang]").forEach(b =>
  b.addEventListener("click", () => setLang(b.getAttribute("data-setlang"))));

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
  let inner = `<h3 class="menu-cat"><span class="cat-kanji">${sec.kanji || ""}</span> <span>${sec.title[lang] || sec.title.en}</span></h3>`;
  if (sec.note) inner += `<p class="mi-desc">${sec.note[lang] || sec.note.en}</p>`;
  inner += '<ul class="menu-list"></ul>';
  div.innerHTML = inner;
  const ul = div.querySelector("ul");
  sec.items.forEach(it => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="mi-head"><span>${it.name[lang] || it.name.en || it.name.fr}</span><span class="dots"></span><span class="price">${fmtPrice(it.price)}</span></div>` +
      (it.desc ? `<p class="mi-desc">${it.desc[lang] || it.desc.en || it.desc.fr || ""}</p>` : "");
    const actions = document.createElement("span");
    actions.className = "item-actions";
    if (PHOTOS_ENABLED && it.photo) {
      const pbtn = document.createElement("button");
      pbtn.className = "photo-btn"; pbtn.type = "button"; pbtn.textContent = "📷";
      pbtn.setAttribute("aria-label", "Photo");
      pbtn.addEventListener("click", () => {
        lightboxImg.src = it.photo;
        lightboxCap.textContent = it.name[currentLang] || it.name.en || it.name.fr;
        lightbox.hidden = false;
      });
      actions.appendChild(pbtn);
    }
    if (TAKEOUT_ENABLED) {
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
    }
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
      document.getElementById("lunchNote").textContent = m.note ? (m.note[lang] || m.note.en) : "";
      document.getElementById("lunchFootnote").textContent = m.footnote ? (m.footnote[lang] || m.footnote.en) : "";
      m.sections.forEach(sec => lunchBook.appendChild(buildSection(sec, lang)));
    } else {
      // menus supplémentaires créés depuis le panneau admin
      const section = document.createElement("section");
      section.className = "section" + (i % 2 ? " section-alt" : "");
      section.id = "menu-" + m.id;
      section.innerHTML = `<h2><span class="jp">お品書き</span> <span>${m.title[lang] || m.title.en}</span></h2>` +
        (m.note ? `<p class="section-intro">${m.note[lang]}</p>` : "");
      const book = document.createElement("div");
      book.className = "menu-book lunch-book";
      m.sections.forEach(sec => book.appendChild(buildSection(sec, lang)));
      section.appendChild(book);
      if (m.footnote) {
        const fn = document.createElement("p");
        fn.className = "menu-note";
        fn.textContent = m.footnote[lang] || m.footnote.en;
        section.appendChild(fn);
      }
      extra.appendChild(section);
    }
  });
}

function itemName(key) {
  const it = ITEM_INDEX[key];
  return it ? (it.name[currentLang] || it.name.en || it.name.fr) : key;
}

function renderCart() {
  const dict = dictFor(currentLang);
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

document.getElementById("sendOrder").addEventListener("click", async () => {
  const dict = dictFor(currentLang);
  const name = document.getElementById("orderName").value.trim();
  const phone = document.getElementById("orderPhone").value.trim();
  const time = document.getElementById("orderTime").value;
  const items = Object.values(cart).filter(it => it.qty > 0);

  if (items.length === 0) { formMsg.textContent = dict.order_empty; return; }
  if (!name || !phone || !time) { formMsg.textContent = dict.order_missing; return; }

  formMsg.textContent = dict.pay_wait;
  const btn = document.getElementById("sendOrder");
  btn.disabled = true;
  try {
    const resp = await fetch("/api/create-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map(it => ({ id: it.key, qty: it.qty })),
        name, phone, time, lang: currentLang
      })
    });
    const data = await resp.json();
    if (resp.ok && data.url) { window.location.href = data.url; return; }
    formMsg.textContent = dict.pay_err;
  } catch (e) {
    formMsg.textContent = dict.pay_err;
  } finally {
    btn.disabled = false;
  }
});

renderMenus(currentLang);
renderCart();
