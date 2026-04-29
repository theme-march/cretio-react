import React, { useState } from "react";
import videoBg from "@assets/img/bg/video-section-bg.png";
import aboutVideoBg from "@assets/img/bg/about-video-bg.png";
import creativeAgencyVideoBg from "@assets/img/bg/creative-agency-video-bg.png";
import VideoModal from "@components/Common/VideoModal";

interface VideoSectionProps {
    variant?: "default" | "creative-portfolio" | "about";
}

const VideoSection: React.FC<VideoSectionProps> = ({ variant = "default" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const videoUrl = "https://www.youtube.com/watch?v=VcaAVWtP48A";

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div
                className={`ak-center ak-video-block ak-style1 ak-video-open ak-parallax ak-bg ${variant === "about" ? "about-video-block" : ""}`}
                onClick={() => setIsOpen(true)}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={variant === "creative-portfolio" ? creativeAgencyVideoBg : (variant === "about" ? aboutVideoBg : videoBg)}
                    className="video-img ak-bg"
                    alt="Video thumbnail showing creative studio work"
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

