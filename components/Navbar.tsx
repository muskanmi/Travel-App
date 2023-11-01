"use client";

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from 'react';
// import LoginForm from "./LoginForm";
import './modal.css'

const Navbar = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <div className="nav-container">
            <nav className="flexBetween max-container padding-container relative z-30 py-5">
                <Link href="/">
                    <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
                </Link>
                <ul className="hidden h-full gap-12 lg:flex">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key}
                            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>

                <div className="lg:flexCenter hidden">
                    <Button
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn_dark_green"
                        onClick={toggleLoginForm}
                    />
                </div>

                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                />
            </nav>

            {showLoginForm &&
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleLoginForm}>&times;</span>
                        <form className="login-form">
                            {/* Email and Password inputs */}
                            <input type="email" placeholder="Email" className="email-input" />
                            <input type="password" placeholder="Password" className="pass-input" />
                            <p className="remember"> &#9675; Remember me </p>
                            <button type="submit" className="submit">Sign In</button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;
