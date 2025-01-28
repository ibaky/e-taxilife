"use client";

import React, { useState, useEffect } from "react";
import styles from "./CookiePopup.module.css";

const COOKIE_EXPIRATION_DAYS = 30;

const setCookieWithExpiration = (value: string) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + COOKIE_EXPIRATION_DAYS);
  const cookieData = {
    value,
    expires: expirationDate.getTime(),
  };
  localStorage.setItem("cookiesAccepted", JSON.stringify(cookieData));
};

const CookiePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const storedData = localStorage.getItem("cookiesAccepted");
      if (!storedData) {
        setShowPopup(true);
      }
    }, 2000);
  }, []);

  const handleAccept = () => {
    setCookieWithExpiration("true");
    setShowPopup(false);
  };

  const handleReject = () => {
    setCookieWithExpiration("false");
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className={styles.cookiePopup}>
        <div className={styles.cookieContent}>
          <h3 className={styles.title}>🍪 Nous respectons votre vie privée</h3>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
            Vous pouvez choisir d'accepter ou de refuser leur utilisation.
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Accepter
            </button>
            <button onClick={handleReject} className={styles.rejectButton}>
              Refuser
            </button>
            <button onClick={() => window.location.href = "/parametres-cookies"} className={styles.settingsButton}>
              Paramétrer
            </button>
          </div>
          <p className={styles.privacyLink} style={{ marginTop: "20px" }}>
            Consultez notre <a href="/politique-de-confidentialite">Politique de Confidentialité</a>.
          </p>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
