import Link from 'next/link';
import styles from '../styles/navigationbar.module.css';
import {logOutUser} from "@/store/current-user";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter();

    const logOutAction = (e) => {
        e.preventDefault();
        router.push('/');
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">SecureConnect</Link>
            </div>
            <ul className={styles.navLinks}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/job-search">Job Search</Link></li>
                <li><button onClick={logOutAction}>Log Out</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
