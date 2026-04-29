import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import PortfolioPageGridSection from "@components/Project/PortfolioPageGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Portfolio: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Portfolio | Cretio – Digital Agency</title>
                <meta name="description" content="Showcasing the successful development projects by Cretio." />
            </Helmet>
            <Breadcrumb
                title="Our Exceptional Successful Development Projects"
                highlightWords={["Exceptional", "Projects"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Portfolio", path: "/portfolio" },
                ]}
                variant="style-2"
                strokeText="PORTFOLIO"
                showCircle={false}
            />
            <PortfolioPageGridSection />
        </div>
    );
};

export default Portfolio;
