import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
import star2 from "@assets/img/shape/star-2.png";
import line2 from "@assets/img/shape/line-2.png";

const data = commonData.aboutContent;

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".star-1", {
                scrollTrigger: {
                    trigger: ".star-content",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                rotation: 360,
                ease: "none",
            });
            gsap.to(".star-2", {
                scrollTrigger: {
                    trigger: ".star-content",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                rotation: -360,
                ease: "none",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="ak-height-95 ak-height-lg-80"></div>
            <section className="about-content container" ref={sectionRef}>
                <div className="star-content">
                    <img src={star2} alt="star" className="star-1" />
                    <img src={star2} alt="star" className="star-2" />
                </div>
                <div className="about-info">
                    <h3 className="about-title text-color-shiption" dangerouslySetInnerHTML={{ __html: data.title }} />
                    <div className="fade-animation">
                        <Link to="/about" className="more-btn">
                            <span className="morebtn-text">{data.btnTextHome}</span>
                            <span className="primary-icon-anim">
                                <i className="flaticon-up-right-arrow"></i>
                                <i className="flaticon-up-right-arrow"></i>
                            </span>
                        </Link>
                    </div>

                    <img
                        src={line2}
                        alt="swirl design"
                        className="swirl"
                    />
                </div>
            </section>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default AboutSection;
