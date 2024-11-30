'use client';

import React, { useState } from 'react';
import styles from './FormulaireReservation.module.css'; // Import du fichier CSS pour l'image

interface Errors {
  name?: string;
  lastName?: string;
  phone?: string;
  startAddress?: string;
  endAddress?: string;
  passengers?: string;
  luggage?: string;
  date?: string;
  agreement?: string;
}

const FormulaireReservation: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [startAddress, setStartAddress] = useState<string>('');
  const [endAddress, setEndAddress] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('');
  const [luggage, setLuggage] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({}); // Typage pour les erreurs

  // Validation des champs du formulaire
  const validateForm = (): boolean => {
    const errors: Errors = {};
    if (!name) errors.name = 'Le nom est requis';
    if (!lastName) errors.lastName = 'Le prénom est requis';
    if (!phone) errors.phone = 'Le téléphone est requis';
    if (!startAddress) errors.startAddress = 'L\'adresse de départ est requise';
    if (!endAddress) errors.endAddress = 'L\'adresse de destination est requise';
    if (!passengers) errors.passengers = 'Le nombre de passagers est requis';
    if (!luggage) errors.luggage = 'Le nombre de bagages est requis';
    if (!date) errors.date = 'La date de prise en charge est requise';
    if (!agreement) errors.agreement = 'Vous devez accepter les termes et conditions';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Fonction de soumission du formulaire
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche l'envoi traditionnel du formulaire

    if (validateForm()) {
      const data = { name, lastName, phone, startAddress, endAddress, passengers, luggage, date };

      try {
        const response = await fetch('http://localhost:5000/api/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // Envoi des données en JSON
        });

        const result = await response.json();
        if (response.ok) {
          alert('Réservation enregistrée avec succès');
        } else {
          alert(result.message || 'Une erreur est survenue');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          alert('Erreur de connexion au serveur');
        } else {
          alert('Une erreur inconnue est survenue');
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/image/reserves.jpg" alt="Image de fond" className={styles.image} />
      </div>

      <div className={styles.formContainer}>
        <div className={styles.childContainer}>
          <h2 className={styles.formTitle}>
            Formulaire de <br /> réservation
          </h2>

          <p className={styles.requiredText}>
            Les champs indiqués par un astérisque (*) sont obligatoires
          </p>

          {/* Le formulaire */}
          <form onSubmit={submitForm}> {/* Lier la fonction submitForm ici */}
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Nom*"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder="Prénom*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Téléphone*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder="Adresse de départ*"
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
              />
              {errors.startAddress && <span className={styles.error}>{errors.startAddress}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Adresse de destination*"
                value={endAddress}
                onChange={(e) => setEndAddress(e.target.value)}
              />
              {errors.endAddress && <span className={styles.error}>{errors.endAddress}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder="Nombre de passagers*"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
              {errors.passengers && <span className={styles.error}>{errors.passengers}</span>}
            </div>

            <div className={styles.inputContainer2}>
              <input
                type="text"
                className={styles.inputField}
                placeholder="Nombre de bagages*"
                value={luggage}
                onChange={(e) => setLuggage(e.target.value)}
              />
              {errors.luggage && <span className={styles.error}>{errors.luggage}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder="Heures*"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className={styles.error}>{errors.date}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="date"
                className={styles.inputFieldFullWidth}
                placeholder="Date de prise en charge*"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className={styles.error}>{errors.date}</span>}
            </div>

            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="agreement"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              <label htmlFor="agreement">
                En soumettant ce formulaire, j’accepte que les informations saisies soient traitées par  
                <span className={styles.highlight}> E-taxilife-rouen metropole</span> dans le cadre de ma demande de contact 
                et de la relation commerciale qui peut en découler.  
                <span className={styles.highlightLink}> En savoir plus en consultant notre politique de confidentialité</span>.
              </label>
              {errors.agreement && <span className={styles.error}>{errors.agreement}</span>}
            </div>

            {/* Bouton de soumission */}
            <button className={styles.submitButton} type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormulaireReservation;
