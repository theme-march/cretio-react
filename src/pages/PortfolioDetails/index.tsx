import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import PortfolioMainImage from "@components/Portfolio/PortfolioMainImage";
import PortfolioDetailsContent from "@components/Portfolio/PortfolioDetailsContent";
import ServiceDetailsCta from "@components/Services/ServiceDetailsCta";
import useGsapAnimations from "@hooks/useGsapAnimations";

const PortfolioDetails: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Portfolio Details | Cretio – Digital Agency</title>
                <meta name="description" content="In-depth case study of a featured Cretio project." />
            </Helmet>
            <Breadcrumb
                title="Our Exceptional Successful Development Project"
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
        </div>
    );
};

export default PortfolioDetails;
