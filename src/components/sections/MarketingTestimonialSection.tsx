import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import testimonialBg from "@assets/img/shape/testimonial.svg";
import testimonialImg1 from "@assets/img/testmonial/testmonial-1.png";

const testimonials = [
    {
        id: 1,
        text: "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
        name: "Morgan Brown",
        location: "From USA",
        img: testimonialImg1,
    },
    {
        id: 2,
        text: "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
        name: "Morgan Brown",
        location: "From USA",
        img: testimonialImg1,
    },
];

interface MarketingTestimonialSectionProps {
    variant?: string;
}

const MarketingTestimonialSection: React.FC<MarketingTestimonialSectionProps> = ({ variant = "" }) => {
    const isStyle2 = variant.includes("style-2");
    const isType2 = variant.includes("type-2");

    return (
        <section className="ak-black-bg">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="ak-parallax">
                <div className="ak-bg" style={{ backgroundImage: `url(${testimonialBg})` }}>
                    <div className={`testmonial-wrapper ${variant}`}>
                        <div className="container">
                            <div className="fade-animation">
                                <Swiper
                                    modules={[Navigation, Autoplay]}
                                    loop={true}
                                    autoplay={{ delay: 5000 }}
                                    navigation={
                                        isStyle2
                                            ? {
                                                  prevEl: ".ts-next-2",
                                                  nextEl: ".ts-prev-2",
                                              }
                                            : undefined
                                    }
                                    className={`ak-slider ${isStyle2 ? "testmonial-slider-2" : "testmonial-slider-1"} ak-center`}
                                >
                                    {testimonials.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className={`testmonial-content style-2 ${isType2 ? "type-2" : ""}`}>
                                                <div className="testmonial-desp-content">
                                                    <p className="desp" dangerouslySetInnerHTML={{ __html: item.text }} />
                                                </div>
                                                <div className="testmonial-person-content">
                                                    <div className="person-img">
                                                        <img src={item.img} alt={item.name} />
                                                    </div>
                                                    <div className="person-info">
                                                        <h6>{item.name}</h6>
                                                        <p>{item.location}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {isStyle2 && (
                                <div className={`testmonial-slider-controller-2 ${isType2 ? "type-2" : ""}`}>
                                    <div>
                                        <div className="testmonial-slider-btn ts-next-2 fade-animation" data-direction="right" data-offset="75">
                                            <div className="more-btn style3 arrow-left-style">
                                                <span className="svg-icon">
                                                    <i className="flaticon-left-arrow-1"></i>
                                                    <i className="flaticon-left-arrow-1"></i>
                                                </span>
                                                <span className="btn-text color-white"> Previous </span>
                                            </div>
                                        </div>
                                        <div className="testmonial-slider-btn ts-prev-2 fade-animation" data-direction="left" data-offset="75">
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default MarketingTestimonialSection;
