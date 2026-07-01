import { motion } from "framer-motion";
import { MdGraphicEq, MdSupportAgent } from "react-icons/md";
import { Link } from "react-scroll";

export default function HeroPromo({ isActive, headerBtnRef }) {
    return (
        <div className="relative z-40 flex flex-col items-center md:items-start justify-center h-full px-12 text-white max-w-4xl ">
            {/* Subheadline */}
            <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeIn", delay: 2 }}
                className="mt-4 text-lg md:text-xl font-medium font-popins"
            >
                Ambition insurance for any purpose
            </motion.p>

            {/* Headline */}
            <motion.h1
                initial={{ opacity: 0, x: 100 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 2.3 }}
                className="my-2 text-4xl md:text-7xl font-bold leading-tight font-NotoSerif"
            >
                Live Your Dream
            </motion.h1>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 2.4 }}
                className="mt-2 text-sm md:text-base text-white/80 max-w-2xl font-popins"
            >
                For nearly 50 years, we've prepared you for what's next in life. It's our ambition to help you live
                yours.
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-5 ">
                <motion.button
                    initial={{ opacity: 0, x: -500 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -500 }}
                    transition={{ duration: 0.4, ease: "easeIn", delay: 2.6 }}
                    className="w-[200px]  px-7 py-3 border font-bold rounded border-gray-800 hover:border-white text-blue-950 hover:text-white 
                     bg-white hover:bg-transparent transition cursor-pointer font-NotoSerif"
                    onClick={() => headerBtnRef.current?.click()}
                >
                    <div className="flex justify-center items-center gap-1">
                        <span>
                            <MdGraphicEq className="text-xl" />
                        </span>
                        Get a Quote
                    </div>
                </motion.button>

                <motion.button
                    initial={{ opacity: 0, x: 500 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 500 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 2.6 }}
                    className="w-[200px] px-7 py-3 border font-bold rounded border-white hover:border-gray-800 text-white  hover:text-blue-950 
                    bg-gray-900/10 backdrop-blur-sm hover:bg-white  transition cursor-pointer font-NotoSerif"
                >
                    <Link to="findAgent" className="flex justify-center items-center gap-1">
                        <span>
                            <MdSupportAgent className="text-xl" />
                        </span>
                        Find an Agent
                    </Link>
                </motion.button>
            </div>
        </div>
    );
}
