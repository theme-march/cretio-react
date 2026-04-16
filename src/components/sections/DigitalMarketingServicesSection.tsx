import React from "react";
import { Link } from "react-router-dom";

import SectionHeading from "@components/common/SectionHeading";



import servicesData from "../../dataJson/servicesData.json";
import { getImagePath } from "../../utils/imageLoader";

const services = servicesData.digitalMarketingServices;

const DigitalMarketingServicesSection: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Marketing <span class="highlight">Services</span>'
                    caption="Services"
                    variant="style-2"
                    className="mini-section-title"
                    titleTag="h6"
                    leftAnimation="fade-animation"
                    leftDirection="left"
                    leftDelay="0"
                    rightAnimation="fade-animation"
                    rightDirection="left"
                    rightOffset="55"
                    rightDelay="0"
                    disableCaptionAnimation={true}
                />
                <div className="ak-height-50 ak-height-lg-30"></div>
                <div className="ak-border-width"></div>
                <div className="ak-height-75 ak-height-lg-50"></div>
            </div>
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
                            <img src={getImagePath(service.img)} alt={service.title} />
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
