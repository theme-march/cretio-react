import React from "react";
import { SafeText } from "../../utils/safeHtml";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
    title: string;
    links?: { label: string; path: string }[];
    highlightWords?: string[];
    variant?: "style-1" | "style-2" | "style-3";
    videoSrc?: string;
    strokeText?: string;
    circleText?: string;
    showCircle?: boolean;
    strokeTextClass?: string;
    titleAnimation?: "text-animation" | "fade-animation" | "anim-title-2" | "";
    titleDirection?: string;
    titleSplitText?: string;
    titleDuration?: number;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    title,
    links,
    highlightWords = [],
    variant = "style-1",
    videoSrc,
    strokeText,
    circleText,
    showCircle = true,
    strokeTextClass,
    titleAnimation = "",
    titleDirection,
    titleSplitText,
    titleDuration,
}) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Breadcrumb video auto-play was prevented
            });
        }
    }, [videoSrc]);
    const renderTitle = () => {
        if (highlightWords.length === 0) return <SafeText text={title} />;

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
            <div className={`breadcrumb-area ${variant}`}>
                {videoSrc && variant !== "style-3" && (
                    <video ref={videoRef} autoPlay muted loop playsInline className="breadcrumb-video">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
                <div className={variant === "style-1" || variant === "style-3" ? "container container-customize" : "container"}>
                    <div className={`breadcrumb-wapper ${variant === "style-2" ? "style-2" : ""}`}>
                        <div className="breadcrumb-title-box">
                            <h1 
                                className={`breadcrumb-title ${titleAnimation}`}
                                {...(titleDirection && { "data-direction": titleDirection })}
                                {...(titleSplitText && { "data-split-text": titleSplitText })}
                                {...(titleDuration && { "data-duration": titleDuration })}
                            >
                                {renderTitle()}
                            </h1>
                            {links && (
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
                            )}
                        </div>
                        {variant === "style-2" && showCircle && (
                            <div>
                                <div className="breadcrumb-cricle">
                                    <div className="cricle-animated-text">
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
                                                        <textPath className="coloring" href="#textPath" startOffset="0%">{circleText || "DIGITAL PRESENCE CREATIVITY & INNOVATION I N \u00A0"}</textPath>
                                                    </text>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="cricle-ceneter-text"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {variant === "style-3" && videoSrc && (
                            <div className="breadcrumb-img-box">
                                <video ref={videoRef} autoPlay muted loop playsInline>
                                    <source src={videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="breadcrumb-cricle">
                                    <div className="cricle-animated-text">
                                        <div className="rounded-text rotating">
                                            <svg viewBox="0 0 200 200">
                                                <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
                                                <g fontSize="22.1px">
                                                    <text textAnchor="start">
                                                        <textPath className="coloring" href="#textPath" startOffset="0%">{circleText || "DIGITAL PRESENCE CREATIVITY & INNOVATION I N \u00A0"}</textPath>
                                                    </text>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="cricle-ceneter-text"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {strokeText && <div className={`breadcrumb-stroke ${strokeTextClass || ""}`}>{strokeText}</div>}
            </div>
        </>
    );
};

export default Breadcrumb;
