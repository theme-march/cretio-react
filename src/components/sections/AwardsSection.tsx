import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import SectionHeading from "@components/common/SectionHeading";

import awardHover1 from "@assets/img/award/hover-img-1.png";
import awardHover2 from "@assets/img/award/hover-img-2.png";
import awardHover3 from "@assets/img/award/hover-img-3.png";
import awardHover4 from "@assets/img/award/hover-img-4.png";
import awardHover5 from "@assets/img/award/hover-img-5.png";

import award1 from "@assets/img/award/awards-1.svg";
import award2 from "@assets/img/award/awards-2.svg";
import award3 from "@assets/img/award/awards-3.svg";
import award4 from "@assets/img/award/awards-4.svg";
import award5 from "@assets/img/award/awards-5.svg";

const awards = [
    { id: 1, title: "Dribbble Award 2024", type: "Audience Choice", category: "Design of the day", hoverImg: awardHover1, awardImg: award1 },
    { id: 2, title: "Product hunt Award 2024", type: "Audience Choice", category: "Feature Product", hoverImg: awardHover2, awardImg: award2 },
    { id: 3, title: "Envato Award 2024", type: "Audience Choice", category: "Trendsetter", hoverImg: awardHover3, awardImg: award3 },
    { id: 4, title: "Google Award 2024", type: "Honorable Mention", category: "Best Problem Solver", hoverImg: awardHover4, awardImg: award4 },
    { id: 5, title: "Microsoft Award 2024", type: "Honorable Mention", category: "Best Developer", hoverImg: awardHover5, awardImg: award5 },
];

import MarketingTestimonialSection from "./MarketingTestimonialSection";

const AwardsSection: React.FC = () => {
    const hoverRef = useRef<HTMLDivElement>(null);
    const [hoverImg, setHoverImg] = useState<string>(awards[0].hoverImg);

    useEffect(() => {
        if (hoverRef.current) gsap.to(hoverRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
    }, []);

    const handleMouseEnter = (imgSrc: string) => {
        setHoverImg(imgSrc);
        if (hoverRef.current) {
            gsap.set(hoverRef.current, { x: 0, y: 0 });
            gsap.to(hoverRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
        }
    };

    const handleMouseLeave = () => {
        if (hoverRef.current) gsap.to(hoverRef.current, { scale: 0.5, opacity: 0, duration: 0.5, ease: "power3.out" });
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
            <section className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <SectionHeading title='<span class="highlight-text">Awards</span> <br /> Achievement' caption="Awards" variant="style-2" />
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
                                onMouseEnter={() => handleMouseEnter(award.hoverImg)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                <h6 className="awards-title">
                                    {award.id < 10 ? `0${award.id}` : award.id}. {award.title}
                                </h6>
                                <p className="awards-type">{award.type}</p>
                                <p className="awards-category">{award.category}</p>
                                <div className="awards-img">
                                    <img src={award.awardImg} alt="..." />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <MarketingTestimonialSection variant="type-2" />
        </>
    );
};

export default AwardsSection;
