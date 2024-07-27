import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/AdminManageApplications.module.css';

export default function ManageApplications() {
    const [applications, setApplications] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await axios.get('/api/applications');
            setApplications(response.data);
        } catch (err) {
            setError('Failed to fetch applications');
        }
    };

    const deleteApplication = async (applicationId) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await axios.delete(`/api/applications/${applicationId}`);
                setApplications(applications.filter(app => app._id !== applicationId));
            } catch (err) {
                setError('Failed to delete application');
            }
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Manage Applications</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Applicant Name</th>
                        <th>Job Title</th>
                        <th>Application Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(app => (
                        <tr key={app._id}>
                            <td>{app.applicantName}</td>
                            <td>{app.jobTitle}</td>
                            <td>{app.applicationDate}</td>
                            <td>{app.status}</td>
                            <td>
                                <button className={styles.editButton} onClick={() => alert('Edit function not implemented yet.')}>Edit Status</button>
                                <button className={styles.deleteButton} onClick={() => deleteApplication(app._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
