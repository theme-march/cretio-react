import React from "react";
import { Link } from "react-router-dom";
import shapeLeft from "@assets/img/shape/cta-start-left.png";
import shapeRight from "@assets/img/shape/cta-start-right.png";

const ServiceDetailsCta: React.FC = () => {
    return (
        <div className="container">
            <div className="services-details-cta">
                <div className="dot-top-left"></div>
                <div className="dot-top-right"></div>
                <div className="dot-bottom-left"></div>
                <div className="dot-bottom-right"></div>
                <div className="services-bg-start">
                    <img src={shapeLeft} alt="..." />
                    <img src={shapeRight} alt="..." />
                </div>
                <div className="services-details-cta-wapper">
                    <div className="services-details-cta-content">
                        <h2 className="services-details-cta-title text-animation">
                            <span>Get in Touch to Bring Your </span>
                            <span className="highlight text-underlines underline-anim">Project</span>
                            <span> to Life!</span>
                        </h2>
                    </div>
                </div>
                <div className="services-details-cta-btn">
                    <Link to="/contact" className="circle-btn style-1 circle-btn-anim">
                        <span className="text text-uppercase">
                            Start
                            <i className="flaticon-up-right-arrow"></i>
                            <br />
                            Project
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCta;
