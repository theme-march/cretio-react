import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialItem from "./TestimonialItem";
import type { Testimonial } from "./TestimonialItem";
import testimonialSvg from "@assets/img/shape/testimonial.svg";

const testimonials: Testimonial[] = [
    {
        "id": 1,
        "text": "The SEO strategies implemented have been an absolute <span class=\"highlight\">game-changer</span> for our growth. Their innovative approach significantly boosted our organic traffic and conversions.",
        "name": "Morgan Brown",
        "location": "From USA",
        "img": "testmonial-1.png"
    },
    {
        "id": 2,
        "text": "Exceptional attention to detail and <span class=\"highlight\">technical expertise</span>. They delivered a high-performance platform that exceeded our expectations and perfectly represents our brand.",
        "name": "David Smith",
        "location": "From Canada",
        "img": "testmonial-2.png"
    }
];

const DesignCompanyTestimonialSection: React.FC = () => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <section className="ak-black-bg overflow-hidden">
            <div className="ak-bg" style={{ backgroundImage: `url(${testimonialSvg})` }}>
                <div className="testmonial-wrapper">
                    <div className="container">
                        <div className="fade-animation">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                navigation={{ prevEl, nextEl }}
                                className="ak-slider testmonial-slider-2 ak-center"
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <TestimonialItem testimonial={item} />
                                    </SwiperSlide>
                                ))}
                                <div className="theme-border-wrap">
                                    <div className="b-top-left">
                                        <div className="horizontal"></div>
                                        <div className="vertical"></div>
                                    </div>
                                    <div className="b-top-right d-flex">
                                        <div className="horizontal"></div>
                                        <div className="vertical"></div>
                                    </div>
                                    <div className="b-bottom-right d-flex flex-end">
                                        <div className="horizontal flex-end align-self-end"></div>
                                        <div className="vertical"></div>
                                    </div>
                                    <div className="b-bottom-left">
                                        <div className="vertical"></div>
                                        <div className="horizontal"></div>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                        <div className="testmonial-slider-controller-2">
                            <div>
                                <div className="testmonial-slider-btn ts-next-2 fade-animation" ref={(node) => setPrevEl(node as HTMLElement)} data-direction="right" data-offset="75">
                                    <div className="more-btn style3 arrow-left-style">
                                        <span className="svg-icon">
                                            <i className="flaticon-left-arrow-1"></i>
                                            <i className="flaticon-left-arrow-1"></i>
                                        </span>
                                        <span className="btn-text color-white"> Previous </span>
                                    </div>
                                </div>
                                <div className="testmonial-slider-btn ts-prev-2 fade-animation" ref={(node) => setNextEl(node as HTMLElement)} data-direction="left" data-offset="75">
                                    <div className="more-btn style3">
                                        <span className="btn-text color-white"> Next </span>
                                        <span className="svg-icon style-three">
                                            <i className="flaticon-right-arrow-4"></i>
                                            <i className="flaticon-right-arrow-4"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignCompanyTestimonialSection;
