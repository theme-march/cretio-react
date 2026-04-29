import React from "react";
import { Helmet } from "react-helmet-async";
import useGsapAnimations from "@hooks/useGsapAnimations";
import NotFoundSection from "@components/Miscellaneous/NotFoundSection";

const NotFound: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Page Not Found | Cretio – Digital Agency</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <NotFoundSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default NotFound;
