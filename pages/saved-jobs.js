import styles from '../styles/ViewSavedJobs.module.css';
import Link from 'next/link'
const ViewSavedJobs = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Saved Jobs</h1>
            <div className={styles.jobList}>
                <div className={styles.jobCard}>
                    <h2>Saved Job Title</h2>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Status: Pending/Accepted/Rejected</p>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </div>
    );
};

export default ViewSavedJobs;