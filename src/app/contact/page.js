"use client";

import React, { useState } from 'react';
import styles from './contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../component/navbar";
import Footer1 from "../component/footer";


const Contact = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };


  return (
    <>
      <Navbar />

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6932.941268139539!2d-95.552927!3d29.677132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c2a8e9eec7db%3A0xf94d8b3c1d378173!2s9894%20Bissonnet%20St%20%23676%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1716700547005!5m2!1sen!2sus" frameborder="0" allowfullscreen loading="lazy" className={styles.map} />

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h1>CONTACT</h1>
          <h2>Get In Touch</h2>
          <p className={styles.para}>Feel free to reach out to Al Rayyan Travel through our Contact Us section for any inquiries, assistance, or information you need. We’re here to help!</p>
          <div className={styles.contactDetails}>
            <h5><strong>Uzair</strong></h5>

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
            <p className={styles.link}>
              <a target="_blank" href="https://maps.app.goo.gl/nPUYKceoTL1utZJt6">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 9894 Bissonnet st Suite 676 Houston, Tx 77036
              </a>
            </p>
          </div>
        </div>



        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                <input type="text" placeholder="First Name" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className={styles.input} required />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                <input type="text" id="lastName" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} className={styles.input} required />
              </label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                <input type="email" id="email" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} className={styles.input} required />
              </label>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                <input type="text" id="subject" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} className={styles.input} required />
              </label>
            </div>
          </div>
          <div className={styles.formGroup2}>
            <label htmlFor="comments" className={styles.label}>
              <textarea id="comments" placeholder="Comments / Questions" name="comments" value={formData.comments} onChange={handleChange} className={styles.textarea} required></textarea>
            </label>
          </div>
          <button type="submit" className={`${styles.button} ${styles.red}`}>SEND MESSAGE</button>
        </form>



      </div>


      <Footer1 />
    </>
  )
}

export default Contact
