import React from "react";
const commonData = {
    "funFacts": [
        { "id": "count1", "number": 65, "suffix": "K", "label": "Project Completed" },
        { "id": "count2", "number": 8, "suffix": "K", "label": "Happy Customers" },
        { "id": "count3", "number": 32, "suffix": "+", "label": "Years of Experience" },
        { "id": "count4", "number": 13, "suffix": "", "label": "Award Achievement" }
    ],
    "skills": [
        { "title": "UI/UX Design", "percentage": 95 },
        { "title": "Web Development", "percentage": 80 },
        { "title": "App Development", "percentage": 95 },
        { "title": "CMS Development", "percentage": 98 }
    ],
    "methodology": [
        {
            "id": "01",
            "title": "Technical SEO Development",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
            "hasBgText": true
        },
        {
            "id": "02",
            "title": "Keyword Optimization & Internal Linking",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        },
        {
            "id": "03",
            "title": "Social Media Engagement & Online",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        },
        {
            "id": "04",
            "title": "Content Strategy & Creation",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        }
    ],
    "seoFeatures": [
        { "id": "01", "title": "Discovery & SEO Comprehensive Strategy", "img": "feature-item-bg-1.png" },
        { "id": "02", "title": "Implement Strategy & Improve Site Speed", "img": "feature-item-bg-2.png" },
        { "id": "03", "title": "Continuously Monitor & Provide Reports", "img": "feature-item-bg-3.png" },
        { "id": "04", "title": "Continually Optimize Site Based on Data", "img": "feature-item-bg-4.png" }
    ],
    "aboutContent": {
        "title": "We thrive on <span class=\"highlight ak-black-color\">creativity</span> and <span class=\"highlight\">innovation</span>. Our team is constantly exploring new ideas and approaches to ensure your <span class=\"highlight\">digital presence</span> is fresh, engaging, and ahead of the competition.",
        "btnTextHome": "About More",
        "btnTextAbout": "View Latest Project"
    },
    "newsletter": {
        "title": "Join Our <span class=\"highlight text-underlines\">Newsletter</span> for Latest <span class=\"highlight\">Exclusive</span> Content",
        "placeholder": "Enter your email...",
        "btnText": "Newsletter"
    }
};
import testimonialBg from "@assets/img/shape/testimonial.svg";

const data = commonData.newsletter;

interface NewsletterSectionProps {
    variant?: "style-1" | "style-2" | "style-3";
    titleAnimation?: string;
    underlineReveal?: boolean;
    formDirection?: string;
    formDelay?: string;
    titleDirection?: string;
    titleSplitText?: string;
    titleDuration?: number;
    titleEase?: string;
    disableFormAnimation?: boolean;
    headingVariant?: "default" | "minimal-studio";
}

const NewsletterSection: React.FC<NewsletterSectionProps> = ({ 
    variant = "style-1",
    titleAnimation: propTitleAnimation,
    underlineReveal = false,
    formDirection: propFormDirection,
    formDelay: propFormDelay,
    titleDirection: propTitleDirection,
    titleSplitText,
    titleDuration: propTitleDuration,
    titleEase: propTitleEase,
    disableFormAnimation = false,
    headingVariant = "default"
}) => {
    const isMinimalStudio = headingVariant === "minimal-studio";
    
    const titleAnimation = propTitleAnimation || (isMinimalStudio ? "text-animation" : undefined);
    const titleDirection = propTitleDirection || (isMinimalStudio ? "textLeft" : undefined);
    const titleDuration = propTitleDuration || (isMinimalStudio ? 1.0 : undefined);
    const titleEase = propTitleEase || (isMinimalStudio ? "back.out(1.7)" : undefined);
    const formDirection = propFormDirection || (isMinimalStudio ? "right" : undefined);
    const formDelay = propFormDelay || (isMinimalStudio ? "0.35" : undefined);

    const isStyle3 = variant === "style-3";
    const isStyle2 = variant === "style-2";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Newsletter form submitted!");
    };

    if (isStyle3) {
        return (
            <>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <section className={`container ${underlineReveal ? "newsletter-wapper" : ""}`}>
                    <div className="newsletter-content style-2">
                        <div className={`newsletter-title-content newsletter-anim ${titleAnimation ? "" : "title-anim"}`}>
                            <h2 
                                className={`newsletter-title ${titleAnimation || "anim-line-words"}`}
                                {...(titleAnimation && titleDirection ? { "data-direction": titleDirection } : {})}
                                {...(titleAnimation && titleSplitText ? { "data-split-text": titleSplitText } : {})}
                                {...(titleAnimation && titleDuration ? { "data-duration": titleDuration } : {})}
                                {...(titleAnimation && titleEase ? { "data-ease": titleEase } : {})}
                            >
                                <span dangerouslySetInnerHTML={{ __html: data.title.replace('text-underlines', `text-underlines ${underlineReveal ? "underline-anim" : ""}`) }} />
                            </h2>
                        </div>
                        <form 
                            className={`newsletter-form ${disableFormAnimation ? "" : "fade-animation"}`} 
                            data-direction={formDirection}
                            data-delay={formDelay}
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="email"
                                className="newsletter-input style-2"
                                placeholder="Enter your email..."
                                required
                            />
                            <button type="submit" className="newsletter-btn">
                                <span className="newbtn-text"> Newsletter </span>
                                <span className="primary-icon-anim">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </section>
            </>
        );
    }

    const content = (
        <section className={`ak-center newsletter-wapper ${isStyle2 ? "ms-xxl-3 " : ""}`}>
            <div className="theme-border-wrap cta-form-border hover-animation">
                <div className="b-top-left">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-top-right d-flex">
                    <div className="horizontal"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-bottom-right d-flex flex-end">
                    <div className="horizontal flex-end align-self-end"></div>
                    <div className="verticle"></div>
                </div>
                <div className="b-bottom-left">
                    <div className="verticle"></div>
                    <div className="horizontal"></div>
                </div>

                <div className="container">
                    <div className="newsletter-content">
                        <div className="newsletter-anim title-anim">
                            <h2 className="newsletter-title anim-line-words">
                                <span dangerouslySetInnerHTML={{ __html: data.title }} />
                            </h2>
                        </div>
                        <form className="newsletter-form fade-animation" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="newsletter-input"
                                placeholder="Enter your email..."
                                required
                            />
                            <button type="submit" className="newsletter-btn">
                                <span className="newbtn-text"> Newsletter </span>
                                <span className="primary-icon-anim">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

    if (isStyle2) {
        return (
            <>
                <div className="ak-height-100 ak-height-lg-80"></div>
                <section className="container-xxl overflow-hidden p-0">
                    <div className="ak-gray-bg ak-bg" style={{ backgroundImage: `url(${testimonialBg})` }}>
                        <div className="ak-height-100 ak-height-lg-80"></div>
                        {content}
                        <div className="ak-height-100 ak-height-lg-80"></div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            {content}
        </>
    );
};

export default NewsletterSection;

