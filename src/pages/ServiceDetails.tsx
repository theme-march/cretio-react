import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import ServiceDetailsContent from "@components/sections/ServiceDetailsContent";
import ProcessSection from "@components/sections/ProcessSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import ServiceDetailsCta from "@components/sections/ServiceDetailsCta";
import SlidingTextSection from "@components/sections/SlidingTextSection";

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
            <ProcessSection
                variant="style-2"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ServiceDetailsCta />
            <SlidingTextSection variant="style-2" />
            <NewsletterSection variant="style-3" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default ServiceDetails;
