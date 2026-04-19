import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import funfactBg from "@assets/img/bg/funfact-bg.png";

gsap.registerPlugin(ScrollTrigger);

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
                    <span className="amin_auto_count">{number}</span>
                    <span>{suffix}</span>
                </div>
                {variant !== "type-3" && <p className="funfact-text">{label}</p>}
            </div>
        </div>
    );
};

import funFacts from "@/dataJson/commonSectionsData.json";

const funFactsList = funFacts.funFacts;

const FunFactSection: React.FC<FunFactProps> = ({ variant = "style-1" }) => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".funfact",
                {
                    opacity: 0,
                    scale: 0.5,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.8,
                    stagger: 0.2,
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

        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div
                    className={`funfact-content ${variant === "type-2" ? "type-2 funfact-gap" : ""} ${variant === "type-3" ? "type-3" : ""}`}
                >
                    {funFactsList.map((fact, index) => (
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
