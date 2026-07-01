import React from "react";
import subHeroImg from "../assets/subHero.jpg";

import { animate, motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInAnimationVariants1 = {
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

const fadeInAnimationVariants2 = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};

function Overview() {
    return (
        <div className="relative">
            <div className="h-[800px] md:h-[900px] xl:h-[600px] 2xl:h-[700px] w-full bg-gray-100">
                {/* Noise Texture (Darker Dots) Background */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        backgroundColor: "#dbeafe",
                        opacity: "0.3",
                        background:
                            "radial-gradient(circle, transparent 20%, #dbeafe 20%, #dbeafe 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #dbeafe 20%, #dbeafe 80%, transparent 80%, transparent) 10px 10px, linear-gradient(#6d70c2 0.8px, transparent 0.8px) 0 -0.4px, linear-gradient(90deg, #6d70c2 0.8px, #dbeafe 0.8px) -0.4px 0",
                        backgroundSize: "20px 20px, 20px 20px, 10px 10px, 10px 10px",
                    }}
                ></div>

                <motion.div
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.01 }}
                    className="relative top-8 xl:-top-20 flex flex-col xl:flex-row justify-center items-center w-[90%] xl:w-[85%] lg:w-[75%] mx-auto z-50 text-5xl text-center text-blue-400"
                >
                    <div className="relative top-0 xl:-top-6 mt-0">
                        <img
                            src={subHeroImg}
                            alt="img"
                            className="w-full max-w-[500px] md:max-w-[700px]  xl:max-w-[900px] mx-auto rounded-sm shadow-2xl"
                        />
                    </div>

                    <div className="max-w-4xl text-center px-6 mt-8 xl:8 font-NotoSerif">
                        {/* Headline */}
                        <h1 className="text-3xl xl:text-4xl font-bold tracking-tight text-slate-900 ">
                            Every Mile, Every Choice —
                            <span className="block text-blue-900 mt-4 font-semibold">
                                Insurance Designed to Follow Your Journey
                            </span>
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeInAnimationVariants2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.01 }}
                    className="relative top-20 xl:top-0 flex flex-col justify-center items-center z-50 gap-15"
                >
                    {/* Supporting Paragraph */}
                    <p className="text-xl text-slate-700 max-w-2xl mx-auto block font-popins text-center">
                        Since 1917, Instive, the New York Mutual Insurance Company, has been serving policyholders with
                        reliable protection for businesses, families, and drivers alike.
                    </p>

                    {/* Learn More Button */}
                    <Link
                        to="/learn-more"
                        className="bg-blue-900 text-white px-6 py-2 rounded-xl text-2xl font-semibold font-popins hover:bg-blue-800 "
                    >
                        Learn More
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Overview;

//  {/* <!-- Background Pattern --> */}

//  <div
//                     className="absolute inset-0 z-0"
//                     style={{
//                         background: "#f9fafb",
//                         backgroundImage: "radial-gradient(circle at 5px 5px, rgba(0, 0, 0, 0.10) 2px, transparent 0) ",
//                         backgroundSize: "10px 10px",
//                     }}
//                 />
//                 {/* Your Content/Components */}
//                 </div>

{
    /* <!-- Hero Content --> */
}
{
    /* <div className="relative z-50 flex h-full flex-col items-center justify-center px-4">
                <div className="max-w-3xl text-center">
                    <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
                        Your Next Great
                        <span className="text-sky-900">Project</span>
                    </h1>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-700">
                        Build modern and beautiful websites with this collection of stunning background patterns.
                        Perfect for landing pages, apps, and dashboards.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="rounded-lg px-6 py-3 font-medium bg-sky-900 text-white hover:bg-sky-800">
                            Get Started
                        </button>
                        <button className="rounded-lg border px-6 py-3 font-medium border-slate-200 bg-white text-slate-900 hover:bg-slate-50">
                            Learn More
                        </button>
                    </div>
                </div>
            </div> */
}
