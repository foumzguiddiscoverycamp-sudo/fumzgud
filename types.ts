
export type Language = 'en' | 'fr';

export interface ItineraryDay {
  day: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
}

export interface Tour {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  duration: Record<Language, string>;
  price: string;
  image: string;
  features: Record<Language, string[]>;
  itinerary?: ItineraryDay[];
}

export interface Translation {
  heroTitle: string;
  heroSub: string;
  aboutTitle: string;
  aboutText: string;
  toursTitle: string;
  transfersTitle: string;
  transfersSub: string;
  bookingTitle: string;
  contactMajid: string;
  whatsappBtn: string;
  emailBtn: string;
  mapTitle: string;
  footerRights: string;
  languageLabel: string;
  viewItinerary: string;
  close: string;
}
