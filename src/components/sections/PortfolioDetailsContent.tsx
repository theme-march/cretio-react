import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import pdImg1 from "@assets/img/portfolio/portfolio-details-1.png";
import pdImg2 from "@assets/img/portfolio/portfolio-details-2.png";

const PortfolioDetailsContent: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const imageScrollElements = gsap.utils.toArray<HTMLElement>(".image-scroll");
            imageScrollElements.forEach((element) => {
                const dataHeight = element.getAttribute("data-height");
                if (dataHeight) {
                    element.style.height = `${dataHeight}px`;
                }
                
                const img = element.querySelector("img");
                if (img) {
                    gsap.to(img, {
                        y: () => -(img.offsetHeight - element.offsetHeight),
                        ease: "none",
                        scrollTrigger: {
                            trigger: element,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        },
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const accordionData = [
        { title: "1. What platforms do you develop mobile apps for?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "2. What is the process for developing a mobile app?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "3. What platforms do you use for web development?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "4. How long does it take to build a website?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "5. How can digital marketing help my business?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "6. What digital marketing services do you offer?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
    ];

    return (
        <div className="container portfolio-details-container">
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="portfolio-details-box">
                <h3 className="pd-title mb-2">Android App Development</h3>
                <p className="pd-desp">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here.
                </p>
                <div className="pd-img image-scroll" data-height="350">
                    <img src={pdImg1} alt="..." />
                </div>
                <p className="pd-desp">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here.
                </p>
                <div className="p-md-5">
                    <div className="ak-accordion">
                        {accordionData.map((item, index) => (
                            <div className="ak-accordion-item" key={index}>
                                <div
                                    className={`ak-accordion-title-content ${activeAccordion === index ? "active" : ""}`}
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h6 className="ak-accordion-title">{item.title}</h6>
                                    <span className="accordion-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                                            <path d="M8.00033 1.10913L0.862366 7.9711C0.601868 8.23159 0.601868 8.65342 0.862366 8.91376C1.12286 9.17409 1.5447 9.17426 1.80503 8.91376L8.00033 2.71846L14.1956 8.91376C14.4561 9.17426 14.878 9.17426 15.1383 8.91376C15.3986 8.65326 15.3988 8.23143 15.1383 7.9711L8.47166 1.30446" fill="#030917" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="ak-accordion-tab" style={{ display: activeAccordion === index ? "block" : "none" }}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pd-img image-scroll" data-height="400">
                    <img src={pdImg2} alt="..." />
                </div>
                <p className="pd-desp">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here.
                </p>
            </div>
        </div>
    );
};

export default PortfolioDetailsContent;
