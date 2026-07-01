import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { coverages } from "../data/data";
import InsurancePlans from "../components/InsurancePlans";
import Footer from "../components/Footer";
import FundedBySection from "../components/FundedBySection";

const LearmMorePage = () => {
    return (
        <main className=" bg-gray-200 pt-2" id="learnMorePage ">
            {/* Hero Section */}
            <section className="my-16 w-[90%] sm:w-[75%] mx-auto">
                <div className="w-full max-w-2xl mx-auto">
                    <h3 className=" text-3xl lg:text-4xl font-bold text-black leading-15 text-center font-popins mb-4">
                        HERE <span className="text-orange-800">AT GearGuard </span> -
                    </h3>
                    <p className="text-slate-800 font-semibold max-w-2xl font-NotoSerif">
                        we believe car insurance should be more than just a policy—it should be peace of mind. Driving
                        is part of everyday life, and protecting your vehicle means protecting your freedom, your
                        family, and your future. That's why we''ve built GearGuard around transparency, reliability, and
                        customer-first service.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mb-16 w-[90%] sm:w-[75%] mx-auto text-start">
                <h2 className="text-3xl font-bold text-black mb-2 font-popins ">
                    Our <span className="text-orange-900">Mission </span>
                </h2>
                <p className="text-slate-900 font-NotoSerif">
                    Our mission is to make car insurance simple, affordable, and dependable. We know that accidents and
                    unexpected events can be stressful, so our goal is to remove the confusion and provide clear
                    coverage options that fit your lifestyle. Whether you're commuting to work, taking a road trip, or
                    just running errands, GearGuard ensures you're protected every mile of the way.
                </p>
            </section>

            {/* Coverage Section */}
            <section className="mb-10 w-[90%] sm:w-[75%] mx-auto">
                <h2 className="text-3xl font-bold text-black mb-2 font-popins ">
                    <span className="text-orange-900">Coverage </span>Options
                </h2>

                <p className="text-slate-900 font-NotoSerif">
                    GearGuard offers a wide range of coverage plans designed to meet different needs. From basic
                    liability coverage to comprehensive protection, we help you choose the plan that makes sense for
                    your budget and driving habits.
                </p>

                <ul className="list-inside text-black space-y-3 mt-6 ml-4">
                    {coverages.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                            <FaHandPointRight className="text-orange-700 text-2xl" />{" "}
                            <p className="text-lg font-NotoSerif text-slate-900"> {item}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* price list */}
            <section className="mb-20">
                <InsurancePlans colorScheme="orange" />
            </section>

            {/* Why Choose Section */}
            <section className="content w-[90%] sm:w-[75%] mx-auto">
                <h2 className="text-3xl font-bold text-black mb-2 font-popins">
                    Why Choose <span className="text-orange-900"> GearGuard?</span>
                </h2>

                <p className="text-slate-900 font-NotoSerif ">
                    Choosing GearGuard means choosing a partner who values your safety and your time. We provide fast
                    claims processing, 24/7 customer support, and flexible payment options to make insurance
                    stress-free. With GearGuard, you're not just buying insurance—you're investing in confidence on the
                    road.
                </p>
            </section>

            {/* footer */}

            <FundedBySection colorScheme="orange" />

            <Footer colorScheme="orange" />
        </main>
    );
};

export default LearmMorePage;
