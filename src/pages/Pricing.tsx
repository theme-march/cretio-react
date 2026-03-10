import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PricingSection from "@components/sections/PricingSection";
import GoalSection from "@components/sections/GoalSection";

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
            />
            <PricingSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <GoalSection />
        </>
    );
};

export default Pricing;
