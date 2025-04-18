// Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';
import twitterIcon from '../../assets/images/img3.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.aboutSection}>
            <h3 className={styles.heading}>About</h3>
            <p className={styles.aboutText}>
            Fotographiya is a premium AI based
            wedding photography startup.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src={facebookIcon} alt="Facebook" className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <img src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
              </a>
            </div>
          </div>
          
          <div className={styles.contactSection}>
            <h3 className={styles.heading}>Contact Us</h3>
            <p className={styles.contactInfo}>+91-956874521</p>
            <p className={styles.contactInfo}>fotographiya@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;