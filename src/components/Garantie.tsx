// src/components/Garentie.tsx
import React from 'react';
import styles from './Garantie.module.css';  // Importation du fichier CSS

const Garantie: React.FC = () => {
  return (
    <section className={styles.garantieContainer}>
      {/* Ajouter une image à l'intérieur du conteneur */}
      <img src="/image/stop.jpg" alt="Image Description" className={styles.garentieImage} />
    </section>
  );
};

export default Garantie;


