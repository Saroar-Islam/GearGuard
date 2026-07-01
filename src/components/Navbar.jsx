import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { SiEbox } from "react-icons/si";
import { navItems } from "../data/data";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const [activeRoute, setActiveRoute] = useState("/");

    useEffect(() => {
        if (location.pathname.startsWith("/")) {
            setActiveRoute(location.pathname);
        }
    }, [location.pathname]);

    const toggleDropdown = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    const getResponsiveOffset = (item) => {
        if (window.innerWidth < 768) {
            return item.smOffset ?? 0;
        }
        return item.lgOffset ?? 0;
    };

    const handleNavClick = (item) => {
        const isRoute = item.path.startsWith("/");
        if (isRoute) {
            setActiveRoute(item.path);
            navigate(item.path);
        } else {
            const offset = getResponsiveOffset(item);
            if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                    scroller.scrollTo(item.path, { smooth: true, offset, duration: 600 });
                }, 150);
            } else {
                scroller.scrollTo(item.path, { smooth: true, offset, duration: 600 });
            }
        }
    };

    return (
        <nav className="w-full xl:w-[75%] mx-auto bg-blue-900 shadow-md px-6 py-4 flex items-center justify-between rounded-none xl:rounded-md ">
            {/* Left: Hamburger (mobile only) */}
            <FaBars
                className="text-2xl cursor-pointer text-gray-100 hover:text-blue-500 xl:hidden"
                onClick={() => setIsOpen(true)}
            />

            {/* Nav Links - desktop */}
            <ul className="hidden xl:flex gap-8 text-gray-50 text-xl font-medium">
                {navItems.map((item, idx) => (
                    <li className="relative group cursor-pointer" key={idx}>
                        <button
                            onClick={() => handleNavClick(item)}
                            className={`font-NotoSerif cursor-pointer transition-colors duration-100 delay-150 
                                 ${
                                     item.path.startsWith("/") && activeRoute === item.path
                                         ? "line-through text-blue-600"
                                         : "hover:text-blue-600"
                                 } `}
                        >
                            {item.label}
                            {item.dropdown && <FaChevronDown className="inline-block text-sm mx-1 text-gray-400" />}
                        </button>

                        {item.dropdown && (
                            <ul className="absolute -left-6 top-full bg-blue-900 py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition text-base rounded-sm">
                                {item.dropdown.map((sub, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => handleNavClick(sub)}
                                            className="block w-full text-start cursor-pointer pl-8 py-2 hover:bg-blue-50 hover:text-blue-600 font-normal font-popins transition-colors duration-100 delay-150"
                                        >
                                            {sub.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            {/* Right: Search + Box Icon */}
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    className="hidden md:flex items-center border border-gray-300 rounded-full px-2 bg-gray-100 py-1 outline-none text-sm"
                />
                <SiEbox className="text-2xl text-gray-100 cursor-pointer hover:text-blue-300" />
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Close button */}
                <div className="flex justify-between items-center px-4 py-4 border-b">
                    <span className="text-lg font-semibold text-blue-700">Menu</span>
                    <FaTimes
                        className="text-xl cursor-pointer text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                {/* Mobile nav links */}
                <ul className="flex flex-col gap-4 px-4 py-6 text-gray-700 font-medium">
                    {navItems.map((item, idx) => (
                        <li key={idx}>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => {
                                        handleNavClick(item);
                                        setIsOpen(false);
                                    }}
                                    className="hover:text-blue-600 font-NotoSerif"
                                >
                                    {item.label}
                                </button>
                                {item.dropdown && (
                                    <FaChevronDown
                                        className={`ml-2 cursor-pointer transition-transform ${
                                            openDropdown === item.label ? "rotate-180 text-blue-600" : "text-gray-600"
                                        }`}
                                        onClick={() => toggleDropdown(item.label)}
                                    />
                                )}
                            </div>

                            {item.dropdown && openDropdown === item.label && (
                                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                                    {item.dropdown.map((sub, i) => (
                                        <li key={i}>
                                            <button
                                                onClick={() => {
                                                    handleNavClick(sub);
                                                    setIsOpen(false);
                                                }}
                                                className="block px-2 py-1 hover:bg-blue-50 hover:text-blue-600 rounded"
                                            >
                                                {sub.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-400 opacity-50 xl:hidden z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
