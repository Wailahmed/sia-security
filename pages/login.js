import Link from 'next/link';
import styles from '../styles/Login.module.css';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <h1>Login to SecureConnect</h1>
                <form>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className={styles.loginButton}>Login</button>
                </form>
                <div className={styles.links}>
                    <Link href="/forgot-password" legacyBehavior>
                        <a className={styles.link}>Forgot Password?</a>
                    </Link>
                    <Link href="/register" legacyBehavior>
                        <a className={styles.link}>Create New Account to register</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;