import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import ServiceDetailsContent from "@components/sections/ServiceDetailsContent";
import ProcessSection from "@components/sections/ProcessSection";
import ServicesSection from "@components/sections/ServicesSection";
import NewsletterSection from "@components/sections/NewsletterSection";

const ServiceDetails: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Android App Development <span class="highlight-text">Services</span>'
                highlightWords={["Exceptional", "Services"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Services", path: "/services" },
                ]}
                variant="style-2"
                strokeText="SERVICE"
            />
            <ServiceDetailsContent />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ProcessSection />
            <ServicesSection variant="style-2" />
            <NewsletterSection />
        </>
    );
};

export default ServiceDetails;
