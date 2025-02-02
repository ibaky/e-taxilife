// /app/transport-colis/page.tsx

'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import TransportColis from '../../components/TransportColis';
import FooterComponent from '../../components/Footer';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../../context/LanguageContext';

const TransportColisPage = () => {
  return (
    <KitchnProvider>
      <LanguageProvider>
        {/* Navbar */}
        <Navbar />

        {/* Contenu principal */}
        <TransportColis />

        {/* Footer */}
        <FooterComponent />
      </LanguageProvider>
    </KitchnProvider>
  );
};

export default TransportColisPage;