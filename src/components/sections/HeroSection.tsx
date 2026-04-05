import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import gsap from "gsap";

import { splitText } from "../../utils/textSplitter";

import starShape from "@assets/img/shape/star-1.png";
import heroVideo from "@assets/videos/digital-agencye.mp4";
import client1 from "@assets/img/client/client-1.png";
import client2 from "@assets/img/client/client-2.png";
import client3 from "@assets/img/client/client-3.png";
import client4 from "@assets/img/client/client-4.png";

const HeroSection: React.FC = () => {
    const swiperRef = useRef<Swiper | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const digitalElems = document.querySelectorAll(".digital");
            const agencyElems = document.querySelectorAll(".agency");

            let digitalChars: Element[] = [];
            digitalElems.forEach((el) => {
                const res = splitText(el as HTMLElement, "chars");
                if (res.chars) digitalChars.push(...res.chars);
            });

            let agencyChars: Element[] = [];
            agencyElems.forEach((el) => {
                const res = splitText(el as HTMLElement, "chars");
                if (res.chars) agencyChars.push(...res.chars);
            });

            // Hero Entry Animation
            const tl = gsap.timeline();

            tl.from(agencyChars, {
                duration: 2.5,
                x: -250,
                autoAlpha: 0,
                stagger: 0.02,
                ease: "elastic.out(1, 0.3)"
            })
            .from(digitalChars, {
                duration: 1,
                y: -150,
                autoAlpha: 0,
                stagger: 0.05,
                ease: "bounce.out"
            }, "0.8")
            .from(".hero-btn", {
                duration: 1,
                autoAlpha: 0,
                y: -100,
                ease: "bounce.out"
            }, "0.5")
            .from(".description", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2
            }, "-=0.5")
            .to(".hero-right-image", {
                duration: 2,
                width: "0%",
                ease: "expo.in",
                delay: 0.5,
            }, "-=3.5");


        }, sectionRef);

        // Swiper Init
        swiperRef.current = new Swiper(".partners-logos-slider", {
            modules: [Navigation, Scrollbar, Autoplay],
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
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
                console.log("Video auto-play prevented:", error);
            });
        }

        return () => {
            ctx.revert();
            if (swiperRef.current) swiperRef.current.destroy();
        };
    }, []);

    return (
        <section className="container container-customize" ref={sectionRef}>
            <div className="digital-agencye-hero style-1">
                <div className="hero-left-column">
                    <div className="title-box">
                        <h2 className="title ak-mask-text">
                            <span className="digital d-block">DIGITAL</span>
                            <span className="agency d-block">AGENCY</span>
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
                    {/* ... partners-section ... */}
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
                        <div className="hero-right-image"></div>
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
