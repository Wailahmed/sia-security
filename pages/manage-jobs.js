import React from 'react';
import Link from 'next/link';
import styles from '../styles/ManageJobs.module.css';

export default function ManageJobs() {
    // Sample data - replace with data fetched from the database
    const jobs = [
        { id: 1, title: 'Security Officer', description: 'Daily patrols' },
        { id: 2, title: 'Event Security', description: 'Event security duties' },
    ];

    return (
        <div className={styles.container}>
            <h1>Manage Your Job Postings</h1>
            {jobs.map(job => (
                <div key={job.id} className={styles.job}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <Link href={`/edit-job/${job.id}`}>
                        <a className={styles.edit}>Edit</a>
                    </Link>
                    <button className={styles.delete}>Delete</button>
                </div>
            ))}
        </div>
    );
}
