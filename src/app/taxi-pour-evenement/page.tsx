'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import TaxiEvenement from '../../components/TaxiEvenement';
import FooterComponent from '../../components/Footer';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../../context/LanguageContext';

const TaxiEvenementPage = () => {
  return (
    <KitchnProvider>
      <LanguageProvider>
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <TaxiEvenement />

        {/* Footer */}
        <FooterComponent />
      </LanguageProvider>
    </KitchnProvider>
  );
};

export default TaxiEvenementPage;