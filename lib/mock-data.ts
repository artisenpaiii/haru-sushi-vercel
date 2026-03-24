import type {
  MenuItem,
  LunchItem,
  MetaDataContact,
  MetaDataLocation,
  MetaDataOpeningHours,
} from "./types";

// =========================
// TYPES
// =========================

export type Allergen =
  | "Gluten"
  | "Skaldjur"
  | "Fisk"
  | "Ägg"
  | "Soja"
  | "Sesam"
  | "Mjölk";

export interface MenuItem {
  id: string;
  label: string;
  description?: string;
  subDescription?: string;
  category: string;
  iconId?: string;
  tags?: string[];
  allergens?: Allergen[];
  price: number;
  upsell?: string[]; // ids
}

export interface LunchItem {
  id: string;
  label: string;
  description: string;
  price: number;
  alternatives?: { label: string; price: number }[];
}

export interface Combo {
  id: string;
  label: string;
  description: string;
  price: number;
  items: string[]; // MenuItem ids
}

// =========================
// CATEGORY ORDER (UI)
// =========================

export const metaLocation: MetaDataLocation = {
  key: "location",
  address: "Loftahammarvägen 2",
  zipcode: "572 35",
  city: "Oskarshamn",
  country: "Sverige",
};

export const categoryOrder = [
  "Deals",
  "Förrätter",
  "Nigiri",
  "Maki",
  "Friterad Maki",
  "Sushiburrito",
  "Varmrätter",
  "Poké Bowl",
  "Tillbehör",
];

// =========================
// MENU ITEMS
// =========================

export const menuItems: MenuItem[] = [
  // 🥢 FÖRRÄTTER
  {
    id: "starter_edamame",
    label: "Edamame",
    description: "Kokta sojabönor med havssalt",
    category: "Förrätter",
    tags: ["Vegetarisk"],
    allergens: ["Soja"],
    price: 45,
  },
  {
    id: "starter_wakame",
    label: "Wakame",
    description: "Japansk sjögrässallad",
    category: "Förrätter",
    tags: ["Vegetarisk"],
    allergens: ["Sesam"],
    price: 45,
  },
  {
    id: "starter_gyoza",
    label: "Friterad Gyoza",
    description: "5 st dumplings med nötfyllning",
    category: "Förrätter",
    tags: ["Populär"],
    allergens: ["Gluten", "Soja"],
    price: 65,
  },
  {
    id: "starter_springroll",
    label: "Kycklingvårrullar",
    description: "4 st krispiga vårrullar",
    category: "Förrätter",
    allergens: ["Gluten"],
    price: 65,
  },

  // 🍣 NIGIRI
  {
    id: "nigiri_salmon",
    label: "Lax Nigiri (5 bitar)",
    category: "Nigiri",
    tags: ["Rå", "Populär"],
    allergens: ["Fisk"],
    price: 85,
    upsell: ["side_soy"],
  },
  {
    id: "nigiri_tuna",
    label: "Tonfisk Nigiri (5 bitar)",
    category: "Nigiri",
    tags: ["Rå"],
    allergens: ["Fisk"],
    price: 89,
  },
  {
    id: "nigiri_shrimp",
    label: "Räka Nigiri (5 bitar)",
    category: "Nigiri",
    allergens: ["Skaldjur"],
    price: 85,
  },

  // 🍥 MAKI
  {
    id: "maki_california",
    label: "California Roll",
    description: "Crabfish, avokado, gurka, kewpie, rom",
    category: "Maki",
    tags: ["Populär"],
    allergens: ["Skaldjur", "Ägg"],
    price: 85,
  },
  {
    id: "maki_ebi",
    label: "Ebi Tempura Roll",
    category: "Maki",
    tags: ["Krispig", "Populär"],
    allergens: ["Skaldjur", "Gluten"],
    price: 85,
  },
  {
    id: "maki_haru",
    label: "Haru Special ⭐",
    category: "Maki",
    tags: ["Signatur"],
    allergens: ["Fisk", "Skaldjur", "Mjölk"],
    price: 89,
  },

  // 🍤 FRITERAD MAKI
  {
    id: "fried_salmon",
    label: "Friterad Lax Roll",
    category: "Friterad Maki",
    tags: ["Krispig"],
    allergens: ["Fisk", "Gluten"],
    price: 89,
  },
  {
    id: "fried_yakiniku",
    label: "Friterad Yakiniku Roll",
    category: "Friterad Maki",
    tags: ["Krispig", "Premium"],
    allergens: ["Gluten", "Soja"],
    price: 89,
  },

  // 🌯 SUSHIBURRITO
  {
    id: "burrito_haru",
    label: "Haru Burrito ⭐",
    category: "Sushiburrito",
    tags: ["Signatur", "Populär"],
    allergens: ["Fisk", "Gluten", "Ägg"],
    price: 185,
    upsell: ["side_chilimayo", "drink_soda"],
  },
  {
    id: "burrito_vegan",
    label: "Vegansk Burrito",
    category: "Sushiburrito",
    tags: ["Vegetarisk"],
    allergens: ["Soja"],
    price: 175,
  },

  // 🍱 VARMRÄTTER
  {
    id: "hot_karaage",
    label: "Karaage Kyckling",
    category: "Varmrätter",
    tags: ["Populär"],
    allergens: ["Gluten", "Soja"],
    price: 149,
    upsell: ["drink_soda"],
  },
  {
    id: "hot_yakiniku",
    label: "Yakiniku",
    category: "Varmrätter",
    allergens: ["Soja"],
    price: 149,
  },
  {
    id: "hot_salmon",
    label: "Lax Teriyaki",
    category: "Varmrätter",
    allergens: ["Fisk", "Soja"],
    price: 159,
  },

  // 🥗 POKÉ
  {
    id: "poke_salmon",
    label: "Poké Bowl Lax",
    category: "Poké Bowl",
    tags: ["Populär"],
    allergens: ["Fisk", "Sesam"],
    price: 155,
    upsell: ["drink_soda"],
  },
  {
    id: "poke_chicken",
    label: "Poké Bowl Kyckling",
    category: "Poké Bowl",
    allergens: ["Gluten", "Soja"],
    price: 155,
  },

  // 🥤 TILLBEHÖR
  {
    id: "side_chilimayo",
    label: "Chilimajo",
    category: "Tillbehör",
    allergens: ["Ägg"],
    price: 15,
  },
  {
    id: "side_soy",
    label: "Soja",
    category: "Tillbehör",
    allergens: ["Soja"],
    price: 12,
  },
  {
    id: "drink_soda",
    label: "Läsk",
    category: "Tillbehör",
    price: 25,
  },
];

// =========================
// COMBOS (KASSA OPTIMERING)
// =========================

export const combos: Combo[] = [
  {
    id: "combo_1",
    label: "Haru Combo ⭐",
    description: "12 bitar sushi + dryck",
    price: 179,
    items: ["nigiri_salmon", "drink_soda"],
  },
  {
    id: "combo_2",
    label: "Bento Combo",
    description: "Varmrätt + 5 bitar sushi",
    price: 179,
    items: ["hot_karaage", "nigiri_salmon"],
  },
];

// =========================
// LUNCH
// =========================

export const lunchItems: LunchItem[] = [
  {
    id: "l1",
    label: "Dagens Sushi ⭐",
    description: "10 / 12 / 16 bitar",
    price: 119,
    alternatives: [
      { label: "12 bitar", price: 139 },
      { label: "16 bitar", price: 175 },
    ],
  },
  {
    id: "l2",
    label: "Dagens Poké Bowl",
    description: "Fråga personal",
    price: 135,
  },
  {
    id: "l3",
    label: "Dagens Varmrätt",
    description: "Fråga personal",
    price: 139,
  },
];
