import React from 'react';
import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Employer Dashboard</h1>
      <Link legacyBehavior href="/post-job">
        <a className={styles.button}>Post a New Job</a>
      </Link>
      <h2 className={styles.h2}>Job Applications</h2>
      <ul className={styles.ul}>
        <li className={styles.li}>Application #1 from Jane Doe for Security Officer</li>
        <li className={styles.li}>Application #2 from John Smith for Event Security Specialist</li>
      </ul>
    </div>
  );
}
