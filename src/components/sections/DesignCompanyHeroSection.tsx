import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "@assets/videos/design-company.mp4";
import heroBg from "@assets/img/bg/design-company-hero-bg.png";
import heroBgDark from "@assets/img/bg/design-company-hero-dark-bg.png";

const DesignCompanyHeroSection: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document === "undefined") return false;
        return document.body.classList.contains("dark");
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.body.classList.contains("dark"));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <div 
                className="design-company-hero-area"
                style={{ backgroundImage: `url(${isDark ? heroBgDark : heroBg})` }}
            >
                <div className="container">
                    <div className="dc-hero-wrapper style-1">
                        <div className="dc-hero-title-box">
                            <div className="dc-hero-top-content">
                                <h1 className="dc-hero-title text-1 fade-animation" data-direction="left" data-delay="0.4">
                                    Design
                                </h1>
                                <div className="dc-hero-title-img">
                                    <video autoPlay muted loop playsInline>
                                        <source src={heroVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            <div className="dc-hero-bottom-content">
                                <div className="dc-hero-desp">
                                    <p className="fade-animation" data-delay="0.6">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text.
                                    </p>
                                </div>
                                <h2 className="dc-hero-title text-2 fade-animation" data-direction="right" data-delay="0.8">
                                    Studio
                                </h2>
                            </div>
                        </div>
                        <div className="dc-hero-info-box">
                            <div className="dc-hero-info-left">
                                <Link to="/contact" className="circle-btn style-2 circle-btn-anim">
                                    <span className="text">
                                        Start
                                        <i className="flaticon-up-right-arrow"></i>
                                        <br />
                                        Project
                                    </span>
                                </Link>
                            </div>
                            <div className="dc-hero-info-right">
                                <div className="dc-hero-email">
                                    <p>Say hello!</p>
                                    <a href="mailto:info@email.com">info@email.com</a>
                                </div>
                                <div className="dc-hero-phone">
                                    <p>Say hello!</p>
                                    <a href="tel:(406)555-0120">(406) 555-0120</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-height-65 ak-height-lg-50"></div>
            </div>
        </section>
    );
};

export default DesignCompanyHeroSection;
