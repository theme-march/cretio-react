import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "@components/common/SectionHeading";

import steps from "../../dataJson/processStepsData.json";

interface ProcessSectionProps {
    variant?: "style-1" | "style-2";
    description?: string;
    titleAnimation?: "text-animation" | "fade-animation" | "anim-title-2" | "";
    titleDirection?: string;
    titleDuration?: number;
    titleSplitText?: string;
    titleEase?: string;
    disableDescriptionAnimation?: boolean;
    disableCaptionAnimation?: boolean;
    cardDuration?: number;
    cardStagger?: number;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ 
    variant = "style-1", 
    description,
    titleAnimation,
    titleDirection,
    titleDuration,
    titleSplitText,
    titleEase,
    disableDescriptionAnimation = false,
    disableCaptionAnimation = false,
    cardDuration = 1.8,
    cardStagger = 0.2
}) => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".funfact", 
                { 
                    opacity: 0, 
                    scale: 0.6 
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: cardDuration,
                    stagger: cardStagger,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center+=200",
                        toggleActions: "play none none none",
                    },
                }
            );

            const countElements = sectionRef.current?.querySelectorAll(".amin_auto_count");
            countElements?.forEach((el) => {
                const target = parseInt(el.textContent || "0", 10);
                gsap.fromTo(el, 
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 1.5,
                        snap: { innerText: 1 },
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top center+=200",
                        }
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">Working Process</span>'
                    caption="Process"
                    description={description}
                    variant={variant}
                    titleAnimation={titleAnimation}
                    titleDirection={titleDirection}
                    titleDuration={titleDuration}
                    titleSplitText={titleSplitText}
                    titleEase={titleEase}
                    disableDespAnimation={disableDescriptionAnimation}
                    disableCaptionAnimation={disableCaptionAnimation}
                />
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="funfact-content">
                    {steps.map((step) => (
                        <div className="funfact style1" key={step.id}>
                            <div className="funfact-card style-1">
                                <div className="funfact-number">
                                    <span>{step.id.charAt(0)}</span>
                                    <span className="amin_auto_count">{step.id.substring(1)}</span>
                                </div>
                                <p className="funfact-text text-center" dangerouslySetInnerHTML={{ __html: step.title }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
