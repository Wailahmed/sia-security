import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoSection}>
                    <Link href="/" className={styles.logo}>JobPlatform</Link>
                    <p>Your gateway to finding the perfect job.</p>
                </div>
                <div className={styles.linkSections}>
                    <div className={styles.section}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className={styles.section}>
                        <h3>Follow Us</h3>
                        <ul className={styles.socialMedia}>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>© {new Date().getFullYear()} JobPlatform. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
