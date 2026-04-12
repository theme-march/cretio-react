import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SectionHeading from "@components/common/SectionHeading";

import serviceHover1 from "@assets/img/services/services-hover-1.png";
import serviceHover2 from "@assets/img/services/services-hover-2.png";
import serviceHover3 from "@assets/img/services/services-hover-3.png";
import serviceHover4 from "@assets/img/services/services-hover-4.png";

const services = [
    {
        id: "01",
        title: "UI/UX Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry and typesetting.",
        image: serviceHover1,
        features: ["Brand Research", "Competitor Analysis", "Design Structure"],
    },
    {
        id: "02",
        title: "Web Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry and typesetting.",
        image: serviceHover2,
        features: ["Brand Research", "Design Analysis", "Design Structure"],
    },
    {
        id: "03",
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry and typesetting.",
        image: serviceHover3,
        features: ["Brand Research", "Competitor Analysis", "Modern Code Structure"],
    },
    {
        id: "04",
        title: "App Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry and typesetting.",
        image: serviceHover4,
        features: ["Brand Research", "Competitor Analysis", "Modern Code Structure"],
    },
];

interface ServicesProps {
    variant?: "style-1" | "style-2";
    showHeading?: boolean;
    topGapClass?: string;
}

const ServicesSection: React.FC<ServicesProps> = ({ 
    variant = "style-1",
    showHeading = true,
    topGapClass = "ak-height-150 ak-height-lg-80"
}) => {
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
        <section className={`service-bg ${variant}`} ref={sectionRef}>
            <div className="container">
                <div className={topGapClass}></div>
                <div className="service-content">
                    {showHeading && (
                        <SectionHeading
                            title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                            caption="Services"
                            titleDuration={0.7}
                            titleOffset="100%"
                            disableDespAnimation={true}
                        />
                    )}
                    {services.map((service, index) => (
                        <div
                            className="service-card fade-animation"
                            data-direction="bottom"
                            key={index}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                        >
                            <img className="service-hover-img" src={service.image} alt={service.title} style={{ opacity: 0, scale: 0.8 }} />
                            <div className="service-card-item style-1">
                                <div className="service-left-info">
                                    <h4 className="service-title">{service.title}</h4>
                                    <ul className="service-lists">
                                        {service.features.map((feature, i) => (
                                            <li className="service-list" key={i}>
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
                                            <span className="morebtn-text"> Learn More </span>
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

export default ServicesSection;
