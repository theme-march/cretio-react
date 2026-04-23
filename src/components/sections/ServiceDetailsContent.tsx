import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
const detailsDataDefault = {
    "portfolioDetails": {
        "title": "Android App Development",
        "description1": "We specialize in creating high-performance Android applications that leverage the latest platform features and design standards. Our development process ensures that your app is not only functional but also provides a superior user experience across all devices.",
        "description2": "Our team of expert developers works closely with you to transform your vision into a robust digital product. From conceptualization to deployment, we maintain a focus on scalability and performance, ensuring your application can grow alongside your business.",
        "description3": "The digital landscape is constantly evolving, and staying ahead requires a partner who understands the nuances of mobile technology. We provide comprehensive support and maintenance to ensure your app remains secure and optimized for the best possible user engagement.",
        "description4": "By integrating advanced analytics and user feedback loops, we continuously refine the mobile experience. This data-driven approach allows us to make informed decisions that improve retention rates and drive meaningful business outcomes for our clients.",
        "description5": "Security and privacy are at the core of our development philosophy. We implement industry-leading encryption and best practices to protect user data, giving your customers peace of mind while they interact with your brand's digital ecosystem.",
        "description6": "A successful app is more than just code; it's a bridge between your brand and your audience. We focus on creating intuitive interfaces and smooth transitions that make every interaction feel natural and rewarding for the end-user.",
        "accordion": [
            { "title": "1. What platforms do you develop mobile apps for?", "content": "We develop native and cross-platform applications for both iOS and Android, ensuring your brand reaches the widest possible audience with a consistent experience." },
            { "title": "2. What is the process for developing a mobile app?", "content": "Our process involves discovery, wireframing, UI/UX design, development, rigorous testing, and finally deployment followed by ongoing support and optimization." },
            { "title": "3. What platforms do you use for web development?", "content": "We utilize modern frameworks like React, Next.js, and robust back-end technologies to build scalable web applications that meet complex business requirements." },
            { "title": "4. How long does it take to build a website?", "content": "Timeline varies based on complexity, but a standard corporate website typically takes 4-8 weeks from initial design to final launch." },
            { "title": "5. How can digital marketing help my business?", "content": "Digital marketing increases your online visibility, drives targeted traffic, and improves conversion rates through data-backed strategies and creative content." },
            { "title": "6. What digital marketing services do you offer?", "content": "We offer a full range of services including SEO, content marketing, social media management, and pay-per-click advertising to boost your brand's presence." }
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
        "description1": "In today's mobile-first world, having a presence on both Android and iOS is crucial for business success. We build seamless mobile experiences that bridge the gap between platforms while maintaining the native feel that users expect from high-quality applications.",
        "description2": "Our cross-platform solutions allow you to reach a broader audience with lower development costs and faster time-to-market. We use cutting-edge frameworks like Flutter and React Native to deliver apps that perform as well as native applications.",
        "description3": "We believe that a great app starts with a deep understanding of the user. Our design team conducts extensive research to ensure that every button placement and user flow is optimized for maximum efficiency and aesthetic appeal.",
        "description4": "Beyond the initial launch, we provide ongoing maintenance and performance monitoring. This ensures your app stays compatible with the latest OS updates and continues to deliver a fast, reliable experience for your growing user base.",
        "description5": "Integrations are a key part of modern apps. Whether it's payment gateways, social media sharing, or sophisticated cloud-based features, we have the technical expertise to connect your app with the services it needs to thrive.",
        "description6": "Our commitment to quality is reflected in our rigorous testing phase. We perform extensive QA across multiple devices and screen sizes to ensure your application is bug-free and ready for the global stage.",
        "accordion": [
            { "title": "1. What platforms do you develop mobile apps for?", "content": "We specialize in both native Android/iOS development and cross-platform solutions like React Native and Flutter to suit different business needs and budgets." },
            { "title": "2. What is the process for developing a mobile app?", "content": "Phase one is discovery and strategy, followed by UI/UX design, iterative development sprints, comprehensive testing, and finally the App Store and Play Store launch." },
            { "title": "3. What platforms do you use for web development?", "content": "Our stack primarily includes React for the front-end, complemented by secure Node.js or Python back-ends, ensuring a modern and high-performance web presence." },
            { "title": "4. How long does it take to build a website?", "content": "A custom web application can take anywhere from 8 to 16 weeks, depending on the depth of features and integration requirements." },
            { "title": "5. How can digital marketing help my business?", "content": "It allows you to target specific demographics precisely, measure your ROI in real-time, and build a lasting relationship with your customers through digital channels." },
            { "title": "6. What digital marketing services do you offer?", "content": "Our team provides comprehensive SEO audits, targeted ad campaigns, and engaging social media strategies designed to elevate your brand's voice and reach." }
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

