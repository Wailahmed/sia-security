import React from 'react';
import Link from 'next/link';
import styles from '../../styles/AdminDashboard.module.css';

export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <div className={styles.links}>
        <Link href="/admin/manage-users"><a className={styles.link}>Manage Users</a></Link>
        <Link href="/admin/manage-jobs"><a className={styles.link}>Manage Jobs</a></Link>
        <Link href="/admin/manage-applications"><a className={styles.link}>Manage Applications</a></Link>
        <Link href="/admin/site-settings"><a className={styles.link}>Site Settings</a></Link>
      </div>
    </div>
  );
}
