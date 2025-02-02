"use client";
import React from 'react';
import styles from './TransportPrivee.module.css';
import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

const TransportPrivee: React.FC = () => {
  const { translations } = useLanguage();
  const { nav, transportPrivee } = translations;
  
  const handleReservation = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="w-full">
      {/* Navigation fil d'Ariane */}
      <div className="w-full px-8 py-4 flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          {transportPrivee.breadcrumb.home}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">
          {nav.transportPrivate}
        </span>
      </div>

      <section className={styles.transportPriveeContainer}>
        {/* Bannière principale */}
        <div className={styles.banner}>
          <img
            src="/image/transportPrivee.jpeg"
            alt={nav.transportPrivate}
            className={styles.bannerImage}
          />
          <div className={styles.bannerText}>
            <h1 className={styles.bannerTitle}>{transportPrivee.mainSection.title}</h1>
            <p className={styles.subtitle}>
              {transportPrivee.mainSection.subtitle}
            </p>
            <p className={styles.bannerDescription}>
              {transportPrivee.mainSection.description}
            </p>
            <button 
              className={styles.reservationButton}
              onClick={handleReservation}
              aria-label={nav.transportPrivate}
            >
              {transportPrivee.booking.buttonText}
            </button>
          </div>
        </div>

        {/* Section Services */}
        <div className={styles.contentSection}>
          <img
            src="/image/chauffeursprivee.jpg"
            alt={transportPrivee.services.title}
            className={styles.sectionImage}
          />
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportPrivee.services.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportPrivee.services.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportPrivee.services.description2}
            </p>
          </div>
        </div>

        {/* Section Métropole */}
        <div className={styles.contentSection}>
          <img
            src="/image/priveeRouen.jpg"
            alt={`${nav.transportPrivate} Rouen`}
            className={styles.sectionImageLarger}
          />
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportPrivee.metropole.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportPrivee.metropole.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportPrivee.metropole.description2}
            </p>
          </div>
        </div>

        {/* Section Écologique */}
        <div className={styles.contentSection}>
          <img
            src="/image/mercoEco.jpg"
            alt={transportPrivee.eco.title}
            className={styles.sectionImageSmaller}
          />
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportPrivee.eco.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportPrivee.eco.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportPrivee.eco.description2}
            </p>
          </div>
        </div>

        {/* Section Réservation */}
        <div className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportPrivee.booking.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportPrivee.booking.description}
            </p>
          </div>
          <button 
            className={styles.reservationButton}
            onClick={handleReservation}
            aria-label={nav.transportPrivate}
          >
            {transportPrivee.booking.buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TransportPrivee;