import React from "react";
import Link from "next/link";
import styles from "./TrajetLongueDistance.module.css";
import Garantie from "../components/Garantie";
import { useLanguage } from '../context/LanguageContext';

const TrajetLongueDistance = () => {
  const { translations } = useLanguage();
  const { longDistance } = translations;

  return (
    <div className="w-full pt-24 bg-gray-100">
      {/* Navigation fil d'Ariane */}
      <div className="w-full px-8 py-4 flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          {longDistance.breadcrumb.home}
        </Link>
        <span className="text-gray-400">/</span>
        <Link
          href="/transport-de-personne"
          className="text-gray-600 hover:text-green-500"
        >
          {longDistance.breadcrumb.passengerTransport}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">
          {longDistance.breadcrumb.longDistance}
        </span>
      </div>

      {/* Section principale */}
      <section className={styles.additionalSection}>
        <div className={`${styles.additionalImage} ${styles.firstSection}`}>
          <img
            src="/image/Image aeroport.jpg"
            alt="Terminal d'aeroport"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.additionalContent}>
          <h2>{longDistance.mainSection.title}</h2>
          <p>{longDistance.mainSection.description1}</p>
          <p>{longDistance.mainSection.description2}</p>
        </div>
      </section>

      {/* Section Rouen-Amiens */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>{longDistance.rouenAmiens.title}</h2>
          <p>{longDistance.rouenAmiens.availableDrivers}</p>
          <p>{longDistance.rouenAmiens.description1}</p>
          <p>{longDistance.rouenAmiens.description2}</p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            {longDistance.rouenAmiens.learnMore}
          </Link>
        </div>
        <div className={`${styles.additionalImage} ${styles.secondSection}`}>
          <img
            src="/image/rouen-amiens.jpg"
            alt="Rouen Cathedral"
            className={styles.mainImage}
          />
        </div>
      </section>

      {/* Section Beauvais */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalImage}>
          <img src="/image/beauvais.jpg" alt="Beauvais Airport" />
        </div>
        <div className={styles.additionalContent}>
          <h2>{longDistance.beauvais.title}</h2>
          <p>{longDistance.beauvais.description}</p>
          <Link href="/contact" className={styles.enSavoirPlus}>
            {longDistance.beauvais.learnMore}
          </Link>
        </div>
      </section>

      {/* Section Charles de Gaulle */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>{longDistance.charlesDeGaulle.title}</h2>
          <p>{longDistance.charlesDeGaulle.description}</p>
          {longDistance.charlesDeGaulle.services && (
            <ul className="list-disc pl-6 space-y-2">
              {longDistance.charlesDeGaulle.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
          <Link href="/contact" className={styles.enSavoirPlus}>
            {longDistance.charlesDeGaulle.learnMore}
          </Link>
        </div>
        <div className={styles.additionalImage}>
          <img src="image/charle-de-gaule.jpg" alt="Charles de Gaulle Airport" />
        </div>
      </section>

      {/* Section Orly */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalImage}>
          <img src="/image/orly.jpg" alt="Orly Airport" />
        </div>
        <div className={styles.additionalContent}>
          <h2>{longDistance.orly.title}</h2>
          <p>{longDistance.orly.description}</p>
          {longDistance.orly.services && (
            <ul className="list-disc pl-6 space-y-2">
              {longDistance.orly.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          )}
          <Link href="/contact" className={styles.enSavoirPlus}>
            {longDistance.orly.learnMore}
          </Link>
        </div>
      </section>

      {/* Section Garantie avec animation */}
      <Garantie animated={true} />
    </div>
  );
};

export default TrajetLongueDistance;