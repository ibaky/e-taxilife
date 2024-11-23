'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo à gauche */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/image/logo.jpg" // Chemin vers votre logo
            alt="Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>

      {/* Contenu avec animation et numéro de téléphone */}
      <div className={styles.navContent}>
        <div className={styles.phoneContainer}>
          {/* Animation Lottie */}
          <Player
            autoplay
            loop
            src="/animations/animation.json" // Chemin correct pour le fichier JSON
            style={{ height: '40px', width: '40px' }} // Taille de l'animation
          />
          <span className={styles.phoneNumber}>+33 6 12 34 56 78</span>
        </div>

        {/* Liens de navigation */}
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
}
