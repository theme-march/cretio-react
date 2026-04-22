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
                title="Our Exceptional Digital Transformation Services"
                highlightWords={["Exceptional", "Services"]}
                links={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
                variant="style-2"
                titleAnimation=""
            />
            <MarqueeTextSection />
            <ServicesSection 
                showHeading={false}
                topGapClass="ak-height-100 ak-height-lg-30"
            />
            <CoreFeaturesSection
                variant="style-3"
                bgClass="ak-gray-bg"
                showBottomGap={true}
                title="Our Exceptional Digital Transformation Services"
                description="Explore our wide range of digital marketing and development services designed to help your brand stand out in a competitive market."
                caption="Top Trio Services"
                headingProps={{
                    highlightWords: ["Exceptional", "Services"],
                    titleDirection: "textLeft",
                    titleDuration: 1.2,
                    disableDespAnimation: true,
                    disableCaptionAnimation: true,
                }}
            />
            <TestimonialSection />
            <NewsletterSection 
                variant="style-3"
                titleAnimation="text-animation"
                titleDirection="textLeft"
                titleDuration={1.2}
                underlineReveal={true}
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Services;
