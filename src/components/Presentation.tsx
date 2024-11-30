// src/components/Presentation.tsx
import React from 'react';
import styles from './Presentation.module.css';  // Importation des styles CSS Modules

interface ContainerProps {
  title: string;
  content: string;
  imageUrl?: string;  // L'image est optionnelle
}

const Presentation: React.FC = () => {
  // Données fictives pour les containers
  const containersData = [
    { title: "Transport Privée", content: "Contenu pour le premier container.", imageUrl: "/image/TaxiPrivee.jpg" },
    { title: "Trajet longue distance", content: "Contenu pour le deuxième container.", imageUrl: "/image/trajet.jpg" },
    { title: "Transport hospitalier", content: "Contenu pour le troisième container.", imageUrl: "/image/Patient.jpeg" },  // Ajout du troisième container
  ];

  // Composant Container
  const Container: React.FC<ContainerProps> = ({ title, content, imageUrl }) => {
    return (
      <div className={styles.container1}>
        {/* Afficher l'image si l'URL est définie */}
        {imageUrl && <img src={imageUrl} alt={title} className={styles.containerImage} />}
        
        {/* Afficher le texte sous l'image dans la zone verte */}
        {title === "Transport Privée" && (
          <div className={styles.transportText}>
            {title}
          </div>
        )}
        {title === "Trajet longue distance" && (
          <div className={styles.transportText}>
            {title}
          </div>
        )}
        {title === "Transport hospitalier" && (
          <div className={styles.transportText}>
            {title}
          </div>
        )}
        
        {/* Contenu du container */}
        <p>{content}</p>
      </div>
    );
  };

  return (
    <section className={styles.presentationContainer}>
      {/* Titre Présentation centré au-dessus des containers */}
      <h2 className={styles.title}>Nos prestations</h2>

      {/* Wrapper pour les 3 premiers containers sur la même ligne */}
      <div className={styles.containerWrapper}>
        {containersData.map((container, index) => (
          <Container
            key={index}
            title={container.title}
            content={container.content}
            imageUrl={container.imageUrl}  // Passe l'image ici
          />
        ))}
      </div>

      {/* Container 4, sur une nouvelle ligne */}
      <div className={`${styles.container} ${styles.container4}`}>
        <h3>Container 4</h3>
        <p>Contenu pour le quatrième container.</p>
      </div>
    </section>
  );
};

export default Presentation;

