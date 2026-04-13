import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import funfactBg from "@assets/img/bg/funfact-bg.png";

interface SeoAgencyAboutSectionProps {
    animateCircles?: boolean;
    circleDelay?: number;
    circleStagger?: number;
    circleDuration?: number;
}

const SeoAgencyAboutSection: React.FC<SeoAgencyAboutSectionProps> = ({
    animateCircles = true,
    circleDelay = 0,
    circleStagger = 0.2,
    circleDuration = 2,
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        if (!animateCircles) return;

        const ctx = gsap.context(() => {
            const circles = gsap.utils.toArray<HTMLElement>(".number-circle");
            const countElements = sectionRef.current?.querySelectorAll(".amin_auto_count");

            // Single shared ScrollTrigger - Values reverted to template standards
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top center+=200",
                once: true,
                onEnter: () => {
                    // Circles pop one-by-one with elastic ease
                    if (circles.length > 0) {
                        gsap.from(circles, {
                            scale: 0.5,
                            opacity: 0,
                            duration: circleDuration,
                            stagger: circleStagger,
                            delay: circleDelay,
                            ease: "elastic.out(1, 0.3)",
                            force3D: true,
                        });
                    }

                    // Counters start at the template-defined delay of 0.3s
                    countElements?.forEach((el) => {
                        const target = parseInt(el.textContent || "0", 10);
                        gsap.fromTo(el,
                            { innerText: 0 },
                            {
                                innerText: target,
                                duration: 3, // Template duration
                                delay: 0.3,  // Template delay
                                snap: { innerText: 1 },
                                ease: "power1.out",
                            }
                        );
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [animateCircles, circleDelay, circleStagger, circleDuration]);

    return (
        <section ref={sectionRef}>
            <div className="container">
                <div className="seo-agency-about-wrapper fade-animation">
                    <div className="seo-agency-about-content fade-animation">
                        <div className="about-title">About Us</div>
                        <div className="about-info">
                            <h5 className="about-desp text-color-shiption">
                                We thrive on creativity and <span className="highlight">innovation</span>. Our team is constantly
                                exploring new ideas and approaches to ensure your <span className="highlight">digital presence</span>
                                is fresh, engaging, and ahead of the competition.
                            </h5>
                        </div>
                    </div>
                    <div className="number-circle-content">
                        <div className="number-circle number-circle-top-left funfact style1">
                            <div className="img-clip-text ak-bg d-inline" style={{ backgroundImage: `url(${funfactBg})` }}>
                                <span className="amin_auto_count">8</span>k
                            </div>
                            <p className="achievement-text">Happy Customers</p>
                        </div>
                        <div className="number-circle number-circle-center-right funfact style1">
                            <div className="img-clip-text ak-bg d-inline" style={{ backgroundImage: `url(${funfactBg})` }}>
                                <span className="amin_auto_count">13</span>
                            </div>
                            <p className="achievement-text">Award Achievement</p>
                        </div>
                        <div className="number-circle number-circle-bottom funfact style1">
                            <div className="img-clip-text ak-bg d-inline" style={{ backgroundImage: `url(${funfactBg})` }}>
                                <span className="amin_auto_count">32</span>+
                            </div>
                            <p className="achievement-text">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyAboutSection;
