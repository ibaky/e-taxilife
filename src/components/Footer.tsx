import React from 'react';
import { Footer, FooterGroup, FooterLink } from 'kitchn';
import styles from './footer.module.css'; // Importation du CSS du footer

const FooterComponent: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <Footer>
        {/* Groupe "Company" */}
        <FooterGroup title="Contact-moi" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">+33 6 12 34 56 78</FooterLink>
            <FooterLink href="#">contact@montransport.com</FooterLink>
            <FooterLink href="#">rue maltilde 76000 rouen  </FooterLink>
            <FooterLink href="#">Partners</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Next.js Conf</FooterLink>
          </div>
        </FooterGroup>

        {/* Groupe "Reseau" */}
        <FooterGroup title="Reseau" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">X</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">SnapChat</FooterLink>
            <FooterLink href="#">Discord</FooterLink>
            <FooterLink href="#">TikTok</FooterLink>
          </div>
        </FooterGroup>

        {/* Groupe "Education" */}
        <FooterGroup title="Education" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Guides</FooterLink>
            <FooterLink href="#">Support</FooterLink>
          </div>
        </FooterGroup>

        {/* Groupe "More" */}
        <FooterGroup title="More" className={styles.footerGroup}>
          <div className={styles.footerLinks}>
            <FooterLink href="#">Open Source Software</FooterLink>
            <FooterLink href="#">Design System</FooterLink>
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
