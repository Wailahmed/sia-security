import React from 'react';
import styles from '../styles/RegistrationForm.module.css';

const JobSeekerRegistration = () => {
    return (
        <div className={styles.container}>
            <h1>SecureConnect</h1>
            <h2>Employee Form</h2>
            <form>
                <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" name="lastName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Telephone Number</label>
                    <input type="tel" name="phoneNumber" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Birth</label>
                    <input type="date" name="dob" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Full Address</label>
                    <input type="text" name="address" required />
                </div>
                <div className={styles.formGroup}>
                    <label>NI Number</label>
                    <input type="text" name="niNumber" required />
                </div>
                <div className={styles.formGroup}>
                    <label>SIA License Number</label>
                    <input type="text" name="siaLicenseNumber" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default JobSeekerRegistration;