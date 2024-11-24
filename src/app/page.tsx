'use client';
import Navbar from '../components/Navbar'; // Importer la Navbar
import HeroImage from '../components/HeroImage'; // Importer le composant HeroImage
import './globals.css'; // Import des styles globaux
import { KitchnProvider } from 'kitchn'; // Import du KitchnProvider si nécessaire

export default function Home() {
  return (
    <KitchnProvider>
      {/* Navbar */}
      <Navbar />

      {/* Image sous la navbar */}
      <HeroImage />
    </KitchnProvider>
  );
}
