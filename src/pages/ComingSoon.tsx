import React from "react";
import { Helmet } from "react-helmet-async";
import useGsapAnimations from "@hooks/useGsapAnimations";
import ComingSoonSection from "@components/sections/ComingSoonSection";

const ComingSoon: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);

    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Coming Soon | Cretio – Digital Agency</title>
                <meta name="description" content="Stay tuned! Something creative is coming your way." />
            </Helmet>
            <ComingSoonSection />
        </div>
    );
};

export default ComingSoon;
