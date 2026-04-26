import React from "react";
import { Link } from "react-router-dom";
import aboutCircleBg from "@assets/img/bg/about-circle-bg.png";

const MinimalAboutSection: React.FC = () => {
    return (
        <section className="about-area style-2">
            <div className="container">
                <div className="ak-section-heading ak-style-1 type-2">
                    <div className="ak-section-left ak-w-50">
                        <h2 className="ak-section-title text-animation">
                            <span>Thrive on </span>
                            <span className="highlight"> Creativity </span>
                            <span> & </span>
                            <span className="highlight"> Innovation </span>
                            <span> in Digital Presence</span>
                        </h2>
                    </div>
                    <div className="ak-section-right w-25">
                        <div className="ak-section-caption fade-animation" data-direction="right" data-delay="0.35">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span> About Us </span>
                        </div>
                    </div>
                </div>
                <div className="about-circle-area">
                    <div className="about-circle-content">
                        <p className="desp fade-animation">
                            We thrive on creativity and <span className="ak-primary-color">innovation</span> . Our team is constantly
                            exploring new ideas and approaches to ensure your <span className="ak-primary-color">digital</span>
                            <span className="ak-primary-color">presence</span> is fresh, engaging, and ahead of the competition.
                        </p>
                        <p className="desp fade-animation">
                            We thrive on creativity and innovation. Our team is constantly exploring new ideas and approaches.
                        </p>
                        <ul className="list-text fade-animation">
                            <li>Transparent Reporting</li>
                            <li>Customized Strategies</li>
                            <li>Expert Team</li>
                            <li>Transparent Reporting</li>
                            <li>Customized Strategies</li>
                            <li>Expert Team</li>
                        </ul>
                        <div className="fade-animation">
                            <Link to="/about" className="more-btn">
                                <span>About More</span>
                                <span className="svg-icon style-two">
                                    <i className="flaticon-right-arrow-1 ak-color-primary"></i>
                                    <i className="flaticon-right-arrow-1"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="about-circle-img ak-bg" style={{ backgroundImage: `url(${aboutCircleBg})` }}>
                        <div className="about-circle-img-info">
                            <h5 className="title">Powerful Services</h5>
                            <p className="desp">
                                Our track record speaks for itself. We have helped numerous clients achieve higher rankings, increased.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default MinimalAboutSection;
