'use client';
import Navbar from '../components/Navbar'; // Importer la Navbar
import HeroImage from '../components/HeroImage'; // Importer HeroImage
import FormulaireReservation from '../components/FormulaireReservation'; // Importer le formulaire
import Presentation from '../components/Presentation'; // Importer Presentation
import Garantie from '../components/Garantie'; // Importer le composant Garantie
import FooterComponent from '../components/Footer'; // Importer Footer
import './globals.css'; // Import des styles globaux
import { KitchnProvider } from 'kitchn'; // Import du KitchnProvider si nécessaire

export default function Home() {
  return (
    <KitchnProvider>
      {/* Navbar */}
      <Navbar />

      {/* HeroImage (image déjà incluse dans ce composant) */}
      <HeroImage />

      {/* Formulaire en dessous de l'image */}
      <FormulaireReservation />

      {/* Ajouter Presentation en dessous du formulaire */}
      <Presentation />

      {/* Ajouter Garantie sous la section Presentation */}
      <Garantie />

      {/* Ajouter Footer en bas de la page */}
      <FooterComponent />
    </KitchnProvider>
  );
}
