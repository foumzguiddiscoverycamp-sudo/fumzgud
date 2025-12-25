
import { Tour, Translation, Language } from './types';

export const CONTACT_INFO = {
  whatsapp: '+212706295122',
  email: 'foumzguiddiscoverycamp@gmail.com'
};

export const TOURS: Tour[] = [
  {
    id: 'el-wazziz-4d',
    title: {
      en: '4-Day El Wazziz Desert Trek',
      fr: 'Trek 4 Jours au Désert El Wazziz'
    },
    description: {
      en: 'A 15km journey from Foum Zguid to El Wazziz. Meet nomads, drink fresh camel milk, and explore the "Strange Mountain".',
      fr: 'Un voyage de 15km de Foum Zguid à El Wazziz. Rencontrez des nomades, buvez du lait de chamelle et explorez la "Montagne Étrange".'
    },
    duration: { en: '4 Days / 3 Nights', fr: '4 Jours / 3 Nuits' },
    price: 'Upon Request / Sur Demande',
    image: 'https://i.ibb.co/6R2MvH86/majid-dunes.jpg',
    features: {
      en: ['Nomadic Life', 'Strange Mountain', 'Fresh Camel Milk', 'Bedouin Games'],
      fr: ['Vie Nomade', 'Montagne Étrange', 'Lait de Chamelle', 'Jeux Bédouins']
    },
    itinerary: [
      {
        day: 1,
        title: { en: 'The Strange Mountain', fr: 'La Montagne Étrange' },
        description: { 
          en: 'Start from Foum Zguid. Hike to the "Strange Mountain" for panoramic views. Enjoy Bedouin games, traditional lunch, and campfire music with guitar tunes under the stars.', 
          fr: 'Départ de Foum Zguid. Randonnée vers la "Montagne Étrange". Jeux bédouins, déjeuner traditionnel et musique autour du feu sous les étoiles.' 
        }
      },
      {
        day: 2,
        title: { en: 'Hike & Nomad Life', fr: 'Randonnée & Vie Nomade' },
        description: { 
          en: 'Scenic hike between mountain edges. 3-hour rest under a famous Acacia (Talh) tree. Evening in a nomadic village, sharing stories and food like one big family.', 
          fr: 'Randonnée entre les montagnes. Repos de 3h sous un Acacia (Talh). Soirée dans un village nomade, partage d\'histoires et de repas comme une grande famille.' 
        }
      },
      {
        day: 3,
        title: { en: 'Oued Chegaga & Camel Milk', fr: 'Oued Chegaga & Lait de Chamelle' },
        description: { 
          en: 'Head to Oued Chegaga to meet local camel herders. Taste 100% natural and healthy fresh camel milk at the desert inn.', 
          fr: 'Direction Oued Chegaga pour rencontrer les éleveurs. Dégustez du lait de chamelle frais 100% naturel et sain à l\'auberge du désert.' 
        }
      },
      {
        day: 4,
        title: { en: 'El Obeidlia Dunes Sunset', fr: 'Dunes El Obeidlia' },
        description: { 
          en: 'Relax at "Le Bivouac" (showers/rest). Camel ride to the stunning El Obeidlia dunes for a magical sunset before returning to Foum Zguid.', 
          fr: 'Détente au Bivouac (douches/repos). Balade à chameau vers les dunes d\'El Obeidlia pour un coucher de soleil magique avant le retour.' 
        }
      }
    ]
  },
  {
    id: 'marrakech-circuit',
    title: {
      en: 'Marrakech to Sahara Expedition',
      fr: 'Expédition Marrakech vers le Sahara'
    },
    description: {
      en: 'An 800-900km grand circuit crossing the Atlas, Ait Ben Haddou, and Draa Valley to the deep dunes of Chegaga.',
      fr: 'Un grand circuit de 800-900km traversant l\'Atlas, Ait Ben Haddou et la vallée du Draa vers les dunes de Chegaga.'
    },
    duration: { en: '3-4 Days Circuit', fr: 'Circuit 3-4 Jours' },
    price: 'Upon Request / Sur Demande',
    image: 'https://i.ibb.co/YB5v46Ff/majid-group.jpg',
    features: {
      en: ['Tizi n\'Tichka', 'Ait Ben Haddou', 'Draa Valley', 'Ouarzazate'],
      fr: ['Tizi n\'Tichka', 'Ait Ben Haddou', 'Vallée du Draa', 'Ouarzazate']
    },
    itinerary: [
      {
        day: 1,
        title: { en: 'Atlas & Ait Ben Haddou', fr: 'Atlas & Ait Ben Haddou' },
        description: { 
          en: 'Marrakech to Ouarzazate via Tizi n\'Tichka (2200m). Explore the world-famous Ait Ben Haddou kasbah.', 
          fr: 'Marrakech vers Ouarzazate via le col Tizi n\'Tichka (2200m). Exploration de la kasbah d\'Ait Ben Haddou.' 
        }
      },
      {
        day: 2,
        title: { en: 'The Deep Desert', fr: 'Le Désert Profond' },
        description: { 
          en: 'From Ouarzazate to Foum Zguid via Tazenakht. Journey into the heart of the Chegaga dunes for an unforgettable night.', 
          fr: 'D\'Ouarzazate à Foum Zguid via Tazenakht. Voyage au cœur des dunes de Chegaga pour une nuit inoubliable.' 
        }
      },
      {
        day: 3,
        title: { en: 'Draa Valley & Return', fr: 'Vallée du Draa & Retour' },
        description: { 
          en: 'Return via Zagora and Akdez. Cross the Draa Valley palm groves and clay villages like Tamnougalte before heading back to Marrakech.', 
          fr: 'Retour via Zagora et Akdez. Traversée des palmeraies du Draa et des villages de terre comme Tamnougalte avant le retour.' 
        }
      }
    ]
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    heroTitle: 'Foum Zguid Discovery Camp',
    heroSub: 'Gateway to Sahara Magic with Majid',
    aboutTitle: 'Majid: Your Sahara Expert',
    aboutText: 'I am Majid, your local guide with years of experience. From the peaks of the Atlas to the silence of Chegaga, I ensure your journey is safe, authentic, and full of desert soul. Trust is my priority.',
    toursTitle: 'Signature Sahara Journeys',
    transfersTitle: 'Professional 4x4 Transfers',
    transfersSub: 'Safe, comfortable private transfers from Agadir, Marrakech, and Ouarzazate to Foum Zguid.',
    bookingTitle: 'Book Your Desert Escape',
    contactMajid: 'Message me for a custom itinerary and transparent pricing. I am here to help you plan.',
    whatsappBtn: 'WhatsApp Majid',
    emailBtn: 'Send Email',
    mapTitle: 'Find Us in Foum Zguid',
    footerRights: 'All rights reserved',
    languageLabel: 'FR',
    viewItinerary: 'Full Program',
    close: 'Close'
  },
  fr: {
    heroTitle: 'Foum Zguid Discovery Camp',
    heroSub: 'La Magie du Sahara avec Majid',
    aboutTitle: 'Majid : Votre Expert du Sahara',
    aboutText: 'Je suis Majid, votre guide local expérimenté. Des sommets de l\'Atlas au silence de Chegaga, je garantis un voyage sûr, authentique et plein d\'âme. La confiance est ma priorité.',
    toursTitle: 'Voyages Signature au Sahara',
    transfersTitle: 'Transferts 4x4 Professionnels',
    transfersSub: 'Transferts privés sûrs et confortables d\'Agadir, Marrakech et Ouarzazate vers Foum Zguid.',
    bookingTitle: 'Réservez votre Évasion',
    contactMajid: 'Contactez-moi pour un itinéraire personnalisé et des tarifs transparents. Je suis là pour vous aider.',
    whatsappBtn: 'WhatsApp Majid',
    emailBtn: 'Envoyer Email',
    mapTitle: 'Nous trouver à Foum Zguid',
    footerRights: 'Tous droits réservés',
    languageLabel: 'EN',
    viewItinerary: 'Programme Complet',
    close: 'Fermer'
  }
};
