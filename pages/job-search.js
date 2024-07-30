import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/JobSearch.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faBriefcase, faBuilding } from '@fortawesome/free-solid-svg-icons';

const JobSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        // Fetch job data from API
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs'); // Your API endpoint
                setJobs(response.data);
                setFilteredJobs(response.data);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        handleSearch(searchTerm, location, jobType);
    }, [searchTerm, location, jobType]);

    const handleSearch = (term, loc, type) => {
        const filtered = jobs.filter(job => {
            return (
                job.title.toLowerCase().includes(term.toLowerCase()) &&
                job.location.toLowerCase().includes(loc.toLowerCase()) &&
                (type === '' || job.jobtype?.toLowerCase() === type.toLowerCase())
            );
        });
        setFilteredJobs(filtered);
    };

    const handleTitleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleLocationChange = (e) => {
        const value = e.target.value;
        setLocation(value);
    };

    const handleJobTypeChange = (e) => {
        const value = e.target.value;
        setJobType(value);
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
                        onChange={handleTitleChange}
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
                        onChange={handleLocationChange}
                    />
                </div>
                <div className={styles.searchGroup}>
                    <label htmlFor="jobType">
                        <FontAwesomeIcon icon={faBriefcase} /> Job Type
                    </label>
                    <select
                        id="jobType"
                        value={jobType}
                        onChange={handleJobTypeChange}
                    >
                        <option value="">All</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                    </select>
                </div>
            </div>
            <div className={styles.jobList}>
                {filteredJobs.map((job) => (
                    <div key={job._id} className={styles.jobCard}>
                        <h2>{job.title}</h2>
                        <p><FontAwesomeIcon icon={faBuilding} /> {job.company}</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}</p>
                        <p><FontAwesomeIcon icon={faBriefcase} /> {job.jobtype}</p>
                        <p>{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobSearch;