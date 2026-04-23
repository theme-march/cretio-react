import React from "react";
import useGsapAnimations from "@hooks/useGsapAnimations";
import ComingSoonSection from "@components/sections/ComingSoonSection";

const ComingSoon: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);

    return (
        <div ref={containerRef}>
            <ComingSoonSection />
        </div>
    );
};

export default ComingSoon;
