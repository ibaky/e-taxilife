import React from "react";
import Link from "next/link";
import styles from "./TransportColis.module.css";
import Garantie from "../components/Garantie";
import { useLanguage } from '../context/LanguageContext';

const TransportColis = () => {
  const { translations } = useLanguage();
  const { transportColis } = translations;

  return (
    <div className="w-full pt-24 bg-gray-100">
      {/* Navigation fil d'Ariane */}
      <div className="w-full px-8 py-4 flex items-center gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          {transportColis.breadcrumb.home}
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">
          {transportColis.breadcrumb.parcelTransport}
        </span>
      </div>

      {/* Section principale */}
      <section className={styles.additionalSection}>
        <div className={`${styles.additionalImage} ${styles.firstSection}`}>
          <img
            src="/image/colismaz.jpg"
            alt="Transport de colis"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.additionalContent}>
          <h2>{transportColis.mainSection.title}</h2>
          <p>{transportColis.mainSection.description1}</p>
          <p>{transportColis.mainSection.description2}</p>
        </div>
      </section>

      {/* Section Express */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>{transportColis.express.title}</h2>
          <p>{transportColis.express.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {transportColis.express.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <Link href="/contact" className={styles.enSavoirPlus}>
            {transportColis.express.learnMore}
          </Link>
        </div>
        <div className={`${styles.additionalImage} ${styles.secondSection}`}>
          <img
            src="/image/replique-peugeot-406-taxi-2 (1).jpg"
            alt="Service de livraison express"
            className={styles.mainImage}
          />
        </div>
      </section>

      {/* Section Entreprises */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalImage}>
          <img 
            src="/image/Amazon-centre-logistique.jpg" 
            alt="Services pour entreprises"
          />
        </div>
        <div className={styles.additionalContent}>
          <h2>{transportColis.business.title}</h2>
          <p>{transportColis.business.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {transportColis.business.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <Link href="/contact" className={styles.enSavoirPlus}>
            {transportColis.business.learnMore}
          </Link>
        </div>
      </section>

      {/* Section Particuliers */}
      <section className={styles.additionalSection}>
        <div className={styles.additionalContent}>
          <h2>{transportColis.personal.title}</h2>
          <p>{transportColis.personal.description}</p>
          <ul className="list-disc pl-6 space-y-2">
            {transportColis.personal.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <Link href="/contact" className={styles.enSavoirPlus}>
            {transportColis.personal.learnMore}
          </Link>
        </div>
        <div className={styles.additionalImage}>
          <img src="/image/medicamentcolis.jpg" alt="Services aux particuliers" />
        </div>
      </section>

      {/* Section Garantie */}
      <Garantie animated={true} />
    </div>
  );
};

export default TransportColis;