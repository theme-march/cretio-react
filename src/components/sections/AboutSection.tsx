import React from "react";
import { Link } from "react-router-dom";
import star2 from "@assets/img/shape/star-2.png";
import line2 from "@assets/img/shape/line-2.png";

const AboutSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-95 ak-height-lg-80"></div>
            <section className="about-content container">
                <div className="star-content">
                    <img src={star2} alt="star" className="star-1" />
                    <img src={star2} alt="star" className="star-2" />
                </div>
                <div className="about-info">
                    <h3 className="about-title text-color-shiption">
                        We thrive on{" "}
                        <span className="highlight ak-black-color">creativity</span> and{" "}
                        <span className="highlight">innovation</span>. Our team is constantly
                        exploring new ideas and approaches to ensure your{" "}
                        <span className="highlight">digital presence</span> is fresh, engaging,
                        and ahead of the competition.
                    </h3>
                    <div className="fade-animation">
                        <Link to="/about" className="more-btn">
                            <span className="morebtn-text"> About More </span>
                            <span className="primary-icon-anim">
                                <i className="flaticon-up-right-arrow"></i>
                                <i className="flaticon-up-right-arrow"></i>
                            </span>
                        </Link>
                    </div>

                    <img
                        src={line2}
                        alt="swirl design"
                        className="swirl"
                    />
                </div>
            </section>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default AboutSection;
