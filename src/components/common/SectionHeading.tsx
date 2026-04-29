import React from "react";
import { SafeText } from "../../utils/safeHtml";

interface SectionHeadingProps {
    title: React.ReactNode;
    description?: string;
    caption?: string;
    className?: string;
    titleEase?: string;
    titleDuration?: number;
    variant?: "style-1" | "style-2";
    disableDespAnimation?: boolean;
    disableCaptionAnimation?: boolean;
    titleOffset?: string;
    titleDirection?: string;
    titleAnimation?: "text-animation" | "fade-animation" | "anim-title-2" | "";
    titleSplitText?: string;
    titleStyle?: React.CSSProperties;
    descriptionDirection?: string;
    descriptionOffset?: string;
    captionDirection?: string;
    captionOffset?: string;
    captionDelay?: string;
    descriptionDelay?: string;
    titleTag?: "h2" | "h6";
    highlightWords?: string[];
    leftAnimation?: string;
    leftDirection?: string;
    leftOffset?: string;
    leftDelay?: string;
    rightAnimation?: string;
    rightDirection?: string;
    rightOffset?: string;
    rightDelay?: string;
    descriptionClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    description,
    caption,
    className = "",
    variant = "style-1",
    titleEase = "power2.out",
    titleDuration = 1.5,
    disableDespAnimation = false,
    disableCaptionAnimation = false,
    titleOffset,
    titleDirection = "textTop",
    titleAnimation = "text-animation",
    titleSplitText,
    titleStyle,
    descriptionDirection = "none",
    descriptionOffset,
    captionDirection = "right",
    captionOffset,
    captionDelay = "0.3",
    descriptionDelay = "0.3",
    titleTag = "h2",
    highlightWords = [],
    leftAnimation,
    leftDirection,
    leftOffset,
    leftDelay,
    rightAnimation,
    rightDirection,
    rightOffset,
    rightDelay,
    descriptionClassName = "",
}) => {
    const TitleTag = titleTag;
    const leftWrapperClass = leftAnimation ? `ak-section-left ${leftAnimation}` : "ak-section-left";
    const rightWrapperClass = rightAnimation ? `ak-section-right ${rightAnimation}` : "ak-section-right";

    const resolvedTitleAnimation = leftAnimation ? "" : titleAnimation;

    const renderTitle = () => {
        if (typeof title !== "string" || highlightWords.length === 0) {
            return typeof title === "string" ? <SafeText text={title} /> : title;
        }

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
                <span key={`Part-${i}`} className="highlight">
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
        <div className={`ak-section-heading ak-style-1 ${variant === "style-2" ? "type-2" : ""} ${className}`}>
            <div
                className={leftWrapperClass}
                {...(leftAnimation && leftDirection ? { "data-direction": leftDirection } : {})}
                {...(leftAnimation && leftOffset ? { "data-offset": leftOffset } : {})}
                {...(leftAnimation && leftDelay ? { "data-delay": leftDelay } : {})}
            >
                <TitleTag
                    className={`ak-section-title ${resolvedTitleAnimation}`.trim()}
                    {...(!leftAnimation && { "data-direction": titleDirection })}
                    {...(!leftAnimation && { "data-duration": titleDuration })}
                    {...(!leftAnimation && { "data-ease": titleEase })}
                    {...(!leftAnimation && titleOffset && { "data-offset": titleOffset })}
                    {...(titleSplitText ? { "data-split-text": titleSplitText } : {})}
                    {...(titleStyle ? { style: titleStyle } : {})}
                >
                    {renderTitle()}
                </TitleTag>
            </div>
            {(description || caption) && (
                <div
                    className={rightWrapperClass}
                    {...(rightAnimation && rightDirection ? { "data-direction": rightDirection } : {})}
                    {...(rightAnimation && rightOffset ? { "data-offset": rightOffset } : {})}
                    {...(rightAnimation && rightDelay ? { "data-delay": rightDelay } : {})}
                    {...(!rightAnimation ? {
                    } : {})}
                >
                    {description && (
                        <p
                            className={`ak-section-desp ${descriptionClassName} ${!disableDespAnimation ? (descriptionDirection === "none" ? "text-animation" : "fade-animation") : ""}`.trim()}
                            {...(!disableDespAnimation ? {
                                "data-direction": descriptionDirection,
                                "data-split-text": descriptionDirection === "none" ? "none" : undefined,
                                "data-delay": descriptionDelay,
                                ...(descriptionOffset && { "data-offset": descriptionOffset })
                            } : {})}
                        >
                            {description}
                        </p>
                    )}
                    {caption && (
                        <div
                            className={`ak-section-caption ${!disableCaptionAnimation ? "fade-animation" : ""}`}
                            {...(!disableCaptionAnimation ? {
                                "data-direction": captionDirection,
                                "data-delay": captionDelay,
                                ...(captionOffset && { "data-offset": captionOffset })
                            } : {})}
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
