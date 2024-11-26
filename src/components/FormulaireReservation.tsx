'use client';
import React from 'react';
import styles from './FormulaireReservation.module.css'; // Import du fichier CSS pour l'image

const FormulaireReservation: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Conteneur de l'image */}
      <div className={styles.imageContainer}>
        <img src="/image/reserves.jpg" alt="Image de fond" className={styles.image} />
      </div>

      {/* Conteneur du formulaire */}
      <div className={styles.formContainer}>
        {/* Conteneur enfant contenant le formulaire */}
        <div className={styles.childContainer}>
          {/* Titre du formulaire placé dans le conteneur enfant */}
          <h2 className={styles.formTitle}>
            Formulaire de <br /> réservation
          </h2>
          {/* Contenu du formulaire (vide pour l'instant) */}
        </div>
      </div>
    </div>
  );
};

export default FormulaireReservation;
