import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { getImagePath } from "../../utils/imageLoader";

interface PortfolioDetailsItem {
    id: number;
    title: string;
    content: string;
}

const detailsDataDefault = {
    "portfolioDetails": {
        "title": "Android App Development",
        "description1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description2": "Making it look like readable web 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) web page editors now.",
        "description3": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description4": "Making it look like readable web 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) web page editors now.",
        "description5": "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable web page editors nowEnglish. Many desktop publishing packages and web page editors now use.",
        "description6": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable web page editors nowEnglish. Many desktop publishing packages and web page editors now use.",
        "accordion": [
            { "id": 1, "title": "1. What platforms do you develop mobile apps for?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "id": 2, "title": "2. What is the process for developing a mobile app?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "id": 3, "title": "3. What platforms do you use for web development?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "id": 4, "title": "4. How long does it take to build a website?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "id": 5, "title": "5. How can digital marketing help my business?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "id": 6, "title": "6. What digital marketing services do you offer?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." }
        ]
    }
};

interface PortfolioDetailsProps {
    detailsData?: {
        portfolioDetails: {
            title: string;
            description1: string;
            description2: string;
            description3: string;
            description4: string;
            description5: string;
            description6: string;
            accordion: PortfolioDetailsItem[];
        };
    };
}

const PortfolioDetailsContent: React.FC<PortfolioDetailsProps> = ({ detailsData = detailsDataDefault }) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const pdParallaxElements = gsap.utils.toArray<HTMLElement>(".pd-img-parallax");
            pdParallaxElements.forEach((element) => {
                const dataHeight = element.getAttribute("data-height");
                if (dataHeight) {
                    element.style.height = `${dataHeight}px`;
                }
                gsap.set(element, { overflow: "hidden" });

                const img = element.querySelector("img");
                if (img) {
                    gsap.fromTo(
                        img,
                        { yPercent: -20 },
                        {
                            yPercent: 20,
                            ease: "none",
                            scrollTrigger: {
                                trigger: element,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: 1,
                            },
                        }
                    );
                }
            });

            tabRefs.current.forEach((tab, index) => {
                if (!tab) return;
                if (index === 0) {
                    gsap.set(tab, { height: "auto", opacity: 1, overflow: "hidden" });
                } else {
                    gsap.set(tab, { height: 0, opacity: 0, overflow: "hidden" });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleAccordionClick = (index: number) => {
        const isClosing = index === activeAccordion;

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
        }

        if (isClosing) {
            setActiveAccordion(null);
            return;
        }

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
    };


    return (
        <div className="container portfolio-details-container" ref={sectionRef}>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="portfolio-details-box">
                <h3 className="pd-title mb-2">{detailsData.portfolioDetails.title}</h3>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description1}
                </p>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description2}
                </p>

                <div className="pd-img pd-img-parallax" data-height="350">
                    <img src={getImagePath("portfolio/portfolio-details-1.png")} alt="Portfolio project showcase image 1" />
                </div>
                <div>
                    <p className="pd-desp">
                        {detailsData.portfolioDetails.description3}
                    </p>
                </div>

                <p className="pd-desp">
                    Making it look like readable web 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved over the
                    years, sometimes by accident, sometimes on purpose (injected humour
                    and the like) web page editors now.
                </p>
                <div className="p-md-5">
                    <div className="ak-accordion">
                        {detailsData.portfolioDetails.accordion.map((item: PortfolioDetailsItem, index: number) => (
                            <div className="ak-accordion-item" key={index}>
                                <div
                                    className={`ak-accordion-title-content ${activeAccordion === index ? "active" : ""}`}
                                    onClick={() => handleAccordionClick(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h6 className="ak-accordion-title">{item.title}</h6>
                                    <span className="accordion-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                            <path d="M8.00033 1.10913L0.862366 7.9711C0.601868 8.23159 0.601868 8.65342 0.862366 8.91376C1.12286 9.17409 1.5447 9.17426 1.80503 8.91376L8.00033 2.71846L14.1956 8.91376C14.4561 9.17426 14.878 9.17426 15.1383 8.91376C15.3986 8.65326 15.3988 8.23143 15.1383 7.9711L8.47166 1.30446" fill="#030917" />
                                        </svg>
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
                <p className="pd-desp pd-desp-mobile-fix">
                    {detailsData.portfolioDetails.description5}
                </p>
                <div className="pd-img pd-img-parallax" data-height="400">
                    <img src={getImagePath("portfolio/portfolio-details-2.png")} alt="Portfolio project showcase image 2" />
                </div>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description6}
                </p>
            </div>
        </div>
    );
};

export default PortfolioDetailsContent;
