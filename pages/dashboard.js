import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';
import {getCurrentUser} from "@/store/current-user";
import {useState} from "react";

const Dashboard = () => {

    if (getCurrentUser() === null) {
        return <p>You are not logged in.</p>
    }

    const jobSeekerCards = () => {
        return (
            <>
                <div className={styles.cardContainer}>
                    <Link href="/upcoming-jobs" legacyBehavior>
                        <div className={styles.card}>
                            <i className={`${styles.icon} fas fa-calendar-alt`}></i>
                            <h2>Upcoming Jobs</h2>
                        </div>
                    </Link>
                    <Link href="/job-recommendations" legacyBehavior>
                        <div className={styles.card}>
                            <i className={`${styles.icon} fas fa-briefcase`}></i>
                            <h2>Job Recommendations</h2>
                        </div>
                    </Link>
                    <Link href="/applied-jobs" legacyBehavior>
                        <div className={styles.card}>
                            <i className={`${styles.icon} fas fa-file-alt`}></i>
                            <h2>Applied Jobs</h2>
                        </div>
                    </Link>
                    <Link href="/messages" legacyBehavior>
                        <div className={styles.card}>
                            <i className={`${styles.icon} fas fa-envelope`}></i>
                            <h2>Messages</h2>
                        </div>
                    </Link>
                </div>
                <div className={styles.quickAccessContainer}>
                    <Link href="/update-profile" legacyBehavior>
                        <div className={styles.quickAccess}>
                            <i className={`${styles.icon} fas fa-user-edit`}></i>
                            <h2>Update Profile</h2>
                        </div>
                    </Link>
                    <Link href="/saved-jobs" legacyBehavior>
                        <div className={styles.quickAccess}>
                            <i className={`${styles.icon} fas fa-bookmark`}></i>
                            <h2>View Saved Jobs</h2>
                        </div>
                    </Link>
                </div>
        </>)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Welcome, {getCurrentUser()?.firstName}</h1>
            </div>
            <>{jobSeekerCards()}</>
        </div>
    );
};

export default Dashboard;