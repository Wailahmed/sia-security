import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCertificate, faBriefcase, faSave } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Profile.module.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        fullName: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        qualifications: 'SIA License, First Aid Certified',
        experience: '5 years as a security guard at XYZ Corp.',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your update logic here
        console.log('Updated user data:', userData);
    };

    return (
        <div className={styles.container}>
            <h1>My Profile</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="fullName">
                        <FontAwesomeIcon icon={faUser} /> Full Name
                    </label>
                    <input className={styles.input}
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} /> Email Address
                    </label>
                    <input className={styles.input}
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="phone">
                        <FontAwesomeIcon icon={faPhone} /> Phone Number
                    </label>
                    <input className={styles.input}
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="qualifications">
                        <FontAwesomeIcon icon={faCertificate} /> Qualifications
                    </label>
                    <textarea className={styles.textarea}
                        id="qualifications"
                        name="qualifications"
                        rows="4"
                        value={userData.qualifications}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="experience">
                        <FontAwesomeIcon icon={faBriefcase} /> Experience
                    </label>
                    <textarea className={styles.textarea}
                        id="experience"
                        name="experience"
                        rows="4"
                        value={userData.experience}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className={styles.updateButton}>
                    <FontAwesomeIcon icon={faSave} /> Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;