'use client';

import React from 'react';
import Image from 'next/image';
import styles from './HeroImage.module.css';

const HeroImage: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/image/taxilife.jpg" // Ton image
        alt="Une belle vue de TaxiLife"
        layout="responsive" // L'image sera responsive
        width={1920} // Largeur par défaut
        height={400} // Hauteur ajustée
        priority
      />
    </div>
  );
};

export default HeroImage;
