import Link from 'next/link';
import styles from '../styles/Register.module.css';

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.registerBox}>
                <h1>Create an Account</h1>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className={styles.userTypeGroup}>
                        <label>User Type</label>
                        <div className={styles.userTypeOptions}>
                            <input type="radio" id="jobSeeker" name="userType" value="jobSeeker" required />
                            <label htmlFor="jobSeeker">Job Seeker</label>
                            <input type="radio" id="employer" name="userType" value="employer" required />
                            <label htmlFor="employer">Employer</label>
                        </div>
                    </div>
                    <button type="submit" className={styles.registerButton}>Register</button>
                </form>
                <div className={styles.links}>
                    <Link href="/login" legacyBehavior>
                        <a className={styles.link}>Already have an account? Login</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;