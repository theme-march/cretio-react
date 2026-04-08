import React, { useState } from "react";
import videoBg from "@assets/img/bg/video-section-bg.png";
import aboutVideoBg from "@assets/img/bg/about-video-bg.png";
import creativeAgencyVideoBg from "@assets/img/bg/creative-agency-video-bg.png";
import VideoModal from "@components/common/VideoModal";

interface VideoSectionProps {
    isAbout?: boolean;
    variant?: "default" | "creative-portfolio";
}

const VideoSection: React.FC<VideoSectionProps> = ({ isAbout = false, variant = "default" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=VcaAVWtP48A";

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div
                className={`ak-center ak-video-block ak-style1 ak-video-open ak-parallax ak-bg ${isAbout ? "about-video-block" : ""}`}
                onClick={() => setIsOpen(true)}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={variant === "creative-portfolio" ? creativeAgencyVideoBg : (isAbout ? aboutVideoBg : videoBg)}
                    className="video-img ak-bg"
                    alt="..."
                />
                <span className="video-player-btn circle-btn-anim ak-center">
                    <span className="text">Play Now</span>
                </span>
            </div>

            <VideoModal 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                videoUrl={videoUrl} 
            />
        </>
    );
};

export default VideoSection;
