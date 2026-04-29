import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import PricingSection from "@components/Pricing/PricingSection";
import GoalSection from "@components/Goal/GoalSection";
import PricingFeaturesSection from "@components/Feature/PricingFeaturesSection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Pricing: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Pricing | Cretio – Digital Agency</title>
                <meta name="description" content="Flexible and affordable pricing plans for our digital services." />
            </Helmet>
            <Breadcrumb
                title="Get Start With our Digital Affordable Pricing Plan"
                highlightWords={["Get Start", "Pricing Plan"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Pricing Plan", path: "#" },
                ]}
                variant="style-2"
                strokeText="Pricing"
                showCircle={false}
                strokeTextClass="text-normal"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PricingSection />
            <GoalSection />
            <PricingFeaturesSection />
            <ClientLogoSection showTitle={true} direction="left" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default Pricing;

