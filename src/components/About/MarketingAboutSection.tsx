import React from "react";
import { Link } from "react-router-dom";
import aboutLine from "@assets/img/shape/about-bg-line.svg";

interface MarketingAboutSectionProps {
    variant?: "marketing-agency" | "design-company";
}

const aboutText = "We thrive on creativity and innovation. Our team is constantly exploring new ideas and approaches to ensure your digital presence is fresh, engaging, and ahead of the competition.";

const MarketingAboutSection: React.FC<MarketingAboutSectionProps> = ({ variant = "marketing-agency" }) => {
    const isDesignCompany = variant === "design-company";

    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="about-content-style2 ak-bg">
                <div 
                    className={isDesignCompany ? "about-title" : "about-title fade-animation"}
                    data-direction={isDesignCompany ? "" : "none"}
                    data-duration="1"
                    data-delay="0.2"
                >
                    About Us
                </div>
                <div className="about-info position-relative">
                    <img className="position-absolute top-0 h-75 w-100" src={aboutLine} alt="" />

                    <h5 
                        className={isDesignCompany ? "about-desp text-color-shiption" : "about-desp fade-animation"}
                        data-direction={isDesignCompany ? "" : "none"}
                        data-duration="1.2"
                        data-delay="0.3"
                    >
                        {aboutText.split('innovation')[0]} <span className="highlight">innovation</span>. {aboutText.split('innovation')[1].split('digital presence')[0]} <span className="highlight">digital presence</span> {aboutText.split('digital presence')[1]}
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
