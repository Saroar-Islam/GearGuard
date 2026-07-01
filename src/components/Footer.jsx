// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaEnvelope, FaRegBuilding, FaPhoneAlt, FaClock } from "react-icons/fa";

import { SiTicktick } from "react-icons/si";
import logo from "../assets/logoNew3.png";
import ScrollToTopButton from "./ScrollToTopButton";
import { socialLinks } from "../data/data";

const colors = {
    blue: {
        heading: "text-blue-900",
        text: "text-blue-950",
        hover: "hover:text-blue-700",
        icon: "text-blue-950",
        button: "bg-blue-900 hover:bg-blue-700 text-white",
        footerBg: "bg-blue-900",
    },
    orange: {
        heading: "text-orange-900",
        text: "text-black",
        hover: "hover:text-orange-600",
        icon: "text-orange-700",
        button: "bg-orange-800 hover:bg-orange-600 text-white",
        footerBg: "bg-orange-950",
    },
};

export default function Footer({ colorScheme = "blue" }) {
    const scheme = colors[colorScheme];

    return (
        <footer>
            <div className="w-[90%] xl:w-[75%] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center md:justify-items-normal">
                    {/* OUR COMPANY */}
                    <div>
                        <h3 className={`font-bold mb-4 font-popins text-xl ${scheme.heading}`}>OUR COMPANY</h3>
                        <ul className={`space-y-2.5 text-[17px] font-NotoSerif font-medium ${scheme.text}`}>
                            {[
                                "Our Story",
                                "News & Blog",
                                "Careers",
                                "Customer Support",
                                "Contact Us",
                                "Website Accessibility",
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className={`transition duration-300 ${scheme.hover}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CORPORATE INFO */}
                    <div>
                        <h3 className={`font-bold mb-4 font-popins text-xl ${scheme.heading}`}>CORPORATE INFO</h3>
                        <ul className={`space-y-2.5 text-[17px] font-NotoSerif font-medium ${scheme.text}`}>
                            {[
                                "Auto Insurance",
                                "Home Insurance",
                                "Claims",
                                "Agent Locator",
                                "Express Access",
                                "Money Back Policy",
                                "Life Insurance Companies",
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className={`transition duration-300 ${scheme.hover}`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="col-span-full md:col-span-1">
                        <h3 className={`font-bold mb-4 font-popins text-xl ${scheme.heading}`}>GET IN TOUCH</h3>
                        <p className="text-sm text-slate-500 mb-2 font-medium">We're here to listen:</p>

                        <ul
                            className={`list-inside space-y-6 mt-6 text-[14px] font-NotoSerif font-medium ${scheme.text}`}
                        >
                            <li className="flex justify-start items-center gap-5">
                                <FaRegBuilding className={`${scheme.icon} mt-1 text-xl`} />
                                <h5 className="max-w-40">2390 NW 2nd Ave, Miami FL 33127, USA</h5>
                            </li>

                            <li className="flex justify-start items-center gap-5">
                                <FaPhoneAlt className={`${scheme.icon} mt-1 text-xl`} />
                                <h5 className="max-w-40 font-bold">Phone: +1 (305) 677-3952</h5>
                            </li>

                            <li className="flex justify-start items-center gap-5">
                                <FaClock className={`${scheme.icon} mt-1 text-xl`} />
                                <h5 className="max-w-40">Hours: 9am to 7pm EST, Monday to Friday</h5>
                            </li>
                        </ul>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="col-span-full md:col-span-1">
                        <h3 className={`font-bold mb-4 font-popins text-xl ${scheme.heading}`}>NEWSLETTER</h3>
                        <p className="text-sm text-slate-500 mb-8 font-medium">
                            Receive resources & tools that can help you prepare for the future. You can cancel anytime.
                        </p>

                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="YOUR MAIL HERE"
                                className="px-4 py-2 rounded text-gray-800 bg-white placeholder-gray-500 focus:outline-none text-center border border-gray-300"
                            />
                            <button
                                type="submit"
                                className={`${scheme.button} py-2 rounded font-semibold flex justify-center items-center gap-2 cursor-pointer transition duration-300`}
                            >
                                <SiTicktick className="text-white mt-1 text-xl" />
                                <h5 className="max-w-40">SUBSCRIBE NOW</h5>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className={`${scheme.footerBg} mt-10`}>
                <div className="w-[90%] xl:w-[75%] mx-auto py-6 flex flex-col-reverse lg:flex-row items-center justify-between text-sm text-white gap-10 lg:gap-0">
                    <div>
                        <p className="text-center font-NotoSerif text-slate-300">
                            © 2025, GearGuard. <br />
                            All Rights Reserved by GearGuard
                        </p>
                    </div>

                    {/* logo */}
                    <div>
                        <a href="/" className="">
                            <img
                                src={logo}
                                alt="GearGuard company logo"
                                className="w-64 md:w-72 h-20 filter brightness-50 contrast-75 invert"
                            />
                        </a>
                    </div>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        {socialLinks.map(({ id, icon: Icon, href, bg }) => (
                            <a key={id} href={href} className={`p-2.5 rounded-sm transition-colors duration-300 ${bg}`}>
                                <Icon />
                            </a>
                        ))}
                    </div>

                    <ScrollToTopButton />
                </div>
            </div>
        </footer>
    );
}
