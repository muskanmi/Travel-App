"use client";
import React, { useState, FormEvent } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
        console.log('Submitted:', { email, password });
        // Add your logic for handling form submission, e.g., sending data to an API
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '2px solid black' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '2px solid black' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '8px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
