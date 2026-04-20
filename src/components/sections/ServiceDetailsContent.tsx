import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
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
            { "title": "1. What platforms do you develop mobile apps for?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "2. What is the process for developing a mobile app?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "3. What platforms do you use for web development?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "4. How long does it take to build a website?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "5. How can digital marketing help my business?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "6. What digital marketing services do you offer?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." }
        ]
    },
    "serviceDetails": {
        "title": "Android & IOS App Development",
        "shortInfo": [
            { "label": "Services:", "text": "Android App Dev" },
            { "label": "Approximate Time:", "text": "3 Months - 1 Year" },
            { "label": "Industry:", "text": "300+ Industry, We are Working" },
            { "label": "Area We Cover:", "text": "Around Globe" }
        ],
        "description1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description2": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description3": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description4": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description5": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.",
        "description6": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to provide feedback. using 'Content here, content here.",
        "accordion": [
            { "title": "1. What platforms do you develop mobile apps for?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "2. What is the process for developing a mobile app?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "3. What platforms do you use for web development?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "4. How long does it take to build a website?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "5. How can digital marketing help my business?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." },
            { "title": "6. What digital marketing services do you offer?", "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less." }
        ]
    }
};
import { getImagePath } from "@/utils/imageLoader";

interface AccordionItem {
    title: string;
    content: string;
}

interface ServiceDetailsContentProps {
    detailsData?: {
        serviceDetails: {
            title: string;
            shortInfo: { label: string; text: string }[];
            description1: string;
            description2: string;
            description3: string;
            description4: string;
            description5: string;
            description6: string;
            accordion: AccordionItem[];
        };
    };
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
    detailsData = detailsDataDefault,
    disableMainImgAnimation = false,
    enableZoomInAnimation = false,
}) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
    const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

    const accordionData = detailsData.serviceDetails.accordion;

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
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <div className={`services-main-img ${disableMainImgAnimation ? "" : "ak-parallax"}`}>
                    <img src={getImagePath("services/services-main-img.png")} className="img-fluid" alt="Main service illustration showing strategic planning" />
                </div>
            </div>

            <section className="container">
                <div className="services-short-info">
                    <div className="services-short-info-content">
                        {detailsData.serviceDetails.shortInfo.map((info: { label: string; text: string }, idx: number) => (
                            <div className="services-short-info-item" key={idx}>
                                <span className="services-short-info-label">{info.label}</span>
                                <span className="services-short-info-text">{info.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="services-details-title">
                        <h3 className="services-details-title-text text-animation">
                            {detailsData.serviceDetails.title}
                        </h3>
                        <p className="services-details-title-description">
                            {detailsData.serviceDetails.description1}
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            {detailsData.serviceDetails.description2}
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row gy-4">
                            <div className="col-md-4 ak-parallax">
                                <img src={getImagePath("services/services-details-show-1.png")} className="h-100 w-100" alt="Service process step 1 illustration" />
                            </div>
                            <div className="col-md-8 ak-parallax">
                                <img src={getImagePath("services/services-details-show-2.png")} className="h-100 w-100" alt="Service process step 2 illustration" />
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            {detailsData.serviceDetails.description3}
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            {detailsData.serviceDetails.description4}
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-12 d-none d-xl-block">
                                <div className={`image-hov-one ${enableZoomInAnimation ? "ak-hover-zoom-pronounced" : "ak-parallax"}`}>
                                    <img src={getImagePath("services/accordion-1.png")} className="img-fluid" alt="Support and maintenance illustration" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-12">
                                <div className="ak-accordion">
                                    {accordionData.map((item: AccordionItem, index: number) => (
                                        <div className="ak-accordion-item" key={item.title}>
                                            <div
                                                className={`ak-accordion-title-content ${activeAccordion === index ? "active" : ""}`}
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
                            {detailsData.serviceDetails.description5}
                        </p>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <div className="row gy-4">
                             <div className="col-md-8 ak-parallax">
                                <img src={getImagePath("services/services-details-show-2.png")} className="h-100 w-100" alt="Service feature showcase card A" />
                            </div>
                            <div className="col-md-4 ak-parallax">
                                <img src={getImagePath("services/services-details-show-1.png")} className="h-100 w-100" alt="Service feature showcase card B" />
                            </div>
                        </div>
                        <div className="ak-height-50 ak-height-lg-50"></div>
                        <p className="services-details-title-description">
                            {detailsData.serviceDetails.description6}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsContent;

