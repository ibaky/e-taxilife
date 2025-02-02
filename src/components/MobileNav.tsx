import React, { useState, useEffect } from 'react';
import { Calendar, Mail, Phone } from 'lucide-react';
import styles from './mobilenav.module.css';

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.mobileNav} ${isScrolled ? styles.scrolled : ''}`}>
      <a href="#reservation" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('reservation');
        element?.scrollIntoView({ behavior: 'smooth' });
      }}>
        <Calendar size={20} />
        <span>RÉSERVER</span>
      </a>
      <a href="#contact" className={styles.navItem} onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
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