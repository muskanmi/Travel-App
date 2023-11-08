"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    // const router = useRouter();
    const { data: session, status: sessionStatus } = useSession();

    useEffect(() => {
        if (sessionStatus === 'authenticated') {
            // router.replace("/login");
            window.location.replace('/');
        }
    }, [sessionStatus]);

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        console.log(email, password);

        if (!isValidEmail(email)) {
            setError("Email is invalid")
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            if (res.status === 400) {
                setError("This email is already registered");
            }
            if (res.status === 200) {
                setError("");
                window.location.replace('/login');
            }
        } catch (error) {
            setError("Error, try again");
            console.log(error);

        }

    }

    if (sessionStatus === "loading") {
        return <h1>Loading...</h1>;
      }
    

    return (
        sessionStatus !== "authenticated" && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', paddingBottom: '100px' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }} className='bg-[#212121] roundeed shadow-md'>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" className='text-white'>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '2px solid black', marginTop: '10px' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" className='text-white'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '2px solid black', marginTop: '10px' }}
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '8px', backgroundColor: '#30af5b', color: 'white', border: 'none' }}>
                    Submit
                </button>
                <p className="text-red-600 text-[16px] mb-4">{error && error}</p>

                <div className='text-center text-gray-500 mt-4'>- OR -</div>
                <Link className='block text-center hover:underline mt-2' href="/login" style={{ color: "#30af5b" }}>
                    Login with an existing account
                </Link>
            </form>
        </div>
        )
    );
};

export default Register;
