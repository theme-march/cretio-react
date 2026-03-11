import React from "react";

const MarqueeTextSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="background-gradient">
                <div className="text-container">
                    <span className="text-gradient">
                        Digital Design / Product Design / Brand Design / Digital Design /
                        Product
                    </span>
                    <span className="text-gradient">
                        Digital Design / Product Design / Brand Design / Digital Desig /
                        Product
                    </span>
                </div>
            </div>
        </>
    );
};

export default MarqueeTextSection;
