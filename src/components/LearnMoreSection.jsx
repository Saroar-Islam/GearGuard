import React from "react";
import { Link } from "react-router-dom";

const LearnMoreSection = () => {
    return (
        <div className="w-[90%] md:w-[70%] mx-auto flex flex-col xl:flex-row justify-between items-center xl:items-center px-10 md:px-20 py-8 bg-blue-900 text-white rounded-md gap-10 xl:gap-0">
            <div className="text-lg font-popins text-blue-200 max-w-md self-auto md:self-start xl:self-auto text-center md:text-left">
                <span className="font-bold text-white">Not sure what you need?</span> <br className=" xl:hidden" />{" "}
                Learn in seconds which types of insurance match your needs.
            </div>

            <div className=" self-auto md:self-end xl:self-auto">
                <Link
                    to="/learn-more"
                    className="font-NotoSerif font-bold px-8 py-3 text-lg bg-blue-900  border-2 rounded-md hover:border-blue-800 transition delay-75 hover:bg-blue-800 "
                >
                    LEARN MORE
                </Link>
            </div>
        </div>
    );
};

export default LearnMoreSection;
