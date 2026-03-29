import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import ServicesSection from "@components/sections/ServicesSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import TestimonialSection from "@components/sections/TestimonialSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Services: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Digital Transformation <span class="highlight-text">Services</span>'
                links={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
                variant="style-2"
            />
            <MarqueeTextSection />
            <ServicesSection />
            <CoreFeaturesSection
                variant="style-3"
                bgClass="ak-gray-bg"
                showBottomGap={true}
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                caption="Top Trio Services"
            />
            <TestimonialSection />
            <NewsletterSection variant="style-3"/>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Services;
