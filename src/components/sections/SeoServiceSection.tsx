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

interface SeoServiceSectionProps {
    variant?: "seo-agency" | "default";
}

const SeoServiceSection: React.FC<SeoServiceSectionProps> = ({ variant = "default" }) => {
    const isSeoAgency = variant === "seo-agency";

    return (
        <section className="container">
            <SectionHeading
                title='Our <span class="highlight">Exceptional</span> SEO Business Growth <span class="highlight">Services</span>'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                caption="Services"
                // SeoAgency variant: 3D rotationX flip animation on the title
                titleAnimation={isSeoAgency ? "" : "text-animation"}
                titleDirection={isSeoAgency ? "bottom" : "textTop"}
                titleSplitText={undefined}
                // Description: fade-animation with template delay
                descriptionDirection={isSeoAgency ? "bottom" : "none"}
                descriptionDelay={isSeoAgency ? "0.3" : "0.3"}
                // Caption: fade-animation with template delay
                captionDirection={isSeoAgency ? "bottom" : "right"}
                captionDelay={isSeoAgency ? "0.3" : "0.3"}
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
                                <Link to="/services/service-details" className="service-list-title btn-flip-text">
                                    <span data-text={service.title}>{service.title}</span>
                                </Link>
                                <Link to="/services/service-details" className="more-btn">
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
