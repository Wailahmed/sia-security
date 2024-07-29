import { useState } from 'react';
import styles from '../styles/JobSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';

const mockJobData = [
    {
        id: 1,
        title: 'Security Guard',
        company: 'Secure Inc.',
        location: 'New York, NY',
        type: 'Full-time',
        description: 'Ensure the safety and security of premises and personnel.',
    },
    {
        id: 2,
        title: 'Cyber Security Analyst',
        company: 'CyberSafe Solutions',
        location: 'San Francisco, CA',
        type: 'Part-time',
        description: 'Monitor and protect systems and networks from cyber threats.',
    },
    // Add more job listings as needed
];

const JobSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(mockJobData);

    const handleSearch = () => {
        const filtered = mockJobData.filter(job => {
            return (
                job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                job.location.toLowerCase().includes(location.toLowerCase()) &&
                job.type.toLowerCase().includes(jobType.toLowerCase())
            );
        });
        setFilteredJobs(filtered);
    };

    return (
        <div className={styles.container}>
            <h1>Job Search</h1>
            <div className={styles.searchFilters}>
                <div className={styles.searchGroup}>
                    <label htmlFor="searchTerm">
                        <FontAwesomeIcon icon={faSearch} /> Job Title
                    </label>
                    <input
                        type="text"
                        id="searchTerm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className={styles.searchGroup}>
                    <label htmlFor="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className={styles.searchGroup}>
                    <label htmlFor="jobType">
                        <FontAwesomeIcon icon={faBriefcase} /> Job Type
                    </label>
                    <select
                        id="jobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>
                <button onClick={handleSearch} className={styles.searchButton}>
                    <FontAwesomeIcon icon={faSearch} /> Search
                </button>
            </div>
            <div className={styles.jobList}>
                {filteredJobs.map((job) => (
                    <div key={job.id} className={styles.jobCard}>
                        <h2>{job.title}</h2>
                        <p><FontAwesomeIcon icon={faBuilding} /> {job.company}</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}</p>
                        <p><FontAwesomeIcon icon={faBriefcase} /> {job.type}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobSearch;