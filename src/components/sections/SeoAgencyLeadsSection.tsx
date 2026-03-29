import React from "react";
import aboutCircleBg from "@assets/img/bg/about-circle-bg.png";

const SeoAgencyLeadsSection: React.FC = () => {
    return (
        <section className="about-area style-2">
            <div className="container">
                <div className="ak-section-heading ak-style-1 type-2">
                    <div className="ak-section-left ak-w-70">
                        <h2 className="ak-section-title text-animation" data-direction="rotationX">
                            <span className="highlight"> Increase </span>
                            <span> our Website Traffic, Generate More </span>
                            <span className="highlight"> Leads </span>
                        </h2>
                    </div>
                    <div className="ak-section-right w-25">
                        <div className="ak-section-caption fade-animation">
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
                    <div className="about-circle-content justify-content-start fade-animation" data-direction="right">
                        <p className="desp fade-animation">
                            Increase Your Website Traffic, Generate More Leads, and Boost
                            Revenue with Effective SEO Strategies
                        </p>
                        <ul className="leads-list">
                            <li className="fade-animation">
                                <a href="/about">1. Proven Results</a>
                            </li>
                            <li className="fade-animation">
                                <a href="/about"> 2. Transparent Reporting</a>
                            </li>
                            <li className="fade-animation">
                                <a href="/about">3. Customized Strategies</a>
                            </li>
                            <li className="fade-animation">
                                <a href="/about">4. Expert Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="fade-animation" data-direction="left">
                        <div className="about-circle-img ak-bg" style={{ backgroundImage: `url(${aboutCircleBg})` }}>
                            <div className="about-circle-img-info">
                                <h5 className="title">Proven Results</h5>
                                <p className="desp">
                                    Our track record speaks for itself. We have helped numerous
                                    clients achieve higher rankings, increased.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAgencyLeadsSection;
