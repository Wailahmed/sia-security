import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/AdminManageUsers.module.css';
import { useRouter } from 'next/router';

export default function ManageUsers() {
    const router = useRouter();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        } catch (err) {
            setError('Failed to fetch users');
        }
    };

    const deleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`/api/users/${userId}`);
                fetchUsers(); // refresh the list after deleting
            } catch (err) {
                setError('Failed to delete user');
            }
        }
    };

    const handleEdit = (user) => {
        // This function could open a modal or redirect to an edit page with user details
        router.push(`/edit/user/${user._id}`)
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Manage Users</h1>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className={styles.editButton} onClick={() => handleEdit(user)}>Edit</button>
                                <button className={styles.deleteButton} onClick={() => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
