import { useState } from 'react';
import styles from '../styles/JobPost.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faCalendarAlt, faClipboardList, faCheckCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const JobPost = () => {
    const [jobData] = useState({
        title: 'Security Guard',
        company: 'Secure Inc.',
        location: 'New York, NY',
        description: 'Ensure the safety and security of premises and personnel.',
        qualifications: 'SIA License, First Aid Certified',
        applicationDeadline: '2023-12-31',
    });

    const handleApply = () => {
        // Add your apply logic here
        alert('Applied for the job!');
    };

    return (
        <div className={styles.container}>
            <h1>{jobData.title}</h1>
            <div className={styles.companyInfo}>
                <FontAwesomeIcon icon={faBuilding} /> {jobData.company}
            </div>
            <div className={styles.location}>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {jobData.location}
            </div>
            <div className={styles.section}>
                <h2><FontAwesomeIcon icon={faClipboardList} /> Job Description</h2>
                <p>{jobData.description}</p>
            </div>
            <div className={styles.section}>
                <h2><FontAwesomeIcon icon={faCheckCircle} /> Qualifications</h2>
                <p>{jobData.qualifications}</p>
            </div>
            <div className={styles.section}>
                <h2><FontAwesomeIcon icon={faCalendarAlt} /> Application Deadline</h2>
                <p>{jobData.applicationDeadline}</p>
            </div>
            <button className={styles.applyButton} onClick={handleApply}>
                <FontAwesomeIcon icon={faBriefcase} /> Apply Now
            </button>
        </div>
    );
};

export default JobPost;