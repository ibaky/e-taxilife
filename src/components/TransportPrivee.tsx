"use client";

import React from "react";
import styles from "./TransportPrivee.module.css";

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
          <span className={styles.highlight}>Transport Privé</span>
          <h1>Transport de personne Transport privé Rouen e-TaxiLife</h1>
          <p className={styles.largeBoldText}>
            <strong>Le transport privé avec e-TaxiLife dans la Seine Maritime 76</strong>
          </p>
          <p>
            Vous avez besoin d'organiser un transport aux alentours de <strong>Rouen 76 et sa métropole</strong> ?
            Notre société e-TaxiLife est en mesure de répondre à vos besoins en transport privé. En effet, qu'il s'agisse
            de vous rendre à un rendez-vous personnel, un rendez-vous professionnel, à la gare, à l'aéroport ou autre, nous
            pouvons venir vous chercher et vous déposer à votre lieu de destination sur simple demande.
          </p>
          <p>
            Nous intervenons dans toute la <strong>métropole Rouennaise</strong> selon vos besoins. Notre priorité est la
            satisfaction client, nous mettons un point d'honneur à vous transporter en toute sécurité, en temps et en heure.
            Contactez-nous dès maintenant pour réserver votre <strong>transport privé dans Rouen 76 et sa métropole</strong>.
          </p>
        </div>
      </div>

      {/* Section Services */}
      <div className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2>Un service sur-mesure pour tous vos besoins</h2>
          <p>
            Que ce soit pour un rendez-vous personnel, un déplacement professionnel, un transfert vers la gare ou l’aéroport,
            notre service de transport privé s’adapte à vos exigences. Nous assurons des trajets ponctuels et confortables,
            avec des chauffeurs expérimentés, à votre disposition 24h/24 et 7j/7.
          </p>
        </div>
        <img
          src="image/chauffeursprivee.jpg"
          alt="Service flexible"
          className={styles.sectionImage}
        />
      </div>

      {/* Section Métropole */}
      <div className={styles.contentSection}>
        <img
          src="image/priveeRouen.jpg"
          alt="Transport à Rouen"
          className={styles.sectionImage}
        />
        <div className={styles.textBlock}>
          <h2>Une couverture étendue dans toute la métropole Rouennaise</h2>
          <p>
            Nous intervenons dans l’ensemble de Rouen et sa périphérie, répondant à toutes vos demandes, qu’il s’agisse
            de courtes distances en ville ou de trajets longue distance vers d’autres régions.
          </p>
        </div>
      </div>

      {/* Section Engagement Écologique */}
      <div className={styles.contentSection}>
        <div className={styles.textBlock}>
          <h2>Un transport responsable et écologique</h2>
          <p>
            Nous sommes fiers de contribuer à la réduction de la pollution avec une flotte 100% électrique.
            Optez pour une solution de transport durable sans compromis sur le confort ni la qualité du service.
          </p>
        </div>
        <img
          src="image/mercoEco.jpg"
          alt="Engagement écologique"
          className={styles.sectionImage}
        />
      </div>

      {/* Section Réservation */}
      <div className={styles.reservationSection}>
        <h2>Réservez votre transport privé dès maintenant !</h2>
        <p>
          Pour un trajet unique, un service récurrent ou une demande spécifique, contactez-nous dès aujourd’hui et laissez-vous
          transporter en toute sérénité avec e-TaxiLife.
        </p>
        <button className={styles.reservationButton}>Réserver un trajet</button>
      </div>
    </section>
  );
};

export default TransportPrivee;
