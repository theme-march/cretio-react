import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@components/common/SectionHeading";
import seoServiceImg from "@assets/img/services/seo-service.png";

const services = [
    { id: 1, title: "Keyword Research & Strategy" },
    { id: 2, title: "On-Page SEO Optimization" },
    { id: 3, title: "Content Creation Optimization" },
    { id: 4, title: "Keyword Research & Strategy" },
];

const SeoServiceSection: React.FC = () => {
    return (
        <section className="container">
            <SectionHeading
                title='Our <span class="highlight">Exceptional</span> SEO Business Growth <span class="highlight">Services</span>'
                caption="Services"
            />
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="seo-service-wapper">
                <div className="seo-service-img-content ak-parallax">
                    <img src={seoServiceImg} alt="SEO Service" />
                </div>
                <div className="seo-service-lists">
                    <ul>
                        {services.map((service, index) => (
                            <li className="service-list-item fade-animation" data-direction="bottom" key={index}>
                                <Link to="/service-details" className="service-list-title btn-flip-text">
                                    <span data-text={service.title}>{service.title}</span>
                                </Link>
                                <Link to="/service-details" className="more-btn">
                                    <span className="morebtn-text"> View More </span>
                                    <span className="primary-icon-anim">
                                        <i className="flaticon-up-right-arrow"></i>
                                        <i className="flaticon-up-right-arrow"></i>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SeoServiceSection;
