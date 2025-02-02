"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import styles from './mobilenav.module.css';

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.mobileNav} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="#reservation" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        handleScrollToSection("reservation");
      }}>
        <Calendar size={20} />
        <span>RÉSERVER</span>
      </a>
      <a href="#contact" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        handleScrollToSection("contact");
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

