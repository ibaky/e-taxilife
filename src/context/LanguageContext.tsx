'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

// Définition des interfaces
interface NavigationTranslations {
  transportPrivate: string;
  longDistance: string;
  hospitalTransport: string;
  parcelTransport: string;
  eventTaxi: string;
}

interface HeroTranslations {
  available: string;
}

interface FormTranslations {
  title: string;
  requiredFields: string;
  firstName: string;
  lastName: string;
  phone: string;
  startAddress: string;
  endAddress: string;
  passengers: string;
  luggage: string;
  hours: string;
  date: string;
  agreement: string;
  submitButton: string;
  errors: {
    name: string;
    lastName: string;
    phone: string;
    startAddress: string;
    endAddress: string;
    passengers: string;
    luggage: string;
    date: string;
    agreement: string;
  };
  success: string;
  error: string;
  serverError: string;
  policy: string;
  unknownError: string;
}

interface PresentationTranslations {
  title: string;
  services: {
    privateTransport: {
      title: string;
      content: string;
    };
    longDistance: {
      title: string;
      content: string;
    };
    hospitalTransport: {
      title: string;
      content: string;
    };
    parcelTransport: {
      title: string;
      content: string;
    };
    eventTaxi: {
      title: string;
      content: string;
    };
  };
}

interface GarantieTranslations {
  title: string;
  subtitle: string;
  electricTaxi: string;
  transportForAll: string;
  available24_7: string;
  imageAlt: string;
}

interface FooterTranslations {
  contactTitle: string;
  networkTitle: string;
  termsTitle: string;
  phone: string;
  address: string;
  email: string;
  socialNetworks: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
    snapchat: string;
    discord: string;
    tiktok: string;
  };
  terms: {
    general: string;
    guides: string;
    support: string;
    privacy: string;
  };
  copyright: string;
}

interface LongDistanceTranslations {
  breadcrumb: {
    home: string;
    passengerTransport: string;
    longDistance: string;
  };
  mainSection: {
    title: string;
    description1: string;
    description2: string;
  };
  rouenAmiens: {
    title: string;
    availableDrivers: string;
    description1: string;
    description2: string;
    learnMore: string;
  };
  beauvais: {
    title: string;
    description: string;
    learnMore: string;
  };
  charlesDeGaulle: {
    title: string;
    description: string;
    services: string[];
    learnMore: string;
  };
  orly: {
    title: string;
    description: string;
    services: string[];
    learnMore: string;
  };
}

interface Translations {
  nav: NavigationTranslations;
  hero: HeroTranslations;
  form: FormTranslations;
  presentation: PresentationTranslations;
  garantie: GarantieTranslations;
  footer: FooterTranslations;
  longDistance: LongDistanceTranslations;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

// Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Définition des traductions
const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      transportPrivate: "Transport Privée",
      longDistance: "Trajet longue distance",
      hospitalTransport: "Transport hospitalier",
      parcelTransport: "Transport de colis",
      eventTaxi: "Taxi pour événement"
    },
    hero: {
      available: "Disponible 24h/24-7j/7"
    },
    form: {
      title: "Formulaire de réservation",
      requiredFields: "Les champs indiqués par un astérisque (*) sont obligatoires",
      firstName: "Prénom",
      lastName: "Nom",
      phone: "Téléphone",
      startAddress: "Adresse de départ",
      endAddress: "Adresse de destination",
      passengers: "Nombre de passagers",
      luggage: "Nombre de bagages",
      hours: "Heures",
      date: "Date de prise en charge",
      agreement: "En soumettant ce formulaire, j'accepte que les informations saisies soient traitées par E-taxilife-rouen metropole dans le cadre de ma demande de contact et de la relation commerciale qui peut en découler.",
      submitButton: "Envoyer",
      errors: {
        name: "Le nom est requis",
        lastName: "Le prénom est requis",
        phone: "Le téléphone est requis",
        startAddress: "L'adresse de départ est requise",
        endAddress: "L'adresse de destination est requise",
        passengers: "Le nombre de passagers est requis",
        luggage: "Le nombre de bagages est requis",
        date: "La date de prise en charge est requise",
        agreement: "Vous devez accepter les termes et conditions"
      },
      success: "Réservation enregistrée avec succès",
      error: "Une erreur est survenue",
      serverError: "Erreur de connexion au serveur",
      policy: "En savoir plus en consultant notre politique de confidentialité",
      unknownError: "Une erreur inconnue est survenue"
    },
    garantie: {
      title: "Nous vous",
      subtitle: "garantissons",
      electricTaxi: "Taxi Electrique",
      transportForAll: "Transport pour tous",
      available24_7: "Standard disponible 24h/7",
      imageAlt: "Image de garantie"
    },
    presentation: {
      title: "Nos prestations",
      services: {
        privateTransport: {
          title: "Transport Privée",
          content: "Service de transport privé personnalisé"
        },
        longDistance: {
          title: "Trajet longue distance",
          content: "Transport confortable pour longs trajets"
        },
        hospitalTransport: {
          title: "Transport hospitalier",
          content: "Transport médical spécialisé"
        },
        parcelTransport: {
          title: "Transport de colis",
          content: "Livraison sécurisée de colis"
        },
        eventTaxi: {
          title: "Taxi pour événement",
          content: "Service pour vos événements spéciaux"
        }
      }
    },
    footer: {
      contactTitle: "Contact-moi",
      networkTitle: "Réseau",
      termsTitle: "Conditions",
      phone: "+33 6 12 34 56 78",
      address: "rue maltilde 76000 rouen",
      email: "contact@montransport.com",
      socialNetworks: {
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "X",
        youtube: "Youtube",
        snapchat: "SnapChat",
        discord: "Discord",
        tiktok: "TikTok"
      },
      terms: {
        general: "Conditions Générales",
        guides: "Guides",
        support: "Support",
        privacy: "Politique de Confidentialité"
      },
      copyright: "© 2024 e-TaxiLife. Tous droits réservés."
    },
    longDistance: {
      breadcrumb: {
        home: "Accueil",
        passengerTransport: "Transport de personne",
        longDistance: "Longue distance"
      },
      mainSection: {
        title: "Déplacement en taxi pour votre trajet longue et grande distance au départ de Rouen (76)",
        description1: "Vous habitez ou logez à Rouen 76 et vous recherchez un taxi pour un trajet longue distance ? e-TaxiLife est là pour vous. En effet, qu'il s'agisse de vous rendre à un aéroport, une gare, ou toute autre destination en dehors de la Seine Maritime 76, nous pouvons vous emmener où vous le désirez.",
        description2: "Seul ou à plusieurs, il vous suffit de nous appeler, de nous faire part de vos besoins et nous saurons vous trouver un chauffeur avec un véhicule adapté. Si vous recherchez un taxi pour effectuer un trajet longue distance quel qu'il soit, contactez-nous au 06 12 34 56 78 ou remplissez le formulaire de contact. Nous nous ferons un plaisir de vous accompagner."
      },
      rouenAmiens: {
        title: "Tarif d'un taxi pour un départ de Rouen vers Amiens",
        availableDrivers: "120 chauffeurs disponibles 7j sur 7 !",
        description1: "Notre service de taxi Rouen-Amiens vous garantit un voyage confortable et sécurisé. Le trajet d'environ 120 kilomètres est effectué par nos chauffeurs expérimentés qui connaissent parfaitement l'itinéraire.",
        description2: "Nous proposons des tarifs transparents et compétitifs, avec un prix fixe établi à l'avance. Le trajet peut être réalisé à toute heure du jour ou de la nuit, avec une prise en charge à l'adresse de votre choix.",
        learnMore: "EN SAVOIR PLUS →"
      },
      beauvais: {
        title: "Taxi pour un transport de Rouen à l'aéroport de Beauvais",
        description: "Besoin d'un taxi pour vous rendre à l'aéroport de Beauvais au départ de Rouen ? Les Taxis sont à votre disposition ! Avec nos 120 chauffeurs expérimentés, vous êtes assurés de trouver le taxi qu'il vous faut. Nos services comprennent : Un trajet d'environ 1h30 dans des conditions optimales, une prise en charge à votre domicile ou à l'adresse de votre choix, une assistance avec vos bagages, et un suivi en temps réel des vols pour adapter les horaires si nécessaire. Nous connaissons parfaitement les spécificités de l'aéroport de Beauvais et ses différents terminaux. Notre objectif est de vous permettre d'arriver sereinement et à l'heure pour votre vol, sans le stress de la conduite ou du stationnement.",
        learnMore: "EN SAVOIR PLUS →"
      },
      charlesDeGaulle: {
        title: "Taxi pour un trajet longue distance à l'aéroport Paris Charles de Gaulle",
        description: "Nous vous proposons un service de taxi premium pour vos trajets vers l'aéroport Charles de Gaulle. Un service professionnel et ponctuel, adapté aux exigences des voyageurs d'affaires comme des particuliers. Le trajet Rouen-Charles de Gaulle est l'un de nos itinéraires les plus fréquents. Nos chauffeurs connaissent parfaitement les différents terminaux et les accès les plus rapides selon les horaires.",
        services: [
          "Un temps de trajet optimisé grâce à notre connaissance du trafic parisien",
          "Une surveillance en temps réel des conditions de circulation",
          "Des véhicules spacieux et confortables, idéaux pour les longs trajets",
          "Une prise en charge possible très tôt le matin ou tard le soir",
          "Un service de tracking des vols pour adapter l'horaire de prise en charge si nécessaire"
        ],
        learnMore: "EN SAVOIR PLUS →"
      },
      orly: {
        title: "Transport aéroport Orly depuis Rouen",
        description: "Service de taxi disponible pour vos trajets vers l'aéroport d'Orly. Confort et ponctualité garantis pour tous vos déplacements. Notre expertise sur cet axe nous permet de vous offrir : Une prise en charge personnalisée et un accompagnement complet depuis Rouen jusqu'à votre terminal à Orly. Le trajet dure environ 2 heures, pendant lesquelles vous profiterez du confort de nos véhicules haut de gamme. Nous desservons les différents terminaux d'Orly (Ouest et Sud) et adaptons notre service selon vos besoins :",
        services: [
          "Trajets tôt le matin ou tard le soir",
          "Transport de bagages volumineux",
          "Sièges enfants sur demande",
          "Accueil avec pancarte nominative",
          "Suivi en temps réel de votre trajet"
        ],
        learnMore: "EN SAVOIR PLUS →"
      }
    }
  },
  en: {
    nav: {
      transportPrivate: "Private Transport",
      longDistance: "Long Distance Travel",
      hospitalTransport: "Hospital Transport",
      parcelTransport: "Parcel Transport",
      eventTaxi: "Event Taxi"
    },
    hero: {
      available: "Available 24/7"
    },
    form: {
      title: "Booking Form",
      requiredFields: "Fields marked with an asterisk (*) are required",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      startAddress: "Pickup Address",
      endAddress: "Destination Address",
      passengers: "Number of Passengers",
      luggage: "Number of Luggage",
      hours: "Hours",
      date: "Pickup Date",
      agreement: "By submitting this form, I agree that the information will be processed by E-taxilife-rouen metropole as part of my contact request and potential business relationship.",
      submitButton: "Submit",
      errors: {
        name: "Name is required",
        lastName: "First name is required",
        phone: "Phone number is required",
        startAddress: "Pickup address is required",
        endAddress: "Destination address is required",
        passengers: "Number of passengers is required",
        luggage: "Number of luggage items is required",
        date: "Pickup date is required",
        agreement: "You must accept the terms and conditions"
      },
      success: "Booking successfully registered",
      error: "An error occurred",
      serverError: "Server connection error",
      policy: "Learn more by consulting our privacy policy",
      unknownError: "An unknown error occurred"
    },
    garantie: {
      title: "We",
      subtitle: "guarantee you",
      electricTaxi: "Electric Taxi",
      transportForAll: "Transport for All",
      available24_7: "Available 24/7",
      imageAlt: "Guarantee image"
    },
    presentation: {
      title: "Our Services",
      services: {
        privateTransport: {
          title: "Private Transport",
          content: "Personalized private transport service"
        },
        longDistance: {
          title: "Long Distance Travel",
          content: "Comfortable transport for long journeys"
        },
        hospitalTransport: {
          title: "Hospital Transport",
          content: "Specialized medical transport"
        },
        parcelTransport: {
          title: "Parcel Transport",
          content: "Secure parcel delivery"
        },
        eventTaxi: {
          title: "Event Taxi",
          content: "Service for your special events"
        }
      }
    },
    footer: {
      contactTitle: "Contact Us",
      networkTitle: "Network",
      termsTitle: "Terms",
      phone: "+33 6 12 34 56 78",
      address: "rue maltilde 76000 rouen",
      email: "contact@montransport.com",
      socialNetworks: {
        facebook: "Facebook",
        instagram: "Instagram",
        twitter: "X",
        youtube: "Youtube",
        snapchat: "SnapChat",
        discord: "Discord",
        tiktok: "TikTok"
      },
      terms: {
        general: "Terms and Conditions",
        guides: "Guides",
        support: "Support",
        privacy: "Privacy Policy"
      },
      copyright: "© 2024 e-TaxiLife. All rights reserved."
    },
    longDistance: {
      breadcrumb: {
        home: "Home",
        passengerTransport: "Passenger Transport",
        longDistance: "Long Distance"
      },
      mainSection: {
        title: "Long-distance taxi service from Rouen (76)",
        description1: "Are you living in or staying in Rouen 76 and looking for a taxi for a long-distance journey? e-TaxiLife is here for you. Whether you need to get to an airport, a train station, or any other destination outside of Seine Maritime 76, we can take you wherever you wish to go.",
        description2: "Whether traveling alone or in a group, simply call us, tell us your needs, and we'll find you a driver with a suitable vehicle. If you're looking for a taxi for any long-distance journey, contact us at 06 12 34 56 78 or fill out the contact form. We'll be delighted to assist you."
      },
      rouenAmiens: {
        title: "Taxi fare from Rouen to Amiens",
        availableDrivers: "120 drivers available 7 days a week!",
        description1: "Our Rouen-Amiens taxi service guarantees a comfortable and safe journey. The approximately 120-kilometer trip is handled by our experienced drivers who know the route perfectly.",
        description2: "We offer transparent and competitive rates, with a fixed price established in advance. The journey can be made at any time of day or night, with pickup at your chosen address.",
        learnMore: "LEARN MORE →"
      },
      beauvais: {
        title: "Taxi service from Rouen to Beauvais Airport",
        description: "Need a taxi to get to Beauvais Airport from Rouen? Our Taxis are at your service! With our 120 experienced drivers, you're sure to find the taxi you need. Our services include: A journey of approximately 1.5 hours under optimal conditions, pickup at your home or chosen address, assistance with your luggage, and real-time flight monitoring to adjust schedules if necessary. We are thoroughly familiar with Beauvais Airport's specifics and its different terminals. Our goal is to ensure you arrive calmly and on time for your flight, without the stress of driving or parking.",
        learnMore: "LEARN MORE →"
      },
      charlesDeGaulle: {
        title: "Long-distance taxi service to Paris Charles de Gaulle Airport",
        description: "We offer a premium taxi service for your journeys to Charles de Gaulle Airport. A professional and punctual service, adapted to the requirements of both business and leisure travelers. The Rouen-Charles de Gaulle route is one of our most frequent itineraries. Our drivers know perfectly well the different terminals and the fastest access routes depending on the time.",
        services: [
          "Optimized journey time thanks to our knowledge of Parisian traffic",
          "Real-time traffic monitoring",
          "Spacious and comfortable vehicles, ideal for long journeys",
          "Pickup available very early in the morning or late at night",
          "Flight tracking service to adjust pickup time if necessary"
        ],
        learnMore: "LEARN MORE →"
      },
      orly: {
        title: "Airport transfer to Orly from Rouen",
        description: "Taxi service available for your journeys to Orly Airport. Guaranteed comfort and punctuality for all your travels. Our expertise on this route allows us to offer you: Personalized pickup and complete assistance from Rouen to your terminal at Orly. The journey takes approximately 2 hours, during which you'll enjoy the comfort of our premium vehicles. We serve different Orly terminals (West and South) and adapt our service to your needs:",
        services: [
          "Early morning or late night journeys",
          "Transport of bulky luggage",
          "Child seats on request",
          "Welcome with name sign",
          "Real-time journey tracking"
        ],
        learnMore: "LEARN MORE →"
      }
    }
  }
};

// Export du Provider et du hook
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;