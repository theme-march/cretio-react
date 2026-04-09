import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import star2 from "@assets/img/shape/star-2.png";
import line2 from "@assets/img/shape/line-2.png";

const AboutContentSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".star-1, .star-2", {
                rotation: 360,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
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
                    <h3 className="about-title text-color-shiption">
                        We thrive on <span className="highlight ak-black-color">creativity</span> and{" "}
                        <span className="highlight">innovation</span>. Our team is constantly exploring new ideas and approaches to ensure your{" "}
                        <span className="highlight">digital presence</span> is fresh, engaging, and ahead of the competition.
                    </h3>
                    <Link to="/portfolio" className="more-btn">
                        <span className="morebtn-text">View Latest Project </span>
                        <span className="primary-icon-anim">
                            <i className="flaticon-up-right-arrow"></i>
                            <i className="flaticon-up-right-arrow"></i>
                        </span>
                    </Link>
                    <img src={line2} alt="swirl design" className="swirl" />
                </div>
            </section>
        </>
    );
};

export default AboutContentSection;
