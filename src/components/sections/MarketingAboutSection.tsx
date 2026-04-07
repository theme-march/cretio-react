import React from "react";
import { Link } from "react-router-dom";
import aboutLine from "@assets/img/shape/about-bg-line.svg";

interface MarketingAboutSectionProps {
    variant?: "marketing-agency" | "design-company";
}

const MarketingAboutSection: React.FC<MarketingAboutSectionProps> = ({ variant = "marketing-agency" }) => {
    const isDesignCompany = variant === "design-company";

    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="about-content-style2 ak-bg">
                <div 
                    className={isDesignCompany ? "about-title" : "about-title text-animation"}
                    data-direction={isDesignCompany ? "" : "rotationX"}
                    data-split-text={isDesignCompany ? "" : "lines"}
                    data-duration="1.5"
                >
                    About Us
                </div>
                <div className="about-info position-relative">
                    <img className="position-absolute top-0 h-75 w-100" src={aboutLine} alt="" />

                    <h5 
                        className={isDesignCompany ? "about-desp text-color-shiption" : "about-desp text-animation"}
                        data-direction={isDesignCompany ? "" : "rotationX"}
                        data-split-text={isDesignCompany ? "" : "lines"}
                        data-duration="1.5"
                    >
                        We thrive on creativity and <span className="highlight">innovation</span>. Our team is constantly
                        exploring new ideas and approaches to ensure your <span className="highlight">digital presence</span> is
                        fresh, engaging, and ahead of the competition.
                    </h5>
                    <div className="fade-animation" data-direction="right">
                        <Link 
                            to="/about" 
                            className="more-btn fade-animation"
                            data-direction="right"
                        >
                            <span className="morebtn-text"> About More </span>
                            <span className="primary-icon-anim">
                                <i className="flaticon-up-right-arrow"></i>
                                <i className="flaticon-up-right-arrow"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingAboutSection;
