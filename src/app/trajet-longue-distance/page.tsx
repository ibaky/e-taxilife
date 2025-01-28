'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import TrajetLongueDistance from '../../components/TrajetLongueDistance';
import FooterComponent from '../../components/Footer';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../../context/LanguageContext';

const TrajetLongueDistancePage = () => {
  return (
    <KitchnProvider>
      <LanguageProvider>
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <TrajetLongueDistance />

        {/* Footer */}
        <FooterComponent />
      </LanguageProvider>
    </KitchnProvider>
  );
};

export default TrajetLongueDistancePage;