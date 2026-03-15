import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<SVGTextElement>(null);
    const percentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current || !percentRef.current || !preloaderRef.current) return;

        const text = textRef.current;
        const preloader = preloaderRef.current;
        const loadingPercent = percentRef.current;

        const startAnimation = () => {
            const length = text.getComputedTextLength() || 2000;
            text.style.strokeDasharray = length.toString();
            text.style.strokeDashoffset = length.toString();

            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(preloader, {
                        duration: 0.5,
                        ease: "power4.inOut",
                        opacity: 0,
                        onComplete: () => {
                            setIsLoaded(true);
                        },
                    });
                },
            });

            // Animate stroke draw AND opacity together — matches original initPreloader()
            gsap.to(text, {
                strokeDashoffset: 0,
                duration: 3,
                delay: 0.2,
                opacity: 1,
                ease: "power4.inOut",
            });

            // Counter animation using roundProps to match original jQuery template
            tl.to(
                loadingPercent,
                {
                    innerText: 100,
                    duration: 2.5,
                    ease: "power4.inOut",
                    roundProps: "innerText",
                    onUpdate: function () {
                        loadingPercent.innerText =
                            Math.floor(Number(loadingPercent.innerText)) + "%";
                    },
                },
                0
            );
        };

        if (typeof (document as any).fonts !== "undefined") {
            (document as any).fonts.ready.then(() => {
                setTimeout(startAnimation, 100);
            });
        } else {
            setTimeout(startAnimation, 500);
        }
    }, []);

    if (isLoaded) return null;

    return (
        <div id="preloader" ref={preloaderRef} className="preloader">
            <div className="txt-loading">
                <div className="preloader-text">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 250"
                        className="preloader-text-svg"
                    >
                        <text
                            ref={textRef}
                            className="svg-text"
                            id="svgText"
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            cretio
                        </text>
                    </svg>
                </div>
                <div className="loading-percent" ref={percentRef}>0%</div>
            </div>
        </div>
    );
};

export default Preloader;
