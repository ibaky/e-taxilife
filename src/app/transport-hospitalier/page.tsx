'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import TransportHospitalier from '../../components/TransportHospitalier';
import FooterComponent from '../../components/Footer';
import Garantie from '../../components/Garantie';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../../context/LanguageContext';

const TransportHospitalierPage = () => {
  return (
    <KitchnProvider>
      <LanguageProvider>
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <TransportHospitalier />

        {/* Section Garantie avec animation */}
        <Garantie animated={true} />

        {/* Footer */}
        <FooterComponent />
      </LanguageProvider>
    </KitchnProvider>
  );
};

export default TransportHospitalierPage;