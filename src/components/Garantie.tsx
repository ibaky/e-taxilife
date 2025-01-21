import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./Garantie.module.css";

const Garantie = ({ animated = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const garantieRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Déclenche l'animation quand l'élément devient visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Arrête d'observer une fois que l'animation est déclenchée
          observer.unobserve(entry.target);
        }
      },
      {
        // Déclenche quand au moins 20% de l'élément est visible
        threshold: 0.2
      }
    );

    if (garantieRef.current) {
      observer.observe(garantieRef.current);
    }

    return () => {
      if (garantieRef.current) {
        observer.unobserve(garantieRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={garantieRef}
      className={`${styles.garantieContainer} ${(animated && isVisible) ? styles.animated : ""}`}
    >
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
            src="/animations/wired-outline-860-electric-car-hover-pinch.json"
            style={{ height: "70px", width: "70px" }}
          />
          <div className={styles.textNextToAnimation}>
            Taxi Electrique
          </div>
        </div>

        {/* Animation "Transport pour tous" */}
        <div className={styles.animationTransportContainer}>
          <Player
            autoplay
            loop
            src="/animations/wired-outline-651-disabled-person-hover-pinch.json"
            style={{ height: "70px", width: "70px" }}
          />
          <div className={styles.textNextToAnimation}>
            Transport pour tous
          </div>
        </div>

        {/* Animation pour "Standard disponible 24h/7" */}
        <div className={styles.animationStandardContainer}>
          <Player
            autoplay
            loop
            src="animations/wired-outline-405-non-stop-24-h-hover-spin (1).json"
            style={{ height: "70px", width: "70px" }}
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