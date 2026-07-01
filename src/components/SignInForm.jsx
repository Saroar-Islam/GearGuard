import { IoMdCloseCircleOutline } from "react-icons/io";

export default function SignInForm({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 p-3" onClick={onClose}>
            {/* stopPropagation prevents closing when clicking inside the form */}
            <div
                className="relative w-full min-w-[280px] max-w-[380px] flex flex-col items-center justify-center py-10 px-8 bg-gray-200 rounded-md text-blue-950"
                onClick={(e) => e.stopPropagation()}
            >
                {/* close button */}
                <div className="absolute top-2 right-2">
                    <button className="text-2xl lg:text-[20px] cursor-pointer" onClick={onClose}>
                        <IoMdCloseCircleOutline />
                    </button>
                </div>

                <label className="text-3xl mb-7 font-bold font-NotoSerif text-blue-900">Welcome Back </label>

                <input
                    type="email"
                    className="mb-6 px-10 py-2 mt-1 w-full rounded-sm text-base font-NotoSerif bg-gray-50 text-black font-normal border-gray-300 shadow-tb focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your email"
                    required
                />
                <input
                    type="password"
                    className="mb-8 px-10 py-2 mt-1 w-full rounded-sm text-base font-NotoSerif bg-gray-50 text-black font-normal border-gray-300 shadow-tb focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Enter your Password"
                    required
                />

                <button className="w-[200px] mx-auto py-2 px-4 bg-indigo-900 cursor-pointer text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition delay-50 font-NotoSerif hover:text-gray-300">
                    Login
                </button>
            </div>
        </div>
    );
}
