import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
    {
        id: 1,
        text: "“I was impressed with the results. Their team is knowledgeable and provided great insights into our digital marketing strategy.”",
        author: "Jane Doe",
        designation: "Marketing Director",
    },
    {
        id: 2,
        text: "“The team's creativity and dedication transformed our online presence. We've seen a significant increase in engagement and sales.”",
        author: "John Smith",
        name: "John Smith",
        location: "CEO of TechGear",
        img: "https://via.placeholder.com/50", // Placeholder image
    },
];

interface MarketingTestimonialSectionProps {
    variant?: string;
}

const MarketingTestimonialSection: React.FC<MarketingTestimonialSectionProps> = ({ variant = "" }) => {
    return (
        <section className="ak-black-bg">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="testmonial-area ak-parallax">
                <div className={`testmonial-wrapper ${variant}`}>
                    <div className="container">
                        <div className="fade-animation">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                pagination={{ el: variant.includes("type-2") ? ".testmonial-slider-controller-2" : undefined, clickable: true }}
                                autoplay={{ delay: 5000 }}
                                className={`ak-slider ${variant.includes("type-2") ? "testmonial-slider-2" : "testmonial-slider-1"} ak-center`}
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className={`testmonial-content style-2 ${variant.includes("type-2") ? "type-2" : ""}`}>
                                            <div className="testmonial-desp-content">
                                                <p className="desp" dangerouslySetInnerHTML={{ __html: item.text }} />
                                            </div>
                                            <div className="testmonial-person-content">
                                                <div className="person-img">
                                                    <img src={item.img} alt="..." />
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
                        {variant.includes("type-2") && (
                            <div className="testmonial-slider-controller-2 type-2">
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
        </section>
    );
};


export default MarketingTestimonialSection;
