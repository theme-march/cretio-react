import React from "react";
import { Link } from "react-router-dom";
import aboutLine from "@assets/img/shape/about-bg-line.svg";

const MarketingAgencyAboutSection: React.FC = () => {
    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="about-content-style2 ak-bg">
                <div 
                    className="about-title fade-animation"
                    data-direction="none"
                    data-duration="1"
                    data-delay="0.2"
                >
                    About Us
                </div>
                <div className="about-info position-relative">
                    <img className="position-absolute top-0 h-75 w-100" src={aboutLine} alt="" />

                    <h5 
                        className="about-desp fade-animation"
                        data-direction="none"
                        data-duration="1.2"
                        data-delay="0.3"
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

export default MarketingAgencyAboutSection;
