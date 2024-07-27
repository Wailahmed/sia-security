import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import styles from '../../styles/Dashboard.module.css';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch applied jobs
        axios.get('/api/jobs')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setJobs(response.data);
                } else {
                    setError('Failed to fetch jobs');
                }
            })
            .catch(error => {
                console.error('Error fetching jobs:', error);
                setError('Failed to fetch jobs');
            });

        // Fetch job recommendations
        axios.get('/api/recommendations')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setRecommendations(response.data);
                } else {
                    setError('Failed to fetch recommendations');
                }
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
                setError('Failed to fetch recommendations');
            });

        // Fetch recent messages
        axios.get('/api/messages')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    setError('Failed to fetch messages');
                }
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
                setError('Failed to fetch messages');
            });
    }, []);

    return (
        <div className={styles.dashboard}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">JobPlatform</Link>
                </div>
                <ul className={styles.navLinks}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/messages">Messages</Link></li>
                    <li><Link href="/logout">Logout</Link></li>
                </ul>
            </nav>

            <div className={styles.content}>
                <section className={styles.welcomeSection}>
                    <h1>Welcome, [User Name]</h1>
                </section>

                {error && <p className={styles.error}>{error}</p>}

                <section className={styles.appliedJobs}>
                    <h2>Applied Jobs</h2>
                    <ul>
                        {jobs.length > 0 ? jobs.map((job, index) => (
                            <li key={index}>{job.title} - {job.company}</li>
                        )) : <li>No applied jobs found.</li>}
                    </ul>
                </section>

                <section className={styles.recommendations}>
                    <h2>Job Recommendations</h2>
                    <ul>
                        {recommendations.length > 0 ? recommendations.map((job, index) => (
                            <li key={index}>{job.title} - {job.company}</li>
                        )) : <li>No job recommendations available.</li>}
                    </ul>
                </section>

                <section className={styles.messages}>
                    <h2>Recent Messages</h2>
                    <ul>
                        {messages.length > 0 ? messages.map((message, index) => (
                            <li key={index}>{message.content} - {message.sender}</li>
                        )) : <li>No messages found.</li>}
                    </ul>
                </section>

                <section className={styles.quickLinks}>
                    <h2>Quick Access</h2>
                    <ul>
                        <li><Link href="/profile">Update Profile</Link></li>
                        <li><Link href="/saved-jobs">View Saved Jobs</Link></li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
