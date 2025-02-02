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

interface TransportPriveeTranslations {
  breadcrumb: {
    home: string;
    privateTransport: string;
  };
  mainSection: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: {
    title: string;
    description1: string;
    description2: string;
  };
  metropole: {
    title: string;
    description1: string;
    description2: string;
  };
  eco: {
    title: string;
    description1: string;
    description2: string;
  };
  booking: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface TransportHospitalierTranslations {
  consultations: {
    title: string;
    description1: string;
    description2: string;
  };
  hospitalisation: {
    title: string;
    description1: string;
    description2: string;
  };
  mobiliteReduite: {
    title: string;
    description1: string;
    description2: string;
  };
  reservation: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface TransportColisTranslations {
  breadcrumb: {
    home: string;
    parcelTransport: string;
  };
  mainSection: {
    title: string;
    description1: string;
    description2: string;
  };
  express: {
    title: string;
    description: string;
    services: string[];
    learnMore: string;
  };
  business: {
    title: string;
    description: string;
    services: string[];
    learnMore: string;
  };
  personal: {
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
  transportPrivee: TransportPriveeTranslations;
  transportHospitalier: TransportHospitalierTranslations;
  transportColis: TransportColisTranslations;
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      transportPrivate: "Transport Privé",
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
      submitButton: "Réserver maintenant",
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
    presentation: {
      title: "Nos prestations",
      services: {
        privateTransport: {
          title: "Transport Privé",
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
    garantie: {
      title: "Nous vous",
      subtitle: "garantissons",
      electricTaxi: "Taxi Electrique",
      transportForAll: "Transport pour tous",
      available24_7: "Standard disponible 24h/7",
      imageAlt: "Image de garantie"
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
        description: "Besoin d'un taxi pour vous rendre à l'aéroport de Beauvais au départ de Rouen ? Les Taxis sont à votre disposition ! Avec nos 120 chauffeurs expérimentés, vous êtes assurés de trouver le taxi qu'il vous faut. Nos services comprennent : Un trajet d'environ 1h30 dans des conditions optimales, une prise en charge à votre domicile ou à l'adresse de votre choix, une assistance avec vos bagages, et un suivi en temps réel des vols pour adapter les horaires si nécessaire.",
        learnMore: "EN SAVOIR PLUS →"
      },
      charlesDeGaulle: {
        title: "Taxi pour un trajet longue distance à l'aéroport Paris Charles de Gaulle",
        description: "Nous vous proposons un service de taxi premium pour vos trajets vers l'aéroport Charles de Gaulle. Un service professionnel et ponctuel, adapté aux exigences des voyageurs d'affaires comme des particuliers.",
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
        description: "Service de taxi disponible pour vos trajets vers l'aéroport d'Orly. Confort et ponctualité garantis pour tous vos déplacements.",
        services: [
          "Trajets tôt le matin ou tard le soir",
          "Transport de bagages volumineux",
          "Sièges enfants sur demande",
          "Accueil avec pancarte nominative",
          "Suivi en temps réel de votre trajet"
        ],
        learnMore: "EN SAVOIR PLUS →"
      }
    },
    transportPrivee: {
      breadcrumb: {
        home: "Accueil",
        privateTransport: "Transport Privé"
      },
      mainSection: {
        title: "Service de transport privé premium à Rouen",
        subtitle: "Faites confiance à e-TaxiLife pour tous vos déplacements",
        description: "Votre partenaire de confiance pour tous vos déplacements dans la région rouennaise"
      },services: {
        title: "Un service sur-mesure et confortable",
        description1: "Nos chauffeurs expérimentés assurent des trajets ponctuels et confortables, 24h/24 et 7j/7.",
        description2: "Avec notre flotte de véhicules haut de gamme, vous bénéficiez d'un confort optimal et d'un service irréprochable."
      },
      metropole: {
        title: "Une couverture étendue dans la métropole rouennaise",
        description1: "Que vous ayez besoin de vous déplacer dans Rouen ou dans les communes environnantes.",
        description2: "Grâce à notre connaissance approfondie de la région, nos chauffeurs empruntent les itinéraires les plus efficaces."
      },
      eco: {
        title: "Un transport responsable et écologique",
        description1: "Soucieux de notre impact environnemental, nous sommes fiers de proposer une flotte 100% électrique.",
        description2: "En choisissant e-TaxiLife, vous optez pour une solution de transport durable."
      },
      booking: {
        title: "Réservez votre transport privé",
        description: "Nos équipes sont à votre écoute pour vous proposer la meilleure solution de transport.",
        buttonText: "Réserver maintenant"
      }
    },
    transportHospitalier: {
      consultations: {
        title: "Transport pour consultations médicales",
        description1: "Notre service de transport pour consultations médicales est conçu pour vous accompagner dans tous vos rendez-vous médicaux, examens et analyses.",
        description2: "Nous assurons la ponctualité et le confort nécessaires pour vos déplacements médicaux, avec une assistance personnalisée si besoin."
      },
      hospitalisation: {
        title: "Transport pour hospitalisation",
        description1: "Pour vos entrées et sorties d'hôpital, nous vous garantissons un transport adapté à votre état de santé, avec une prise en charge complète.",
        description2: "Nos véhicules sont équipés pour assurer votre confort et notre équipe est formée aux spécificités du transport médical."
      },
      mobiliteReduite: {
        title: "Transport adapté mobilité réduite",
        description1: "Nos véhicules sont spécialement aménagés pour le transport des personnes à mobilité réduite, avec équipements adaptés et accès facilité.",
        description2: "Notre personnel est formé aux techniques d'aide à la mobilité et à l'accompagnement des personnes en situation de handicap."
      },
      reservation: {
        title: "Réserver votre transport médical",
        description: "Pour réserver votre transport médical, contactez-nous par téléphone ou utilisez notre formulaire en ligne. Nous vous répondrons dans les plus brefs délais pour organiser votre déplacement.",
        buttonText: "Réserver maintenant"
      }
    },
    transportColis: {
      breadcrumb: {
        home: "Accueil",
        parcelTransport: "Transport de colis"
      },
      mainSection: {
        title: "Transport de colis express sur Rouen et sa métropole",
        description1: "Notre service de transport de colis express garantit une livraison rapide et sécurisée de vos biens, 24h/24 et 7j/7.",
        description2: "Que ce soit pour des documents importants, des colis urgents ou des marchandises délicates, nous assurons un service professionnel et ponctuel."
      },
      express: {
        title: "Service Express",
        description: "Notre service de livraison express est conçu pour répondre à vos besoins urgents :",
        services: [
          "Livraison en moins de 2 heures sur Rouen et sa métropole",
          "Service disponible 24h/24 et 7j/7",
          "Suivi en temps réel de votre colis",
          "Confirmation de livraison immédiate"
        ],
        learnMore: "En savoir plus"
      },
      business: {
        title: "Services aux entreprises",
        description: "Solutions logistiques adaptées aux besoins des professionnels :",
        services: [
          "Transport de documents confidentiels",
          "Livraison de pièces détachées",
          "Distribution de marchandises",
          "Contrats sur-mesure"
        ],
        learnMore: "Contactez-nous"
      },
      personal: {
        title: "Services aux particuliers",
        description: "Des solutions de transport adaptées à vos besoins personnels :",
        services: [
          "Transport de colis personnels",
          "Livraison de courses et achats",
          "Envoi de cadeaux",
          "Transport d'objets fragiles"
        ],
        learnMore: "Réserver maintenant"
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
      agreement: "By submitting this form, I agree that the information entered will be processed by E-taxilife-rouen metropole as part of my contact request and potential business relationship.",
      submitButton: "Book Now",
      errors: {
        name: "Name is required",
        lastName: "First name is required",
        phone: "Phone number is required",
        startAddress: "Pickup address is required",
        endAddress: "Destination address is required",
        passengers: "Number of passengers is required",
        luggage: "Number of luggage is required",
        date: "Pickup date is required",
        agreement: "You must accept the terms and conditions"
      },
      success: "Booking successfully registered",
      error: "An error occurred",
      serverError: "Server connection error",
      policy: "Learn more by consulting our privacy policy",
      unknownError: "An unknown error occurred"
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
    garantie: {
      title: "We",
      subtitle: "guarantee you",
      electricTaxi: "Electric Taxi",
      transportForAll: "Transport for All",
      available24_7: "Available 24/7",
      imageAlt: "Guarantee image"
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
        description1: "Living in or staying in Rouen 76 and looking for a taxi for a long-distance journey? e-TaxiLife is here for you. Whether you need to get to an airport, train station, or any destination outside Seine Maritime 76, we can take you wherever you wish.",
        description2: "Whether traveling alone or in a group, simply call us, tell us your needs, and we'll find you a driver with a suitable vehicle. Looking for a taxi for any long-distance journey? Contact us at 06 12 34 56 78 or fill out the contact form. We'll be delighted to assist you."
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
        description: "Need a taxi to Beauvais Airport from Rouen? Our taxis are at your service! With 120 experienced drivers, you're sure to find the right taxi. Our services include: A journey of approximately 1.5 hours under optimal conditions, pickup at your home or chosen address, assistance with luggage, and real-time flight monitoring to adjust schedules if needed.",
        learnMore: "LEARN MORE →"
      },
      charlesDeGaulle: {
        title: "Long-distance taxi service to Paris Charles de Gaulle Airport",
        description: "We offer premium taxi service for your Charles de Gaulle Airport journeys. Professional and punctual service, adapted for both business and leisure travelers.",
        services: [
          "Optimized journey time with our Paris traffic knowledge",
          "Real-time traffic monitoring",
          "Spacious, comfortable vehicles ideal for long trips",
          "Early morning or late night pickup available",
          "Flight tracking service to adjust pickup time if needed"
        ],
        learnMore: "LEARN MORE →"
      },
      orly: {
        title: "Airport transfer to Orly from Rouen",
        description: "Taxi service available for Orly Airport journeys. Guaranteed comfort and punctuality for all your travels.",
        services: [
          "Early morning or late night journeys",
          "Bulky luggage transport",
          "Child seats on request",
          "Welcome with name sign",
          "Real-time journey tracking"
        ],
        learnMore: "LEARN MORE →"
      }
    },
    transportPrivee: {
      breadcrumb: {
        home: "Home",
        privateTransport: "Private Transport"
      },
      mainSection: {
        title: "Premium private transport service in Rouen",
        subtitle: "Trust e-TaxiLife for all your travel needs",
        description: "Your trusted partner for all your travels in the Rouen region"
      },
      services: {
        title: "Tailored and comfortable service",
        description1: "Our experienced drivers ensure punctual and comfortable journeys, 24/7.",
        description2: "With our fleet of premium vehicles, you benefit from optimal comfort and impeccable service."
      },
      metropole: {
        title: "Extended coverage in the Rouen metropolitan area",
        description1: "Whether you need to travel in Rouen or in the surrounding municipalities.",
        description2: "Thanks to our in-depth knowledge of the region, our drivers take the most efficient routes."
      },
      eco: {
        title: "Responsible and ecological transport",
        description1: "Concerned about our environmental impact, we are proud to offer a 100% electric fleet.",
        description2: "By choosing e-TaxiLife, you opt for a sustainable transport solution."
      },
      booking: {
        title: "Book your private transport",
        description: "Our teams are here to offer you the best transport solution.",
        buttonText: "Book now"
      }
    },
    transportHospitalier: {
      consultations: {
        title: "Medical Consultation Transport",
        description1: "Our medical consultation transport service is designed to accompany you to all your medical appointments, examinations, and analyses.",
        description2: "We ensure punctuality and comfort for your medical travel needs, with personalized assistance if required."
      },
      hospitalisation: {
        title: "Hospital Transport",
        description1: "For your hospital admissions and discharges, we guarantee transport adapted to your health condition, with comprehensive care.",
        description2: "Our vehicles are equipped to ensure your comfort and our team is trained in the specifics of medical transport."
      },
      mobiliteReduite: {
        title: "Adapted Transport for Reduced Mobility",
        description1: "Our vehicles are specially equipped for transporting people with reduced mobility, with adapted equipment and facilitated access.",
        description2: "Our staff is trained in mobility assistance techniques and accompanying people with disabilities."
      },
      reservation: {
        title: "Book Your Medical Transport",
        description: "To book your medical transport, contact us by phone or use our online form. We will respond as soon as possible to organize your journey.",
        buttonText: "Book Now"
      }
    },
    transportColis: {
      breadcrumb: {
        home: "Home",
        parcelTransport: "Parcel Transport"
      },
      mainSection: {
        title: "Express Parcel Transport in Rouen and Metropolitan Area",
        description1: "Our express parcel transport service ensures fast and secure delivery of your goods, 24/7.",
        description2: "Whether for important documents, urgent packages, or delicate goods, we provide professional and punctual service."
      },
      express: {
        title: "Express Service",
        description: "Our express delivery service is designed to meet your urgent needs:",
        services: [
          "Delivery within 2 hours in Rouen and metropolitan area",
          "Service available 24/7",
          "Real-time package tracking",
          "Immediate delivery confirmation"
        ],
        learnMore: "Learn more"
      },
      business: {
        title: "Business Services",
        description: "Logistics solutions adapted to professional needs:",
        services: [
          "Confidential document transport",
          "Spare parts delivery",
          "Goods distribution",
          "Custom contracts"
        ],
        learnMore: "Contact us"
      },
      personal: {
        title: "Personal Services",
        description: "Transport solutions adapted to your personal needs:",
        services: [
          "Personal parcel transport",
          "Shopping and purchase delivery",
          "Gift delivery",
          "Fragile items transport"
        ],
        learnMore: "Book now"
      }
    }
  }
};
const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
} | undefined>(undefined);

// Provider Component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personnalisé pour utiliser le context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;