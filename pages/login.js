import Link from 'next/link';
import styles from '../styles/Login.module.css';
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import axios from "axios";
import {getCurrentUser, setCurrentUser} from "@/store/current-user";

const Login = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const result = await response.json();
        setUsers(result);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUsers();
  }, []);

  if (users === null) {
    return <p>Cannot access data source</p>
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    for (let user of users) {
      if (user.email === email && user.password === password) {
        setCurrentUser(Object.assign({}, user));
        if (getCurrentUser().userType === "employer") {
          router.push('/employer-dashboard');
        }
        else {
          router.push('/dashboard');
        }

        return;
      }
    }

    alert("Incorrect email and password");
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h1>Login to SecureConnect</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <div className={styles.links}>
          <Link href="/forgot-password" legacyBehavior>
            <a className={styles.link}>Forgot Password?</a>
          </Link>
          <Link href="/register" legacyBehavior>
            <a className={styles.link}>Create New Account to register</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;