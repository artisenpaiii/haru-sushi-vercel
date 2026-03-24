import type {
  Allergen,
  MenuItem,
  LunchItem,
  Combo,
  MetaDataContact,
  MetaDataLocation,
  MetaDataOpeningHours,
} from "./types";

export type { Allergen, MenuItem, LunchItem, Combo };

// =========================
// META
// =========================

export const metaLocation: MetaDataLocation = {
  key: "location",
  address: "Köpmangatan 5",
  zipcode: "572 30",
  city: "Oskarshamn",
  country: "Sverige",
};

export const metaContact: MetaDataContact = {
  key: "contact",
  phone: "0760052045",
  email: "kontakt@harusushi.se",
};

export const metaOpeningHours: MetaDataOpeningHours = {
  key: "openingHours",
  entries: [
    { label: "Måndag", from: "11:00", to: "20:00" },
    { label: "Tisdag", closed: true },
    { label: "Onsdag-Söndag", from: "11:00", to: "20:00" },
    { label: "Lunch Vardagar", from: "11:00", to: "14:00" },
  ],
};

// =========================
// CATEGORY ORDER (UI)
// =========================

export const categoryOrder = [
  "Förrätter",
  "Nigiri",
  "Sashimi",
  "Maki",
  "Friterad Maki",
  "Sushiburrito",
  "Mixad Sushi",
  "Varmrätter",
  "Bentobox",
  "Poké Bowl",
  "Tillbehör",
];

// =========================
// MENU ITEMS
// =========================

export const menuItems: MenuItem[] = [
  // 🥢 FÖRRÄTTER
  { id: "starter_temaki", label: "Temaki", description: "Lax / Tonfisk / Räka", category: "Förrätter", allergens: ["Fisk", "Skaldjur"], price: "65 kr" },
  { id: "starter_hosomaki", label: "Hosomaki 6 bitar", description: "Lax / Ebitempura / Gurka / Avocado", subDescription: "Vegetarisk*", category: "Förrätter", allergens: ["Fisk", "Skaldjur", "Gluten"], price: "65kr / 55kr*" },
  { id: "starter_spring_chicken", label: "Kycklingvårrulle (4 st)", category: "Förrätter", allergens: ["Gluten"], price: "65 kr" },
  { id: "starter_spring_vegan", label: "Vegansk vårrulle (6 st)", category: "Förrätter", tags: ["Vegansk"], allergens: ["Gluten"], price: "45 kr" },
  { id: "starter_tempura_ebi", label: "Tempura ebi (4 st)", category: "Förrätter", allergens: ["Skaldjur", "Gluten"], price: "65 kr" },
  { id: "starter_gyoza", label: "Friterad nötgyoza (5 st)", category: "Förrätter", allergens: ["Gluten", "Soja"], price: "65 kr" },
  { id: "starter_edamame", label: "Edamamebönor", category: "Förrätter", tags: ["Vegansk"], allergens: ["Soja"], price: "45 kr" },
  { id: "starter_wakame", label: "Wakame", category: "Förrätter", tags: ["Vegansk"], allergens: ["Sesam"], price: "45 kr" },
  { id: "starter_pickled", label: "Harus picklade", category: "Förrätter", tags: ["Vegansk"], price: "45 kr" },
  { id: "starter_rakchips", label: "Räkchips", category: "Förrätter", allergens: ["Skaldjur"], price: "45 kr" },

  // 🍣 NIGIRI (5/10-bitar)
  { id: "nigiri_salmon", label: "Lax", description: "5 / 10 bitar", category: "Nigiri", tags: ["Populär"], allergens: ["Fisk"], price: "85/169 kr" },
  { id: "nigiri_seared_salmon_tuna", label: "Halstrad lax/tonfisk", description: "Teriyakisås, Chillimajo — 5 / 10 bitar", category: "Nigiri", allergens: ["Fisk", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "nigiri_cold_smoked", label: "Kallrökt lax", description: "5 / 10 bitar", category: "Nigiri", allergens: ["Fisk"], price: "89/175 kr" },
  { id: "nigiri_tuna", label: "Tonfisk", description: "5 / 10 bitar", category: "Nigiri", allergens: ["Fisk"], price: "89/175 kr" },
  { id: "nigiri_shrimp", label: "Räka", description: "5 / 10 bitar", category: "Nigiri", allergens: ["Skaldjur"], price: "85/169 kr" },
  { id: "nigiri_seared_shrimp", label: "Halstrad räka", description: "Vitlökssmör, Kewpiemajo — 5 / 10 bitar", category: "Nigiri", allergens: ["Skaldjur", "Mjölk", "Ägg"], price: "89/175 kr" },
  { id: "nigiri_avocado", label: "Avokado", description: "5 / 10 bitar", category: "Nigiri", tags: ["Vegansk"], price: "75/149 kr" },
  { id: "nigiri_tofu", label: "Tofu", description: "5 / 10 bitar", category: "Nigiri", tags: ["Vegansk"], allergens: ["Soja"], price: "75/149 kr" },
  { id: "nigiri_tamago", label: "Tamago (ägg)", description: "5 / 10 bitar", category: "Nigiri", allergens: ["Ägg"], price: "75/149 kr" },
  { id: "nigiri_crabfish", label: "Crabfish", description: "5 / 10 bitar", category: "Nigiri", allergens: ["Fisk", "Gluten"], price: "75/149 kr" },

  // 🐟 SASHIMI
  { id: "sashimi", label: "Sashimi", description: "12 / 20 bitar", category: "Sashimi", allergens: ["Fisk"], price: "159/239 kr" },

  // 🍥 MAKI (5/10-bitar)
  { id: "maki_salmon", label: "Lax", description: "Avokado, gurka, chillimajo, räkchips, sesamfrön", category: "Maki", tags: ["Populär"], allergens: ["Fisk", "Skaldjur", "Ägg", "Sesam"], price: "85/169 kr" },
  { id: "maki_seared", label: "Halstrad lax/tonfisk", description: "Crabfish, avokado, gurka, chilimajo, teriyakisås", category: "Maki", allergens: ["Fisk", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "maki_eman", label: "Emån", description: "Kallrökt lax, avokado, gurka, philadelphiaost, rom", category: "Maki", allergens: ["Fisk", "Mjölk"], price: "85/169 kr" },
  { id: "maki_ebi", label: "Ebi Tempura", description: "Räktempura, avokado, gurka, chillimajo, sesamfrön", category: "Maki", tags: ["Populär"], allergens: ["Skaldjur", "Gluten", "Ägg", "Sesam"], price: "85/169 kr" },
  { id: "maki_california", label: "California", description: "Crabfish, gurka, avokado, kewpiemajo, rom", category: "Maki", allergens: ["Fisk", "Ägg"], price: "85/169 kr" },
  { id: "maki_crab_tempura", label: "Crab Tempura", description: "Tempurafriterad crabfish, avokado, philadelphiaost, kewpiemajo, teriyakisås", category: "Maki", allergens: ["Fisk", "Gluten", "Mjölk", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "maki_teriyaki_chicken", label: "Teriyakikyckling", description: "Avokado, gurka, chillimajo, rostad lök", category: "Maki", allergens: ["Gluten", "Soja", "Ägg"], price: "85/169 kr" },
  { id: "maki_vegan", label: "Vegansk", description: "Tofu, avokado, gurka, rättika, vegansk majonnäs, picklad rödlök", category: "Maki", tags: ["Vegansk"], allergens: ["Soja"], price: "85/169 kr" },
  { id: "maki_haru_special", label: "Haru Special ⭐", description: "Halstrad lax, räktempura, avokado, philadelphiaost, teriyakisås, rom", category: "Maki", tags: ["Signatur", "Populär"], allergens: ["Fisk", "Skaldjur", "Gluten", "Mjölk", "Soja"], price: "89/175 kr" },
  { id: "maki_rainbow", label: "Rainbow", description: "Lax, vannameiräkor, gurka, avokado, kewpiemajo, rom", category: "Maki", allergens: ["Fisk", "Skaldjur", "Ägg"], price: "89/175 kr" },

  // 🍤 FRITERAD MAKI (5/10-bitar)
  { id: "fried_spicy_tuna", label: "Friterad spicy tuna", description: "Avokado, gurka, chillimajo, teriyakisås, rostad lök", category: "Friterad Maki", allergens: ["Fisk", "Gluten", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "fried_salmon", label: "Friterad lax", description: "Avokado, gurka, chillimajo, teriyakisås, rostad lök", category: "Friterad Maki", tags: ["Populär"], allergens: ["Fisk", "Gluten", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "fried_teriyaki_chicken", label: "Friterad teriyakikyckling", description: "Avokado, gurka, chillimajo, rostad lök", category: "Friterad Maki", allergens: ["Gluten", "Ägg", "Soja"], price: "89/175 kr" },
  { id: "fried_yakiniku", label: "Friterad yakiniku", description: "Sojamarinerad entrecôte, avokado, gurka, kewpiemajo, teriyakisås, rostad lök", category: "Friterad Maki", tags: ["Premium"], allergens: ["Gluten", "Ägg", "Soja"], price: "89/175 kr" },

  // 🌯 SUSHIBURRITO
  { id: "burrito_salmon_chicken", label: "Lax / Kyckling", description: "Philadelphiaost, avokado, gurka, chillimajo, teriyakisås", category: "Sushiburrito", tags: ["Populär"], allergens: ["Fisk", "Gluten", "Mjölk", "Ägg", "Soja"], price: "185 kr" },
  { id: "burrito_vegan", label: "Vegansk", description: "Tofu, morot, picklad rättika, avokado, gurka, teriyakisås", category: "Sushiburrito", tags: ["Vegansk"], allergens: ["Soja"], price: "175 kr" },

  // 🍱 MIXAD SUSHI
  { id: "mix_10", label: "10 bitar", description: "5 maki / 5 nigiri", subDescription:'Vegetarisk*', category: "Mixad Sushi", price: "125kr / 115 kr*" },
  { id: "mix_12", label: "12 bitar", description: "6 maki / 6 nigiri",subDescription:'Vegetarisk*', category: "Mixad Sushi", price: "145kr / 135 kr*" },
  { id: "mix_16", label: "16 bitar", description: "8 maki, 7 nigiri, 1 gunkan", subDescription:'Vegetarisk*', category: "Mixad Sushi", tags: ["Populär"], price: "185kr / 169 kr*" },
  { id: "mix_36", label: "36 bitar", description: "15 maki, 13 nigiri, 6 hosomaki, 2 gunkan", subDescription:'Vegetarisk*', category: "Mixad Sushi", price: "399kr / 379kr*" },
  { id: "mix_56", label: "56 bitar", description: "30 maki, 16 nigiri, 6 hosomaki, 4 gunkan", subDescription:'Vegetarisk*', category: "Mixad Sushi", tags: ["Familj"], price: "595kr / 569kr*" },

  // 🍳 VARMRÄTTER
  { id: "hot_panko_chicken", label: "Pankokyckling", description: "Ris, pankofriterad kyckling, sallad, picklade grönsaker, chillimajo, teriyakisås", category: "Varmrätter", allergens: ["Gluten", "Ägg", "Soja"], price: "159 kr" },
  { id: "hot_karaage", label: "Karaagekyckling", description: "Ris, friterad sojamarinerad kyckling, sallad, picklade grönsaker, kewpiemajo", category: "Varmrätter", tags: ["Populär"], allergens: ["Gluten", "Soja", "Ägg"], price: "149 kr" },
  { id: "hot_salmon_teriyaki", label: "Laxteriyaki", description: "Ris, stekt lax med teriyakiglaze, sallad, picklade grönsaker, sesamfrön", category: "Varmrätter", allergens: ["Fisk", "Soja", "Sesam"], price: "159 kr" },
  { id: "hot_yakiniku", label: "Yakiniku", description: "Ris, sojamarinerad entrecöte, sallad, picklade grönsaker, sesamfrön", category: "Varmrätter", allergens: ["Soja", "Sesam"], price: "149 kr" },
  { id: "hot_yakisoba", label: "Yakisoba kyckling/biff", description: "Stekta nudlar, sallad, picklade grönsaker, sesamfrön", category: "Varmrätter", allergens: ["Gluten", "Soja", "Sesam"], price: "145 kr" },

  // 🍱 BENTOBOX
  { id: "bento_karaage", label: "Karaagebento + 5 bitar mix-sushi", description: "Ris, karaagekyckling, picklade grönsaker", category: "Bentobox", allergens: ["Gluten", "Soja", "Ägg"], price: "179 kr" },
  { id: "bento_yakiniku", label: "Yakinikubento + 5 bitar mix-sushi", description: "Ris, sojamarinerad entrecôte, picklade grönsaker", category: "Bentobox", allergens: ["Soja"], price: "179 kr" },
  { id: "bento_gyoza", label: "Gyozabento + 5 bitar mix-sushi", description: "Ris, nötgyoza, picklade grönsaker", category: "Bentobox", allergens: ["Gluten", "Soja"], price: "179 kr" },

  // 🥗 POKÉ BOWL
  { id: "poke_fish", label: "Lax / Tempura ebi / Handskalade räkor / Karaagekyckling / Yakiniku", description: "Sushiris, edamamebönor, mango, picklad rödlök, gurka, sallad, 2 valfria såser", category: "Poké Bowl", tags: ["Populär"], allergens: ["Fisk", "Skaldjur", "Gluten", "Soja", "Ägg"], price: "155 kr" },
  { id: "poke_tofu", label: "Tofu", description: "Sushiris, edamamebönor, mango, picklad rödlök, gurka, sallad, 2 valfria såser", category: "Poké Bowl", tags: ["Vegansk"], allergens: ["Soja", "Sesam"], price: "149 kr" },

  // 🥤 TILLBEHÖR
  { id: "side_chillimajo", label: "Chillimajo", description: undefined, category: "Tillbehör", allergens: ["Ägg"], price: "15 kr" },
  { id: "side_teriyaki", label: "Teriyakisås", description: undefined, category: "Tillbehör", allergens: ["Soja", "Gluten"], price: "15 kr" },
  { id: "side_sesam", label: "Sesamdressing", description: undefined, category: "Tillbehör", allergens: ["Sesam"], price: "15 kr" },
  { id: "side_harumajo", label: "Harumajo", description: "Teriyaki+chillimajo", category: "Tillbehör", allergens: ["Ägg", "Soja", "Gluten"], price: "18 kr" },
  { id: "side_soy", label: "Soja", description: "Glutenfri finns", category: "Tillbehör", allergens: ["Soja"], price: "12 kr" },
  { id: "drink_soda", label: "Läsk", description: 'Sprite, Fanta, Ramlösa, Pepsi, Coca Cola', category: "Tillbehör", price: "25 kr" },
  { id: "drink_juice", label: "Juice", description: 'Fruktdryck', category: "Tillbehör", price: "15 kr" },
];

// =========================
// COMBOS
// =========================

export const combos: Combo[] = [
  {
    id: "bento_karaage_combo",
    label: "Karaagebento + 5 bitar mix-sushi",
    description: "Ris, karaagekyckling, picklade grönsaker",
    price: 179,
    items: ["hot_karaage"],
  },
  {
    id: "bento_yakiniku_combo",
    label: "Yakinikubento + 5 bitar mix-sushi",
    description: "Ris, sojamarinerad entrecôte, picklade grönsaker",
    price: 179,
    items: ["hot_yakiniku"],
  },
  {
    id: "bento_gyoza_combo",
    label: "Gyozabento + 5 bitar mix-sushi",
    description: "Ris, nötgyoza, picklade grönsaker",
    price: 179,
    items: ["starter_gyoza"],
  },
];

// =========================
// LUNCH (Vardagar 11–14, lägg till dryck för 20kr)
// =========================

export const lunchItems: LunchItem[] = [
  {
    id: "lunch_sushi",
    label: "Dagens sushi ⭐",
    description: "10 / 12 / 16 bitar — vegansk 109/129/159kr",
    price: 119,
    alternatives: [
      { label: "12 bitar", price: 139 },
      { label: "16 bitar", price: 175 },
    ],
  },
  {
    id: "lunch_varmratt",
    label: "Dagens varmrätt",
    description: "Fråga om dagens varmrätt",
    price: 139,
    alternatives: [],
  },
  {
    id: "lunch_poke",
    label: "Dagens pokébowl",
    description: "Fråga om dagens pokébowl — vegansk 129kr",
    price: 135,
    alternatives: [],
  },
];
