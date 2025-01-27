import React from 'react';
import styles from './TransportPrivee.module.css';

const TransportPrivee: React.FC = () => {
  return (
    <section className={styles.transportPriveeContainer}>
      {/* Bannière principale */}
      <div className={styles.banner}>
        <img
          src="image/transportPrivee.jpeg"
          alt="Transport privé"
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>
          <h1 className={styles.bannerTitle}>Service de transport privé premium à Rouen</h1>
          <p className={styles.subtitle}>
            Faites confiance à e-TaxiLife pour tous vos déplacements dans la région rouennaise.
          </p>
          <p className={styles.bannerDescription}>
            Que vous ayez besoin d'un transport pour un rendez-vous, un déplacement professionnel ou un transfert, notre service
            de transport privé s'adapte à tous vos besoins dans la métropole de Rouen.
          </p>
          <button className={styles.reservationButton}>Réserver maintenant</button>
        </div>
      </div>

      {/* Section Services */}
      <div className={styles.contentSection}>
        <img
          src="image/chauffeursprivee.jpg"
          alt="Service flexible"
          className={styles.sectionImage}
        />
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Un service sur-mesure et confortable</h2>
          <p className={styles.sectionDescription}>
            Nos chauffeurs expérimentés assurent des trajets ponctuels et confortables, 24h/24 et 7j/7, pour vous transporter
            en toute sérénité.
          </p>
        </div>
      </div>

      {/* Section Métropole */}
      <div className={styles.contentSection}>
        <img
          src="image/priveeRouen.jpg"
          alt="Transport à Rouen"
          className={styles.sectionImageLarger}
        />
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Une couverture étendue dans la métropole rouennaise</h2>
          <p className={styles.sectionDescription}>
            Que vous ayez besoin de vous déplacer en ville ou sur des trajets plus longs, nous intervenons dans l'ensemble
            de Rouen et sa périphérie.
          </p>
        </div>
      </div>

      {/* Section Engagement Écologique */}
      <div className={styles.contentSection}>
        <img
          src="image/mercoEco.jpg"
          alt="Engagement écologique"
          className={styles.sectionImageSmaller}
        />
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Un transport responsable et écologique</h2>
          <p className={styles.sectionDescription}>
            Nous sommes fiers de contribuer à la réduction de la pollution avec une flotte 100% électrique.
            Optez pour une solution de transport durable sans compromis sur le confort ni la qualité du service.
          </p>
        </div>
      </div>

      {/* Section Réservation */}
      <div className={styles.reservationSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.reservationTitle}>Réservez votre transport privé dès maintenant !</h2>
          <p className={styles.reservationDescription}>
            Pour un trajet unique, un service récurrent ou une demande spécifique, contactez-nous et laissez-vous
            transporter en toute sérénité avec e-TaxiLife.
          </p>
        </div>
        <button className={styles.reservationButton}>Réserver un trajet</button>
      </div>
    </section>
  );
};

export default TransportPrivee;