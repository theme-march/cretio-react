import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import SectionHeading from "@components/Common/SectionHeading";
import AwardCard from "./AwardCard";
import type { Award } from "./AwardCard";
import { getImagePath } from "@/utils/imageLoader";

const awardsData: Award[] = [
    { id: 1, title: "Dribbble Award 2024", type: "Audience Choice", category: "Design of the day", hoverImg: "hover-img-1.png", awardImg: "awards-1.svg" },
    { id: 2, title: "Product hunt Award 2024", type: "Audience Choice", category: "Feature Product", hoverImg: "hover-img-2.png", awardImg: "awards-2.svg" },
    { id: 3, title: "Envato Award 2024", type: "Audience Choice", category: "Trendsetter", hoverImg: "hover-img-3.png", awardImg: "awards-3.svg" },
    { id: 4, title: "Google Award 2024", type: "Honorable Mention", category: "Best Problem Solver", hoverImg: "hover-img-4.png", awardImg: "awards-4.svg" },
    { id: 5, title: "Microsoft Award 2024", type: "Honorable Mention", category: "Best Developer", hoverImg: "hover-img-5.png", awardImg: "awards-5.svg" }
];

const MinimalStudioAwardsSection: React.FC = () => {
    const titleDirection = "textLeft";
    const titleEase = "back.out(1.7)";
    const titleDuration = 1;
    const captionDirection = "right";
    const captionDelay = "0.35";
    const sectionRef = useRef<HTMLElement>(null);
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverImg, setHoverImg] = useState<string>(getImagePath(awardsData[0].hoverImg));

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
        <section className="container" ref={sectionRef}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SectionHeading 
                title="Awards <br /> Achievement"
                highlightWords={["Awards"]}
                caption="Awards" 
                variant="style-2"
                titleDirection={titleDirection}
                titleEase={titleEase}
                titleDuration={titleDuration}
                captionDirection={captionDirection}
                captionDelay={captionDelay}
            />
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="awards-box">
                <div className="awards-hover-image" ref={hoverRef} style={{ opacity: 0, scale: 0.5, pointerEvents: "none" }}>
                    <img src={hoverImg} alt="Awards preview thumbnail" id="awardsHover" />
                </div>
                <div className="awards-list">
                    {awardsData.map((award) => (
                        <AwardCard
                            key={award.id}
                            award={award}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={handleMouseMove}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MinimalStudioAwardsSection;
