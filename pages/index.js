import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuilding, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Overview.module.css';

const Overview = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Welcome to SecureConnect</h1>
                <p>Your trusted platform for security job connections.</p>
                <Link href="/login" legacyBehavior>
                    <a className={styles.loginButton}>Log In</a>
                </Link>
            </header>
            
            <section className={styles.features}>
                <div className={styles.feature}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                    <h2>For Job Seekers</h2>
                    <p>Create an account, search for jobs, and apply with ease. Get notified about new job postings and track your applications.</p>
                </div>
                <div className={styles.feature}>
                    <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
                    <h2>For Employers</h2>
                    <p>Post job listings, manage applications, and communicate with potential candidates. Build your company profile and attract top talent.</p>
                </div>
                <div className={styles.feature}>
                    <FontAwesomeIcon icon={faShieldAlt} className={styles.icon} />
                    <h2>For Admins</h2>
                    <p>Manage users and job postings, ensuring a safe and professional environment for everyone. Monitor platform activity and maintain quality control.</p>
                </div>
            </section>
        </div>
    );
};

export default Overview;