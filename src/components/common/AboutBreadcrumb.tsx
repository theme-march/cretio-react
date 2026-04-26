import React from "react";
import { SafeText } from "../../utils/safeHtml";
import { Link } from "react-router-dom";
import aboutVideo from "@assets/videos/about.mp4";

const AboutBreadcrumb: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const title = "We thrive on creativity & innovation in digital presence";
    const highlightWords = ["creativity", "innovation"];
    const links = [{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }];

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Breadcrumb video auto-play was prevented
            });
        }
    }, []);

    const renderTitle = () => {
        let parts: (string | React.ReactNode)[] = [title];
        highlightWords.forEach((word) => {
            const newParts: (string | React.ReactNode)[] = [];
            parts.forEach((part) => {
                if (typeof part === "string") {
                    const split = part.split(new RegExp(`(${word})`, "gi"));
                    newParts.push(...split);
                } else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });

        return parts.map((part, i) =>
            typeof part === "string" && highlightWords.some((hw) => hw.toLowerCase() === part.toLowerCase()) ? (
                <span key={`Part-${i}`} className="highlight-text">
                    {part}
                </span>
            ) : (
                <span key={`Part-${i}`}>
                    {typeof part === "string" ? <SafeText text={part} /> : part}
                </span>
            )
        );
    };

    return (
        <>
            <div className="ak-height-150 ak-height-lg-120"></div>
            <div className="breadcrumb-area style-3">
                <div className="container container-customize">
                    <div className="breadcrumb-wapper">
                        <div className="breadcrumb-title-box">
                            <h1 className="breadcrumb-title">
                                {renderTitle()}
                            </h1>
                            <div className="breadcrumb-caption">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                        <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>
                                    {links.map((link, index) => (
                                        <React.Fragment key={link.label}>
                                            {index > 0 && " / "}
                                            {link.path ? <Link to={link.path}>{link.label}</Link> : link.label}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className="breadcrumb-img-box">
                            <video ref={videoRef} autoPlay muted loop playsInline>
                                <source src={aboutVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="breadcrumb-cricle">
                                <div className="cricle-animated-text">
                                    <div className="rounded-text rotating">
                                        <svg viewBox="0 0 200 200">
                                            <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
                                            <g fontSize="22.1px">
                                                <text textAnchor="start">
                                                    <textPath className="coloring" href="#textPath" startOffset="0%">DIGITAL PRESENCE CREATIVITY & INNOVATION I N &nbsp;</textPath>
                                                </text>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="cricle-ceneter-text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBreadcrumb;
