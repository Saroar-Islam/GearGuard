import { IoMdCloseCircleOutline } from "react-icons/io";

export default function GetAQuote({ onClose }) {
    return (
        <section className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-3" onClick={onClose}>
            {/* stopPropagation prevents closing when clicking inside the form */}
            <div
                className="relative w-full min-w-[280px] max-w-[680px] flex flex-col items-center justify-center  py-10 px-8 md:px-14 bg-gray-50 rounded-md text-blue-950"
                onClick={(e) => e.stopPropagation()}
            >
                {/* close button */}
                <div className="absolute top-2 right-2">
                    <button className="text-2xl lg:text-[20px] cursor-pointer" onClick={onClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>

                <h2 className="text-xl sm:text-3xl md:text-2xl font-bold text-blue-900 mb-8 leading-snug font-popins ">
                    YOU DRIVE THE CAR, <br className="hidden sm:inline" />
                    SHOULDN'T YOU DRIVE YOUR INSURANCE POLICY?
                </h2>

                <form className="space-y-6">
                    <input
                        type="text"
                        placeholder="FULL NAME"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">INSURANCE TYPE</option>
                        <option value="auto">Auto</option>
                        <option value="home">Home</option>
                        <option value="life">Life</option>
                        <option value="health">Health</option>
                    </select>

                    <button
                        type="submit"
                        className="w-[250px] flex items-center justify-center bg-blue-900 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-800 transition-all duration-200 font-popins cursor-pointer"
                    >
                        <span className="text-3xl">+</span>START SAVING TODAY
                    </button>
                </form>
            </div>
        </section>
    );
}
