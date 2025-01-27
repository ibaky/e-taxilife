"use client";

import React, { useState, useEffect } from "react";
import styles from "./CookiePopup.module.css";

const CookiePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    // Force la suppression des cookies pour tester (Supprime après test)
    localStorage.removeItem("cookiesAccepted");

    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    console.log("Valeur de localStorage au chargement:", hasAcceptedCookies);

    if (!hasAcceptedCookies || hasAcceptedCookies === "false") {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    console.log("Cookies acceptés, stockage dans localStorage");
    localStorage.setItem("cookiesAccepted", "true");
    setShowPopup(false);
  };

  // Bouton temporaire pour réinitialiser les cookies
  const handleReset = () => {
    console.log("Réinitialisation des cookies...");
    localStorage.removeItem("cookiesAccepted");
    setShowPopup(true);
  };

  return (
    showPopup && (
      <div className={styles.cookiePopup}>
        <div className={styles.cookieContent}>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
            En poursuivant, vous acceptez notre{" "}
            <a href="/politique-de-confidentialite">Politique de Confidentialité</a>.
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Accepter
            </button>
            <button onClick={handleReset} className={styles.resetButton}>
              Réinitialiser Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
