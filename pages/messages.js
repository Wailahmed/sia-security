import styles from '../styles/Messages.module.css';
import Link from 'next/link'
import {useEffect, useState} from "react";

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('/api/notifications', { mathod: "GET" });
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const result = await response.json();
                setMessages(result);
            } catch (err) {
                console.error(err);
            }
        }

        fetchMessages();
    })

    if (messages === null) {
        return <p>Cannot get messages</p>
    }

    return (
        <div className={styles.container}>
            <Link href="/dashboard">Dashboard</Link>
            <h1>Messages</h1>
            <div className={styles.messageList}>
                {messages.map((message) => (
                        <div key={message?._id} className={styles.messageCard}>
                            <h2>{message?.title}</h2>
                            <p>Date: {message?.date}</p>
                            <p>{message?.message}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Messages;