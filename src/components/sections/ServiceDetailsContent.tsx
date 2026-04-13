import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import mainImg from "@assets/img/services/services-main-img.png";
import show1 from "@assets/img/services/services-details-show-1.png";
import show2 from "@assets/img/services/services-details-show-2.png";
import accordionImg from "@assets/img/services/accordion-1.png";

interface ServiceDetailsContentProps {
    disableMainImgAnimation?: boolean;
    enableZoomInAnimation?: boolean;
}

const AccordionSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
        <g clipPath="url(#clip0_347_acc)">
            <path
                d="M8.00033 1.10913C7.82983 1.10913 7.65916 1.1743 7.529 1.30446L0.862366 7.9711C0.601868 8.23159 0.601868 8.65342 0.862366 8.91376C1.12286 9.17409 1.5447 9.17426 1.80503 8.91376L8.00033 2.71846L14.1956 8.91376C14.4561 9.17426 14.878 9.17426 15.1383 8.91376C15.3986 8.65326 15.3988 8.23143 15.1383 7.9711L8.47166 1.30446C8.34149 1.1743 8.17083 1.10913 8.00033 1.10913Z"
                fill="#030917"
            />
        </g>
        <defs>
            <clipPath id="clip0_347_acc">
                <rect width="16" height="10" fill="white" transform="translate(0.000488281 0.109131)" />
            </clipPath>
        </defs>
    </svg>
);

const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({
    disableMainImgAnimation = false,
    enableZoomInAnimation = false,
}) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
    const titleRefs = useRef<(HTMLDivElement | null)[]>([]);

    const accordionData = [
        { title: "1. What platforms do you develop mobile apps for?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "2. What is the process for developing a mobile app?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "3. What platforms do you use for web development?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "4. How long does it take to build a website?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "5. How can digital marketing help my business?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "6. What digital marketing services do you offer?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
    ];

    // Override CSS display:none — GSAP needs the element visible to animate
    useLayoutEffect(() => {
        tabRefs.current.forEach((tab, index) => {
            if (!tab) return;
            if (index === 0) {
                gsap.set(tab, { height: "auto", opacity: 1, overflow: "hidden" });
            } else {
                gsap.set(tab, { height: 0, opacity: 0, overflow: "hidden" });
            }
        });
    }, []);

    const handleAccordionClick = (index: number) => {
        const isClosing = index === activeAccordion;

        // Close currently open panel
        if (activeAccordion !== null && tabRefs.current[activeAccordion]) {
            const closingTab = tabRefs.current[activeAccordion];
            gsap.killTweensOf(closingTab);
            const renderedHeight = closingTab.offsetHeight;
            gsap.fromTo(closingTab,
                { height: renderedHeight, opacity: 1 },
                {
                    height: 0,
                    opacity: 0,
                    duration: 0.35,
                    ease: "power2.inOut",
                }
            );

            // Animate title sliding down
            const closingTitle = titleRefs.current[activeAccordion];
            if (closingTitle) {
                gsap.killTweensOf(closingTitle);
                gsap.to(closingTitle, { y: 8, duration: 0.35, ease: "power2.inOut" });
            }
        }

        if (isClosing) {
            setActiveAccordion(null);
            return;
        }

        // Open new panel
        setActiveAccordion(index);
        const newTab = tabRefs.current[index];
        if (newTab) {
            gsap.killTweensOf(newTab);
            gsap.fromTo(newTab,
                { height: 0, opacity: 0 },
                {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                }
            );
        }

        // Animate title sliding up
        const openingTitle = titleRefs.current[index];
        if (openingTitle) {
            gsap.killTweensOf(openingTitle);
            gsap.fromTo(openingTitle, { y: 8 }, { y: 0, duration: 0.4, ease: "power2.out" });
        }
    };

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <div className={`services-main-img ${disableMainImgAnimation ? "" : "ak-parallax"}`}>
                    <img src={mainImg} className="img-fluid" alt="..." />
                </div>
            </div>

            <section className="container">
                <div className="services-short-info">
                    <div className="services-short-info-content">
                        <div className="services-short-info-item">
                            <span className="services-short-info-label">Services:</span>
                            <span className="services-short-info-text">Android App Dev</span>
                        </div>
                        <div className="services-short-info-item">
                            <span className="services-short-info-label">Approximate Time:</span>
                            <span className="services-short-info-text"> 3 Months - 1 Year</span>
                        </div>
                        <div className="services-short-info-item">
                            <span className="services-short-info-label">Industry:</span>
                            <span className="services-short-info-text">300+ Industry, We are Working</span>
                        </div>
                        <div className="services-short-info-item">
                            <span className="services-short-info-label">Area We Cover: </span>
                            <span className="services-short-info-text">Around Globe</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="services-details-title">
                        <h3 className="services-details-title-text text-animation">
                            Android & IOS App Development
                        </h3>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row gy-4">
                            <div className="col-md-4 ak-parallax">
                                <img src={show1} className="h-100 w-100" alt="..." />
                            </div>
                            <div className="col-md-8 ak-parallax">
                                <img src={show2} className="h-100 w-100" alt="..." />
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row align-items-start">
                            <div className="col-xl-6 col-12 d-none d-xl-block">
                                <div className={`image-hov-one ${enableZoomInAnimation ? "ak-hover-zoom-pronounced" : "ak-parallax"}`}>
                                    <img src={accordionImg} className="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="ak-accordion">
                                    {accordionData.map((item, index) => (
                                        <div className="ak-accordion-item" key={index}>
                                            <div
                                                className={`ak-accordion-title-content ${activeAccordion === index ? "active" : ""}`}
                                                ref={(el) => { titleRefs.current[index] = el; }}
                                                onClick={() => handleAccordionClick(index)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <h6 className="ak-accordion-title">{item.title}</h6>
                                                <span className="accordion-icon">
                                                    <AccordionSVG />
                                                </span>
                                            </div>
                                            <div
                                                ref={(el) => { tabRefs.current[index] = el; }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <div className="ak-accordion-tab" style={{ display: "block" }}>
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row gy-4">
                            <div className="col-md-8 ak-parallax">
                                <img src={show2} className="h-100 w-100" alt="..." />
                            </div>
                            <div className="col-md-4 ak-parallax">
                                <img src={show1} className="h-100 w-100" alt="..." />
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsContent;

