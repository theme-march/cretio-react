import React, { useState } from "react";
import mainImg from "@assets/img/services/services-main-img.png";
import show1 from "@assets/img/services/services-details-show-1.png";
import show2 from "@assets/img/services/services-details-show-2.png";
import accordionImg from "@assets/img/services/accordion-1.png";

const ServiceDetailsContent: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    const accordionData = [
        { title: "1. What platforms do you develop mobile apps for?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "2. What is the process for developing a mobile app?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "3. What platforms do you use for web development?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "4. How long does it take to build a website?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "5. How can digital marketing help my business?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
        { title: "6. What digital marketing services do you offer?", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
    ];

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <div className="services-main-img">
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
                            <span className="anim-word">Android & IOS App Development</span>
                        </h3>
                        <p className="services-details-title-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row">
                            <div className="col-md-4 ak-parallax">
                                <img src={show1} className="h-100 w-100" alt="..." />
                            </div>
                            <div className="col-md-8 ak-parallax">
                                <img src={show2} className="h-100 w-100" alt="..." />
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-12 d-none d-xl-block">
                                <div className="image-hov-one">
                                    <img src={accordionImg} className="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
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
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row">
                            <div className="col-md-8 ak-parallax">
                                <img src={show2} className="h-100 w-100" alt="..." />
                            </div>
                            <div className="col-md-4 ak-parallax">
                                <img src={show1} className="h-100 w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsContent;
