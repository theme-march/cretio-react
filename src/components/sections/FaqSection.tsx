import React, { useState } from "react";
import faqBg from "@assets/img/bg/faq-bg.png";

const faqData = [
    {
        id: 1,
        question: "1. What platforms do you develop mobile apps for?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        id: 2,
        question: "2. What is the process for developing a mobile app?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        id: 3,
        question: "3. What platforms do you use for web development?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        id: 4,
        question: "4. How long does it take to build a website?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        id: 5,
        question: "5. How can digital marketing help my business?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
    {
        id: 6,
        question: "6. What digital marketing services do you offer?",
        answer:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
    },
];

const FaqSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);

    const toggleAccordion = (id: number) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="container-fluid px-md-0">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="faq-wapper">
                <div className="faq-img-content">
                    <div className="image-hov-one">
                        <img src={faqBg} alt="..." />
                    </div>
                </div>
                <div className="faq-accordion">
                    <div className="ak-accordion">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className={`ak-accordion-item ${activeIndex === item.id ? "active" : ""}`}
                            >
                                <div
                                    className={`ak-accordion-title-content ${activeIndex === item.id ? "active" : ""}`}
                                    onClick={() => toggleAccordion(item.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h6 className="ak-accordion-title">{item.question}</h6>
                                    <span className="accordion-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="11"
                                            viewBox="0 0 16 11"
                                            fill="none"
                                        >
                                            <path
                                                d="M8.00033 1.10913C7.82983 1.10913 7.65916 1.1743 7.529 1.30446L0.862366 7.9711C0.601868 8.23159 0.601868 8.65342 0.862366 8.91376C1.12286 9.17409 1.5447 9.17426 1.80503 8.91376L8.00033 2.71846L14.1956 8.91376C14.4561 9.17426 14.878 9.17426 15.1383 8.91376C15.3986 8.65326 15.3988 8.23143 15.1383 7.9711L8.47166 1.30446C8.34149 1.1743 8.17083 1.10913 8.00033 1.10913Z"
                                                fill="#030917"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                                {activeIndex === item.id && (
                                    <div className="ak-accordion-tab">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
