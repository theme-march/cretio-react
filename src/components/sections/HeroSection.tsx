import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar } from "swiper/modules";

import starShape from "@assets/img/shape/star-1.png";
import heroVideo from "@assets/videos/digital-agencye.mp4";
import client1 from "@assets/img/client/client-1.png";
import client2 from "@assets/img/client/client-2.png";
import client3 from "@assets/img/client/client-3.png";
import client4 from "@assets/img/client/client-4.png";

const HeroSection: React.FC = () => {
    const swiperRef = useRef<Swiper | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        swiperRef.current = new Swiper(".partners-logos-slider", {
            modules: [Navigation, Scrollbar],
            loop: true,
            autoplay: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: ".partners-logs-button-next",
                prevEl: ".partners-logs-button-prev",
            },
            scrollbar: {
                el: ".partners-logs-scrollbar",
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
            },
        });

        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Video auto-play was prevented. This is normal if the user hasn't interacted with the page yet.", error);
            });
        }
    }, []);

    return (
        <section className="container container-customize">
            <div className="digital-agencye-hero style-1">
                <div className="hero-left-column">
                    <div className="title-box">
                        <h2 className="title">
                            <span className="digital">DIGITAL</span>
                            <br />
                            <span className="agency">AGENCY</span>
                        </h2>
                    </div>
                    <div className="cta-box">
                        <div className="hero-btn">
                            <Link to="/contact" className="circle-btn circle-btn-anim">
                                <span className="text text-uppercase">
                                    Start
                                    <i className="flaticon-up-right-arrow"></i>
                                    <br />
                                    Project
                                </span>
                            </Link>
                        </div>
                        <p className="description">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className="partners-section">
                        <h6 className="partners-title">Our Trusted Partner</h6>
                        <div className="ak-slider partners-logos-slider">
                            <div className="swiper-wrapper">
                                {[client1, client2, client3, client4, client1, client2, client3, client4].map((client, i) => (
                                    <div className="swiper-slide" key={i}>
                                        <div className="client-logo style2">
                                            <img src={client} alt={`Partner ${i + 1}`} />
                                            <div className="client-info">
                                                <h6 className="client-title">Credesign</h6>
                                                <p className="client-shot-title">Portfolio Template</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="partners-swiper-controller">
                            <div className="partners-logs-scrollbar"></div>
                            <div className="partners-logs-navigation">
                                <div className="partners-logs-button-next hover-1">
                                    <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                                        <path
                                            d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z"
                                            fill="#353535"
                                        />
                                    </svg>
                                </div>
                                <div className="partners-logs-button-prev hover-2">
                                    <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                                        <path
                                            d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z"
                                            fill="#353535"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right-column">
                    <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </p>
                    <div className="image-box">
                        <div className="da-shape-star">
                            <img className="star-shape" src={starShape} alt="Star" />
                        </div>
                        <video ref={videoRef} autoPlay muted loop playsInline>
                            <source src={heroVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
