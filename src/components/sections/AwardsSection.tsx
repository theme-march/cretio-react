import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SectionHeading from "@components/common/SectionHeading";

import awards from "@/dataJson/awardsData.json";
import { getImagePath } from "@/utils/imageLoader";

interface AwardsSectionProps {
    showTopGap?: boolean;
    titleAnimation?: "text-animation" | "fade-animation";
    titleDirection?: string;
    captionDirection?: string;
    captionDelay?: string;
    titleOffset?: string;
    titleEase?: string;
    titleDuration?: number;
    captionOffset?: string;
    variant?: "default" | "design-company" | "minimal-studio";
    title?: string;
    highlightWords?: string[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ 
    showTopGap = false,
    titleAnimation,
    titleDirection,
    titleEase,
    titleDuration,
    captionDirection,
    captionDelay,
    titleOffset,
    captionOffset,
    variant = "default",
    title = (variant === "design-company" || variant === "minimal-studio") ? "Awards <br /> Achievement" : "Awards <br /> Achievement",
    highlightWords = ["Awards"],
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverImg, setHoverImg] = useState<string>(getImagePath(awards[0].hoverImg));

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (hoverRef.current) {
                gsap.to(hoverRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (imgSrc: string) => {
        setHoverImg(imgSrc);
        if (hoverRef.current) {
            gsap.set(hoverRef.current, { x: 0, y: 0 });
            gsap.to(hoverRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
        }
    };

    const handleMouseLeave = () => {
        if (hoverRef.current) {
            gsap.to(hoverRef.current, { scale: 0.5, opacity: 0, duration: 0.5, ease: "power3.out" });
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (hoverRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) / 10;
            const y = (e.clientY - rect.top - rect.height / 2) / 10;
            gsap.to(hoverRef.current, { x, y, duration: 0.3 });
        }
    };

    return (
        <>
            <section className="container" ref={sectionRef}>
                {showTopGap && <div className="ak-height-150 ak-height-lg-80"></div>}
                <SectionHeading 
                    title={title}
                    highlightWords={highlightWords}
                    caption="Awards" 
                    variant="style-2"
                    titleAnimation={variant === "design-company" ? "text-animation" : titleAnimation}
                    titleDuration={variant === "design-company" ? 1.5 : titleDuration}
                    titleDirection={variant === "design-company" ? "textLeft" : titleDirection}
                    titleEase={titleEase}
                    captionDirection={captionDirection}
                    captionDelay={captionDelay}
                    titleOffset={titleOffset}
                    captionOffset={captionOffset}
                    {...(variant === "design-company" && {
                        rightAnimation: "fade-animation",
                        rightDirection: "left",
                        rightOffset: "55",
                        rightDelay: "0.35",
                        disableCaptionAnimation: true
                    })}
                />
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="awards-box">
                    <div className="awards-hover-image" ref={hoverRef} style={{ opacity: 0, scale: 0.5, pointerEvents: "none" }}>
                        <img src={hoverImg} alt="..." id="awardsHover" />
                    </div>
                    <div className="awards-list">
                        {awards.map((award) => (
                            <div
                                className="awards-card fade-animation"
                                data-direction="bottom"
                                key={award.id}
                                onMouseEnter={() => handleMouseEnter(getImagePath(award.hoverImg))}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                <h6 className="awards-title">
                                    {award.id < 10 ? `0${award.id}` : award.id}. {award.title}
                                </h6>
                                <p className="awards-type">{award.type}</p>
                                <p className="awards-category">{award.category}</p>
                                <div className="awards-img">
                                    <img src={getImagePath(award.awardImg)} alt="..." />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AwardsSection;
