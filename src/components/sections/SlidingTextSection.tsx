import React from "react";

interface SlidingTextSectionProps {
    variant?: "style-1" | "style-2";
}

const SlidingTextSection: React.FC<SlidingTextSectionProps> = ({ variant = "style-1" }) => {
    if (variant === "style-2") {
        return (
            <>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="slideing-text-content style2">
                    <p className="slideing-text text-color-three">Design / Product Development / Brand Design</p>
                    <p className="slideing-text text-color-two">Digital Design / Product Design / Brand Design</p>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="ak-height-150 ak-height-lg-40"></div>
            <div className="slideing-text-content">
                <p className="slideing-text text-color-one">Design / Product Development / Brand Design</p>
                <p className="slideing-text text-color-two">Digital Design / Product Design / Brand Design</p>
            </div>
        </>
    );
};

export default SlidingTextSection;