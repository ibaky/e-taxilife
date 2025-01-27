import React from 'react';
import { Footer, FooterGroup, FooterLink } from 'kitchn';
import { Player } from '@lottiefiles/react-lottie-player';
import { useLanguage } from '../context/LanguageContext';
import styles from './footer.module.css';

const FooterComponent: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div className={styles.footerContainer}>
      <Footer>
        <FooterGroup title={translations.footer.contactTitle} className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2805-smartphone-2-hover-phone-ring-alt.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.phone}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-53-location-pin-on-round-map-hover-jump.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.address}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-1141-email-hover-rotation.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.email}</FooterLink>
            </div>
          </div>
        </FooterGroup>

        <FooterGroup title={translations.footer.networkTitle} className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2540-logo-facebook-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.facebook}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2542-logo-instagram-hover-rotate.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.instagram}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2714-logo-x-hover-draw.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.twitter}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2631-logo-circle-youtube-morph-logotype.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.youtube}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2552-logo-snapchat-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.snapchat}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2649-logo-circle-discord-hover-rotation.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.discord}</FooterLink>
            </div>
            <div className={styles.iconWithText}>
              <Player autoplay loop src="/animations/wired-outline-2546-logo-tiktok-hover-pinch.json" style={{ height: '30px', width: '30px' }} />
              <FooterLink href="#">{translations.footer.socialNetworks.tiktok}</FooterLink>
            </div>
          </div>
        </FooterGroup>

        <FooterGroup title={translations.footer.termsTitle} className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">{translations.footer.terms.general}</FooterLink>
            <FooterLink href="#">{translations.footer.terms.guides}</FooterLink>
            <FooterLink href="#">{translations.footer.terms.support}</FooterLink>
            <FooterLink href="#">{translations.footer.terms.privacy}</FooterLink>
          </div>
        </FooterGroup>
      </Footer>

      <div className={styles.footerBottom}>
        <p>{translations.footer.copyright}</p>
        <p>
          <a href="#">{translations.footer.terms.privacy}</a> | <a href="#">{translations.footer.terms.general}</a>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
