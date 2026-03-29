import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useCountUp from "@hooks/useCountUp";
import funfactBg from "@assets/img/bg/funfact-bg.png";

interface FunFactProps {
    variant?: "style-1" | "type-2" | "type-3";
}

interface FunFactItemProps {
    number: number;
    suffix: string;
    label: string;
    variant: "style-1" | "type-2" | "type-3";
    index: number;
}

const FunFactItem: React.FC<FunFactItemProps> = ({ number, suffix, label, variant, index }) => {
    const count = useCountUp(number);

    return (
        <div className="funfact style1">
            <div
                className={`funfact-card style-1 ${variant === "type-2" ? "type-2" : ""} ${variant === "type-3" ? "type-3" : ""
                    }`}
            >
                {variant === "type-3" && (
                    <p className="funfact-text">
                        {label} <br />
                        {index === 0
                            ? "130+ Niches"
                            : index === 1
                                ? "256+ Country"
                                : index === 2
                                    ? "145+ Members"
                                    : "75+ Tech Sectors"}
                    </p>
                )}
                <div
                    className={`funfact-number ${variant === "type-2" ? "img-clip-text ak-bg" : ""}`}
                    style={variant === "type-2" ? { backgroundImage: `url(${funfactBg})` } : {}}
                >
                    <span>{count}</span>
                    <span>{suffix}</span>
                </div>
                {variant !== "type-3" && <p className="funfact-text">{label}</p>}
            </div>
        </div>
    );
};

const funFacts = [
    { id: "count1", number: 65, suffix: "K", label: "Project Completed" },
    { id: "count2", number: 28, suffix: "K", label: "Happy Customers" },
    { id: "count3", number: 32, suffix: "+", label: "Years of Experience" },
    { id: "count4", number: 13, suffix: "+", label: "Award Achievement" },
];

const FunFactSection: React.FC<FunFactProps> = ({ variant = "style-1" }) => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            const funFacts = gsap.utils.toArray(".funfact.style1");
            if (funFacts.length > 0) {
                gsap.from(funFacts, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center+=200",
                    },
                    scale: 0.5,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 2,
                    ease: "elastic",
                    force3D: true,
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div
                    className={`funfact-content ${variant === "type-2" ? "type-2 funfact-gap" : ""} ${variant === "type-3" ? "type-3" : ""}`}
                >
                    {funFacts.map((fact, index) => (
                        <FunFactItem
                            key={fact.id}
                            number={fact.number}
                            suffix={fact.suffix}
                            label={fact.label}
                            variant={variant}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default FunFactSection;
