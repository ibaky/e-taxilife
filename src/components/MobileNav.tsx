"use client"; // Force l'exécution côté client

import React, { useState, useEffect } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import styles from './mobilenav.module.css';

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const offset = window.scrollY;
        setIsScrolled(offset > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour scroller en douceur
  const scrollToElement = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.mobileNav} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="#reservation" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        scrollToElement("reservation");
      }}>
        <Calendar size={20} />
        <span>RÉSERVER</span>
      </a>
      <a href="#contact" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        scrollToElement("contact");
      }}>
        <Mail size={20} />
        <span>CONTACT</span>
      </a>
      <a href="tel:0235885050" className={styles.navItem}>
        <Phone size={20} />
        <span>02 35 88 50 50</span>
      </a>
    </nav>
  );
};

export default MobileNav;

