import { useState, useEffect } from 'react';
import styles from '../styles/JobApplications.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faCalendarAlt, faClipboardList, faCheckCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const mockEmployerApplications = [
    {
        id: 1,
        jobTitle: 'Security Guard',
        applicantName: 'John Doe',
        company: 'Secure Inc.',
        location: 'New York, NY',
        status: 'Pending',
    },
    {
        id: 2,
        jobTitle: 'Cyber Security Analyst',
        applicantName: 'Jane Smith',
        company: 'CyberSafe Solutions',
        location: 'San Francisco, CA',
        status: 'Interview Scheduled',
    },
];

const mockJobSeekerApplications = [
    {
        id: 1,
        jobTitle: 'Security Guard',
        company: 'Secure Inc.',
        location: 'New York, NY',
        status: 'Pending',
    },
    {
        id: 2,
        jobTitle: 'Cyber Security Analyst',
        company: 'CyberSafe Solutions',
        location: 'San Francisco, CA',
        status: 'Interview Scheduled',
    },
];

const JobApplications = () => {
    const [userType, setUserType] = useState('jobSeeker'); // 'employer' or 'jobSeeker'
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Fetch user type and applications data
        // This is mocked for example purposes
        if (userType === 'employer') {
            setApplications(mockEmployerApplications);
        } else {
            setApplications(mockJobSeekerApplications);
        }
    }, [userType]);

    return (
        <div className={styles.container}>
            <h1>Job Applications</h1>
            <div className={styles.applicationList}>
                {applications.map((application) => (
                    <div key={application.id} className={styles.applicationCard}>
                        <h2>{application.jobTitle}</h2>
                        {userType === 'employer' && <p><strong>Applicant:</strong> {application.applicantName}</p>}
                        <p><strong>Company:</strong> {application.company}</p>
                        <p><strong>Location:</strong> {application.location}</p>
                        <p><strong>Status:</strong> {application.status}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplications;