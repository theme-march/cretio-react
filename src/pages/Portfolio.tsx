import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import PortfolioGridSection from "@components/sections/PortfolioGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Portfolio: React.FC = () => {
    useGsapAnimations();
    return (
        <>
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
        </>
    );
};

export default Portfolio;
