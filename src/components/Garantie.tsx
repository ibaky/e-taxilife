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

        {/* Conteneur pour l'animation et le texte à côté */}
        <div className={styles.animationTextContainer}>
          <Player
            autoplay
            loop
            src="/animations/wired-outline-860-electric-car-hover-pinch.json" // Chemin vers l'animation
            style={{ height: '70px', width: '70px' }} // Ajustez la taille de l'animation ici
          />
          <div className={styles.textNextToAnimation}>
            Taxi Electrique
          </div>
        </div>

        {/* Nouvelle animation "Transport pour tous" sous la première animation */}
        <div className={styles.animationTransportContainer}>
          <Player
            autoplay
            loop
            src="/animations/wired-outline-651-disabled-person-hover-pinch.json" // Assurez-vous d'avoir le bon chemin pour l'animation
            style={{ height: '70px', width: '70px' }} // Ajustez la taille de la nouvelle animation
          />
          <div className={styles.textNextToAnimation}>
            Transport pour tous
          </div>
        </div>

        {/* Nouvelle animation pour "Standard disponible 24h/7" */}
        <div className={styles.animationStandardContainer}>
          <Player
            autoplay
            loop
            src="animations/wired-outline-405-non-stop-24-h-hover-spin (1).json" // Assurez-vous d'avoir l'animation
            style={{ height: '70px', width: '70px' }} // Ajustez la taille de la nouvelle animation
          />
          <div className={styles.textNextToAnimation}>
            Standard disponible 24h/7
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Garantie;




