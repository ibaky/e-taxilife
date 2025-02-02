import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '../context/LanguageContext';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>{translations.footer.contactTitle}</h3>
          <div className={styles.footerLinks}>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2805-smartphone-2-hover-phone-ring-alt.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.phone}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-53-location-pin-on-round-map-hover-jump.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.address}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-1141-email-hover-rotation.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.email}</a>
            </div>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>{translations.footer.networkTitle}</h3>
          <div className={styles.footerLinks}>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2540-logo-facebook-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.facebook}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2542-logo-instagram-hover-rotate.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.instagram}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2714-logo-x-hover-draw.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.twitter}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2631-logo-circle-youtube-morph-logotype.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.youtube}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2552-logo-snapchat-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.snapchat}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2649-logo-circle-discord-hover-rotation.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.discord}</a>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2546-logo-tiktok-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <a href="#" className={styles.footerLink}>{translations.footer.socialNetworks.tiktok}</a>
            </div>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3 className={styles.footerTitle}>{translations.footer.termsTitle}</h3>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>{translations.footer.terms.general}</a>
            <a href="#" className={styles.footerLink}>{translations.footer.terms.guides}</a>
            <a href="#" className={styles.footerLink}>{translations.footer.terms.support}</a>
            <a href="#" className={styles.footerLink}>{translations.footer.terms.privacy}</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 e-TaxiLife. Tous droits réservés.</p>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>Politique de Confidentialité</a>
          <a href="#" className={styles.bottomLink}>Conditions Générales</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;