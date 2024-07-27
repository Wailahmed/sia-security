import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/router';

export default function Home({ jobs }) {
  // const router= useRouter()
  return (
    <div className={styles.container}>
      <h1>Job Listings</h1>
      <section>
        <SearchBar></SearchBar>
      </section>
      <ul>
        {jobs.forEach(job => (
          <li key={job.id}>
            <Link legacyBehavior href={`/jobs/${job.id}`}>
              <a>{job.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <button onClick={()=>{router.push("/login")}}> login</button> */}
    </div>
  );
}

// Fetch jobs from your API or static file
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/jobs');
  const jobs = await res.json();
  return {
    props: {
      jobs,
    },
  };
}
