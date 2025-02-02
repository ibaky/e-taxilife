import React from 'react';
import Link from 'next/link';
import styles from './TaxiEvenement.module.css';
import { useLanguage } from '../context/LanguageContext';
import Garantie from '../components/Garantie';

const TaxiEvenement = () => {
  const { translations } = useLanguage();
  const { nav } = translations;

  const handleReservation = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="w-full pt-24 bg-gray-100">
      {/* Navigation fil d'Ariane */}
      <div className="w-full px-8 py-4 flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          Accueil
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">
          {nav.eventTaxi}
        </span>
      </div>

      {/* Section Mariage */}
      <section className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Taxi pour Mariage</h2>
          <p className={styles.sectionDescription}>
            Faites de votre jour J un moment inoubliable avec notre service de taxi haut de gamme. 
            Nos chauffeurs expérimentés vous garantissent un transport élégant et ponctuel pour vous 
            et vos invités.
          </p>
          <p className={styles.sectionDescription}>
            Profitez de nos véhicules de luxe soigneusement décorés pour l&apos;occasion, 
            avec un service personnalisé qui s&apos;adapte à tous vos besoins.
          </p>
          <button className={styles.reservationButton} onClick={handleReservation}>
            Réserver pour votre mariage
          </button>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="image/taximariage.jpeg"
            alt="Taxi pour mariage"
            className={styles.sectionImage}
          />
        </div>
      </section>

      {/* Section Limousine */}
      <section className={styles.contentSection}>
        <div className={styles.imageWrapper}>
          <img
            src="image/taxilimousine.jpg"
            alt="Service limousine"
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Service Limousine</h2>
          <p className={styles.sectionDescription}>
            Voyagez avec style dans nos limousines luxueuses. Un service premium 
            pour vos événements spéciaux, rendez-vous d&apos;affaires ou sorties en ville.
          </p>
          <p className={styles.sectionDescription}>
            Nos chauffeurs professionnels vous offrent une expérience exclusive avec un 
            service discret et attentionné.
          </p>
          <button className={styles.reservationButton} onClick={handleReservation}>
            Réserver une limousine
          </button>
        </div>
      </section>

      {/* Section Soirées & Events */}
      <section className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Soirées & Événements</h2>
          <p className={styles.sectionDescription}>
            Profitez de vos soirées en toute sérénité avec notre service de taxi 
            événementiel. Idéal pour les soirées en boîte de nuit, concerts, 
            ou événements professionnels.
          </p>
          <p className={styles.sectionDescription}>
            Service disponible 24/7, réservation à l&apos;avance ou sur demande immédiate.
          </p>
          <button className={styles.reservationButton} onClick={handleReservation}>
            Réserver pour votre soirée
          </button>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="image/taxisoirée.jpeg"
            alt="Taxi pour soirées"
            className={styles.sectionImage}
          />
        </div>
      </section>

      {/* Section Événements Professionnels */}
      <section className={styles.contentSection}>
        <div className={styles.imageWrapper}>
          <img
            src="image/taxieve.jpg"
            alt="Événements professionnels"
            className={styles.sectionImage}
          />
        </div>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Événements Professionnels</h2>
          <p className={styles.sectionDescription}>
            Des solutions de transport sur mesure pour vos événements d&apos;entreprise : 
            séminaires, conférences, team buildings ou galas.
          </p>
          <p className={styles.sectionDescription}>
            Service personnalisable avec possibilité de transport groupé et 
            coordination logistique complète.
          </p>
          <button className={styles.reservationButton} onClick={handleReservation}>
            Demander un devis
          </button>
        </div>
      </section>

      {/* Section Garantie */}
      <Garantie animated={true} />
    </div>
  );
};

export default TaxiEvenement;
