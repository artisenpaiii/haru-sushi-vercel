export interface MenuItem {
  id: string;
  label: string;
  subDescription?: string;
  description?: string;
  category: string;
  iconId: string;
  tags: string[];
  price: number;
}

export interface LunchAlternative {
  label: string;
  price: number;
}

export interface LunchItem {
  id: string;
  label: string;
  description?: string;
  price: number;
  alternatives: LunchAlternative[];
}

export interface OpeningHour {
  label: string;
  from: string;
  to: string;
  avvikande?: boolean;
}

export interface MetaDataContact {
  key: "contact";
  phone: string;
  email: string;
}

export interface MetaDataLocation {
  key: "location";
  address: string;
  zipcode: string;
  city: string;
  country: string;
}

export interface MetaDataOpeningHours {
  key: "openingHours";
  entries: OpeningHour[];
}

export type MetaDataDoc =
  | MetaDataContact
  | MetaDataLocation
  | MetaDataOpeningHours;
