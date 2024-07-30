import React from 'react';
import styles from '../styles/RegistrationForm.module.css';
import {useRouter} from "next/router";

const JobSeekerRegistration = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: '', username: 'N/A', password: '', userType: 'job seeker', firstName: '',
        lastName: '', telephone: '', dob: '', address: '', niNo: '', organisation: 'N/A',
        siaLicenseNo: ''
    });

    const onSubmit = async (e)  =>  {
        e.preventDefault();

        formData.email = document.getElementById('email-field').value;
        formData.password = document.getElementById('password-field').value;
        formData.firstName = document.getElementById('firstname-field').value;
        formData.lastName = document.getElementById('lastname-field').value;
        formData.telephone = document.getElementById('telephone-field').value;
        formData.siaLicenseNo = document.getElementById('sia-license-field').value;
        formData.dob = document.getElementById('dob-field').value;
        formData.address = document.getElementById('address-field').value;
        formData.niNo = document.getElementById('ni-field').value;


        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            alert("Failed to create user.");
            return;
        }

        alert("Successfully created user");
        router.push("/login");
    }

    return (
        <div className={styles.container}>
            <h1>SecureConnect</h1>
            <h2>Employee Form</h2>
            <form method="POST">
                <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input id="firstname-field" type="text" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input id="lastname-field" type="text" name="lastName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Telephone Number</label>
                    <input id="telephone-field" type="tel" name="telephone" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Birth</label>
                    <input id="dob-field" type="date" name="dob" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input id="email-field" type="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input id="password-field" type="password" name="password" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Full Address</label>
                    <input id="address-field" type="text" name="address" required />
                </div>
                <div className={styles.formGroup}>
                    <label>NI Number</label>
                    <input id="ni-field" type="text" name="niNo" required />
                </div>
                <div className={styles.formGroup}>
                    <label>SIA License Number</label>
                    <input id="sia-license-field" type="text" name="siaLicenseNumber" required />
                </div>
                <button onClick={onSubmit} type="submit">Register</button>
            </form>
        </div>
    );
};

export default JobSeekerRegistration;