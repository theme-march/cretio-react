import React from "react";
import { Link } from "react-router-dom";

import service1 from "@assets/img/services/dc-services-1.png";
import service2 from "@assets/img/services/dc-services-2.png";
import service3 from "@assets/img/services/dc-services-3.png";
import service4 from "@assets/img/services/dc-services-4.png";
import service5 from "@assets/img/services/dc-services-5.png";
import service6 from "@assets/img/services/dc-services-6.png";

const services = [
    { id: 1, title: "Exceptional Android App Development", category: "Design", img: service1, widthClass: "width-1" },
    { id: 2, title: "Exceptional Android App Development", category: "Design", img: service2, widthClass: "width-2" },
    { id: 3, title: "Exceptional Android App Development", category: "Design", img: service3, widthClass: "width-1" },
    { id: 4, title: "Exceptional Android App Development", category: "Design", img: service4, widthClass: "width-2" },
    { id: 5, title: "Exceptional Android App Development", category: "Design", img: service5, widthClass: "width-1" },
    { id: 6, title: "Exceptional Android App Development", category: "Design", img: service6, widthClass: "width-1" },
];

const DigitalMarketingServicesSection: React.FC = () => {
    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="ak-section-heading ak-style-1 type-2">
                <div className="ak-section-left fade-animation" data-direction="left">
                    <h6 className="mini-section-title ak-section-title">
                        Our <span className="highlight">Exceptional</span> Digital Marketing <span className="highlight">Services</span>
                    </h6>
                </div>
                <div className="ak-section-right fade-animation" data-direction="left" data-offset="55" data-delay="0.35">
                    <div className="ak-section-caption">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                <path
                                    d="M1.33789 1.18359H221.034L209.173 10.9822"
                                    stroke="#FF4A23"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                        <span> Services </span>
                    </div>
                </div>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="ak-border-width"></div>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="container-fluid">
                <div className="dm-service-items">
                    {services.map((service, index) => (
                        <Link
                            to="/services/service-details"
                            className={`${service.widthClass} service-item ak-parallax`}
                            data-offset="40"
                            data-direction="left"
                            data-delay={`${0.15 + index * 0.2}`}
                            key={service.id}
                        >
                            <img src={service.img} alt={service.title} />
                            <div className="service-hover-info">
                                <div className="left-content">
                                    <p className="mini-title">{service.category}</p>
                                    <h5 className="title">{service.title}</h5>
                                </div>
                                <div className="service-icon-btn">
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DigitalMarketingServicesSection;
