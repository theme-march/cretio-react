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
        "description": [
            "We specialize in creating high-performance Android applications that leverage the latest platform features and design standards. Our development process ensures that your app is not only functional but also provides a superior user experience across all devices.",
            "Our team of expert developers works closely with you to transform your vision into a robust digital product. From conceptualization to deployment, we maintain a focus on scalability and performance, ensuring your application can grow alongside your business.",
            "The digital landscape is constantly evolving, and staying ahead requires a partner who understands the nuances of mobile technology. We provide comprehensive support and maintenance to ensure your app remains secure and optimized for the best possible user engagement.",
            "By integrating advanced analytics and user feedback loops, we continuously refine the mobile experience. This data-driven approach allows us to make informed decisions that improve retention rates and drive meaningful business outcomes for our clients.",
            "Security and privacy are at the core of our development philosophy. We implement industry-leading encryption and best practices to protect user data, giving your customers peace of mind while they interact with your brand's digital ecosystem.",
            "A successful app is more than just code; it's a bridge between your brand and your audience. We focus on creating intuitive interfaces and smooth transitions that make every interaction feel natural and rewarding for the end-user.",
            "Our creative approach ensures that every pixel serves a purpose, creating a harmonious balance between brand storytelling and technical performance. We use the latest industry standards to build applications that are as beautiful as they are functional."
        ],
        "images": {
            "showcase1": "portfolio/portfolio-details-1.png",
            "showcase2": "portfolio/portfolio-details-2.png"
        },
        "accordion": [
            { "id": 1, "title": "1. What platforms do you develop mobile apps for?", "content": "We develop native and cross-platform applications for both iOS and Android, ensuring your brand reaches the widest possible audience with a consistent experience." },
            { "id": 2, "title": "2. What is the process for developing a mobile app?", "content": "Our process involves discovery, wireframing, UI/UX design, development, rigorous testing, and finally deployment followed by ongoing support and optimization." },
            { "id": 3, "title": "3. What platforms do you use for web development?", "content": "We utilize modern frameworks like React, Next.js, and robust back-end technologies to build scalable web applications that meet complex business requirements." },
            { "id": 4, "title": "4. How long does it take to build a website?", "content": "Timeline varies based on complexity, but a standard corporate website typically takes 4-8 weeks from initial design to final launch." },
            { "id": 5, "title": "5. How can digital marketing help my business?", "content": "Digital marketing increases your online visibility, drives targeted traffic, and improves conversion rates through data-backed strategies and creative content." },
            { "id": 6, "title": "6. What digital marketing services do you offer?", "content": "We offer a full range of services including SEO, content marketing, social media management, and pay-per-click advertising to boost your brand's presence." }
        ]
    }
};

interface PortfolioDetailsProps {
    detailsData?: {
        portfolioDetails: {
            title: string;
            description: string[];
            images: {
                showcase1: string;
                showcase2: string;
            };
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
                    {detailsData.portfolioDetails.description[0]}
                </p>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description[1]}
                </p>
                <div className="pd-img pd-img-parallax" data-height="350">
                    <img src={getImagePath(detailsData.portfolioDetails.images.showcase1)} alt="Portfolio project showcase" />
                </div>
                <div>
                    <p className="pd-desp">
                        {detailsData.portfolioDetails.description[2]}
                    </p>
                </div>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description[6]}
                </p>
                <div className="p-md-5">
                    <div className="ak-accordion">
                        {detailsData.portfolioDetails.accordion.map((item: PortfolioDetailsItem, index: number) => (
                            <div className="ak-accordion-item" key={item.id}>
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
                    {detailsData.portfolioDetails.description[4]}
                </p>
                <div className="pd-img pd-img-parallax" data-height="400">
                    <img src={getImagePath(detailsData.portfolioDetails.images.showcase2)} alt="Portfolio project showcase" />
                </div>
                <p className="pd-desp">
                    {detailsData.portfolioDetails.description[5]}
                </p>
            </div>
        </div>
    );
};

export default PortfolioDetailsContent;
