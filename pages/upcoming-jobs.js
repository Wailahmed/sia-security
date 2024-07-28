import styles from '../styles/UpcomingJobs.module.css';
import Link from 'next/link'
const UpcomingJobs = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Upcoming Jobs</h1>
            <div className={styles.jobList}>
                <div className={styles.jobCard}>
                    <h2>Job Title</h2>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Date</p>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </div>
    );
};

export default UpcomingJobs;