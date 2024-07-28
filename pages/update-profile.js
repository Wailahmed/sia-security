import styles from '../styles/UpdateProfile.module.css';
import Link from 'next/link'
const UpdateProfile = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Back to Dashboad</Link>
            <h1>Update Profile</h1>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="fullName">Full Name</label>
                    <input className={styles.input} type="text" id="fullName" required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}htmlFor="email">Email Address</label>
                    <input className={styles.input}type="email" id="email" required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input className={styles.input} type="tel" id="phone" required />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}htmlFor="qualifications">Qualifications</label>
                    <textarea id="qualifications" rows="4" required></textarea>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="experience">Experience</label>
                    <textarea id="experience" rows="4" required></textarea>
                </div>
                <button type="submit" className={styles.updateButton}>Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;