'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '../context/LanguageContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
 const [scrolled, setScrolled] = useState(false);
 const titleRef = useRef<HTMLDivElement>(null);
 const { language, setLanguage } = useLanguage();

 const handleScroll = () => {
   if (window.scrollY > 1) {
     setScrolled(true);
   } else {
     setScrolled(false);
   }
 };

 useEffect(() => {
   window.addEventListener('scroll', handleScroll);
   return () => {
     window.removeEventListener('scroll', handleScroll);
   };
 }, []);

 useEffect(() => {
   const element = titleRef.current;
   if (element) {
     let start: number | null = null;
     const duration = 1000;

     const animate = (timestamp: number) => {
       if (start === null) start = timestamp;
       const progress = Math.min((timestamp - start) / duration, 1);
       element.style.transform = `translateY(${(1 - progress) * -20}px)`;
       element.style.opacity = `${progress}`;
       if (progress < 1) {
         requestAnimationFrame(animate);
       }
     };

     requestAnimationFrame(animate);
   }
 }, []);

 return (
   <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
     <div className={styles.logo}>
       <Link href="/">
         <Image src="/image/logo.jpg" alt="Logo" width={80} height={80} priority />
       </Link>
     </div>

     <div ref={titleRef} className={styles.navTitle}>
       <span className={styles.green}>E</span> -TaxiLife
     </div>

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
           <Link href="/transport-privee" className={styles.navLink}>
             {language === 'fr' ? 'Transport Privée' : 'Private Transport'}
           </Link>
         </li>
         <li>
           <Link href="/trajet-longue-distance" className={styles.navLink}>
             {language === 'fr' ? 'Trajet longue distance' : 'Long Distance Travel'}
           </Link>
         </li>
         <li>
           <Link href="/transport-hospitalier" className={styles.navLink}>
             {language === 'fr' ? 'Transport hospitalier' : 'Hospital Transport'}
           </Link>
         </li>
         <li>
           <Link href="/transport-de-colis" className={styles.navLink}>
             {language === 'fr' ? 'Transport de colis' : 'Parcel Transport'}
           </Link>
         </li>
         <li>
           <Link href="/taxi-pour-evenement" className={styles.navLink}>
             {language === 'fr' ? 'Taxi pour événement' : 'Event Taxi'}
           </Link>
         </li>
         <li>
           <div className={styles.languageSelector}>
             <button 
               className={`${styles.langButton} ${language === 'fr' ? styles.active : ''}`}
               onClick={() => setLanguage('fr')}
             >
               FR
             </button>
             <span className={styles.langSeparator}>|</span>
             <button 
               className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
               onClick={() => setLanguage('en')}
             >
               EN
             </button>
           </div>
         </li>
       </ul>
     </div>
   </nav>
 );
};

export default Navbar;