import React from 'react';
import styles from '../styles/RegistrationForm.module.css';
import {useRouter} from "next/router";

const EmployerRegistration = () => {
    const router = useRouter();
    const [formData, setFormData] = React.useState({
        email: '', username: 'N/A', password: '', userType: 'employer', firstName: '',
        lastName: '', telephone: '', dob: '', address: '', niNo: '', organisation: '',
        siaLicenseNo: 'N/A'
    });

    const onSubmit = async (e)  =>  {
        e.preventDefault();

        formData.password = document.getElementById('password-field--js').value;
        formData.firstName = document.getElementById('firstname-field--js').value;
        formData.lastName = document.getElementById('lastname-field--js').value;
        formData.telephone = document.getElementById('telephone-field--js').value;
        formData.organisation = document.getElementById('org-field--js').value;
        formData.dob = document.getElementById('dob-field--js').value;
        formData.address = document.getElementById('address-field--js').value;
        formData.niNo = document.getElementById('ni-field--js').value;
        formData.email = document.getElementById('email-field--js').value;


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
            <h2>Employer Form</h2>
            <form method="POST">
                <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input id="firstname-field--js" type="text" name="firstName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input id="lastname-field--js" type="text" name="lastName" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Telephone Number</label>
                    <input id="telephone-field--js" type="tel" name="telephone" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Date of Birth</label>
                    <input id="dob-field--js" type="date" name="dob" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input id="email-field--js" type="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input id="password-field--js" type="password" name="password" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Full Address</label>
                    <input id="address-field--js" type="text" name="address" required />
                </div>
                <div className={styles.formGroup}>
                    <label>NI Number</label>
                    <input id="ni-field--js" type="text" name="niNo" required />
                </div>
                <div className={styles.formGroup}>
                    <label>Organisation Verification</label>
                    <input id="org-field--js" type="text" name="organisation" required />
                </div>
                <button onClick={onSubmit} type="submit">Register</button>
            </form>
        </div>
    );
};

export default EmployerRegistration;