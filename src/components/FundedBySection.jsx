import { fundedByData } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const colors = {
    blue: {
        heading: "text-blue-900",
        hr: "bg-blue-900",
        accent: "text-slate-700",
    },
    orange: {
        heading: "text-orange-900",
        hr: "bg-black",
        accent: "text-black",
    },
};

export default function FundedBySection({ colorScheme = "blue" }) {
    const scheme = colors[colorScheme];

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-[90%] xl:w-[75%] mx-auto">
            {/* Title */}
            <div className="w-full md:w-[30%] text-left mt-15 mb-5 md:mb-15 flex justify-center md:justify-start items-center">
                <div>
                    <hr className={`w-1.5 h-[68px] lg:h-[68px] mr-2 rounded-sm border-none ${scheme.hr}`} />
                </div>

                <h1 className={`text-3xl font-bold font-popins tracking-tight leading-normal ${scheme.heading}`}>
                    FUNDED
                    <span className={`tracking-wide ${scheme.accent}`}> AND </span>
                    <br className="block" />
                    BACKED BY
                </h1>
            </div>

            {/* Swiper */}
            <div className="w-full md:w-[70%] mb-20 md:mb-0">
                <Swiper spaceBetween={20} slidesPerView={3} loop={true} modules={[Autoplay]} autoplay={{ delay: 3000 }}>
                    {fundedByData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-[90px] h-[90px] mx-auto flex items-center justify-center">
                                <img src={item.img} alt={item.alt} className="w-full h-full object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
