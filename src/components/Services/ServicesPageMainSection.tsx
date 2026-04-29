import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import servicesData from "@/dataJson/servicesData.json";
import { getImagePath } from "@/utils/imageLoader";

const services = servicesData.mainServices;

const ServicesPageMainSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const hoverImgs = gsap.utils.toArray<HTMLElement>(".service-hover-img");
            hoverImgs.forEach((img) => {
                gsap.set(img, { scale: 0.8, opacity: 0 });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        const img = e.currentTarget.querySelector(".service-hover-img");
        if (img) {
            gsap.to(img, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out"
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const img = e.currentTarget.querySelector(".service-hover-img");
        if (img) {
            gsap.to(img, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const img = e.currentTarget.querySelector(".service-hover-img");
        if (img) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 10;
            const y = (e.clientY - rect.top - rect.height / 2) / 10;
            gsap.to(img, { x, y, duration: 0.3 });
        }
    };

    return (
        <section ref={sectionRef}>
            <div className="container">
                <div className="ak-height-100 ak-height-lg-30"></div>
                <div className="service-content">
                    {services.map((service) => (
                        <div
                            className="service-card fade-animation"
                            data-direction="bottom"
                            key={service.id}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                        >
                            <img className="service-hover-img" src={getImagePath(service.image)} alt={service.title} style={{ opacity: 0, scale: 0.8 }} />
                            <div className="service-card-item style-1">
                                <div className="service-left-info">
                                    <h4 className="service-title">{service.title}</h4>
                                    <ul className="service-lists">
                                        {service.features.map((feature) => (
                                            <li className="service-list" key={feature}>
                                                <span><i className="flaticon-star-2"></i></span>
                                                <span> {feature} </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service-left-right">
                                    <p className="service-desp">{service.description}</p>
                                    <div className="service-btn-content">
                                        <Link to="/services/service-details" className="more-btn">
                                            <span className="morebtn-text"> {servicesData.sectionInfo.btnText} </span>
                                            <span className="primary-icon-anim">
                                                <i className="flaticon-up-right-arrow"></i>
                                                <i className="flaticon-up-right-arrow"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="service-stroke-number ak-stroke-number">{service.id}</div>
                        </div>
                    ))}
                </div>
                <div className="ak-height-150 ak-height-lg-80"></div>
            </div>
        </section>
    );
};

export default ServicesPageMainSection;
