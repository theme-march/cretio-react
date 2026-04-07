import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import heroImg1 from "@assets/img/hero/marketing-agency.png";
import heroImg2 from "@assets/img/hero/marketing-agency-2.png";

const heroSlides = [
    {
        id: 1,
        img: heroImg1,
        caption: "Business Hunter",
        subTitle: 'Driving <span class="highlight">Growth</span> Through',
        mainTitle: '<span class="highlight">Creative</span> Marketing Strategies',
    },
    {
        id: 2,
        img: heroImg2,
        caption: "Business Hunter",
        subTitle: 'Driving <span class="highlight">Growth</span> Through',
        mainTitle: '<span class="highlight">Creative</span> Marketing Strategies',
    },
];

const MarketingHeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const circleButtons = gsap.utils.toArray<HTMLElement>(".circle-btn-anim");
            circleButtons.forEach((btn) => {
                const strength = 40;
                const text = btn.querySelector(".text");

                const handleMouseMove = (event: MouseEvent) => {
                    const bounding = btn.getBoundingClientRect();
                    const newX = ((event.clientX - bounding.left) / btn.offsetWidth) - 0.5;
                    const newY = ((event.clientY - bounding.top) / btn.offsetHeight) - 0.5;
                    
                    gsap.to(btn, {
                        x: newX * strength,
                        y: newY * strength,
                        ease: "power4.out",
                    });

                    if (text) {
                        gsap.to(text, {
                            x: newX * (strength / 2),
                            y: newY * (strength / 2),
                            ease: "power4.out",
                        });
                    }
                };

                const handleMouseLeave = () => {
                    gsap.to(btn, { x: 0, y: 0, ease: "power2.out" });
                    if (text) {
                        gsap.to(text, { x: 0, y: 0, ease: "power2.out" });
                    }
                };

                btn.addEventListener("mousemove", handleMouseMove as EventListener);
                btn.addEventListener("mouseleave", handleMouseLeave as EventListener);
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useLayoutEffect(() => {
        if (!swiperInstance) return;

        let ctx = gsap.context(() => {
            const animateSlide = (activeSlide: HTMLElement) => {
                let subTitle = activeSlide.querySelector(".sub-title");
                let mainTitle = activeSlide.querySelector(".main-title");
                let caption = activeSlide.querySelector(".marketing-agency-caption");
                let heroImg = activeSlide.querySelector(".hero-bg-img");

                if (!heroImg) return;

                // Stop previous animations
                gsap.killTweensOf([heroImg, subTitle, mainTitle, caption]);

                let tl = gsap.timeline({ defaults: { duration: 1 } });

                tl.fromTo(
                    heroImg,
                    { opacity: 0, scale: 1.5 },
                    { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
                );

                if (subTitle) {
                    tl.fromTo(
                        subTitle,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                        "-=0.8"
                    );
                }

                if (mainTitle) {
                    tl.fromTo(
                        mainTitle,
                        { y: 50, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
                        "-=0.8"
                    );
                }

                if (caption) {
                    tl.fromTo(
                        caption,
                        { x: -100, opacity: 0 },
                        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                        "-=0.6"
                    );
                }
            };

            const handleSlideChange = () => {
                const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
                animateSlide(activeSlide);
            };

            swiperInstance.on('slideChangeTransitionStart', handleSlideChange);
            handleSlideChange(); // Initial load

            return () => {
                swiperInstance.off('slideChangeTransitionStart', handleSlideChange);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, [swiperInstance]);

    return (
        <section className="marketing-agency-section" ref={sectionRef}>
            <div className="marketing-agency-hero style-1">
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    autoplay={{ delay: 5000 }}
                    loop={false}
                    effect="fade"
                    onSwiper={setSwiperInstance}
                    className="marketing-agency-slider ak-slider"
                >
                    {heroSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="marketing-agency-slider-card ak-parallax">
                                <img className="hero-bg-img" src={slide.img} alt="" />
                                <div className="marketing-agency-content">
                                    <div className="container-extent">
                                        <div className="marketing-agency-info">
                                            <div className="marketing-agency-caption">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                                        <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                                <span> {slide.caption} </span>
                                            </div>
                                            <h2 className="sub-title" dangerouslySetInnerHTML={{ __html: slide.subTitle }} />
                                            <h2 className="main-title" dangerouslySetInnerHTML={{ __html: slide.mainTitle }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="social-links">
                    <ul>
                        <li><a href="#" className="social-link">Facebook</a></li>
                        <li><a href="#" className="social-link">Twitter</a></li>
                        <li><a href="#" className="social-link">LinkedIn</a></li>
                        <li><a href="#" className="social-link">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="container-extent">
                <div className="marketing-agency-cta cta-section">
                    <div className="cta-content pb-2">
                        <p className="cta-desp">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has.
                        </p>
                    </div>
                    <div className="cta-circle">
                        <Link to="/contact" className="circle-btn circle-btn-anim style-1">
                            <span className="text">
                                Start
                                <span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.5 2.60144H2.5C2.155 2.60144 1.875 2.88144 1.875 3.22644C1.875 3.57144 2.155 3.85144 2.5 3.85144H15.9909L2.05812 17.7846C1.81406 18.0286 1.81406 18.4243 2.05812 18.6683C2.18031 18.7905 2.34 18.8514 2.5 18.8514C2.66 18.8514 2.82 18.7905 2.94187 18.6683L16.875 4.73519V18.2264C16.875 18.5714 17.155 18.8514 17.5 18.8514C17.845 18.8514 18.125 18.5714 18.125 18.2264V3.22644C18.125 2.88144 17.845 2.60144 17.5 2.60144Z" fill="#FF4A23" />
                                </svg></span>
                                <br />
                                Project
                            </span>
                        </Link>
                    </div>

                    <div className="contact-info py-4">
                        <div className="email-info">
                            <p>Say hello!</p>
                            <a href="mailto:info@email.com">info@email.com</a>
                        </div>
                        <div className="phone-info">
                            <p>Say hello!</p>
                            <a href="tel:+14065550120">(406) 555-0120</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingHeroSection;
