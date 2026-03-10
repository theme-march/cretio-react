import React from "react";
import funfactBg from "@assets/img/bg/funfact-bg.png";

const SeoAgencyAboutSection: React.FC = () => {
    return (
        <section>
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
                                <span className="amin_auto_count">8k</span>
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
