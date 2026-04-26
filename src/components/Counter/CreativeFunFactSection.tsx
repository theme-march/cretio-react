import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FunFactItem from "./FunFactItem";
import commonData from "../../dataJson/commonData.json";

const CreativeFunFactSection: React.FC = () => {
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
                            trigger: sectionRef.current,
                            start: "top center+=200",
                            toggleActions: "play none none none",
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
                <div className="funfact-content type-3">
                    {commonData.funFacts.map((fact, index) => (
                        <FunFactItem
                            key={fact.id}
                            fact={fact}
                            variant="type-3"
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default CreativeFunFactSection;
