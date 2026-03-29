import React from "react";

interface SectionHeadingProps {
    title: React.ReactNode;
    description?: string;
    caption?: string;
    className?: string;
    titleEase?: string;
    titleDuration?: number;
    variant?: "style-1" | "style-2";
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    description,
    caption,
    className = "",
    variant = "style-1",
    titleEase = "power2.out",
    titleDuration = 1.5,
}) => {
    return (
        <div className={`ak-section-heading ak-style-1 ${variant === "style-2" ? "type-2" : ""} ${className}`}>
            <div className="ak-section-left">
                <h2
                    className="ak-section-title text-animation"
                    data-direction="textTop"
                    data-split-text="chars"
                    data-duration={titleDuration}
                    data-ease={titleEase}
                >
                    {typeof title === "string" ? (
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    ) : (
                        title
                    )}
                </h2>
            </div>
            {(description || caption) && (
                <div className="ak-section-right">
                    {description && (
                        <p 
                            className="ak-section-desp text-animation" 
                            data-direction="rotationX"
                            data-split-text="lines"
                            data-delay="0.3"
                        >
                            {description}
                        </p>
                    )}
                    {caption && (
                        <div 
                            className="ak-section-caption fade-animation"
                            data-direction="right"
                            data-delay="0.3"
                        >
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span> {caption} </span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SectionHeading;
