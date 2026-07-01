import React from "react";
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import topoPattern from "../assets/cartographer.png";
import { motion, scale } from "framer-motion";

const fadeInAnimationVariants1 = {
    initial: {
        opacity: 1,
        x: 0,
        scale: 0,
    },

    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};
const fadeInAnimationVariants2 = {
    initial: {
        opacity: 0,
        x: -100,
    },

    animate: {
        opacity: 1,
        x: 0,

        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};
const fadeInAnimationVariants3 = {
    initial: {
        opacity: 0,
        x: 100,
    },

    animate: {
        opacity: 1,
        x: 0,

        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};

function FindAgent() {
    return (
        <div className="relative mt-14" >
            <div className=" h-[600px] md:h-[400px] xl:h-[400px] 2xl:h-[420px] w-full bg-gray-100">
                {/* bg- patterns */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${topoPattern})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        opacity: 0.15,
                    }}
                />

                <div className="relative z-30 top-14">
                    {/* Heading */}
                    <motion.div
                        variants={fadeInAnimationVariants1}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.1 }}
                        className="font-bold font-popins text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-4xl text-blue-900 mb-2">
                            Not sure what you need? <br />
                        </h2>
                        <h3 className="text-2xl md:text-4xl text-blue-800">Find an Agent Now</h3>
                    </motion.div>

                    {/* Boxes */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto px-4">
                        {/* Phone Box */}
                        <motion.div
                            variants={fadeInAnimationVariants2}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex flex-col items-start pl-10 justify-center bg-blue-900 shadow-md rounded-lg w-full md:w-1/2 max-w-sm h-[170px] text-slate-200"
                        >
                            <div className="flex justify-center gap-3 mb-5">
                                <FaPhoneAlt className="text-2xl mt-1" />
                                <p className="font-medium text-xl font-NotoSerif">Call Us</p>
                            </div>

                            <div>
                                <p className="text-2xl font-semibold font-popins">+1 (800) 123-4567</p>
                            </div>
                        </motion.div>

                        {/* Email Box */}
                        <motion.div
                            variants={fadeInAnimationVariants3}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, amount: 0.5 }}
                            className="flex flex-col items-start px-10 justify-center bg-blue-900 shadow-md rounded-lg w-full md:w-1/2 max-w-sm h-[170px] text-slate-200"
                        >
                            <div className="flex justify-center gap-3 mb-5">
                                <FaEnvelope className="text-2xl mt-1" />
                                <p className="font-medium text-xl font-NotoSerif">Enter your email</p>
                            </div>

                            {/* Input with icon button */}
                            <div className="relative w-full mt-2">
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800"
                                >
                                    <FaArrowRight className="text-xl" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindAgent;
