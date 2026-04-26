import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/common/Breadcrumb";
import PortfolioGridSection from "@components/sections/PortfolioGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Portfolio: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Portfolio | Cretio – Digital Agency</title>
                <meta name="description" content="Browse Cretio's portfolio of successful digital projects." />
            </Helmet>
            <Breadcrumb
                title="Our Exceptional Successful Development Projects"
                highlightWords={["Exceptional", "Projects"]}
                links={[{ label: "Home", path: "/" }, { label: "Portfolio", path: "/portfolio" }]}
                variant="style-2"
                strokeText="PORTFOLIO"
                showCircle={false}
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PortfolioGridSection disableAnimationCount={2} />
            <div className="ak-height-150 ak-height-lg-80"></div> 
        </div>
    );
};

export default Portfolio;
