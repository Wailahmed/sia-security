import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const EditJob = () => {
    const [job, setJob] = useState({
        title: '',
        description: '',
        requirements: '',
        location: '',
        salary: ''
    });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            axios.get(`/api/jobs/${id}`)
                .then(response => {
                    setJob(response.data);
                })
                .catch(error => console.error('Error fetching job:', error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJob(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/jobs/${id}`, job);
            router.push('/admin/manage-jobs');  // Redirect to the job listing page or dashboard
        } catch (error) {
            console.error('Error updating job:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Job Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={job.title}
                onChange={handleChange}
                required
            />

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                name="description"
                value={job.description}
                onChange={handleChange}
                required
            />

            <label htmlFor="requirements">Requirements:</label>
            <textarea
                id="requirements"
                name="requirements"
                value={job.requirements}
                onChange={handleChange}
            />

            <label htmlFor="location">Location:</label>
            <input
                type="text"
                id="location"
                name="location"
                value={job.location}
                onChange={handleChange}
            />

            <label htmlFor="salary">Salary:</label>
            <input
                type="text"
                id="salary"
                name="salary"
                value={job.salary}
                onChange={handleChange}
            />

            <button type="submit">Update Job</button>
        </form>
    );
};

export default EditJob;
