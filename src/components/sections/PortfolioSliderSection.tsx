import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import port1 from "@assets/img/project/markag-project-1.png";
import port2 from "@assets/img/project/markag-project-2.png";
import port3 from "@assets/img/project/markag-project-3.png";

const portfolioItems = [
    { id: 1, title: "Product Launch Campaign for EcoHome", img: port1, category: "Digital Marketing" },
    { id: 2, title: "Influencer Marketing for TechGear", img: port2, category: "Marketing Strategy" },
    { id: 3, title: "Social Media Campaign for FashionHub", img: port3, category: "Content Creation" },
    { id: 4, title: "SEO Optimization for HealthPlus", img: port1, category: "SEO Agency" },
    { id: 5, title: "Brand Identity for GreenEnergy", img: port2, category: "Design Company" },
];

const PortfolioSliderSection: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="ak-section-heading ak-style-1">
                    <div className="ak-section-left">
                        <h2 
                            className="ak-section-title text-animation"
                            data-direction="textTop"
                            data-split-text="chars"
                            data-duration="0.7"
                        >
                            Our <span className="highlight">Exceptional</span> Digital Marketing <span className="highlight">Projects</span>
                        </h2>
                    </div>
                    <div className="ak-section-right">
                        <p 
                            className="ak-section-desp text-animation"
                            data-direction="rotationX"
                            data-split-text="lines"
                            data-delay="0.3"
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and
                            typesetting of the printing .
                        </p>
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div 
                                className="ak-section-caption fade-animation"
                                data-direction="right"
                                data-delay="0.3"
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                        <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span> 426+ Projects </span>
                            </div>
                            <div className="team-swiper-controller fade-animation" data-delay="0.4">
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
            <div className="container">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".team-logs-button-prev",
                        nextEl: ".team-logs-button-next",
                    }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    className="ak-team-slider"
                    loop={true}
                >
                    {portfolioItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to="/portfolio/portfolio-details" className="team-card border-0 fade-animation" data-direction="bottom">
                                <div className="team-img-top ak-parallax">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="team-body">
                                    <p className="team-title text-uppercase mb-1">{item.category}</p>
                                    <h6 className="team-designation m-0">{item.title}</h6>
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
