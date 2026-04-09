import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface SlidingTextSectionProps {
    variant?: "style-1" | "style-2" | "seo";
}

const SlidingTextSection: React.FC<SlidingTextSectionProps> = ({ variant = "style-1" }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isSeo = variant === "seo";

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".text-color-one", {
                xPercent: -20,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            gsap.to(".text-color-two", {
                xPercent: 20,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
            gsap.to(".text-color-three", {
                xPercent: -20,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    
    if (isSeo) {
        return (
            <div ref={sectionRef}>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="slideing-text-content">
                    <p className="slideing-text text-color-one">SEO Strategy / On-Page SEO / Link Building</p>
                    <p className="slideing-text text-color-two">Content / Keyword Research / Local SEO</p>
                </div>
            </div>
        );
    }

    if (variant === "style-2") {
        return (
            <div ref={sectionRef}>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="slideing-text-content style2">
                    <p className="slideing-text text-color-three">Design / Product Development / Brand Design</p>
                    <p className="slideing-text text-color-two">Digital Design / Product Design / Brand Design</p>
                </div>
            </div>
        );
    }
    return (
        <div ref={sectionRef}>
            <div className="ak-height-150 ak-height-lg-40"></div>
            <div className="slideing-text-content">
                <p className="slideing-text text-color-one">Design / Product Development / Brand Design</p>
                <p className="slideing-text text-color-two">Digital Design / Product Design / Brand Design</p>
            </div>
        </div>
    );
};

export default SlidingTextSection;