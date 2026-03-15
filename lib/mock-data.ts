import type {
  MenuItem,
  LunchItem,
  MetaDataContact,
  MetaDataLocation,
  MetaDataOpeningHours,
} from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    label: "Edamame",
    description: "Kokta sojabönor med havssalt",
    category: "Förätter",
    iconId: "edamame",
    tags: ["Vegetarisk"],
    price: 49,
  },
  {
    id: "2",
    label: "Gyoza",
    subDescription: "ぎょうざ",
    description: "Fyllda japanska dumplings, stekta",
    category: "Förätter",
    iconId: "gyoza",
    tags: [],
    price: 69,
  },
  {
    id: "3",
    label: "Lax Nigiri",
    subDescription: "サーモン",
    description: "2 st nigiri med färsk lax",
    category: "Nigiri",
    iconId: "sushi",
    tags: ["Rå"],
    price: 59,
  },
  {
    id: "4",
    label: "Sake Maki",
    subDescription: "鮭巻き",
    description: "8 bitar laxmaki",
    category: "Maki",
    iconId: "maki",
    tags: ["Rå"],
    price: 89,
  },
  {
    id: "5",
    label: "Tempura Maki",
    description: "8 bitar friterad maki med räkor",
    category: "Friterad Maki",
    iconId: "shrimp",
    tags: ["Hot"],
    price: 109,
  },
  {
    id: "6",
    label: "Haru Burrito",
    subDescription: "はるブリトー",
    description: "Stor sushiburrito med lax, avokado och krispig tempura",
    category: "Sushiburrito",
    iconId: "bento",
    tags: [],
    price: 129,
  },
  {
    id: "7",
    label: "Blandad Sushi 12 bitar",
    description: "Chef's val av nigiri och maki",
    category: "Mixad Sushi",
    iconId: "star",
    tags: [],
    price: 159,
  },
  {
    id: "8",
    label: "Chicken Teriyaki",
    subDescription: "チキン照り焼き",
    description: "Grillad kyckling med teriyakisås, ris och sallad",
    category: "Varmrätter",
    iconId: "chicken",
    tags: [],
    price: 119,
  },
  {
    id: "9",
    label: "Pokébowl Lax",
    subDescription: "ポケボウル",
    description: "Lax, ris, avokado, edamame, mango och sesamdressing",
    category: "Pokébowl",
    iconId: "bowl",
    tags: ["Rå"],
    price: 129,
  },
  {
    id: "10",
    label: "Ramune",
    description: "Japansk läsk, olika smaker",
    category: "Tillbehör & Dryck",
    iconId: "drink",
    tags: ["Dryck"],
    price: 35,
  },
];

export const lunchItems: LunchItem[] = [
  {
    id: "l1",
    label: "Lunch A",
    description: "8 bitar maki + misosoppa",
    price: 99,
    alternatives: [
      { label: "Uppgradera till 12 bitar", price: 119 },
    ],
  },
  {
    id: "l2",
    label: "Lunch B",
    description: "Pokébowl med valfri topping",
    price: 109,
    alternatives: [
      { label: "Extra protein", price: 129 },
    ],
  },
  {
    id: "l3",
    label: "Lunch C",
    description: "Chicken Teriyaki med ris och sallad",
    price: 109,
    alternatives: [],
  },
  {
    id: "l4",
    label: "Lunch D",
    description: "Sushiburrito med valfri fyllning",
    price: 119,
    alternatives: [
      { label: "Dubbel storlek", price: 159 },
    ],
  },
];

export const metaContact: MetaDataContact = {
  key: "contact",
  phone: "0491-123 45",
  email: "info@harusushi.se",
};

export const metaLocation: MetaDataLocation = {
  key: "location",
  address: "Lilla Torget 3",
  zipcode: "572 30",
  city: "Oskarshamn",
  country: "Sverige",
};

export const metaOpeningHours: MetaDataOpeningHours = {
  key: "openingHours",
  entries: [
    { label: "Lunch", from: "11:00", to: "14:00" },
    { label: "Måndag–Fredag", from: "11:00", to: "20:00" },
    { label: "Lördag", from: "12:00", to: "20:00" },
    { label: "Söndag", from: "12:00", to: "18:00" },
    { label: "Julafton", from: "11:00", to: "14:00", avvikande: true },
    { label: "Nyårsafton", from: "11:00", to: "15:00", avvikande: true },
  ],
};
