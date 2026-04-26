import React from "react";
import { Helmet } from "react-helmet-async";
import ServicesBreadcrumb from "@components/Common/ServicesBreadcrumb";
import MarqueeTextSection from "@components/Brand/MarqueeTextSection";
import ServicesPageMainSection from "@components/Services/ServicesPageMainSection";
import ServicesPageFeaturesSection from "@components/Feature/ServicesPageFeaturesSection";
import TestimonialSection from "@components/Testimonial/TestimonialSection";
import ServicesNewsletterSection from "@components/Newsletter/ServicesNewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Services: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Services | Cretio – Digital Agency</title>
                <meta name="description" content="Explore the full range of digital services offered by Cretio." />
            </Helmet>
            <ServicesBreadcrumb />

            <MarqueeTextSection />
            <ServicesPageMainSection />

            <ServicesPageFeaturesSection />

            <TestimonialSection />
            <ServicesNewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default Services;
