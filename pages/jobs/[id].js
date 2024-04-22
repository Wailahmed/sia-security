import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/JobDetail.module.css';

export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>Job Title: Security Officer {id}</h1>
      <p>Description: Ensure the safety of premises and personnel by patrolling property; monitoring surveillance equipment; inspecting buildings, equipment, and access points; permitting entry.</p>
      <p>Requirements: SIA security license required.</p>
      <p>Salary: £30,000 per year</p>
      <button onClick={() => alert("Application Submitted!")}>Apply Now</button>
    </div>
  );
}

