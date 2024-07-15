import React from 'react';
import Image from 'next/image';
import aboutusimg from '../image/aboutus.jpg'; // Ensure this path is correct
import styles from './about.module.css';
import Travelpartnerlogo from '../component/travelpartnerlogo';
import Navbar from "../component/navbar";
import Footer1 from "../component/footer";

const About = () => {
  return (
    <>
    <Navbar />
    
      <div className={styles.divaboutimg}>
        <Image src={aboutusimg} alt="About Us" layout="fill" className={styles.aboutimg} />
        <div className={styles.overlay}>
        <h1>About Us</h1>
          <p>Home <strong> &gt; </strong> About Us</p>
        </div>
      </div>

      <div className={styles.abouttxt}>
        <h3 className={styles.h3dark}>About Us:</h3>
        <h3 className={styles.h3light}>About Us:</h3>
        <p>
          Al Rayyan Travels started its business in 2014 and has since become a trusted travel company, dedicated to providing excellent services to our valued customers. We specialize in creating personalized packages for Hajj and Umrah trips, as well as offering convenient flight tickets for both local and international travel. We also take care of hassle-free hotel reservations.
        </p>
        <p>
          We understand how important Hajj and Umrah are for many people, so our team works hard to design well-planned packages that make the journey spiritually enriching. From helping with visas to arranging comfortable accommodations and transportation, we ensure your pilgrimage is unforgettable and stress-free.
        </p>
        <p>
          Beyond religious journeys, we also cater to all types of travel. With our partnerships with top airlines, we can provide competitive flight options for solo trips, family vacations, or business travels. Our experienced travel consultants will tailor the perfect itinerary according to your preferences and budget.
        </p>
      </div>

      <div className={styles.widthwhyus}>
      <div className={styles.whyus}>
        <h2 className={styles.h2whydark}>Why Us</h2>
        <h2 className={styles.h2whylight}>Why Us</h2>
        <p>Why accept a generic journey when you can have a truly personalized travel experience? At our core, we believe in tailoring every aspect of your trip to suit your preferences. As avid travelers ourselves, we understand the thrill of embarking on a meticulously crafted adventure. Whether your dream is to savor the flavors of Italy, conquer the peaks of Patagonia, or commemorate a special milestone with your loved ones, our dedicated travel concierge team stands prepared to curate an unforgettable and bespoke experience just for you.</p>
      </div>
    </div>


    <Travelpartnerlogo />


    <Footer1 />
    </>
  );
}

export default About;
