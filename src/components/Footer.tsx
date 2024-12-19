import React from 'react';
import { Footer, FooterGroup, FooterLink } from 'kitchn';
import { Player } from '@lottiefiles/react-lottie-player'; // Importation de Lottie
import styles from './footer.module.css'; // Importation du CSS du footer

const FooterComponent: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <Footer>
        {/* Groupe "Contact-moi" */}
        <FooterGroup title="Contact-moi" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            {/* Ajouter animation à gauche du numéro de téléphone */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2805-smartphone-2-hover-phone-ring-alt.json" // Choisissez l'animation que vous souhaitez
                style={{ height: '30px', width: '30px' }} // Ajustez la taille de l'animation
              />
              <FooterLink href="#">+33 6 12 34 56 78</FooterLink>
            </div>

            {/* Ajouter animation à gauche de l'adresse */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-53-location-pin-on-round-map-hover-jump.json" // Choisissez l'animation que vous souhaitez
                style={{ height: '30px', width: '30px' }} // Ajustez la taille de l'animation
              />
              <FooterLink href="#">rue maltilde 76000 rouen</FooterLink>
            </div>

            {/* Ajouter animation à gauche de l'email */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-1141-email-hover-rotation.json" // Choisissez l'animation que vous souhaitez
                style={{ height: '30px', width: '30px' }} // Ajustez la taille de l'animation
              />
              <FooterLink href="#">contact@montransport.com</FooterLink>
            </div>
          </div>
        </FooterGroup>

        {/* Groupe "Reseau" */}
        <FooterGroup title="Reseau" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            {/* Lien Facebook avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2540-logo-facebook-hover-pinch.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">Facebook</FooterLink>
            </div>

            {/* Lien Instagram avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2542-logo-instagram-hover-rotate.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">Instagram</FooterLink>
            </div>

            {/* Lien X avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2714-logo-x-hover-draw.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">X</FooterLink>
            </div>

            {/* Lien YouTube avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2631-logo-circle-youtube-morph-logotype.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">Youtube</FooterLink>
            </div>

            {/* Lien SnapChat avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2552-logo-snapchat-hover-pinch.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">SnapChat</FooterLink>
            </div>

            {/* Lien Discord avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2649-logo-circle-discord-hover-rotation.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">Discord</FooterLink>
            </div>

            {/* Lien TikTok avec animation */}
            <div className={styles.iconWithText}>
              <Player
                autoplay
                loop
                src="/animations/wired-outline-2546-logo-tiktok-hover-pinch.json"
                style={{ height: '30px', width: '30px' }}
              />
              <FooterLink href="#">TikTok</FooterLink>
            </div>
          </div>
        </FooterGroup>

        {/* Groupe "conditions" */}
        <FooterGroup title="Conditions" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">Conditions Générales</FooterLink>
            <FooterLink href="#">Guides</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Politique de Confidentialité</FooterLink>
          </div>
        </FooterGroup>
      </Footer>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>© 2024 e-TaxiLife. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
