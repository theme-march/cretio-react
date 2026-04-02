import React from "react";
import videoBg from "@assets/img/bg/video-section-bg.png";
import aboutVideoBg from "@assets/img/bg/about-video-bg.png";

interface VideoSectionProps {
    isAbout?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({ isAbout = false }) => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <a
                href="https://www.youtube.com/watch?v=VcaAVWtP48A"
                className={`ak-center ak-video-block ak-style1 ak-video-open ak-parallax ak-bg ${isAbout ? "about-video-block" : ""}`}
            >
                <img
                    src={isAbout ? aboutVideoBg : videoBg}
                    className="video-img ak-bg"
                    alt="..."
                />
                <span className="video-player-btn circle-btn-anim ak-center">
                    <span className="text">Play Now</span>
                </span>
            </a>
        </>
    );
};

export default VideoSection;
