// HeroImage.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import styles from './HeroImage.module.css';

const HeroImage: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.imageContainer}>
      <Image
        src="/image/taxilife.jpg"
        alt="Une belle vue de TaxiLife"
        layout="responsive"
        width={1920}
        height={400}
        priority
      />
      <div className={styles.centeredText}>
        {translations.hero.available}
      </div>
    </div>
  );
};

export default HeroImage;