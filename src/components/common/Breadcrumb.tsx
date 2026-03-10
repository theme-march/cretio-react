import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
    title: string;
    links?: { label: string; path: string }[];
    highlightWords?: string[];
    variant?: "style-1" | "style-2";
    videoSrc?: string;
    strokeText?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    title,
    links,
    highlightWords = [],
    variant = "style-1",
    videoSrc,
    strokeText,
}) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Breadcrumb video auto-play was prevented.", error);
            });
        }
    }, [videoSrc]);
    const renderTitle = () => {
        if (highlightWords.length === 0) return <span dangerouslySetInnerHTML={{ __html: title }} />;

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
                <span key={`Part-${i}`} dangerouslySetInnerHTML={{ __html: part as string }} />
            )
        );
    };

    return (
        <>
            <div className="ak-height-150 ak-height-lg-120"></div>
            <div className={`breadcrumb-area ${variant}`}>
                {videoSrc && (
                    <video ref={videoRef} autoPlay muted loop playsInline className="breadcrumb-video">
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
                <div className={variant === "style-1" ? "container container-customize" : "container"}>
                    <div className={`breadcrumb-wapper ${variant === "style-2" ? "style-2" : ""}`}>
                        <div className="breadcrumb-title-box">
                            <h1 className="breadcrumb-title">{renderTitle()}</h1>
                            {links && (
                                <div className="breadcrumb-caption">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                            <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span>
                                        {links.map((link, index) => (
                                            <React.Fragment key={index}>
                                                {index > 0 && " / "}
                                                {link.path ? <Link to={link.path}>{link.label}</Link> : link.label}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {strokeText && <div className="breadcrumb-stroke">{strokeText}</div>}
            </div>
        </>
    );
};

export default Breadcrumb;
