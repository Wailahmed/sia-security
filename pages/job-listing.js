import Link from 'next/link';
import styles from '../styles/JobListing.module.css';
import { useEffect, useState } from 'react';

const JobListing = () =>  {
    const [jobData, setJobData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/jobs`);
                if (!response.ok) {
                    throw new Error("Network response was not okay");
                }
                const result = await response.json();
                setJobData(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    if (jobData === null) {
        return <p>Data unavailable</p>
    }


    return (
        <div className={styles.container}>
            <h1>Job Listings</h1>
            <div className={styles.jobList}>
                {jobData.map((job) => (
                    <div key={job?.id} className={styles?.jobCard}>
                        <h2>{job?.title}</h2>
                        <p><strong>Company:</strong> {job?.company}</p>
                        <p><strong>Location:</strong> {job?.location}</p>
                        <p>{job?.description}</p>
                        <Link href={`/jobs/${job._id}`} legacyBehavior>
                            <a className={styles.viewDetailsButton}>View Details</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListing;