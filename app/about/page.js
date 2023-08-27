import React from 'react';
import styles from '../About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.introSection}>
        <h1 className={styles.title}>Welcome to ctrlAltElite</h1>
        <p className={styles.description}>
          Your source for insightful tech articles, tips, and news. We are passionate about sharing knowledge and empowering the tech community.
        </p>
      </div>
      <div className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>Our Services</h2>
        <ul className={styles.servicesList}>
          <li>Informative Tech Blog Posts</li>
          <li>Tech How-tos and Tutorials</li>
          <li>Latest Tech News and Trends</li>
          <li>Community Discussions and Forums</li>
        </ul>
      </div>
      <div className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.contactInfo}>
          Have questions, feedback, or collaboration ideas? Feel free to reach out to us!
        </p>
        <a href="mailto:contact@ctrlaltelite.com" className={styles.contactButton}>Contact Now</a>
      </div>
    </div>
  );
}

export default AboutPage;
