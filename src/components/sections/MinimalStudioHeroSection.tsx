import React from "react";
import markagVideo from "@assets/videos/markag-video.mp4";

const MinimalStudioHeroSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-115"></div>
            <div className="container container-customize">
                <div className="minimal-studio-hero-area">
                    <div className="ms-hero-title-content title-anim" data-delay="0.5">
                        <h1 className="ms-hero-title anim-line-words">
                            Elegant <span className="highlight"> Simplicity, </span>
                        </h1>
                        <h1 className="ms-hero-title anim-line-words">
                            <span>Unmatched </span>
                            <span className="highlight-black">Creativity</span>
                        </h1>
                    </div>
                    <div className="ms-animated-badge">
                        <div className="rounded-text rotating">
                            <svg viewBox="0 0 200 200">
                                <path
                                    id="textPath"
                                    d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                                    transform="translate(100,100)"
                                    fill="none"
                                    strokeWidth="0"
                                ></path>
                                <g fontSize="22.1px">
                                    <text textAnchor="start">
                                        <textPath className="coloring" xlinkHref="#textPath" startOffset="0%">
                                            DIGITAL PRESENCE CREATIVITY & INNOVATION I N &nbsp;
                                        </textPath>
                                    </text>
                                </g>
                            </svg>
                        </div>
                        <div className="ms-ceneter-text"></div>
                    </div>
                </div>
            </div>
            <div className="ak-center ak-video-block ak-style1 ak-bg">
                <video autoPlay muted loop className="video-img ak-bg h-100">
                    <source src={markagVideo} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </div>
        </>
    );
};

export default MinimalStudioHeroSection;
