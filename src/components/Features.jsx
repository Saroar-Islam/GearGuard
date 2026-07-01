import React from "react";
import { companyInfo } from "../data/data";
import { div } from "framer-motion/client";
import { CgMenuRound } from "react-icons/cg";
import { animate, motion } from "framer-motion";

const isSmallGridView = window.innerWidth < 1024;

const loadingAnimationVariants = {
    initial: {
        opacity: 0,
        ...(isSmallGridView ? { y: -100 } : { x: -100 }),
    },

    animate: (index) => ({
        opacity: 1,
        ...(isSmallGridView ? { y: 0 } : { x: 0 }),
        transition: { delay: (index + 1) * 0.2, duration: 0.4, ease: "easeIn" },
    }),
};

const Features = () => {
    return (
        <section className="w-full sm:w-[90%] xl:w-[75%] mx-auto mt-10 lg:mt-12 mb-20 xl:mb-44">
            {/* Header + hr + Sub-header */}
            <div className="flex flex-col lg:flex-row justify-around items-center mb-10 lg:mb-12">
                <div className="flex-1 text-center lg:text-right px-2 lg:px-5">
                    <h1 className=" text-4xl font-bold text-blue-900 font-popins tracking-normal leading-normal">
                        Trusted Since <br className="hidden lg:block" /> <span className="tracking-wide"> 1927 </span>
                    </h1>
                </div>

                {/* center hr tag  */}
                <div className="flex justify-center items-center">
                    <hr className="w-[250px] lg:w-[5px]  h-1 lg:h-[90px] my-4 lg:my-0 bg-blue-900 border-none" />
                </div>

                <div className="flex-1 px-3 lg:px-5 text-center lg:text-left">
                    <h2 className="font-popins text-base max-w-96 text-gray-800 tracking-wide leading-normal lg:leading-relaxed">
                        Since 1927, GearGuard has been protecting drivers in Chicago — safeguarding journeys, mitigating
                        risks, and ensuring peace of mind.
                    </h2>
                </div>
            </div>

            {/* Images mapped from data.js */}
            <div className=" max-w-xl lg:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-2 xl:gap-5 mt-6 place-items-center">
                {companyInfo.map((item, index) => (
                    <motion.div
                        variants={loadingAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.01 }}
                        custom={index}
                        className="relative group overflow-hidden"
                        key={item.id}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className=" h-[400px] md:h-[400px] lg:h-[360px] xl:h-[400px] object-fill rounded-sm shadow-lg"
                        />

                        {/* compnay info, show on hover  */}
                        <div
                            className="absolute top-0 left-0  w-full h-[400px] md:h-[400px] group-hover:bg-blue-950/80
                            transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100
                            transition-all duration-500 flex flex-col justify-center items-center text-white text-center"
                        >
                            <item.icon className="text-6xl mb-4" />
                            <h1 className="font-bold font-NotoSerif text-2xl 2xl:text-3xl"> {item.header} </h1>
                            <h3 className="mt-7 font-normal font-popins"> {item.subheader} </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
