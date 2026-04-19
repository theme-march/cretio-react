import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const testimonialsData = {
    "defaultTestimonials": [
        {
            "text": "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
            "image": "testmonial-1.png",
            "name": "Mostahid Jackma",
            "location": "From USA"
        },
        {
            "text": "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
            "image": "testmonial-2.png",
            "name": "Morgan Brown",
            "location": "From USA"
        },
        {
            "text": "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
            "image": "testmonial-1.png",
            "name": "Mostahid Jackma",
            "location": "From USA"
        },
        {
            "text": "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
            "image": "testmonial-2.png",
            "name": "Morgan Brown",
            "location": "From USA"
        }
    ],
    "marketingTestimonials": [
        {
            "id": 1,
            "text": "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
            "name": "Morgan Brown",
            "location": "From USA",
            "img": "testmonial-1.png"
        },
        {
            "id": 2,
            "text": "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
            "name": "Morgan Brown",
            "location": "From USA",
            "img": "testmonial-1.png"
        }
    ]
};
import { getImagePath } from "../../utils/imageLoader";

const testimonials = testimonialsData.defaultTestimonials;

interface TestimonialSectionProps {
    fadeAnimation?: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ fadeAnimation = false }) => {
    return (
        <section className={fadeAnimation ? "fade-animation" : ""}>
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={500}
                    spaceBetween={0}
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
                                        <img className="testmonial-img" src={getImagePath(test.image)} alt={test.name} />
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
