import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PricingSection from "@components/sections/PricingSection";
import GoalSection from "@components/sections/GoalSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Pricing: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title="Get Start With our Digital Affordable Pricing Plan"
                highlightWords={["Get Start", "Pricing Plan"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Pricing Plan", path: "" },
                ]}
                variant="style-2"
                strokeText="Pricing"
                showCircle={false}
                strokeTextClass="text-normal"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PricingSection />
            <GoalSection />
            <CoreFeaturesSection
                title='Our <span class="highlight">Exceptional</span> Digital Services <span class="highlight">Capabilities</span>'
                description="Choose the perfect plan that fits your business needs. We offer flexible pricing options designed for startups and enterprises alike."
                caption="Services"
                titleDirection="textLeft"
                titleDuration={1.2}
                cardAnimation=""
                fullWidth={true}
                sliderType="navigation"
                isSlider={true}
                showTopGap={true}
                disableCaptionAnimation={true}
                disableDescriptionAnimation={true}
            />
            <ClientLogoSection showTitle={true} direction="left" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Pricing;
