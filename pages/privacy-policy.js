import React from 'react';
import styles from '../styles/PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: [Date]</p>
      <h2>Introduction</h2>
      <p>Our platform takes your privacy seriously. This policy explains how we collect, use, and protect the personal information of our users.</p>
      
      <h2>Information We Collect</h2>
      <p>We collect various types of information, including but not limited to:</p>
      <ul>
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Job related information (resumes, employment history, qualifications)</li>
        <li>Usage data (how you use our website, including timestamps)</li>
      </ul>
      
      <h2>How We Use Your Information</h2>
      <p>Your information helps us to:</p>
      <ul>
        <li>Provide, operate, and maintain our services</li>
        <li>Improve, personalize, and expand our services</li>
        <li>Understand and analyze how you use our services</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
      </ul>
      
      <h2>How We Protect Your Information</h2>
      <p>We adopt strong data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.</p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us.</p>
    </div>
  );
}
