import Link from 'next/link';
import styles from '../styles/ForgotPassword.module.css';

const ForgotPassword = () => {
    return (
        <div className={styles.container}>
            <div className={styles.forgotPasswordBox}>
                <h1>Forgot Password</h1>
                <p>Enter your email address to reset your password</p>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required />
                    </div>
                    <button type="submit" className={styles.resetButton}>Reset Password</button>
                </form>
                <div className={styles.links}>
                    <Link href="/login" legacyBehavior>
                        <a className={styles.link}>Back to Login</a>
                    </Link>
                    <Link href="/register" legacyBehavior>
                        <a className={styles.link}>Create New Account</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;