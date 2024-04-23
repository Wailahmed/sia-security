import React from 'react';
import styles from '../styles/Profile.module.css';

export default function Profile() {
  return (
    <div className={styles.container}>
      <h1>Your Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <p>Resume: <a href="/resume.pdf">Download Resume</a></p>
      <button>Edit Profile</button>
    </div>
  );
}
