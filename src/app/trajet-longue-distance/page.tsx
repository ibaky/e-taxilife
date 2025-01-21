'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import TrajetLongueDistance from '../../components/TrajetLongueDistance';
import FooterComponent from '../../components/Footer';
import { KitchnProvider } from 'kitchn';

const TrajetLongueDistancePage = () => {
  return (
    <KitchnProvider>
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <TrajetLongueDistance />

      {/* Footer */}
      <FooterComponent />
    </KitchnProvider>
  );
};

export default TrajetLongueDistancePage;