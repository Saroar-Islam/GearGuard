import subHeroImg from "../assets/subHero.jpg";

function SubHeroTest() {
    return (
        <div>
            <div className="min-h-screen w-full bg-gray-100 relative">
                {/* Noise Texture (Darker Dots) Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundColor: "#dbeafe",
                        opacity: 0.2,
                        background: `
                        radial-gradient(circle, transparent 20%, #dbeafe 20%, #dbeafe 80%, transparent 80%, transparent),
                        radial-gradient(circle, transparent 20%, #dbeafe 20%, #dbeafe 80%, transparent 80%, transparent) 10px 10px,
                        linear-gradient(#444cf7 0.8px, transparent 0.8px) 0 -0.4px,
                        linear-gradient(90deg, #444cf7 0.8px, #dbeafe 0.8px) -0.4px 0
                                `,
                        backgroundSize: "20px 20px, 20px 20px, 10px 10px, 10px 10px",
                    }}
                />
                {/* Your Content/Components */}

                <div className="flex justify-center">
                    <div className="max-w-4xl text-center  mt-20 font-NotoSerif">
                        {/* Headline */}
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 ">
                            Every Mile, Every Choice —
                            <span className="block text-blue-900 mt-4 font-semibold">
                                Insurance Designed to Follow Your Journey
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeroTest;
