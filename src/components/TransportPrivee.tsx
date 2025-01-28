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
          <h1 className={styles.bannerTitle}>Service de transport privé premium à <strong>Rouen</strong></h1>
          <p className={styles.subtitle}>
            Faites confiance à <strong>e-TaxiLife</strong> pour tous vos déplacements dans la <strong>région rouennaise</strong>.
          </p>
          <p className={styles.bannerDescription}>
            Que vous ayez besoin d'un transport pour un rendez-vous professionnel, un déplacement personnel ou un transfert vers
            la gare ou l'aéroport, notre service de transport privé s'adapte à tous vos besoins dans la <strong>métropole de Rouen</strong>.
            Ponctuels, confortables et sécurisés, nos véhicules haut de gamme vous assurent un service premium sur-mesure.
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
            en toute sérénité. Que ce soit pour vous rendre à un rendez-vous d'affaires, récupérer vos proches à l'aéroport ou
            profiter d'une sortie en ville, nous adaptons notre service à vos besoins spécifiques.
          </p>
          <p className={styles.sectionDescription}>
            Avec notre flotte de véhicules haut de gamme, vous bénéficiez d'un confort optimal et d'un service irréprochable.
            Nos clients apprécient notre fiabilité, notre ponctualité et notre service attentionné.
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
          <h2 className={styles.sectionTitle}>Une couverture étendue dans la <strong>métropole rouennaise</strong></h2>
          <p className={styles.sectionDescription}>
            Que vous ayez besoin de vous déplacer dans <strong>Rouen</strong> ou dans les communes environnantes, nous intervenons dans l'ensemble
            de la <strong>métropole</strong>. De courts trajets en ville aux déplacements plus longs vers d'autres régions, notre service s'adapte
            à tous vos besoins de mobilité.
          </p>
          <p className={styles.sectionDescription}>
            Grâce à notre connaissance approfondie de la région, nos chauffeurs savent emprunter les itinéraires les plus
            efficaces pour vous conduire rapidement et en toute sécurité à destination. Vous pouvez compter sur nous pour
            vous transporter partout dans la <strong>métropole rouennaise</strong>.
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
            Soucieux de notre impact environnemental, nous sommes fiers de proposer une flotte 100% électrique. Nos véhicules
            zéro émission vous permettent de vous déplacer en réduisant considérablement votre empreinte carbone.
          </p>
          <p className={styles.sectionDescription}>
            En choisissant <strong>e-TaxiLife</strong>, vous optez pour une solution de transport durable sans compromis sur le confort ni la
            qualité du service. Ensemble, contribuons à la préservation de l'environnement dans la <strong>région rouennaise</strong>.
          </p>
        </div>
      </div>

      {/* Section Réservation */}
      <div className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2 className={styles.sectionTitle}>Réservez votre transport privé dès maintenant !</h2>
          <p className={styles.sectionDescription}>
            Que vous ayez besoin d'un trajet unique, d'un service récurrent ou d'une demande spécifique, n'hésitez pas à nous contacter.
            Nos équipes sont à votre écoute pour vous proposer la meilleure solution de transport privé adaptée à vos besoins dans
            la <strong>région rouennaise</strong>.
          </p>
        </div>
        <button className={styles.reservationButton}>Réserver un trajet</button>
      </div>
    </section>
  );
};

export default TransportPrivee;