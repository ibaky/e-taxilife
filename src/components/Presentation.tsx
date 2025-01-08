// src/components/Presentation.tsx
import React from 'react';
import Link from 'next/link'; // Importation de Link pour la navigation
import styles from './Presentation.module.css'; // Importation des styles CSS Modules

interface ContainerProps {
  title: string;
  content: string;
  imageUrl?: string; // L'image est optionnelle
  link?: string; // Lien pour la navigation
}

const Presentation: React.FC = () => {
  // Données pour les containers 1, 2, 3
  const containersData = [
    { title: "Transport Privée", content: "Contenu pour le premier container.", imageUrl: "/image/TaxiPrivee.jpg", link: "/transport-privee" },
    { title: "Trajet longue distance", content: "Contenu pour le deuxième container.", imageUrl: "/image/reserve.jpg", link: "/trajet-longue-distance" },
    { title: "Transport hospitalier", content: "Contenu pour le troisième container.", imageUrl: "/image/handicape.jpg", link: "/transport-hospitalier" },
  ];

  // Données pour les containers 4 et 5
  const additionalContainersData = [
    { title: "Transport de colis", content: "Contenu pour le quatrième container.", imageUrl: "/image/colis.jpeg", link: "/transport-colis" },
    { title: "Taxi pour événement", content: "Contenu pour le cinquième container.", imageUrl: "/image/taxiMercedes.jpg", link: "/taxi-evenement" },
  ];

  // Composant Container
  const Container: React.FC<ContainerProps> = ({ title, content, imageUrl, link }) => (
    <div className={styles.container1}>
      <Link href={link || "#"} passHref legacyBehavior>
        <a className={styles.linkWrapper}>
          {/* Afficher l'image si l'URL est définie */}
          {imageUrl && <img src={imageUrl} alt={title} className={styles.containerImage} />}

          {/* Afficher le texte sous l'image */}
          <div className={styles.transportText}>{title}</div>

          {/* Contenu du container */}
          <p>{content}</p>
        </a>
      </Link>
    </div>
  );

  return (
    <section className={styles.presentationContainer}>
      <h2 className={styles.title}>Nos prestations</h2>

      {/* Wrapper pour les 3 premiers containers */}
      <div className={styles.containerWrapper}>
        {containersData.map((container, index) => (
          <Container
            key={index}
            title={container.title}
            content={container.content}
            imageUrl={container.imageUrl}
            link={container.link}
          />
        ))}
      </div>

      {/* Wrapper pour les containers 4 et 5 */}
      <div className={styles.containerWrapper2}>
        {additionalContainersData.map((container, index) => (
          <Container
            key={index}
            title={container.title}
            content={container.content}
            imageUrl={container.imageUrl}
            link={container.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Presentation;
