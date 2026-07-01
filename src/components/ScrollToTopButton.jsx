import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-3 right-4 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm bg-blue-950/50 text-gray-200 text-xl md:text-2xl font-bold shadow-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-110 z-50"
                >
                    <FaChevronUp />
                </button>
            )}
        </>
    );
}
