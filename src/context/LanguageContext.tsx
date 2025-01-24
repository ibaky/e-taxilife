// LanguageContext.tsx
'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'fr' | 'en';

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

interface GarantieTranslations {
 title: string;
 subtitle: string;
 electricTaxi: string;
 transportForAll: string;
 available24_7: string;
 imageAlt: string;
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

interface Translations {
 nav: NavigationTranslations;
 hero: HeroTranslations;
 form: FormTranslations;
 garantie: GarantieTranslations;
 presentation: PresentationTranslations;
}

interface LanguageContextType {
 language: Language;
 setLanguage: (lang: Language) => void;
 translations: Translations;
}

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
     agreement: "By submitting this form, I agree that the entered information will be processed by E-taxilife-rouen metropole as part of my contact request and potential business relationship.",
     submitButton: "Submit",
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
         title: "Parcel Delivery",
         content: "Secure parcel delivery"
       },
       eventTaxi: {
         title: "Event Taxi",
         content: "Service for your special events"
       }
     }
   }
 }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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