import { eventsData } from "../data/data";
import bgImg from "../assets/cartographer.png";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function EventsSection() {
    return (
        <div className="relative mt-14 lg:mt-[356px]">
            <div className="h-[1382px] md:h-[1360px] lg:h-[200px] w-full bg-gray-100">
                {/* Noise Texture (Darker Dots) Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "repeat",
                        opacity: 0.15,
                    }}
                />

                <div className="relative pt-10 lg:pt-0 bottom-0 lg:bottom-[298px] w-[90%] xl:w-[75%] mx-auto z-20">
                    <div className="grid lg:grid-cols-3 gap-8 text-blue-900 max-w-sm md:max-w-sm lg:max-w-5xl xl:max-w-6xl mx-auto">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="flex flex-col justify-start items-start shadow-md bg-white rounded-sm"
                            >
                                <div>
                                    <img
                                        src={event.img}
                                        alt=""
                                        className="w-sm h-64 lg:h-64 xl:h-72 object-center rounded-t-sm"
                                    />
                                </div>

                                <div className="flex justify-center items-center m-3 gap-2 text-slate-500 font-popins">
                                    <FaRegCalendarAlt className="text-base mt-2" />
                                    <p className="text-sm mt-2">{event.date}</p>
                                </div>

                                <h3 className="text-xl font-bold ml-3 font-popins">{event.title}</h3>
                                <p className="m-3 text-sm  text-slate-500 font-popins">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

{
    /* <div className="grid md:grid-cols-3 gap-8 px-10 py-12 bg-blue-900 text-white rounded-md">
    {eventsData.map((event) => (
        <div key={event.id} className="p-6 bg-blue-800 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{event.title}</h3>
            <p className="text-sm mt-2">{event.date}</p>
            <p className="mt-4">{event.description}</p>
            <a href={event.link} className="inline-block mt-6 px-6 py-2 bg-white text-blue-900 font-bold rounded-md">
                {event.cta}
            </a>
        </div>
    ))}
</div>; */
}
