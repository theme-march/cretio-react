import React, { useEffect, useRef, useState } from "react";

const NewsletterSection: React.FC = () => {
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

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className={`ak-center newsletter-wapper${isActive ? " active" : ""}`} ref={sectionRef}>
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
            </section>
        </>
    );
};

export default NewsletterSection;
