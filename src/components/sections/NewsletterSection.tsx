import React, { useEffect, useRef, useState } from "react";

import testimonialBg from "@assets/img/shape/testimonial.svg";

interface NewsletterSectionProps {
    variant?: "style-1" | "style-2" | "style-3";
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ variant = "style-1" }) => {
    const isStyle2 = variant === "style-2";
    const isStyle3 = variant === "style-3";
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Newsletter form submitted!");
    };

    if (isStyle3) {
        return (
            <>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <section className="container">
                    <div className={`newsletter-content style-2${isActive ? " active" : ""}`} ref={sectionRef}>
                        <div className="newsletter-title-content text-animation">
                            <h2 className="newsletter-title">
                                Join Our 
                                <span className="highlight text-underlines"> Newsletter</span> for
                                Latest <span className="highlight">Exclusive</span> Content
                            </h2>
                        </div>
                        <form className="newsletter-form fade-animation" onSubmit={handleSubmit}>
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
                </section>
            </>
        );
    }

    const content = (
        <div className={`ak-center ${isStyle2 ? "ms-xxl-3 " : ""}newsletter-wapper${isActive ? " active" : ""}`} ref={sectionRef}>
            <div className="theme-border-wrap cta-form-border hover-animation">
                <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-bottom-right d-flex flex-end">
                    <div className="horizontal flex-end align-self-end"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                </div>

                <div className="container">
                    <div className="newsletter-content">
                        <div className="newsletter-anim">
                            <h2 className="newsletter-title anim-line-words">
                                Join Our 
                                <span className="highlight text-underlines">  Newsletter</span> for
                                Latest <span className="highlight">Exclusive</span> Content
                            </h2>
                        </div>
                        <form className="newsletter-form fade-animation" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="newsletter-input"
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
            </div>
        </div>
    );

    if (isStyle2) {
        return (
            <>
                <div className="ak-height-100 ak-height-lg-80"></div>
                <section className="container-xxl overflow-hidden p-0">
                    <div className="ak-gray-bg ak-bg" style={{ backgroundImage: `url(${testimonialBg})` }}>
                        <div className="ak-height-100 ak-height-lg-80"></div>
                        {content}
                        <div className="ak-height-100 ak-height-lg-80"></div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section>
                {content}
            </section>
        </>
    );
};

export default NewsletterSection;

