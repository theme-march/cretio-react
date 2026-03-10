import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PortfolioGridSection from "@components/sections/PortfolioGridSection";

const Portfolio: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Successful Development <span class="highlight-text">Projects</span>'
                links={[{ label: "Home", path: "/" }, { label: "Projects", path: "/portfolio" }]}
                variant="style-2"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PortfolioGridSection />
        </>
    );
};

export default Portfolio;
