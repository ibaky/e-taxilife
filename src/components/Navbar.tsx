'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null); // Référence pour le titre

  // Fonction pour détecter le défilement
  const handleScroll = () => {
    if (window.scrollY > 1) {  // Si l'utilisateur défile de plus de 50px
      setScrolled(true);  // Applique une classe "scrolled"
    } else {
      setScrolled(false);  // Si l'utilisateur est en haut de la page
    }
  };

  // Écouter l'événement de défilement
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors de la suppression du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = titleRef.current;
    if (element) {
      let start: number | null = null; // Déclare start avec un type explicite
      const duration = 1000; // Durée de l'animation (ms)

      const animate = (timestamp: number) => {
        if (start === null) start = timestamp; // Initialise start lors de la première frame
        const progress = Math.min((timestamp - start) / duration, 1); // Calcul du progrès (de 0 à 1)
        element.style.transform = `translateY(${(1 - progress) * -20}px)`; // Déplace vers le bas
        element.style.opacity = `${progress}`; // Augmente l'opacité
        if (progress < 1) {
          requestAnimationFrame(animate); // Continue l'animation
        }
      };

      requestAnimationFrame(animate); // Démarre l'animation
    }
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo à gauche */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/image/logo.jpg"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>

      {/* Titre e-TaxiLife avec référence */}
      <div ref={titleRef} className={styles.navTitle}>
        <span className={styles.green}>E</span> -TaxiLife
      </div>

      {/* Contenu des liens et du numéro de téléphone */}
      <div className={styles.navContent}>
        <div className={styles.phoneContainer}>
          <Player
            autoplay
            loop
            src="/animations/animation.json"
            style={{ height: '40px', width: '40px' }}
          />
          <span className={styles.phoneNumber}>+33 6 12 34 56 78</span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/apropos" className={styles.navLink}>
              À propos
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/premium" className={styles.navLink}>
              Premium
            </Link>
          </li>
          <li>
            <Link href="/visite" className={styles.navLink}>
              Visite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
