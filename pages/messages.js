import styles from '../styles/Messages.module.css';
import Link from 'next/link'
const Messages = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Messages</h1>
            <div className={styles.messageList}>
                <div className={styles.messageCard}>
                    <h2>Message Title</h2>
                    <p>From: Employer/Job Seeker</p>
                    <p>Message content preview...</p>
                </div>
                {/* Add more message cards as needed */}
            </div>
        </div>
    );
};

export default Messages;