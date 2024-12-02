import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie
import styles from './Garantie.module.css'; // Importation du fichier CSS

const Garantie: React.FC = () => {
  return (
    <section className={styles.garantieContainer}>
      <img src="/image/stop.jpg" alt="Description de l'image" className={styles.garentieImage} />
      
      <div className={styles.garantieEnfant}>
        {/* Texte ajouté à gauche dans le container enfant */}
        <div className={styles.garantieText}>
          Nous vous <br /> garantissons
        </div>

        {/* Animation ajoutée à droite du texte */}
        <div className={styles.animationContainer}>
          <Player
            autoplay
            loop
            src="/animations/wired-outline-939-taxi-front-hover-pinch.json" // Chemin vers l'animation
            style={{ height: '50px', width: '50px' }} // Ajustez la taille de l'animation ici
          />
        </div>
      </div>
    </section>
  );
};

export default Garantie;



