import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Register.module.css';
import { useRouter } from 'next/router';

const Register = () => {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (userType === 'jobSeeker') {
            router.push('/job-seeker-registration');
        } else if (userType === 'employer') {
            router.push('/employer-registration');
        } else {
            alert('Please select a user type.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.registerBox}>
                <h1>Create an Account</h1>
                <form onSubmit={handleRegister}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className={styles.userTypeGroup}>
                        <label>User Type</label>
                        <div className={styles.userTypeOptions}>
                            <input 
                                type="radio" 
                                id="jobSeeker" 
                                name="userType" 
                                value="jobSeeker" 
                                onChange={(e) => setUserType(e.target.value)} 
                                required 
                            />
                            <label htmlFor="jobSeeker">Job Seeker</label>
                            <input 
                                type="radio" 
                                id="employer" 
                                name="userType" 
                                value="employer" 
                                onChange={(e) => setUserType(e.target.value)} 
                                required 
                            />
                            <label htmlFor="employer">Employer</label>
                        </div>
                    </div>
                    <button type="submit" className={styles.registerButton}>Register</button>
                </form>
                <div className={styles.links}>
                    <Link href="/login" legacyBehavior>
                        <a className={styles.link}>Already have an account? Login</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;