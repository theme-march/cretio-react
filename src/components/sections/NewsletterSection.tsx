import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// @ts-ignore
import { SplitText } from "@assets/js/plugins/splittext.js";

const NewsletterSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        if (titleRef.current) {
            const split = new SplitText(titleRef.current, { type: "chars, words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                onComplete: () => {
                    sectionRef.current?.classList.add("active");
                }
            });

            split.chars.forEach((char: HTMLElement, charIndex: number) => {
                tl.fromTo(char,
                    { translateY: "100%", opacity: 0 },
                    {
                        translateY: "0%",
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut"
                    },
                    charIndex * 0.02
                );
            });
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Newsletter form submitted!");
    };

    return (
        <>
            <section className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="newsletter-wapper" ref={sectionRef}>
                    <div className="newsletter-content style-2">
                        <div className="newsletter-title-content newsletter-anim">
                            <h2 className="newsletter-title anim-line-words" ref={titleRef}>
                                Join Our{" "}
                                <span className="highlight text-underlines underline-anim">
                                    Newsletter
                                </span>{" "}
                                for the Latest <span className="highlight">Exclusive</span> Content
                            </h2>
                        </div>

                        <form className="newsletter-form fade-animation" data-direction="right" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="newsletter-input style-2"
                                placeholder="Enter your email..."
                                required
                            />
                            <button type="submit" className="newsletter-btn">
                                <span className="newbtn-text"> Newsletter </span>
                                <span className="primary-icon-anim">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default NewsletterSection;
