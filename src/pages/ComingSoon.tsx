import React from "react";
import useGsapAnimations from "@hooks/useGsapAnimations";
import ComingSoonSection from "@components/sections/ComingSoonSection";

const ComingSoon: React.FC = () => {
    useGsapAnimations();

    return (
        <>
            <ComingSoonSection />
        </>
    );
};

export default ComingSoon;
