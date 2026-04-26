import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const heroData = {
    "marketingHero": [
        {
            "id": 1,
            "img": "marketing-agency.png",
            "caption": "Business Hunter",
            "subTitle": "Driving <span class=\"highlight\">Growth</span> Through",
            "mainTitle": "<span class=\"highlight\">Creative</span> Marketing Strategies"
        },
        {
            "id": 2,
            "img": "marketing-agency-2.png",
            "caption": "Business Hunter",
            "subTitle": "Driving <span class=\"highlight\">Growth</span> Through",
            "mainTitle": "<span class=\"highlight\">Creative</span> Marketing Strategies"
        }
    ],
    "creativeHero": [
        { "id": 1, "img": "creative-portfolio.png", "title": "Captivating <span class=\"highlight-text\">Portfolio</span> Designs to Inspire" },
        { "id": 2, "img": "creative-portfolio-2.png", "title": "Captivating <span class=\"highlight-text\">Portfolio</span> Designs to Inspire" },
        { "id": 3, "img": "creative-portfolio-3.jpg", "title": "Captivating <span class=\"highlight-text\">Portfolio</span> Designs to Inspire" }
    ]
};
import { getImagePath } from "@/utils/imageLoader";

const heroSlides = heroData.creativeHero;

const CreativePortfolioHeroSection: React.FC = () => {
    return (
        <div className="creactive-portflio-hero-area">
            <Swiper
                modules={[Parallax, Pagination, Autoplay]}
                parallax={true}
                speed={1000}
                autoplay={{ delay: 5000 }}
                pagination={{ el: ".cp-swiper-pagination", clickable: true }}
                className="creactive-portflio-slider ak-slider"
            >
                {heroSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="cp-hero-content" data-swiper-parallax="15%">
                            <img src={getImagePath(slide.img)} alt="Portfolio" className="img-fluid" />
                            <div className="container-customize">
                                <div className="cp-hero-title-box">
                                    <h1
                                        className="cp-hero-title"
                                        data-swiper-parallax="700"
                                    ><ParsedText text={slide.title} /></h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="cta-box">
                    <div className="cta-content">
                        <div className="dot-box">
                            <span className="right-dot"></span>
                            <span className="top-bot"></span>
                            <span className="bottom-dot"></span>
                            <span className="left-dot"></span>
                        </div>
                        <div className="cta-info">
                            <p className="description">
                                We combine technical expertise with creative vision to deliver digital products that stand out in today's competitive landscape.
                            </p>
                            <Link to="/contact" className="circle-btn circle-btn-anim">
                                <span className="text text-uppercase">
                                    <span>Send </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M17.5 2.60144H2.5C2.155 2.60144 1.875 2.88144 1.875 3.22644C1.875 3.57144 2.155 3.85144 2.5 3.85144H15.9909L2.05812 17.7846C1.81406 18.0286 1.81406 18.4243 2.05812 18.6683C2.18031 18.7905 2.34 18.8514 2.5 18.8514C2.66 18.8514 2.82 18.7905 2.94187 18.6683L16.875 4.73519V18.2264C16.875 18.5714 17.155 18.8514 17.5 18.8514C17.845 18.8514 18.125 18.5714 18.125 18.2264V3.22644C18.125 2.88144 17.845 2.60144 17.5 2.60144Z" fill="#FF4A23" />
                                    </svg>
                                    <br />
                                    Message
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="cp-swiper-pagination"></div>
                </div>

                <ul className="cp-social-links">
                    <li className="sa-social-item"><a href="https://facebook.com/" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer"> Facebook</a></li>
                    <li className="sa-social-item"><a href="https://linkedin.com/" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn </a></li>
                    <li className="sa-social-item"><a href="https://github.com/" aria-label="Follow us on Github" target="_blank" rel="noopener noreferrer">Github </a></li>
                    <li className="sa-social-item"><a href="https://dribbble.com/" aria-label="Follow us on Dribbble" target="_blank" rel="noopener noreferrer">Dribbble </a></li>
                </ul>
            </Swiper>
        </div>
    );
};

export default CreativePortfolioHeroSection;
