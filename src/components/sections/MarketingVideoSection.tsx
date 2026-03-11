import React from "react";
import defaultVideoSrc from "@assets/videos/marketing-agency-three.mp4";

interface MarketingVideoSectionProps {
    videoSrc?: string;
}

const MarketingVideoSection: React.FC<MarketingVideoSectionProps> = ({ videoSrc = defaultVideoSrc }) => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="fade-animation">
                <div className="ak-center ak-video-block ak-style1 ak-bg">
                    <video autoPlay muted loop playsInline className="video-img ak-bg h-100">
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                </div>
            </div>
        </>
    );
};

export default MarketingVideoSection;
