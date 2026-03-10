import React from "react";

const MarqueeTextSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="text-moving-container style2">
                <div className="text-moving-bg"></div>
                <div className="text-moving-info">
                    <span className="text-moving style2">
                        Digital Design / Product Design / Brand Design / Digital Design /
                        Product
                    </span>
                    <span className="text-moving style2">
                        Digital Design / Product Design / Brand Design / Digital Desig /
                        Product
                    </span>
                </div>
            </div>
        </>
    );
};

export default MarqueeTextSection;
