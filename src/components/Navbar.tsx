'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {/* Intégration du logo avec le chemin correct */}
        <Link href="/">
          <Image
            src="/image/logo.jpg" // Chemin vers le fichier logo.jpg
            alt="Logo"
            width={80} // Largeur de l'image
            height={80} // Hauteur de l'image
            priority // Chargement prioritaire pour le logo
          />
        </Link>
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
    </nav>
  );
}
