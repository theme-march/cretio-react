import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface SlidingTextSectionProps {
    variant?: "style-1" | "style-2" | "style-3" | "seo";
}

const slidingData = {
    seo: [
        ["SEO Strategy", "On-Page SEO", "Link Building"],
        ["Content", "Keyword Research", "Local SEO"]
    ],
    design: [
        ["Design", "Product Development", "Brand Design"],
        ["Digital Design", "Product Design", "Brand Design"]
    ]
};

const SlidingTextSection: React.FC<SlidingTextSectionProps> = ({ variant = "style-1" }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isSeo = variant === "seo";

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const elOne = sectionRef.current?.querySelector(".text-color-one");
            if (elOne) {
                gsap.to(elOne, {
                    xPercent: -20,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }

            const elTwo = sectionRef.current?.querySelector(".text-color-two");
            if (elTwo) {
                gsap.to(elTwo, {
                    xPercent: 20,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }

            const elThree = sectionRef.current?.querySelector(".text-color-three");
            if (elThree) {
                gsap.to(elThree, {
                    xPercent: -20,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    
    if (isSeo) {
        return (
            <div ref={sectionRef}>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="slideing-text-content">
                    <p className="slideing-text text-color-one">{slidingData.seo[0].join(" / ")}</p>
                    <p className="slideing-text text-color-two">{slidingData.seo[1].join(" / ")}</p>
                </div>
            </div>
        );
    }

    if (variant === "style-2") {
        return (
            <div ref={sectionRef}>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="slideing-text-content style2">
                    <p className="slideing-text text-color-three">{slidingData.design[0].join(" / ")}</p>
                    <p className="slideing-text text-color-two">{slidingData.design[1].join(" / ")}</p>
                </div>
            </div>
        );
    }
    return (
        <div ref={sectionRef}>
            <div className="ak-height-150 ak-height-lg-40"></div>
            <div className="slideing-text-content">
                <p className="slideing-text text-color-one">{slidingData.design[0].join(" / ")}</p>
                <p className="slideing-text text-color-two">{slidingData.design[1].join(" / ")}</p>
            </div>
        </div>
    );
};

export default SlidingTextSection;
