"use client";

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
// import { useState } from 'react';
// import LoginForm from "./LoginForm";
import './modal.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    // const [showLoginForm, setShowLoginForm] = useState(false);

    // const toggleLoginForm = () => {
    //     setShowLoginForm(!showLoginForm);
    // };

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
                    <Link href="/register" style={{ marginRight: '10px'}}>
                        <Button
                            type="button"
                            title="Register"
                            icon="/user.svg"
                            variant="btn_dark_green"
                            // onClick={toggleLoginForm}
                        />
                    </Link>
                    <Link href="/login">
                        <Button
                            type="button"
                            title="Login"
                            icon="/user.svg"
                            variant="btn_dark_green"
                            // onClick={toggleLoginForm}
                        />
                    </Link>
                </div>



                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                />
            </nav>
        </div>
    )
}

export default Navbar;
