import React, { useState } from 'react';
import styles from '../styles/PostJob.module.css';

export default function PostJob() {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Job posted!');
    // Here you would usually integrate an API call to post the data
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.h1}>Post a New Job</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}
