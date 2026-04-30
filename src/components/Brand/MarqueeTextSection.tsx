import React from "react";

interface MarqueeTextSectionProps {
    variant?: "style1" | "style2" | string;
}

const marqueeItems = [
    "Digital Design",
    "Product Design",
    "Brand Design",
    "Digital Design",
    "Product"
];

const MarqueeTextSection: React.FC<MarqueeTextSectionProps> = ({ variant = "style1" }) => {
    const marqueeString = marqueeItems.join(" / ") + " /";

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            {variant === "style2" ? (
                <div className="text-moving-container style2">
                    <div className="text-moving-bg"></div>
                    <div className="text-moving-info">
                        <span className="text-moving style2">
                            {marqueeString}
                        </span>
                        <span className="text-moving style2">
                            {marqueeString}
                        </span>
                    </div>
                </div>
            ) : (
                <div className="background-gradient">
                    <div className="text-container">
                        <span className="text-gradient">
                            {marqueeString}
                        </span>
                        <span className="text-gradient">
                            {marqueeString}
                        </span>
                        <span className="text-gradient">
                            {marqueeString}
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default MarqueeTextSection;
