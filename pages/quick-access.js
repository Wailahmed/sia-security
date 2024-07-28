import styles from '../styles/QuickAccess.module.css';

const QuickAccess = () => {
    return (
        <div className={styles.container}>
            <h1>Quick Access</h1>
            <div className={styles.quickAccessOptions}>
                <button className={styles.button}>Update Profile</button>
                <button className={styles.button}>View Saved Jobs</button>
            </div>
        </div>
    );
};

export default QuickAccess;