import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SectionHeading from "@components/Common/SectionHeading";


import servicesData from "@/dataJson/servicesData.json";
import { getImagePath } from "@/utils/imageLoader";

interface ServiceItem {
    id: number;
    title: string;
    img: string;
    hasSlash?: boolean;
}

const services: ServiceItem[] = servicesData.brandingServices;

interface BrandingServicesSectionProps {
    variant?: "default" | "marketing-agency" | "design-company";
    title?: string;
    highlightWords?: string[];
}

const BrandingServicesSection: React.FC<BrandingServicesSectionProps> = ({ 
    variant = "default",
    title = "Our Exceptional Digital Marketing Services",
    highlightWords = ["Exceptional", "Services"],
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const isMarketingAgency = variant === "marketing-agency";
    const isDesignCompany = variant === "design-company";

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const imgs = gsap.utils.toArray<HTMLElement>(".sb-card img");
            imgs.forEach((img) => {
                gsap.set(img, { scale: 0.5, opacity: 0 });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
            gsap.to(img, {
                scale: 1,
                opacity: 1,
                duration: 0.1,
                ease: "power3.out"
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
            gsap.to(img, {
                scale: 0.5,
                opacity: 0,
                duration: 0.1,
                ease: "power3.out"
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 2;
            const y = (e.clientY - rect.top - rect.height / 2) / 2;
            gsap.to(img, { x, y, duration: 0.1 });
        }
    };

    return (
        <section className="container" ref={sectionRef}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SectionHeading
                title={title}
                highlightWords={highlightWords}
                caption="Services"
                variant="style-2"
                className="mini-section-title"
                titleTag="h6"
                leftAnimation="fade-animation"
                leftDirection={isMarketingAgency ? "right" : "left"}
                leftDelay="0"
                rightAnimation="fade-animation"
                rightDirection={isDesignCompany ? "left" : (isMarketingAgency ? "left" : "right")}
                rightOffset="55"
                rightDelay="0"
                disableCaptionAnimation={true}
            />
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="ak-border-width"></div>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="services-branding">
                {services.map((service: ServiceItem) => (
                    <Link
                        to="/services/service-details"
                        className="sb-card fade-animation"
                        key={service.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={handleMouseMove}
                    >
                        <h2>
                            {service.title} {service.hasSlash && <span className="no-hover-color"> / </span>}
                        </h2>
                        <img src={getImagePath(service.img)} alt={service.title} style={{ opacity: 0, scale: 0.5 }} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default BrandingServicesSection;

