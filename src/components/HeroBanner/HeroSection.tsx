import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
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
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLElement>(null);


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const q = gsap.utils.selector(sectionRef);
            const digitalElems = q(".digital");
            const agencyElems = q(".agency");

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

            const tl = gsap.timeline({ delay: 1.0 });

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
                .from(q(".hero-btn"), {
                    duration: 1,
                    autoAlpha: 0,
                    y: -100,
                    ease: "bounce.out"
                }, "0.5")
                .to(q(".hero-right-image"), {
                    duration: 2,
                    width: "0%",
                    ease: "expo.in",
                    delay: 0.5,
                }, "-=3.5");


        }, sectionRef);



        if (videoRef.current) {
            videoRef.current.play().catch(() => {
            });
        }

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section className="container container-customize" style={{ overflow: "visible" }} ref={sectionRef}>
            <div className="digital-agencye-hero style-1">
                <div className="hero-left-column">
                    <div className="title-box">
                        <h2 className="title ak-mask-text">
                            <span className="digital d-block">Digital</span>
                            <span className="agency d-block">Agency</span>
                        </h2>
                    </div>
                    <div className="cta-box">
                        <div className="hero-btn">
                            <Link to="/contact" className="circle-btn circle-btn-anim">
                                <span className="text text-uppercase">
                                    <span>Start </span>
                                    <i className="flaticon-up-right-arrow"></i>
                                    <br />
                                    Project
                                </span>
                            </Link>
                        </div>
                        <p className="description">
                            We are a creative agency dedicated to transforming your vision into reality through innovative design and strategic digital solutions.
                        </p>
                    </div>
                    <div className="partners-section">
                        <h6 className="partners-title">Our Trusted Partner</h6>
                        <div className="ak-slider partners-logos-slider">
                            <Swiper
                                modules={[Navigation, Scrollbar, Autoplay]}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                slidesPerView={4}
                                spaceBetween={30}
                                navigation={{
                                    nextEl: ".partners-logs-button-next",
                                    prevEl: ".partners-logs-button-prev",
                                }}
                                scrollbar={{ el: ".partners-logs-scrollbar" }}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    992: { slidesPerView: 3 },
                                    1200: { slidesPerView: 4 },
                                }}
                            >
                                {[client1, client2, client3, client4, client1, client2, client3, client4].map((client, i) => (
                                    <SwiperSlide key={`partner-${i}`}>
                                        <div className="client-logo style2">
                                            <img src={client} alt={`Partner ${i + 1}`} />
                                            <div className="client-info">
                                                <h6 className="client-title">Credesign</h6>
                                                <p className="client-shot-title">Digital Solutions</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
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
                        In an era defined by rapid technological change, we provide the expertise and creativity needed to help your brand stand out and succeed in the digital landscape.
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
