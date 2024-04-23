import React, { useState } from 'react';
import styles from '../styles/Settings.module.css';

export default function Settings() {
    const [user, setUser] = useState({
        email: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Settings updated:', user);
        // API call to update user settings
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Settings</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Change email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="newPassword"
                    placeholder="New password"
                    value={user.newPassword}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update Settings</button>
            </form>
        </div>
    );
}
