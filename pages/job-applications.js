import styles from '../styles/JobApplications.module.css';
import {useEffect, useState} from "react";

const _applicationData = [
    {
        id: 1,
        title: 'Security Guard',
        company: 'Secure Inc.',
        status: 'Pending',
        description: 'Applied for the position of Security Guard at Secure Inc. Ensure the safety and security of premises and personnel.',
    },
    {
        id: 2,
        title: 'Cyber Security Analyst',
        company: 'CyberSafe Solutions',
        status: 'Interview Scheduled',
        description: 'Applied for the position of Cyber Security Analyst at CyberSafe Solutions. Monitor and protect systems and networks from cyber threats.',
    },
    // Add more applications as needed
];

const JobApplications = () => {
    const [applicationData, setApplicationData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/applications`);
                if (!response.ok) {
                    throw new Error('Failed to fetch applications');
                }
                const result = await response.json();
                setApplicationData(result);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    if (!applicationData) return <p>Could not fetch application data</p>



    return (
        <div className={styles.container}>
            <h1>My Job Applications</h1>
            <div className={styles.applicationList}>
                {applicationData.map((application) => (
                    <div key={application._id} className={styles.applicationCard}>
                        <h2>{application.title}</h2>
                        <p><strong>Company:</strong> {application.company}</p>
                        <p><strong>Status:</strong> {application.status}</p>
                        <p>{application.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobApplications;