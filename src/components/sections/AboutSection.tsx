import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import commonData from "@/dataJson/commonSectionsData.json";
import star2 from "@assets/img/shape/star-2.png";
import line2 from "@assets/img/shape/line-2.png";

const data = commonData.aboutContent;

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".star-1", {
                scrollTrigger: {
                    trigger: ".star-content",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                rotation: 360,
                ease: "none",
            });
            gsap.to(".star-2", {
                scrollTrigger: {
                    trigger: ".star-content",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                rotation: -360,
                ease: "none",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="ak-height-95 ak-height-lg-80"></div>
            <section className="about-content container" ref={sectionRef}>
                <div className="star-content">
                    <img src={star2} alt="star" className="star-1" />
                    <img src={star2} alt="star" className="star-2" />
                </div>
                <div className="about-info">
                    <h3 className="about-title text-color-shiption" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <div className="fade-animation">
                        <Link to="/about" className="more-btn">
                            <span className="morebtn-text">{data.btnTextHome}</span>
                            <span className="primary-icon-anim">
                                <i className="flaticon-up-right-arrow"></i>
                                <i className="flaticon-up-right-arrow"></i>
                            </span>
                        </Link>
                    </div>

                    <img
                        src={line2}
                        alt="swirl design"
                        className="swirl"
                    />
                </div>
            </section>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default AboutSection;
