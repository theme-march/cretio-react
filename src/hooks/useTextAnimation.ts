import { useLayoutEffect } from "react";
import { gsap } from "gsap";
// ScrollTrigger is registered globally in main.tsx

const useTextAnimation = (containerRef?: React.RefObject<HTMLElement | null>) => {
    useLayoutEffect(() => {
        const scope = containerRef?.current || document.body;
        let ctx = gsap.context(() => {
            const textAnimations = gsap.utils.toArray<HTMLElement>(".text-animation", scope);
            
            textAnimations.forEach((element) => {
                const words = element.querySelectorAll<HTMLElement>(".anim-word");
                const duration = Number(element.getAttribute("data-duration")) || 1;
                const delay = Number(element.getAttribute("data-delay")) || 0.15;
                const ease = element.getAttribute("data-ease") || "power2.out";

                if (words.length > 0) {
                    // Reset words initial state
                    gsap.set(words, { translateY: "100%", opacity: 0 });
                    
                    gsap.to(words, {
                        translateY: "0%",
                        opacity: 1,
                        duration: duration,
                        stagger: 0.15,
                        ease: ease,
                        delay: delay,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    });
                } else {
                    // Fallback to whole element animation if no .anim-word children
                    gsap.from(element, {
                        y: 40,
                        opacity: 0,
                        duration: duration,
                        delay: delay,
                        ease: ease,
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        }
                    });
                }
            });
        }, scope);

        return () => ctx.revert();
    }, [containerRef]);
};

export default useTextAnimation;
