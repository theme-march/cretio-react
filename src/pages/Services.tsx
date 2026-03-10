import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import ServicesSection from "@components/sections/ServicesSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import TestimonialSection from "@components/sections/TestimonialSection";

const Services: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Digital Transformation <span class="highlight-text">Services</span>'
                links={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
                variant="style-2"
            />
            <MarqueeTextSection />
            <ServicesSection />
            <CoreFeaturesSection bgClass="ak-gray-bg" />
            <TestimonialSection />
        </>
    );
};

export default Services;
