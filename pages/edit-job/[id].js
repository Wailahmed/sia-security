import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/JobDetail.module.css';

export default function EditJobDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      Edit Job {id}
    </div>
  );
}