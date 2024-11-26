'use client';
import React from 'react';
import styles from './FormulaireReservation.module.css'; // Import du fichier CSS pour l'image

const FormulaireReservation: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Conteneur de l'image */}
      <div className={styles.imageContainer}>
        <img src="/image/reserves.jpg" alt="Image de fond" className={styles.image} />
      </div>

      {/* Conteneur du formulaire */}
      <div className={styles.formContainer}>
        {/* Conteneur enfant contenant le formulaire */}
        <div className={styles.childContainer}>
          {/* Titre du formulaire placé dans le conteneur enfant */}
          <h2 className={styles.formTitle}>
            Formulaire de <br /> réservation
          </h2>

          {/* Texte sous le titre */}
          <p className={styles.requiredText}>
            Les champs indiqués par un astérisque (*) sont obligatoires
          </p>

          {/* Conteneur des champs Nom, Prénom, Téléphone, Adresse de départ */}
          <div className={styles.inputContainer}>
            <input type="text" className={styles.inputField} placeholder="Nom*" />
            <input type="text" className={styles.inputField} placeholder="Prénom*" />
          </div>

          <div className={styles.inputContainer}>
            <input type="text" className={styles.inputField} placeholder="Téléphone*" />
            <input type="text" className={styles.inputField} placeholder="Adresse de départ*" />
          </div>

          <div className={styles.inputContainer}>
            <input type="text" className={styles.inputField} placeholder="Adresse de destination*" />
            <input type="text" className={styles.inputField} placeholder="Nombre de passagers*" />
          </div>

          <div className={styles.inputContainer2}>
            <input type="text" className={styles.inputField} placeholder="Nombre de bagages*" />
            <input type="text" className={styles.inputField} placeholder="Heures*" />
          </div>

          <div className={styles.inputContainer}>
            <input type="date" className={styles.inputFieldFullWidth} placeholder="Date de prise en charge" />
          </div>

          {/* Case à cocher et texte */}
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">
              En soumettant ce formulaire, j’accepte que les informations saisies soient traitées par  
              <span className={styles.highlight}> E-taxilife-rouen metropole</span> dans le cadre de ma demande de contact 
              et de la relation commerciale qui peut en découler. En savoir plus en consultant notre 
              <span className={styles.highlightLink}>politique de confidentialité</span>.
            </label>
          </div>
            {/* Bouton "Envoyer" */}
            <button className={styles.submitButton}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default FormulaireReservation;


