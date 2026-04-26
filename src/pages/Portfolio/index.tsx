import React from "react";
import { Helmet } from "react-helmet-async";
import PortfolioBreadcrumb from "@components/Common/PortfolioBreadcrumb";
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
            <PortfolioBreadcrumb />
            <PortfolioPageGridSection />
        </div>
    );
};

export default Portfolio;
