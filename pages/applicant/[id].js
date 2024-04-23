import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Applicant.module.css';

export default function ApplicantDetail() {
    const router = useRouter();
    const { id } = router.query;  // Assuming 'id' is the applicant's ID

    return (
        <div className={styles.container}>
            <h1>Applicant Details - ID: {id}</h1>
            <p>Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Cover Letter: Interested in the security officer position...</p>
            <p>Attachments: <a href="/resume.pdf">Resume.pdf</a></p>
        </div>
    );
}
