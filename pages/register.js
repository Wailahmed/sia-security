import React, { useState } from 'react';
import styles from '../styles/Register.module.css';

export default function Register() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        userType: 'jobSeeker' // or 'employer'
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Registered:', user);
        // Here you would usually integrate an API call to register the user
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.h1}>Register</h1>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                <select name="userType" value={user.userType} onChange={handleChange}>
                    <option value="jobSeeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
