import React from 'react'
import styles from './packages.module.css'
import Image from 'next/image';
import aboutusimg from '../image/aboutus.jpg'; 
import PackageCard from '../component/packageCard'
import Navbar from "../component/navbar";
import Footer1 from "../component/footer";

const Packages = () => {
  return (
    <>
    <Navbar />
      <div className={styles.divaboutimg}>
      <Image src={aboutusimg} alt="travelimg" layout="fill" className={styles.aboutimg} />
        <div className={styles.overlay}>
        <h1>Packages</h1>
          <p>Home <strong> &gt; </strong> Packages</p>
        </div>
      </div>


      <PackageCard />

  <Footer1 />
    </>
  )
}

export default Packages
