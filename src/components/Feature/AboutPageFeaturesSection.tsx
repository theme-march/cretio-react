import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionHeading from "@components/Common/SectionHeading";
import CoreFeatureCard from "./CoreFeatureCard";
import type { CoreFeature } from "./CoreFeatureCard";

import "swiper/css";
import "swiper/css/pagination";

const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Web Development",
        description: "We build fast, scalable, and maintainable web applications tailored to your business goals and user needs.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "UI/UX Design",
        description: "Our design team crafts intuitive interfaces that balance aesthetics with functionality for a seamless user journey.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Web Design",
        description: "From landing pages to full websites, we create visually compelling designs that reflect your brand identity.",
    },
    {
        id: "04",
        icon: "flaticon-twirl",
        title: "App Development",
        description: "We develop robust mobile and desktop applications that deliver consistent performance across all platforms.",
    },
    {
        id: "05",
        icon: "flaticon-twirl",
        title: "E-commerce Solutions",
        description: "We build conversion-optimized online stores with secure payment systems and smooth shopping experiences.",
    },
];

const AboutPageFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area ak-solidblack-bg">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title="Our Exceptional Digital Transformation Services"
                    description="We deliver digital solutions that drive growth, enhance user experience, and position your brand at the forefront of innovation."
                    caption="Services"
                    variant="style-1"
                    className="bg-black"
                    descriptionClassName="ak-color-c1c1c1"
                    highlightWords={["Exceptional", "Services"]}
                    disableDespAnimation={true}
                    disableCaptionAnimation={true}
                    titleDirection="textLeft"
                />
            </div>

            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container">
                <Swiper
                    className="core-features ak-slider slider-two"
                    modules={[Pagination]}
                    loop={true}
                    pagination={{
                        el: ".core-features-swiper-pagination",
                        clickable: true,
                        type: "custom" as const,
                        renderCustom: (swiper: { realIndex: number }) => {
                            let dots = "";
                            const realCurrent = swiper.realIndex % 3;
                            for (let i = 0; i < 3; i++) {
                                dots += `<span class="swiper-pagination-bullet ${
                                    i === realCurrent ? "swiper-pagination-bullet-active" : ""
                                }"></span>`;
                            }
                            return dots;
                        },
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        580: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {coreFeaturesData.map((feature, index) => (
                        <SwiperSlide key={feature.id}>
                            <CoreFeatureCard
                                feature={feature}
                                index={index}
                                variant="style-2"
                                cardAnimation="fade-animation"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="core-features-swiper-pagination"></div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default AboutPageFeaturesSection;
