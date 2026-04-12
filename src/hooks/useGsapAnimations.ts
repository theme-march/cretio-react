import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { splitText } from "../utils/textSplitter";
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
                    case "none": break; // pure opacity fade, no movement
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

            // 4. Parallax Animations explicitly matched to HTML template
            const parallaxBgContainers = gsap.utils.toArray<HTMLElement>(".ak-parallax");
            parallaxBgContainers.forEach((element) => {
                let img = element.querySelector("img") || element;
                gsap.set(element, { overflow: 'hidden' });
                gsap.fromTo(img, 
                    { yPercent: -20 },
                    { yPercent: 20, ease: 'none', scrollTrigger: { trigger: element, scrub: true, start: "top bottom", end: "bottom top" } }
                );
            });

            const teamNameParallax = gsap.utils.toArray<HTMLElement>(".team-name-parallax");
            teamNameParallax.forEach((element) => {
                let y_start = Number(element.getAttribute("data-parallax-y-start")) || 0;
                let y_end = Number(element.getAttribute("data-parallax-y-end")) || -30;
                gsap.fromTo(element, 
                    { y: y_start },
                    { 
                        y: y_end, 
                        ease: 'none', 
                        scrollTrigger: { 
                            trigger: element, 
                            scrub: true, 
                            start: "top bottom", 
                            end: "bottom top" 
                        } 
                    }
                );
            });

            const blogCards = gsap.utils.toArray<HTMLElement>(".blog-card");
            blogCards.forEach((element) => {
                let img = element.querySelector("img");
                if (img) {
                    gsap.fromTo(img, 
                        { yPercent: -20, ease: 'none' },
                        { yPercent: 20, ease: "power2.out", scrollTrigger: { trigger: element, scrub: true, start: "top bottom", end: "bottom top" } }
                    );
                }
            });

            const scrollImages = gsap.utils.toArray<HTMLElement>(".image-scroll");
            scrollImages.forEach((element) => {
                let data_height = Number(element.getAttribute("data-height")) || 250;
                gsap.set(element, { height: `${data_height}px` });
                let img = element.querySelector("img");
                if (img) {
                    gsap.fromTo(img, 
                        { yPercent: -20, ease: 'none' },
                        { yPercent: 20, ease: "power2.out", scrollTrigger: { trigger: element, scrub: true, start: "top bottom", end: "bottom top" } }
                    );
                }
            });

            const videoBlocks = gsap.utils.toArray<HTMLElement>(".ak-video-block");
            videoBlocks.forEach((element) => {
                let img = element.querySelector(".video-img");
                if (img) {
                    gsap.fromTo(img, 
                        { yPercent: -20, scale: 1, ease: 'none' },
                        { yPercent: 20, scale: 1.2, ease: 'none', scrollTrigger: { trigger: element, scrub: true, start: "top bottom", end: "bottom top" } }
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

            // 8. anim-title-2
            const titleAnim2Containers = gsap.utils.toArray<HTMLElement>(".title-animation-content");
            titleAnim2Containers.forEach((container) => {
                const divs = container.querySelectorAll(".anim-title-2 div");
                if (divs.length > 0) {
                    gsap.from(divs, {
                        scrollTrigger: { trigger: container, start: "top 85%" },
                        duration: 0.75,
                        y: 40,
                        opacity: 0,
                        ease: "power2.out",
                        transformOrigin: "top center -50",
                        delay: 0.15,
                        rotationX: -80,
                        stagger: 0.02,
                    });
                }
            });

            // 9. text-color-shiption
            const textColorShiptions = gsap.utils.toArray<HTMLElement>(".text-color-shiption");
            textColorShiptions.forEach((elem) => {
                const colorText = elem.getAttribute("data-color");
                const splitRes = splitText(elem, "chars, words");
                const isDark = document.body.classList.contains("dark");
                
                gsap.set(splitRes.chars, { color: isDark ? "#656565" : "#c1c1c1" });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        end: "bottom center",
                        scrub: true,
                    }
                });
                tl.to(splitRes.chars, {
                    color: "var(--black-color)",
                    stagger: 0.2,
                    ease: "power2.out",
                    duration: 1.2,
                });

                if (colorText && colorText !== "0" && colorText !== "") {
                    tl.to(splitRes.chars, {
                        color: colorText,
                        stagger: 0.2,
                        ease: "power2.out",
                        duration: 1.5,
                    }, "2");
                }
            });

            // 10. textAnimation (Words or fallback)
            const textAnimations = gsap.utils.toArray<HTMLElement>(".text-animation");
            textAnimations.forEach((element) => {
                let split_text = element.getAttribute("data-split-text") || "chars";
                let fade_direction = element.getAttribute("data-direction") || "textLeft";
                let ease_value = element.getAttribute("data-ease") || "back.out(1.7)";
                let fade_offset = Number(element.getAttribute("data-offset")) || 50;
                let duration_value = Number(element.getAttribute("data-duration")) || 1;
                let delay_value = Number(element.getAttribute("data-delay")) || 0.15;
                let stagger = Number(element.getAttribute("data-stagger")) || 0.02;

                const splitRes = splitText(element, split_text);
                
                gsap.set(element, { perspective: 400 });

                let elementsToAnimate: HTMLElement[] = splitRes.chars;
                if (split_text === "chars") elementsToAnimate = splitRes.chars;
                else if (split_text === "words") elementsToAnimate = splitRes.words;
                else if (split_text === "lines") elementsToAnimate = splitRes.lines.length ? splitRes.lines : splitRes.words;
                
                if (elementsToAnimate.length === 0) {
                    elementsToAnimate = [element];
                }

                if (fade_direction === "textTop" || fade_direction === "textBottom") {
                    gsap.set(splitRes.words, { overflow: "hidden" });
                }

                const animationProps: gsap.TweenVars = {
                    opacity: 0,
                    duration: duration_value,
                    delay: delay_value,
                    ease: ease_value,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        onEnter: () => {
                            element.querySelectorAll(".underline-anim").forEach((line) => {
                                line.classList.add("active");
                            });
                        }
                    }
                };

                switch (fade_direction) {
                    case "textLeft": animationProps.x = fade_offset; break;
                    case "textRight": animationProps.x = -fade_offset; break;
                    case "textTop": animationProps.y = fade_offset; break;
                    case "textBottom": animationProps.y = -fade_offset; break;
                    case "textRotate":
                        animationProps.rotationX = fade_offset > 0 ? fade_offset : 65;
                        animationProps.y = 60;
                        animationProps.transformOrigin = "50% 50% -80px";
                        break;
                    case "rotationX":
                        animationProps.rotationX = fade_offset > 0 ? fade_offset : 65;
                        animationProps.y = 60;
                        animationProps.transformOrigin = "50% 50% 80px";
                        break;
                }

                gsap.from(elementsToAnimate, animationProps);
            });

            // 11. titleAnimation (anim-line-words)
            const titleAnims = gsap.utils.toArray<HTMLElement>(".title-anim");
            titleAnims.forEach((title) => {
                const delay_value = Number(title.getAttribute("data-delay")) || 0;
                const duration_value = Number(title.getAttribute("data-duration")) || 1;
                const wordsTargets = title.querySelectorAll(".anim-line-words");

                const anim = gsap.timeline({
                    delay: delay_value,
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    onComplete: () => {
                        const newsletterWrapper = document.querySelectorAll(".newsletter-wapper");
                        newsletterWrapper.forEach((wrapper) => {
                            wrapper.classList.add("active");
                        });
                    }
                });

                wordsTargets.forEach((wordElement, wordIndex) => {
                    const word = wordElement as HTMLElement;
                    const splitRes = splitText(word, "chars,words");
                    
                    gsap.set(splitRes.words, {
                        position: "relative",
                        overflow: "hidden"
                    });

                    const wordDelay = wordIndex * 0.15;

                    splitRes.chars.forEach((char, charIndex) => {
                        anim.fromTo(
                            char,
                            { yPercent: 100 },
                            {
                                yPercent: 0,
                                duration: duration_value,
                                ease: "power2.inOut",
                            },
                            charIndex * 0.02 + wordDelay
                        );
                    });
                });
            });



            // 13. Contact Stroke Title Animation
            const contactStrokeTitles = gsap.utils.toArray<HTMLElement>(".contact-title-stroke");
            contactStrokeTitles.forEach((title) => {
                gsap.set(title, { perspective: 600 });

                const splitRes = splitText(title, "chars,words,lines");
                const targets = splitRes.lines.length ? splitRes.lines : [title];

                gsap.fromTo(targets, 
                    {
                        y: 60,
                        rotationY: 65,
                        opacity: 0,
                        transformOrigin: "50% 50% 80px"
                    },
                    {
                        y: 0,
                        rotationY: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power4.out",
                        transformOrigin: "50% 50% 0px",
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: title,
                            start: "top bottom",
                            scrub: false,
                        }
                    }
                );
            });
        });

        // Add a small delay for DOM calculations then refresh
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ctx.revert();
            clearTimeout(timer);
        };
    }, []);
};

export default useGsapAnimations;
