'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import TransportPrivee from '../../components/TransportPrivee';
import FooterComponent from '../../components/Footer';
import { KitchnProvider } from 'kitchn';
import Garantie from '@/components/Garantie';

const TransportPriveePage = () => {
  return (
    <KitchnProvider>
      {/* Navbar */}
      <Navbar />

      {/* Contenu principal */}
      <TransportPrivee />
      
      
      <Garantie />
      
      {/* Footer */}
      <FooterComponent />
    </KitchnProvider>
  );
};

export default TransportPriveePage;

