import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeading from "@components/Common/SectionHeading";

interface CoreFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

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

const PricingFeaturesSection: React.FC = () => {
    const title = "Our <span class=\"highlight\">Exceptional</span> Digital Services <span class=\"highlight\">Capabilities</span>";
    const description = "Choose the perfect plan that fits your business needs. We offer flexible pricing options designed for startups and enterprises alike.";
    const caption = "Services";

    return (
        <section className="core-features-area">
            <div className="ak-height-150 ak-height-lg-80"></div>

            <div className="container">
                <SectionHeading
                    title={title}
                    description={description}
                    caption={caption}
                    variant="style-1"
                    titleDirection="textLeft"
                    titleDuration={1.2}
                    disableCaptionAnimation={true}
                    disableDespAnimation={true}
                />
            </div>

            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container">
                <div className="core-features-swiper-controller">
                    <div className="core-features-scrollbar"></div>
                    <div className="core-features-navigation">
                        <div className="core-features-button-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                <path d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z" fill="#353535" />
                            </svg>
                        </div>
                        <div className="core-features-button-next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                <path d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z" fill="#353535" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="">
                <Swiper
                    className="core-features style2 ak-slider"
                    modules={[Navigation, Scrollbar]}
                    loop={true}
                    navigation={{
                        nextEl: ".core-features-button-next",
                        prevEl: ".core-features-button-prev",
                    }}
                    scrollbar={{
                        el: ".core-features-scrollbar",
                        draggable: true,
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        400: { slidesPerView: 1 },
                        580: { slidesPerView: 2 },
                        991: { slidesPerView: 3 },
                        1199: { slidesPerView: 3 },
                        1399: { slidesPerView: 4 },
                        1499: { slidesPerView: 5 },
                    }}
                >
                    {coreFeaturesData.map((feature) => (
                        <SwiperSlide key={feature.id}>
                            <div className="core-feature-card style-2" style={{ maxWidth: "100%" }}>
                                <div className="icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h6 className="core-feature-title">{feature.title}</h6>
                                <p className="core-feature-desp ak-color-c1c1c1">{feature.description}</p>
                                <p className="core-feature-number">{feature.id}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PricingFeaturesSection;
