"use client";

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Logoal from '../image/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 

  return (
    <nav>
      <div className={styles.head}>
        <a target="_blank" href="https://maps.app.goo.gl/nPUYKceoTL1utZJt6" alt="address" >
          <FontAwesomeIcon icon={faMapMarkerAlt} alt="address" /> <span>9894 Bissonnet st Suite 676 Houston, Tx 77036</span>
        </a>
        <a target="_blank" href="tel:+18442572926" >
          <FontAwesomeIcon icon={faPhone} /> <span>+1 844-257-2926</span>
        </a>
      </div>

      <div className={styles.navcenter}>
        <div className={styles.nav}>
          <div className={styles.navLogo}>
            <Image src={Logoal} alt="Logo" width={180} />
          </div>
          <div className={`${styles.navMenu} ${menuOpen ? styles.showMenu : ''}`}>
          <ul>
              <li className={styles.li}><Link className={`${styles.link} ${pathname === '/' ? styles.activeLink : ''}`} href="/">HOME</Link></li>
              <li className={styles.li}><Link className={`${styles.link} ${pathname === '/about' ? styles.activeLink : ''}`} href="/about">ABOUT</Link></li>
              <li className={styles.li}><Link className={`${styles.link} ${pathname === '/gallery' ? styles.activeLink : ''}`} href="/gallery">GALLERY</Link></li>
              <li className={styles.li}><Link className={`${styles.link} ${pathname === '/packages' ? styles.activeLink : ''}`} href="/packages">PACKAGES</Link></li>
              <li className={styles.li}><Link className={`${styles.link} ${pathname === '/contact' ? styles.activeLink : ''}`} href="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <div className={styles.navSpace}></div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={`${styles.bar} ${menuOpen ? styles.changeBar1 : ''}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.changeBar2 : ''}`}></div>
            <div className={`${styles.bar} ${menuOpen ? styles.changeBar3 : ''}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;