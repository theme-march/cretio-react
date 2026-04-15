import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";

import projectsData from "@/dataJson/projectsData.json";
import { getImagePath } from "@/utils/imageLoader";

const portfolioItems = projectsData.sliderProjects;
 
const PortfolioSliderSection: React.FC = () => {
    const swiperContainerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".team-card");
            if (cards.length > 0) {
                gsap.from(cards, {
                    scrollTrigger: {
                        trigger: swiperContainerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    stagger: 0.1,
                });
            }
        }, swiperContainerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="ak-section-heading ak-style-1">
                    <div className="ak-section-left">
                        <h2 
                            className="ak-section-title fade-animation"
                            data-direction="right"
                            data-offset="55"
                            data-duration="0.7"
                            data-delay="0.3"
                        >
                            Our <span className="highlight">Exceptional</span> Digital Marketing <span className="highlight">Projects</span>
                        </h2>
                    </div>
                    <div className="ak-section-right fade-animation" data-direction="left" data-offset="55" data-delay="0.3">
                        <p className="ak-section-desp">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and
                            typesetting of the printing .
                        </p>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="ak-section-caption">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                        <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span> 426+ Projects </span>
                            </div>
                            <div className="team-swiper-controller">
                                <div className="team-logs-navigation">
                                    <div className="team-logs-button-prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                            <g clipPath="url(#clip0_287989272_379)">
                                                <path d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z" fill="currentColor" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="team-logs-button-next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                            <g clipPath="url(#clip45340_2272_376)">
                                                <path d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z" fill="currentColor" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div style={{ height: "544px", overflow: "hidden" }} ref={swiperContainerRef}>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".team-logs-button-prev",
                        nextEl: ".team-logs-button-next",
                    }}
                    spaceBetween={15}
                    slidesPerView={1}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        768: { slidesPerView: 2.5 },
                        1200: { slidesPerView: 4.5 },
                    }}
                    className="ak-team-slider"
                    loop={true}
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id} style={{ padding: "0 12px" }}>
                            <Link 
                                to="/portfolio/portfolio-details" 
                                className="team-card border-0" 
                            >
                                <div className="team-img-top ak-parallax" style={{ maxHeight: "450px", overflow: "hidden" }}>
                                    <img src={getImagePath(item.image)} alt={item.title} className="w-100" />
                                </div>
                                <div
                                    className="team-body"
                                    style={{ marginTop: "30px", paddingBottom: "10px" }}
                                >
                                    <p className="team-text text-uppercase ak-font-16 mb-1">{item.category}</p>
                                    <h6 className="team-title m-0">{item.title}</h6>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PortfolioSliderSection;
