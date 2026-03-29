import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PortfolioMainImage from "@components/sections/PortfolioMainImage";
import PortfolioDetailsContent from "@components/sections/PortfolioDetailsContent";
import ServiceDetailsCta from "@components/sections/ServiceDetailsCta";
import useGsapAnimations from "@hooks/useGsapAnimations";

const PortfolioDetails: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Successful Development <span class="highlight-text">Project</span>'
                highlightWords={["Exceptional", "Project"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Project Details", path: "" },
                ]}
                variant="style-2"
                strokeText="Project"
                showCircle={false}
            />
            <PortfolioMainImage />
            <PortfolioDetailsContent />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ServiceDetailsCta />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default PortfolioDetails;
