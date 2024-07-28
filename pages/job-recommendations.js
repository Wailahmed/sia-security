import styles from '../styles/JobRecommendations.module.css';
import Link from 'next/link'
const JobRecommendations = () => {
    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Job Recommendations</h1>
            <div className={styles.jobList}>
                <div className={styles.jobCard}>
                    <h2>Recommended Job Title</h2>
                    <p>Company Name</p>
                    <p>Location</p>
                </div>
                {/* Add more job cards as needed */}
            </div>
        </div>
    );
};

export default JobRecommendations;