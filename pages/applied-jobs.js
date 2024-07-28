import styles from '../styles/AppliedJobs.module.css';
import Link from 'next/link'
const AppliedJobs = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Applied Jobs</h1>
            <div className={styles.jobList}>
                <div className={styles.jobCard}>
                    <h2>Applied Job Title</h2>
                    <p>Company Name</p>
                    <p>Status: Pending/Accepted/Rejected</p>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </div>
    );
};

export default AppliedJobs;