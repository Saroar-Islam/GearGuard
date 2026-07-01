import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Navbar";
import { heroImgData } from "../data/data";
import HeroPromo from "./HeroPromo";

export default function Hero({ headerBtnRef }) {
    return (
        <section className="relative h-[650px] w-full mt-0 bg-gray-400">
            {/* Background Swiper */}
            <Swiper
                modules={[Autoplay, Pagination, EffectCreative, EffectFade]}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        swiper.slideNext(); // 👈 forces a change right after mount
                    }, 5); // small timeout ensures Swiper is ready
                }}
                effect={"creative"}
                speed={2300}
                creativeEffect={{
                    prev: {
                        // shadow: true,
                        translate: [0, 0, 0],
                        opacity: 0.4,
                    },
                    next: {
                        translate: ["100%", 0, 0],
                        shadow: true,
                        opacity: 0.6,
                    },
                }}
                loop={true}
                className="absolute inset-0 h-full w-full heroSwiper"
                allowTouchMove={false}
                // direction={"horizontal"}
                initialSlide={2}
                breakpoints={{
                    0: {
                        direction: "horizontal",
                    },
                    1280: {
                        direction: "vertical",
                    },
                }}
            >
                {heroImgData.map(({ img, bgCls1, bgCls2 }, idx) => (
                    <SwiperSlide key={idx}>
                        {({ isActive }) => (
                            <div
                                className={`h-full w-full bg-no-repeat ${bgCls1}  ${bgCls2}`}
                                style={{ backgroundImage: `url(${img})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-blue-950/40 z-0"></div>

                                <motion.div
                                    initial={{ opacity: 1, y: 0 }}
                                    // animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut", delay: isActive ? 2.3 : 0 }}
                                    className="absolute inset-y-0 flex items-center justify-center md:justify-start md:left-28 z-220 pointer-events-auto"
                                >
                                    <HeroPromo
                                        key={isActive ? "active" : "inactive"}
                                        isActive={isActive}
                                        headerBtnRef={headerBtnRef}
                                    />
                                </motion.div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nav on top */}
            {/* <div className="absolute -top-5 left-0 w-full z-40">
                <Navbar />
            </div> */}
        </section>
    );
}
