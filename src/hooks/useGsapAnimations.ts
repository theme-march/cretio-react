import { useLayoutEffect } from "react";
import { gsap } from "gsap";
// ScrollTrigger is registered globally in main.tsx

const useGsapAnimations = () => {
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. fadeAnimation
            const fadeArray = gsap.utils.toArray<HTMLElement>(".fade-animation");
            fadeArray.forEach((item) => {
                let fade_direction = item.getAttribute("data-direction") || "bottom";
                let fade_offset = Number(item.getAttribute("data-offset")) || 50;
                let duration_value = Number(item.getAttribute("data-duration")) || 1.5;
                let delay_value = Number(item.getAttribute("data-delay")) || 0.15;
                let ease_value = item.getAttribute("data-ease") || "power2.out";
                let onscroll_value = Number(item.getAttribute("data-on-scroll")) || 1;

                const animationProps: gsap.TweenVars = {
                    opacity: 0,
                    duration: duration_value,
                    delay: delay_value,
                    ease: ease_value,
                };

                switch (fade_direction) {
                    case "top": animationProps.y = -fade_offset; break;
                    case "left": animationProps.x = -fade_offset; break;
                    case "right": animationProps.x = fade_offset; break;
                    case "bottom": animationProps.y = fade_offset; break;
                    default: animationProps.y = fade_offset;
                }

                if (onscroll_value === 1) {
                    animationProps.scrollTrigger = {
                        trigger: item,
                        start: "top 85%",
                        markers: false,
                        scrub: false,
                    };
                }
                gsap.from(item, animationProps);
            });

            // 2. imgAnimLeftShow
            const imgAnimArray = gsap.utils.toArray<HTMLElement>(".img-anim-left-show");
            imgAnimArray.forEach((imgReveal) => {
                let $imgReveal = imgReveal;
                let image = $imgReveal.querySelector("img");
                let delayValue = parseFloat($imgReveal.getAttribute("data-delay") || "0.15");

                const tl = gsap.timeline({
                    delay: delayValue,
                    scrollTrigger: {
                        trigger: $imgReveal,
                        start: "top 85%",
                        scrub: false,
                    },
                });

                tl.set($imgReveal, { autoAlpha: 1 })
                  .from($imgReveal, {
                      xPercent: -100,
                      duration: 1.2,
                      ease: "power2.out"
                  });

                if (image) {
                    tl.from(image, {
                        xPercent: 100,
                        scale: 1.2,
                        duration: 1.5,
                        ease: "power2.out",
                        delay: -1.2
                    });

                    gsap.fromTo(image, 
                        { yPercent: -20 },
                        {
                            yPercent: 20,
                            scrollTrigger: {
                                trigger: $imgReveal,
                                scrub: true,
                                start: "top bottom",
                                end: "bottom top",
                            }
                        }
                    );
                }
            });

            // 3. circleBtnAnim (Magnetic Button)
            const circleButtons = gsap.utils.toArray<HTMLElement>(".circle-btn-anim");
            circleButtons.forEach((btn) => {
                const strength = 40;
                const text = btn.querySelector(".text");

                const handleMouseMove = (event: MouseEvent) => {
                    const bounding = btn.getBoundingClientRect();
                    const newX = ((event.clientX - bounding.left) / btn.offsetWidth) - 0.5;
                    const newY = ((event.clientY - bounding.top) / btn.offsetHeight) - 0.5;
                    
                    gsap.to(btn, {
                        x: newX * strength,
                        y: newY * strength,
                        ease: "power4.out",
                    });

                    if (text) {
                        gsap.to(text, {
                            x: newX * (strength / 2),
                            y: newY * (strength / 2),
                            ease: "power4.out",
                        });
                    }
                };

                const handleMouseLeave = () => {
                    gsap.to(btn, { x: 0, y: 0, ease: "power2.out" });
                    if (text) {
                        gsap.to(text, { x: 0, y: 0, ease: "power2.out" });
                    }
                };

                btn.addEventListener("mousemove", handleMouseMove as EventListener);
                btn.addEventListener("mouseleave", handleMouseLeave as EventListener);
            });

            // 4. blogCardAnim
            const blogCards = gsap.utils.toArray<HTMLElement>(".blog-card");
            blogCards.forEach((card) => {
                const image = card.querySelector("img");
                if (image) {
                    gsap.fromTo(image, 
                        { yPercent: -20 },
                        {
                            yPercent: 20,
                            scrollTrigger: {
                                trigger: card,
                                scrub: true,
                                start: "top bottom",
                                end: "bottom top",
                            }
                        }
                    );
                }
            });

            // 5. imageScroll
            const imageScrolls = gsap.utils.toArray<HTMLElement>(".image-scroll");
            imageScrolls.forEach((container) => {
                let data_height = Number(container.getAttribute("data-height")) || 250;
                gsap.set(container, { height: `${data_height}px` });

                const image = container.querySelector("img");
                if (image) {
                    gsap.fromTo(image, 
                        { yPercent: -20 },
                        {
                            yPercent: 20,
                            scrollTrigger: {
                                trigger: container,
                                scrub: true,
                                start: "top bottom",
                                end: "bottom top",
                            }
                        }
                    );
                }
            });

            // 6. playVideoBlockAnim
            const videoBlocks = gsap.utils.toArray<HTMLElement>(".ak-video-block");
            videoBlocks.forEach((block) => {
                const image = block.querySelector(".video-img") || block.querySelector("img");
                if (image) {
                    gsap.fromTo(image, 
                        { yPercent: -20, scale: 1 },
                        {
                            yPercent: 20,
                            scale: 1.2,
                            scrollTrigger: {
                                trigger: block,
                                scrub: true,
                                start: "top bottom",
                                end: "bottom top",
                            }
                        }
                    );
                }
            });

            // 7. sliderTextContext
            const slidingContents = gsap.utils.toArray<HTMLElement>(".slideing-text-content");
            slidingContents.forEach((content) => {
                const texts = content.querySelectorAll(".slideing-text");
                texts.forEach((text, index) => {
                    gsap.fromTo(text,
                        { xPercent: index === 0 ? -10 : 10 },
                        {
                            xPercent: index === 0 ? 10 : -10,
                            scrollTrigger: {
                                trigger: content,
                                scrub: 2,
                                start: "top bottom",
                                end: "bottom top",
                            }
                        }
                    );
                });
            });

            // 8. textAnimation (Words or fallback)
            const textAnimations = gsap.utils.toArray<HTMLElement>(".text-animation");
            textAnimations.forEach((element) => {
                const words = element.querySelectorAll<HTMLElement>(".anim-word");
                const duration = Number(element.getAttribute("data-duration")) || 1.5;
                const delay = Number(element.getAttribute("data-delay")) || 0.15;
                const ease = element.getAttribute("data-ease") || "power2.out";

                if (words.length > 0) {
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
        });

        return () => ctx.revert();
    }, []);
};

export default useGsapAnimations;
