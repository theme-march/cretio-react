import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
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

const methodologyData = commonData.methodology;

const MethodologySection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1200px)": function () {
                    const pbmitpanels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
                    if (pbmitpanels.length === 0 || !wrapperRef.current) return;

                    const spacer = 0;
                    let pbmitheight = pbmitpanels[0].offsetHeight + 125;

                    pbmitpanels.forEach((pbmitpanel, i) => {
                        gsap.set(pbmitpanel, { left: `${i * 25}%` });
                        ScrollTrigger.create({
                            trigger: pbmitpanel,
                            start: () => "top 125px",
                            endTrigger: wrapperRef.current,
                            end: `bottom top+=${pbmitheight + pbmitpanels.length * spacer}`,
                            pin: true,
                            pinSpacing: false,
                        });
                    });
                },
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="methodology-wrapper">
                <div className="container-fluid">
                    <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-1 g-4 flex-row flex-xl-column">
                        {methodologyData.map((item, index) => (
                            <div 
                                className="col" 
                                key={item.id} 
                                ref={(el) => { panelsRef.current[index] = el; }}
                            >
                                <div className="methodology-card">
                                    {item.hasBgText && <div className="background-text">METHODOLOGY</div>}
                                    <h4 className="methodology-number">{item.id}</h4>
                                    <div className="methodology-info">
                                        <h5 className="methodology-title">{item.title}</h5>
                                        <p className="methodology-desp">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MethodologySection;
