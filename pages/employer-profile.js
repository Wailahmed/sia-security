import React, { useState } from 'react';
import styles from '../styles/EmployerProfile.module.css';

export default function EmployerProfile() {
    const [employer, setEmployer] = useState({
        company: 'Security Solutions Ltd',
        contactEmail: 'contact@securitysolutions.com',
        description: 'Leading provider of security services.'
    });

    const handleChange = (e) => {
        setEmployer({ ...employer, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employer Profile Updated:', employer);
        // Integration for API update call goes here
    };

    return (
        <div className={styles.container}>
            <h1>Employer Profile</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company"
                    value={employer.company}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="contactEmail"
                    value={employer.contactEmail}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    value={employer.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}
