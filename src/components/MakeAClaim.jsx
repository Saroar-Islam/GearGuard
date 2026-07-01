import { IoMdCloseCircleOutline } from "react-icons/io";

export default function MakeAClaim({ onClose }) {
    return (
        <section className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-3" onClick={onClose}>
            {/* stopPropagation prevents closing when clicking inside the form */}
            <div
                className="relative w-full min-w-[280px] max-w-[680px] flex flex-col items-center justify-center py-10 px-8 md:px-14 bg-gray-50 rounded-md text-blue-950"
                onClick={(e) => e.stopPropagation()}
            >
                {/* close button */}
                <div className="absolute top-2 right-2">
                    <button className="text-2xl lg:text-[20px] cursor-pointer" onClick={onClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>

                <h2 className=" w-full text-xl sm:text-3xl md:text-2xl font-bold text-blue-900 mb-8 leading-snug font-popins">
                    MAKE A CLAIM <br />
                    <span className="text-blue-900/70">QUICK, EASY & SECURE</span>
                </h2>

                <form className="space-y-6">
                    {/* Policy Number */}
                    <input
                        type="text"
                        placeholder="POLICY NUMBER"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Claim Type */}
                    <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">CLAIM TYPE</option>
                        <option value="auto">Auto Insurance</option>
                        <option value="home">Home Insurance</option>
                        <option value="life">Life Insurance</option>
                        <option value="health">Health Insurance</option>
                        <option value="property">Property Insurance</option>
                    </select>

                    {/* Description */}
                    <textarea
                        placeholder="DESCRIBE THE INCIDENT..."
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Contact Email */}
                    <input
                        type="email"
                        placeholder="CONTACT EMAIL"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-[250px] flex items-center justify-center bg-blue-900 text-white font-semibold py-2 px-3 rounded-md hover:bg-blue-800 transition-all duration-200 font-popins cursor-pointer"
                    >
                        <span className="text-3xl">+</span>SUBMIT CLAIM
                    </button>
                </form>
            </div>
        </section>
    );
}
