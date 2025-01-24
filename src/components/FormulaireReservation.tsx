// FormulaireReservation.tsx
'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import styles from './FormulaireReservation.module.css';

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
  const { translations } = useLanguage();
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [startAddress, setStartAddress] = useState<string>('');
  const [endAddress, setEndAddress] = useState<string>('');
  const [passengers, setPassengers] = useState<string>('');
  const [luggage, setLuggage] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const errors: Errors = {};
    if (!name) errors.name = translations.form.errors.name;
    if (!lastName) errors.lastName = translations.form.errors.lastName;
    if (!phone) errors.phone = translations.form.errors.phone;
    if (!startAddress) errors.startAddress = translations.form.errors.startAddress;
    if (!endAddress) errors.endAddress = translations.form.errors.endAddress;
    if (!passengers) errors.passengers = translations.form.errors.passengers;
    if (!luggage) errors.luggage = translations.form.errors.luggage;
    if (!date) errors.date = translations.form.errors.date;
    if (!agreement) errors.agreement = translations.form.errors.agreement;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      const data = { name, lastName, phone, startAddress, endAddress, passengers, luggage, date };

      try {
        const response = await fetch('http://localhost:5000/api/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
          alert(translations.form.success);
        } else {
          alert(result.message || translations.form.error);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
          alert(translations.form.serverError);
        } else {
          alert(translations.form.unknownError);
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
            {translations.form.title}
          </h2>

          <p className={styles.requiredText}>
            {translations.form.requiredFields}
          </p>

          <form onSubmit={submitForm}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.lastName}*`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.firstName}*`}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.phone}*`}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.startAddress}*`}
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
              />
              {errors.startAddress && <span className={styles.error}>{errors.startAddress}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.endAddress}*`}
                value={endAddress}
                onChange={(e) => setEndAddress(e.target.value)}
              />
              {errors.endAddress && <span className={styles.error}>{errors.endAddress}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.passengers}*`}
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
              {errors.passengers && <span className={styles.error}>{errors.passengers}</span>}
            </div>

            <div className={styles.inputContainer2}>
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.luggage}*`}
                value={luggage}
                onChange={(e) => setLuggage(e.target.value)}
              />
              {errors.luggage && <span className={styles.error}>{errors.luggage}</span>}
              <input
                type="text"
                className={styles.inputField}
                placeholder={`${translations.form.hours}*`}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className={styles.error}>{errors.date}</span>}
            </div>

            <div className={styles.inputContainer}>
              <input
                type="date"
                className={styles.inputFieldFullWidth}
                placeholder={`${translations.form.date}*`}
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
                {translations.form.agreement}
                <span className={styles.highlightLink}> {translations.form.policy}</span>
              </label>
              {errors.agreement && <span className={styles.error}>{errors.agreement}</span>}
            </div>

            <button className={styles.submitButton} type="submit">
              {translations.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormulaireReservation;