import React from "react";
import Link from "next/link";
import styles from "./TrajetLongueDistance.module.css";
import Garantie from "../components/Garantie";

const TrajetLongueDistance = () => {
  return (
    <div className="w-full pt-24 bg-gray-100">
      {/* Navigation fil d'Ariane */}
      <div className="w-full px-8 py-4 flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          Accueil
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          href="/transport-de-personne"
          className="text-gray-600 hover:text-green-500"
        >
          Transport de personne
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">Longue distance</span>
      </div>

      {/* Section principale */}
      <section className={styles.additionalSection}>
        <div className={`${styles.additionalImage} ${styles.firstSection}`}>
          <img
            src="/image/Image aeroport.jpg"
            alt="Terminal d'aeroport"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.additionalContent}>
          <h2>Déplacement en taxi pour votre trajet longue et grande distance au départ de Rouen (76)</h2>
          <p>
            Vous habitez ou logez à <strong>Rouen 76</strong> et vous recherchez un <strong>taxi pour un trajet longue distance</strong> ? e-TaxiLife est là pour vous. En effet, qu'il s'agisse de vous rendre à un aéroport, une gare, ou toute autre destination en dehors de la <strong>Seine Maritime 76</strong>, nous pouvons vous emmener où vous le désirez.
          </p>
          <p>
            Seul ou à plusieurs, il vous suffit de nous appeler, de nous faire part de vos besoins et nous saurons vous trouver un chauffeur avec un véhicule adapté. Si vous recherchez un <strong>taxi pour effectuer un trajet longue distance</strong> quel qu'il soit, contactez-nous au <span className={styles.phoneNumber}>06 12 34 56 78</span> ou remplissez le formulaire de contact. Nous nous ferons un plaisir de vous accompagner.
          </p>
        </div>
      </section>

      {/* Section Rouen-Amiens */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>Tarif d'un taxi pour un départ de Rouen vers Amiens</h2>
          <p>
            120 chauffeurs disponibles 7j sur 7 !
          </p>
          <p>
            Notre service de taxi Rouen-Amiens vous garantit un voyage confortable et sécurisé. Le trajet d'environ 120 kilomètres est effectué par nos chauffeurs expérimentés qui connaissent parfaitement l'itinéraire.
          </p>
          <p>
            Nous proposons des tarifs transparents et compétitifs, avec un prix fixe établi à l'avance. Le trajet peut être réalisé à toute heure du jour ou de la nuit, avec une prise en charge à l'adresse de votre choix.
          </p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            EN SAVOIR PLUS →
          </Link>
        </div>
        <div className={`${styles.additionalImage} ${styles.secondSection}`}>
          <img
            src="/image/rouen-amiens.jpg"
            alt="Cathédrale de Rouen"
            className={styles.mainImage}
          />
        </div>
      </section>

      {/* Section Beauvais */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalImage}>
          <img src="/image/beauvais.jpg" alt="Aéroport de Beauvais" />
        </div>
        <div className={styles.additionalContent}>
          <h2>Taxi pour un transport de Rouen à l'aéroport de Beauvais</h2>
          <p>
            Besoin d'un taxi pour vous rendre à l'aéroport de Beauvais au départ
            de Rouen ? Les Taxis sont à votre disposition ! Avec nos 120
            chauffeurs expérimentés, vous êtes assurés de trouver le taxi qu'il
            vous faut. Nos services comprennent :
            Un trajet d'environ 1h30 dans des conditions optimales, une prise en charge à votre domicile ou à l'adresse de votre choix, une assistance avec vos bagages, et un suivi en temps réel des vols pour adapter les horaires si nécessaire.
            Nous connaissons parfaitement les spécificités de l'aéroport de Beauvais et ses différents terminaux. Notre objectif est de vous permettre d'arriver sereinement et à l'heure pour votre vol, sans le stress de la conduite ou du stationnement.
          </p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            EN SAVOIR PLUS →
          </Link>
        </div>
      </section>

      {/* Section Charles de Gaulle */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>Taxi pour un trajet longue distance à l'aéroport Paris Charles de Gaulle</h2>
          <p>
            Nous vous proposons un service de taxi premium pour vos trajets vers
            l'aéroport Charles de Gaulle. Un service professionnel et ponctuel, adapté aux exigences des voyageurs d'affaires comme des particuliers.
            Le trajet Rouen-Charles de Gaulle est l'un de nos itinéraires les plus fréquents. Nos chauffeurs connaissent parfaitement les différents terminaux et les accès les plus rapides selon les horaires. Nous assurons :
            • Un temps de trajet optimisé grâce à notre connaissance du trafic parisien
            • Une surveillance en temps réel des conditions de circulation
            • Des véhicules spacieux et confortables, idéaux pour les longs trajets
            • Une prise en charge possible très tôt le matin ou tard le soir
            • Un service de tracking des vols pour adapter l'horaire de prise en charge si nécessaire
          </p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            EN SAVOIR PLUS →
          </Link>
        </div>
        <div className={styles.additionalImage}>
          <img src="image/charle-de-gaule.jpg" alt="Aéroport Charles de Gaulle" />
        </div>
      </section>

      {/* Section Orly */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalImage}>
          <img src="/image/orly.jpg" alt="Aéroport d'Orly" />
        </div>
        <div className={styles.additionalContent}>
          <h2>Transport aéroport Orly depuis Rouen</h2>
          <p>
            Service de taxi disponible pour vos trajets vers l'aéroport d'Orly.
            Confort et ponctualité garantis pour tous vos déplacements. Notre expertise sur cet axe nous permet de vous offrir :

            Une prise en charge personnalisée et un accompagnement complet depuis Rouen jusqu'à votre terminal à Orly. Le trajet dure environ 2 heures, pendant lesquelles vous profiterez du confort de nos véhicules haut de gamme.
            
            Nous desservons les différents terminaux d'Orly (Ouest et Sud) et adaptons notre service selon vos besoins :
            • Trajets tôt le matin ou tard le soir
            • Transport de bagages volumineux
            • Sièges enfants sur demande
            • Accueil avec pancarte nominative
            • Suivi en temps réel de votre trajet
            
            Notre service client est disponible 24/7 pour répondre à toutes vos questions et gérer les modifications de dernière minute.
          </p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            EN SAVOIR PLUS →
          </Link>
        </div>
      </section>

      {/* Section Garantie avec animation */}
      <Garantie animated={true} />
    </div>
  );
};

export default TrajetLongueDistance;