import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PortfolioGridSection from "@components/sections/PortfolioGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Portfolio: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Successful Development <span class="highlight-text">Projects</span>'
                links={[{ label: "Home", path: "/" }, { label: "Projects", path: "/portfolio" }]}
                variant="style-2"
                strokeText="PORTFOLIO"
                showCircle={false}
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PortfolioGridSection />
            <div className="ak-height-150 ak-height-lg-80"></div> 
        </>
    );
};

export default Portfolio;
