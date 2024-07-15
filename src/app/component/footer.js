import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import logpwhite from '../../../public/image/white-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading1}>Quick Links</h3>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="about" className={styles.link}>About Us</Link></li>
            <li><Link href="contact" className={styles.link}>Contact</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact Info</h3>
          <p className={styles.link}>
          <a target="_blank" href="https://maps.app.goo.gl/nPUYKceoTL1utZJt6">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> 9894 Bissonnet st Suite 676 Houston, Tx 77036
        </a>
          </p>
          <p className={styles.link}>
          <a target="_blank" href="tel:+18442572926">
        <FontAwesomeIcon icon={faPhone} /> +1 844-257-2926
        </a>
          </p>
          <p className={styles.link}>
          <a target="_blank" href="mailto:info@alrayyantravel.com">
          <FontAwesomeIcon icon={faEnvelope} /> info@alrayyantravel.com
          </a>
          </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Make a Reservation</h3>
          <p className={styles.info}>Our Support and Sales team is available 24/7 to answer your queries</p>
          <a target="_blank" href="tel:+18442572926" className={`${styles.button} ${styles.info}`}>
          <FontAwesomeIcon icon={faPhone} className={styles.faphone} />+1 844-257-2926
          </a>
        </div>
      </div>
      <div className={styles.bottom}>
         <div className={styles.bottominerdiv}> 
            <Image src={logpwhite} width={512} height={136}  className={styles.logowhite} />
            <h4>Travel & Tour Agency </h4>
         </div>
        <p>&copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
