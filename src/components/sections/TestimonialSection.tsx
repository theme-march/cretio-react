import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import testimonial1 from "@assets/img/testmonial/testmonial-1.png";
import testimonial2 from "@assets/img/testmonial/testmonial-2.png";

const testimonials = [
    {
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        image: testimonial1,
        name: "Mostahid Jackma",
        location: "From USA",
    },
    {
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        image: testimonial2,
        name: "Morgan Brown",
        location: "From USA",
    },
    {
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        image: testimonial1,
        name: "Mostahid Jackma",
        location: "From USA",
    },
    {
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        image: testimonial2,
        name: "Morgan Brown",
        location: "From USA",
    },
];

const TestimonialSection: React.FC = () => {
    return (
        <section>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={500}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        991: {
                            slidesPerView: 2,
                        },
                    }}
                    navigation={{
                        nextEl: ".testmonial-button-next",
                        prevEl: ".testmonial-button-prev",
                    }}
                    className="testmonial-slider ak-slider"
                >
                    {testimonials.map((test, index) => (
                        <SwiperSlide key={index}>
                            <div className="testmonial-content style-1">
                                <div className="testmonial-card">
                                    <div className="ak-height-100 ak-height-lg-50"></div>
                                    <p className="testmonial-desp">{test.text}</p>
                                    <div className="ak-height-50 ak-height-lg-30"></div>
                                    <div className="testmonial-info">
                                        <img className="testmonial-img" src={test.image} alt={test.name} />
                                        <h6 className="testmonial-title">{test.name}</h6>
                                        <p className="testmonial-shot-desp">{test.location}</p>
                                    </div>
                                    <div className="ak-height-100 ak-height-lg-50"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="testmonial-swiper-controller">
                <div className="testmonial-button-prev">
                    <div>
                        <span className="svg-icon"><i className="flaticon-left-up"></i></span>
                        <span> Previous </span>
                    </div>
                </div>
                <div className="testmonial-button-next">
                    <div>
                        <span> Next </span>
                        <span className="svg-icon"><i className="flaticon-up-right-arrow"></i></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
