import React from "react";
import { companyInfo, insurancePlansData } from "../data/data";
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
        y: 150,
    },

    animate: {
        opacity: 1,
        y: 0,

        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};

function InsurancePlans({ colorScheme = "blue" }) {
    const colors = {
        blue: {
            heading: "text-blue-900",
            hrTag: "bg-blue-900",
            TierTitle: "text-blue-900",
            price: "text-slate-700",
            icon: "text-blue-800",
            link: "text-blue-900 after:bg-blue-900",
        },
        orange: {
            heading: "text-orange-800",
            hrTag: "bg-orange-800",
            TierTitle: "text-orange-900",
            price: "text-orange-700",
            icon: "text-orange-700",
            link: "text-orange-900 after:bg-orange-600",
        },
    };

    const scheme = colors[colorScheme];

    return (
        <section className="w-full sm:w-[90%] xl:w-[75%] mx-auto mt-10 lg:mt-8 xl:mt-4">
            {/* Header + hr + Sub-header */}
            <motion.div
                variants={fadeInAnimationVariants1}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col lg:flex-row justify-around items-center mb-10 lg:mb-8 xl:mb-0"
            >
                <div className="flex-1 text-center lg:text-right px-2 lg:px-5">
                    <h1 className={`text-4xl font-bold ${scheme.heading} font-popins tracking-tight leading-normal `}>
                        A Plan for <span className="text-slate-800"> Every</span> <br className="hidden lg:block" />
                        <span className="tracking-wide"> Journey </span>
                    </h1>
                </div>

                {/* center hr tag  */}
                <div className="flex justify-center items-center">
                    <hr
                        className={`w-[250px] lg:w-[5px] rounded-sm h-1 lg:h-[90px]  my-4 xl:my-10 lg:my-0 ${scheme.hrTag} border-none`}
                    />
                </div>

                <div className="flex-1 px-3 lg:px-5 text-center lg:text-left">
                    <h2 className="font-popins text-xl max-w-96 text-gray-800 tracking-wide leading-normal lg:leading-relaxed">
                        Choose the coverage that fits your lifestyle and budget
                    </h2>
                </div>
            </motion.div>

            {/* plan data, mapped */}
            <motion.div
                variants={fadeInAnimationVariants2}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.00001 }}
                className=" max-w-sm md:max-w-4xl xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-5 px-10 sm:px-0 place-items-center "
            >
                {insurancePlansData.map((plan) => (
                    <div
                        key={plan.id}
                        className={`w-full max-w-xl rounded-sm p-6 ${plan.shadow} hover:shadow-sm transition-all duration-300 ease-in-out`}
                    >
                        <div className="flex justify-center items-center gap-6 md:gap-10 xl:gap-15 mb-8 md:mb-5">
                            <h2 className={`text-2xl xl:text-3xl font-NotoSerif font-semibold ${scheme.TierTitle}`}>
                                {plan.tier}
                            </h2>
                            <h3 className={`text-2xl mt-1 font-semibold ${scheme.price} font-popins`}>
                                {plan.price}
                                <span className="font-medium text-base text-slate-400">/month </span>
                            </h3>
                        </div>

                        <ul className=" list-inside text-slate-700 space-y-3 font-NotoSerif mb-2 md:mb-1 ml-0 md:ml-5">
                            {plan.coverage.map((item, index) => (
                                <li key={index} className="flex justify-start items-start gap-2.5">
                                    <item.icon className={`${scheme.icon} mt-1`} />
                                    <h5> {item.text} </h5>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center items-center">
                            <a
                                href={plan.href}
                                className={`mt-5 font-bold text-xl ${scheme.link} relative 
                            after:content-[''] after:block after:w-full after:h-0.5 
                            after:transition-all after:duration-300 after:ease-in-out 
                            hover:after:w-0`}
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

export default InsurancePlans;
