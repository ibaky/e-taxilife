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
    </div>
  );
};

export default FormulaireReservation;
