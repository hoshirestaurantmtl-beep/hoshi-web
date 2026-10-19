// ===== Hoshi — Menu de TEST (protégé par le PIN commandes) =====
// Visible seulement sur hoshimtl.ca/serveurs ou /test (après le PIN), jamais sur le site public.
//
// « menu »  : menu complet à tester (remplace les menus de menu-data.js ; réglages / horaires du site conservés).
//             null = le menu public (menu-data.js) est affiché tel quel, avec ses notes 🔒 staffNote.
// « items » : petites modifications par plat { "<id>": { champs } } appliquées par-dessus (null supprime un champ).
//
// État : vide — le nouveau menu a été publié le 19 octobre 2026.
module.exports = {
  menu: null,
  items: {}
};
