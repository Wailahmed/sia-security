import React from 'react';
import styles from '../styles/Terms.module.css';

export default function Terms() {
  return (
    <div className={styles.container}>
      <h1>Terms of Service</h1>
      <p>Last updated: [Date]</p>
      
      <h2>1. Agreement to Terms</h2>
      <p>By accessing our platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the service.</p>
      
      <h2>2. Intellectual Property</h2>
      <p>The service and its original content, features, and functionality are and will remain the exclusive property of [Your Company Name] and its licensors.</p>
      
      <h2>3. Accounts</h2>
      <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the terms, which may result in immediate termination of your account on our service.</p>
      
      <h2>4. Termination</h2>
      <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach the Terms.</p>
      
      <h2>5. Limitation of Liability</h2>
      <p>In no event shall [Your Company Name], nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of our service.</p>
      
      <h2>6. Changes</h2>
      <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>
      
      <h2>7. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us.</p>
    </div>
  );
}
