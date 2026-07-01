import { Swiper, SwiperSlide } from "swiper/react";
import { motion, scale } from "framer-motion";

const fadeInAnimationVariants1 = {
    initial: {
        opacity: 0,
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
        y: 100,
    },

    animate: {
        opacity: 1,
        y: 0,

        transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
    },
};

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { clientReviews } from "../data/data";
import { useState } from "react";

const ClientReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section className="w-full sm:w-[75%] mx-auto mt-10 lg:mt-8 xl:mt-4">
            {/* Header + hr + Sub-header */}
            <div className="flex flex-col lg:flex-row justify-around items-center mb-10 lg:mb-10 xl:mb-6">
                <div className="flex-1 text-center lg:text-right px-2 lg:px-5">
                    <h1 className=" text-4xl font-bold text-blue-900 font-popins tracking-tight leading-normal">
                        Trusted by Drivers <br className="hidden lg:block" />
                        <span className="tracking-wide"> Nationwide </span>
                    </h1>
                </div>

                {/* center hr tag  */}
                <div className="flex justify-center items-center">
                    <hr className="w-[250px] lg:w-[5px] rounded-sm h-1 lg:h-[90px]  my-4 xl:my-10 lg:my-0 bg-blue-900 border-none" />
                </div>

                <div className="flex-1 px-3 lg:px-5 text-center lg:text-left">
                    <h2 className="font-popins text-xl max-w-96 text-slate-600 tracking-wide leading-normal lg:leading-relaxed">
                        Hear from real customers who rely on{" "}
                        <span className="text-blue-950 font-semibold">GearGuard </span> for protection and peace of
                        mind.
                    </h2>
                </div>
            </div>

            {/* reviews with swiper slides  */}
            <div className="relative w-full h-[380px]">
                {/* Overlay for active slide content */}
                <motion.div
                    variants={fadeInAnimationVariants1}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.01 }}
                    className="absolute top-8 md:top-0 left-0 w-full h-[40%] flex flex-col items-center justify-center text-center px-6 z-10"
                >
                    <p className="text-red-950 font-NotoSerif text-2xl max-w-3xl mb-6">
                        "{clientReviews[activeIndex].comments}"
                    </p>
                    <h3 className="text-xl font-popins font-semibold text-slate-800">
                        {clientReviews[activeIndex].name}
                    </h3>
                    <p className="text-sm text-gray-500">{clientReviews[activeIndex].occupation}</p>
                </motion.div>

                {/* Swiper with only images */}
                <Swiper
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 4, // override at 768px
                        },
                    }}
                    centeredSlides={true}
                    spaceBetween={-80}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="clientReviewSwiper h-full w-[300px] md:w-[550px]"
                    onActiveIndexChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    loop={true}
                >
                    {clientReviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                variants={fadeInAnimationVariants2}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, amount: 0.01 }}
                                className="flex justify-center items-end h-full"
                            >
                                <img
                                    src={review.img}
                                    alt={review.name}
                                    className="w-15 h-15 md:w-18 md:h-18 rounded-full object-cover mb-20"
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ClientReviews;
