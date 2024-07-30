import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/EmployerDashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileAlt, faUserTie, faBriefcase, faBuilding, faUser, faChartLine } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const mockJobData = [
    {
        id: 1,
        title: 'Security Guard',
        applicants: 5,
        status: 'Active',
    },
    {
        id: 2,
        title: 'Cyber Security Analyst',
        applicants: 3,
        status: 'Active',
    },
    // Add more job listings as needed
];

const EmployerDashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch employer's job data from API
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/employer/jobs'); // Your API endpoint
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
                setJobs(mockJobData); // Fallback to mock data for demonstration
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Employer Dashboard</h1>
            <div className={styles.welcome}>
                <FontAwesomeIcon icon={faUser} /> Welcome, Employer!
            </div>
            <div className={styles.actions}>
                <Link legacyBehavior href="/post-job">
                    <a className={styles.actionButton}>
                        <FontAwesomeIcon icon={faPlus} /> Post New Job
                    </a>
                </Link>
                < Link legacyBehavior href="/manage-company-profile">
                    <a className={styles.actionButton}>
                        <FontAwesomeIcon icon={faUserTie} /> Manage Company Profile
                    </a>
                </Link>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faBriefcase} />
                    <h3>{jobs.length}</h3>
                    <p>Active Jobs</p>
                </div>
                <div className={styles.stat}>
                    <FontAwesomeIcon icon={faUser} />
                    <h3>{jobs.reduce((acc, job) => acc + job.applicants, 0)}</h3>
                    <p>Total Applicants</p>
                </div>
            </div>
            <h2>My Job Listings</h2>
            <div className={styles.jobList}>
                {jobs.map((job) => (
                    <div key={job.id} className={styles.jobCard}>
                        <h3>{job.title}</h3>
                        <p><FontAwesomeIcon icon={faFileAlt} /> {job.applicants} Applicants</p>
                        <p><FontAwesomeIcon icon={faChartLine} /> Status: {job.status}</p>
                        <Link legacyBehavior href={`/job-applications/${job.id}`}>
                            <a className={styles.viewApplicationsButton}>View Applications</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployerDashboard;