import React from "react";
import videoBg from "@assets/img/bg/video-section-bg.png";

const VideoSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <a
                href="https://www.youtube.com/watch?v=VcaAVWtP48A"
                className="ak-center ak-video-block ak-style1 ak-video-open ak-bg"
                style={{ backgroundImage: `url(${videoBg})` }}
            >
                <span className="video-player-btn circle-btn-anim ak-center">
                    <span className="text">Play Now</span>
                </span>
            </a>
        </>
    );
};

export default VideoSection;
