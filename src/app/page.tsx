'use client';
import Navbar from '../components/Navbar'; // Importer la Navbar
import './globals.css'; // Import des styles globaux
import { KitchnProvider } from 'kitchn'; // Import du KitchnProvider si nécessaire

export default function Home() {
  return (
    <KitchnProvider>
      <Navbar />
    </KitchnProvider>
  );
}
