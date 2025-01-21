import React from "react";
import Link from "next/link";
import styles from "./TrajetLongueDistance.module.css";
import Garantie from "../components/Garantie";

const TrajetLongueDistance = () => {
  return (
    <div className="w-full pt-24 bg-gray-50">
      {/* Navigation fil d'Ariane */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
        <Link href="/" className="text-gray-600 hover:text-green-500">
          Accueil
        </Link>
        <span className="text-gray-400">/</span>
        <Link href="/transport-de-personne" className="text-gray-600 hover:text-green-500">
          Transport de personne
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-green-500 font-medium">Longue distance</span>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-4 my-8 flex flex-col md:flex-row gap-8">
        {/* Container Image avec effet rideau */}
        <div className="flex-1 max-w-full md:max-w-[60%]">
          <div className={styles.curtainImage}>
            <img
              src="/image/Image aeroport.jpg"
              alt="Terminal d'aeroport"
              className={styles.mainImage}
            />
          </div>
        </div>

        {/* Contenu Texte */}
        <div className="flex-1 max-w-full md:max-w-[40%]">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Taxi à Rouen pour trajet longue distance en Seine-Maritime
          </h1>
          
          <h2 className="text-xl text-gray-600 mb-6">
            Déplacement en taxi pour votre trajet longue et grande distance au départ de Rouen (76)
          </h2>
          
          <div className="flex flex-col gap-4 text-gray-800">
            <p className="leading-relaxed">
              Vous habitez ou logez à <strong>Rouen 76</strong> et vous recherchez un <strong>taxi pour un trajet longue distance</strong> ? e-TaxiLife est là pour vous.
            </p>
            
            <p className="leading-relaxed">
              En effet, quil sagisse de vous rendre à un aeroport, une gare, ou toute autre destination en dehors de la <strong>Seine Maritime 76</strong>, nous pouvons vous emmener où vous le désirez.
            </p>
            
            <p className="leading-relaxed">
              Seul ou à plusieurs, il vous suffit de nous appeler, de nous faire part de vos besoins et nous saurons vous trouver un chauffeur avec un vehicule adapté.
            </p>
            
            <p className="leading-relaxed">
              Si vous recherchez un <strong>taxi pour effectuer un trajet longue distance</strong> quel quil soit, contactez nous au {" "}
              <span className="text-green-500 font-bold">06 12 34 56 78</span> ou remplissez le formulaire de contact. 
              Nous nous ferons un plaisir de vous accompagner.
            </p>
          </div>
        </div>
      </div>

      {/* Section Tarifs */}
      <div className="bg-gray-50 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Tarif dun taxi pour un départ de Rouen vers Amiens
            </h2>
            <p className="text-gray-600 mb-6">
              120 chauffeurs disponibles 7j sur 7 !
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md
                        font-medium transition-colors hover:bg-green-600"
            >
              EN SAVOIR PLUS →
            </Link>
          </div>
          
          <div className="flex-1">
            <div className={styles.secondImageContainer}>
              <img
                src="/image/rouen-amiens.jpg"
                alt="Cathedrale de Rouen"
                className={styles.secondImage}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Garantie avec animation */}
      <Garantie animated={true} />
    </div>
  );
};

export default TrajetLongueDistance;