import React, { useLayoutEffect, useRef } from "react";
import { ParsedText } from "../../utils/safeHtml";
import gsap from "gsap";
import SectionHeading from "@components/Common/SectionHeading";

const steps = [
    { "id": "01", "title": "Planning and Idea Validation" },
    { "id": "02", "title": "Wireframing and Design" },
    { "id": "03", "title": "Technical Planning & Development" },
    { "id": "04", "title": "Testing and Quality Assurance" }
];

const ServiceDetailsProcessSection: React.FC = () => {
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
                    duration: 2.2,
                    stagger: 0.3,
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
                    title="Our Exceptional Digital Industrial Working Process"
                    highlightWords={["Exceptional", "Process"]}
                    caption="Process"
                    description="Our specialized expertise allows us to deliver high-quality solutions tailored to the unique requirements of your business model."
                    variant="style-2"
                    titleAnimation="text-animation"
                    titleDirection="textLeft"
                    titleDuration={1.2}
                    disableDespAnimation={true}
                    disableCaptionAnimation={true}
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
                                <p className="funfact-text text-center"><ParsedText text={step.title} /></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsProcessSection;
