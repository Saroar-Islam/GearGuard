import React, { useState } from "react";
import bgImg from "../assets/readyToStartBg.jpg";
import bgImg2 from "../assets/readyToStartBg2.jpg";
import bgImg3 from "../assets/readyToStartBg3.jpg";
import car from "../assets/3dCarEmoji.png";
import SignInForm from "./SignInForm";

const ReadyToStart = () => {
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <div className="relative my-14" >
            <div className=" h-[830px] sm:h-[830px] lg:h-[730px] w-full bg-gray-100">
                {/* bg- patterns */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        opacity: 0.5,
                    }}
                />
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start relative z-50 p-5 lg:p-30 ">
                    {/* Left side - Form */}
                    <div className=" w-full min-w-[280px] max-w-[380px] p-8 flex flex-col justify-center bg-white rounded-md text-blue-950">
                        <h2 className="text-3xl font-bold mb-3  font-popins text-center">Get Started</h2>
                        <hr className="h-0.5 mb-6 w-full bg-gray-800 opacity-8 border-none" />

                        {/* <label className="text-sm font-medium text-gray-700">Name</label> */}
                        <input
                            type="text"
                            className="mb-6 px-10 py-2 mt-1 w-full rounded-sm text-base font-NotoSerif text-black font-normal border-gray-300 shadow-tb focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Your name"
                        />

                        {/* <label className="text-sm font-medium text-gray-700">Email</label> */}
                        <input
                            type="email"
                            className="mb-6 px-10 py-2 mt-1 w-full rounded-sm text-base font-NotoSerif text-black font-normal border-gray-300 shadow-tb focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />

                        {/* <label className="text-sm font-medium text-gray-700">Car Type</label> */}
                        <textarea
                            className="mb-10 px-6 py-6 mt-1 w-full h-40 rounded-md text-sm font-NotoSerif text-black font-normal border border-gray-300 shadow-tb focus:border-indigo-500 focus:ring-indigo-500 resize-none"
                            placeholder="Provide details about your Car"
                        ></textarea>

                        <button className="w-[200px] mx-auto py-2 px-4 bg-indigo-900 cursor-pointer text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition delay-50 font-NotoSerif hover:text-gray-300">
                            Start Now
                        </button>

                        <div className="mt-4 text-center text-sm text-blue-950/50 font-popins flex justify-center items-center gap-1">
                            <p>Already a member?</p>

                            <button
                                onClick={() => setShowSignIn(true)}
                                className="text-indigo-600 hover:underline cursor-pointer"
                            >
                                Sign In
                            </button>
                        </div>

                        {/* sign in from   */}
                        {/* Modal */}
                        {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} />}
                    </div>

                    {/* Right side - header nad img */}
                    <div className="flex flex-col justify-center items-center text-blue-950 gap-3 xl:gap-15 text-center lg:text-left ">
                        <div>
                            <h1 className="text-4xl ml-0 lg:ml-20 font-extrabold mb-4 mt-6 lg:mt-0 font-NotoSerif max-w-lg">
                                Ready to Start Your Journey?
                            </h1>
                            <p className="text-lg my-6 ml-0 lg:ml-20 max-w-sm font-popins">
                                Join us today and explore premium experiences tailored just for you.
                            </p>
                        </div>

                        <div className="hidden lg:flex justify-center items-center">
                            <img src={car} alt="car" width={300} height={30} />
                        </div>
                    </div>
                </div>
                ;
            </div>
        </div>
    );
};

export default ReadyToStart;
