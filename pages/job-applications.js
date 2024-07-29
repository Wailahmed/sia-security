import { useState, useEffect } from 'react';
import styles from '../styles/JobApplications.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faCalendarAlt, faClipboardList, faCheckCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

const JobApplications = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const getApplications = async () => {
            try {
                const response = await fetch(`/api/applications`);
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const result = await response.json();
                setApplications(result);
            }
            catch (error) {
                console.error(error);
            }
        }

        getApplications();
    }, []);

    if (applications === null) {
        return <p>Cannot get applications</p>
    }

    return (
        <div className={styles.container}>
            <h1>Job Applications</h1>
            <div className={styles.applicationList}>
                {applications.map((application) => (
                    <div key={application._id} className={styles.applicationCard}>
                        <h2>{application?.title}</h2>
                        <p><string>Applicant Name:</string> {application?.applicantName}</p>
                        <p><strong>Company:</strong> {application?.company}</p>
                        <p><strong>Location:</strong> {application?.location}</p>
                        <p><strong>Status:</strong> {application?.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplications;