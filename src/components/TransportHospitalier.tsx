"use client"; // ✅ Ajouté pour forcer le rendu côté client

import React from "react";
import Image from "next/image"; 
import styles from "./TransportHospitalier.module.css";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

const TransportHospitalier: React.FC = () => {
  const { translations } = useLanguage();
  const { transportHospitalier } = translations;

  return (
    <div className="w-full pt-24 bg-gray-100">
      <div className={styles.transportHospitalierContainer}>

        {/* Section Consultations */}
        <section className={`${styles.contentSection} mt-16`}>
          <Image
            src="/image/taxi-arrivee-hopital.webp"
            alt={transportHospitalier.consultations.title}
            className={styles.sectionImage}
            width={500}
            height={300} // ✅ Ajouté pour Next.js
          />
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportHospitalier.consultations.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportHospitalier.consultations.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportHospitalier.consultations.description2}
            </p>
          </div>
        </section>

        {/* Section Hospitalisation */}
        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportHospitalier.hospitalisation.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportHospitalier.hospitalisation.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportHospitalier.hospitalisation.description2}
            </p>
          </div>
          <Image
            src="/image/charles_nicolles.jpg"
            alt={transportHospitalier.hospitalisation.title}
            className={styles.sectionImage}
            width={500}
            height={300}
          />
        </section>

        {/* Section Mobilité Réduite */}
        <section className={styles.contentSection}>
          <Image
            src="/image/taxi-ambulance-louhans-9.jpg"
            alt={transportHospitalier.mobiliteReduite.title}
            className={styles.sectionImage}
            width={500}
            height={300}
          />
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportHospitalier.mobiliteReduite.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportHospitalier.mobiliteReduite.description1}
            </p>
            <p className={styles.sectionDescription}>
              {transportHospitalier.mobiliteReduite.description2}
            </p>
          </div>
        </section>

        {/* Section Réservation */}
        <section className={styles.contentSection}>
          <div className={styles.textBlock}>
            <h2 className={styles.sectionTitle}>
              {transportHospitalier.reservation.title}
            </h2>
            <p className={styles.sectionDescription}>
              {transportHospitalier.reservation.description}
            </p>
            <Link
              href="/contact"
              className={styles.reservationButton}
              aria-label={transportHospitalier.reservation.buttonText}
            >
              {transportHospitalier.reservation.buttonText}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

// ✅ Désactive la pré-génération statique pour éviter les erreurs de `document`
export const dynamic = "force-dynamic";

export default TransportHospitalier;
