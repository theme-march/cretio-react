import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PricingSection from "@components/sections/PricingSection";
import GoalSection from "@components/sections/GoalSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";

const Pricing: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='<span class="highlight-text">Get Start</span> With our Digital Affordable <span class="highlight-text">Pricing Plan</span>'
                highlightWords={["Start", "Plan"]}
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
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                caption="Services"
                isSlider={true}
                showTopGap={true}
            />
            <ClientLogoSection showTitle={true} />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Pricing;
