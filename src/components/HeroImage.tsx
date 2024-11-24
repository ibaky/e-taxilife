'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroImage.module.css';

const HeroImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      {/* Image */}
      <Image
        src="/image/taxilife.jpg"
        alt="Une belle vue de TaxiLife"
        layout="responsive"
        width={1920}
        height={400}
        priority
      />

      {/* Texte au centre */}
      <div className={styles.centeredText}>
        Disponible 24h/7j
      </div>
    </div>
  );
};

export default HeroImage;
