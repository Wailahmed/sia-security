import React from 'react';
import styles from '../styles/Faq.module.css';

export default function Faq() {
  return (
    <div className={styles.container}>
      <h1>Frequently Asked Questions</h1>
      <h2>How do I apply for a job?</h2>
      <p>You can apply for any job by visiting the job details page and clicking the Apply Now button.</p>
      <h2>How do I post a job as an employer?</h2>
      <p>After logging in, navigate to your dashboard and click on Post a New Job to add a job listing.</p>
    </div>
  );
}
