import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: ''
    });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`/api/users/${id}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/users/${id}`, user);
            router.push('/admin/manage-users');  // Redirect to the users listing page or user profile page
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="role">Role:</label>
            <input
                type="text"
                id="role"
                name="role"
                value={user.role}
                onChange={handleChange}
            />

            <button type="submit">Update User</button>
        </form>
    );
};

export default EditUser;
