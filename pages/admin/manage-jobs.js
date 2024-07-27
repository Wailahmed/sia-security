import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../../styles/AdminManageJobs.module.css';

export default function ManageJobs() {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/api/jobs');
            setJobs(response.data);
        } catch (err) {
            setError('Failed to fetch jobs');
        }
    };

    const deleteJob = async (jobId) => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            try {
                await axios.delete(`/api/jobs/${jobId}`);
                fetchJobs(); // refresh the list after deleting
            } catch (err) {
                setError('Failed to delete job');
            }
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Manage Jobs</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(job => (
                        <tr key={job._id}>
                            <td>{job.title}</td>
                            <td>{job.description}</td>
                            <td>
                                <Link legacyBehavior href={`/edit-job/${job._id}`}>
                                    <a className={styles.editButton}>Edit</a>
                                </Link>
                                <button className={styles.deleteButton} onClick={() => deleteJob(job._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
