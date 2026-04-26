import React from "react";
import { Helmet } from "react-helmet-async";
import ServiceDetailsBreadcrumb from "@components/Common/ServiceDetailsBreadcrumb";
import ServiceDetailsMainContent from "@components/Services/ServiceDetailsMainContent";
import ServiceDetailsProcessSection from "@components/Process/ServiceDetailsProcessSection";
import PricingSection from "@components/Pricing/PricingSection";
import MarketingContactSection from "@components/Contact/MarketingContactSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const ServiceDetails: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Service Details | Cretio – Digital Agency</title>
                <meta name="description" content="Detailed information about the digital services provided by Cretio." />
            </Helmet>
            <ServiceDetailsBreadcrumb />
            <ServiceDetailsMainContent />
            <ServiceDetailsProcessSection />
            <PricingSection />
            <MarketingContactSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default ServiceDetails;
