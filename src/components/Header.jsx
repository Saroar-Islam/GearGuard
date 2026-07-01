import React, { forwardRef, useState } from "react";
import logo from "../assets/logoNew3.png";

import { socialLinks, headerActions, contactInfo } from "../data/data";
import GetAQuote from "./GetAQuote";

import MakeAClaim from "./MakeAClaim";
import Navbar from "./Navbar";

import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = forwardRef((_, ref) => {
    // inside Header component
    const navigate = useNavigate();
    const location = useLocation();

    const handleHeaderAction = (action) => {
        const isRoute = action.path.startsWith("/");

        if (isRoute) {
            navigate(action.path);
        } else {
            if (location.pathname !== "/") {
                navigate("/");

                setTimeout(() => {
                    scroller.scrollTo(action.path, {
                        smooth: true,
                        offset: action.offset || 0,
                        duration: 600,
                    });
                }, 150);
            } else {
                scroller.scrollTo(action.path, {
                    smooth: true,
                    offset: action.offset || 0,
                    duration: 600,
                });
            }
        }
    };

    const [showGetAQuote, setGetAQuote] = useState(false);
    const [showMakeAClaim, setMakeAClaim] = useState(false);

    return (
        <header className="relative">
            {/* top header with media icons */}
            <div className="bg-blue-50">
                <div className="w-full sm:w-[75%] mx-auto flex flex-col sm:flex-row justify-between items-center py-6 md:py-2 px-0">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4 text-gray-600">
                        {socialLinks.map(({ href, icon: Icon, hover, border }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${hover} ${border} transition-colors px-2 md:px-4`}
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>

                    {/* Header makeClaim and  Header Actions */}
                    <div className="flex space-x-0 mt-5 sm:mt-0 justify-center items-center text-xs tabletL:text-base font-NotoSerif">
                        <button
                            className="px-2 md:px-4 py-2  text-blue-900 font-bold hover:text-blue-600 cursor-pointer transition borderSide"
                            onClick={() => setMakeAClaim(true)}
                        >
                            Make a claim
                        </button>

                        {showMakeAClaim && <MakeAClaim onClose={() => setMakeAClaim(false)} />}

                        {/* Header Actions  */}
                        {headerActions.map(({ label, path, border }, index) => (
                            <button
                                key={index}
                                onClick={() => handleHeaderAction({ label, path, border })}
                                className={`px-2 md:px-4 py-2 text-blue-900 font-bold hover:text-blue-600 cursor-pointer transition ${border}`}
                            >
                                {" "}
                                {label}{" "}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main header - with logo, contact, CTA btn */}
            <div className="w-full sm:w-[75%] mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between px-0 py-8 md:pt-5 md:pb-10 ">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <img src={logo} alt="GearGuard company logo" className="w-64 h-20" />
                    </a>

                    {/* Contact Info */}
                    <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 items-center text-sm text-gray-700 font-medium py-5 xl:py-0">
                        {contactInfo.map(({ label, href, icon: Icon, type, border }, index) => (
                            <a
                                key={index}
                                href={href}
                                className={`flex font-NotoSerif items-center gap-2 text-xl text-blue-900 hover:text-blue-600 px-6 ${border}`}
                            >
                                {type === "email" && <Icon size={26} />}
                                {type === "phone" && <Icon size={26} />}
                                <p>{label}</p>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="my-4">
                        <button
                            ref={ref}
                            onClick={() => setGetAQuote(true)}
                            className="bg-blue-900 text-white px-4 py-2 rounded-md text-base font-semibold font-popins hover:bg-blue-700 cursor-pointer"
                        >
                            Get a Quote
                        </button>
                    </div>
                    {showGetAQuote && <GetAQuote onClose={() => setGetAQuote(false)} />}
                </div>
            </div>

            <div className="absolute -bottom-8 left-0 w-full z-40">
                <Navbar />
            </div>
        </header>
    );
});

export default Header;
