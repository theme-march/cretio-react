import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import shapeLeft from "@assets/img/shape/cta-start-left.png";
import shapeRight from "@assets/img/shape/cta-start-right.png";

const ctaData = {
    title: {
        text1: "Get in Touch to Bring Your ",
        highlight: "Project",
        text2: " to Life!"
    },
    btnText: {
        line1: "Start",
        line2: "Project"
    }
};

const ServiceDetailsCta: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
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

                self.add(() => {
                    return () => {
                        btn.removeEventListener("mousemove", handleMouseMove as EventListener);
                        btn.removeEventListener("mouseleave", handleMouseLeave as EventListener);
                    };
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="container" ref={sectionRef}>
            <div className="services-details-cta">
                <div className="dot-top-left"></div>
                <div className="dot-top-right"></div>
                <div className="dot-bottom-left"></div>
                <div className="dot-bottom-right"></div>
                <div className="services-bg-start">
                    <img src={shapeLeft} alt="Decorative background shape left" className="ak-parallax" />
                    <img src={shapeRight} alt="Decorative background shape right" className="ak-parallax" />
                </div>
                <div className="services-details-cta-wapper">
                    <div className="services-details-cta-content">
                        <h2 className="services-details-cta-title text-animation">
                            <span>{ctaData.title.text1}</span>
                            <span className="highlight text-underlines underline-anim">{ctaData.title.highlight}</span>
                            <span>{ctaData.title.text2}</span>
                        </h2>
                    </div>
                </div>
                <div className="services-details-cta-btn">
                    <Link to="/contact" className="circle-btn circle-btn-anim">
                        <span className="text text-uppercase">
                            {ctaData.btnText.line1}
                            <span> <i className="flaticon-up-right-arrow"></i></span>
                            <br />
                            {ctaData.btnText.line2}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCta;
