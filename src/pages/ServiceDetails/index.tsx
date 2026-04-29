import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import ServiceDetailsMainContent from "@components/Services/ServiceDetailsMainContent";
import ServiceDetailsProcessSection from "@components/Process/ServiceDetailsProcessSection";
import ServiceDetailsCta from "@components/Services/ServiceDetailsCta";
import SlidingTextSection from "@components/Brand/SlidingTextSection";
import ServiceDetailsNewsletterSection from "@components/Newsletter/ServiceDetailsNewsletterSection";
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
            <Breadcrumb
                title="Our Exceptional Android App Development Services"
                highlightWords={["Exceptional", "Services"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services" },
                ]}
                variant="style-2"
                strokeText="SERVICE"
                showCircle={false}
            />
            <ServiceDetailsMainContent />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ServiceDetailsProcessSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ServiceDetailsCta />
            <SlidingTextSection variant="style-2" />
            <ServiceDetailsNewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default ServiceDetails;
