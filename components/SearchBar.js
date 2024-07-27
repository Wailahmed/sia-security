import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSearch(searchTerm);  // Pass the search term to the parent component
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Search</button>
        </form>
    );
}
