import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { getImagePath } from "@/utils/imageLoader";

const features = commonData.seoFeatures;

const SeoFeatureSection: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <div 
            className="feature-area"
            onMouseLeave={() => setActiveFeature(features[0])}
        >
            <img className="feature-area-img" src={getImagePath(activeFeature.img)} alt="..." />
            <div className="feature-wapper row row-cols-1 row-cols-md-2 row-cols-xl-4 m-0">
                {features.map((feature) => (
                    <Link 
                        to="/about" 
                        className={`feature-item p-0 ${activeFeature.id === feature.id ? "active" : ""}`} 
                        key={feature.id}
                        onMouseEnter={() => setActiveFeature(feature)}
                    >
                        <img className="feature-item-bg" src={getImagePath(feature.img)} alt="..." />
                        <div className="feature-item-content">
                            <div className="feature-item-number">
                                <h2 className="feature-number">{feature.id}</h2>
                            </div>
                            <div className="feature-info">
                                <h3 className="feature-info-title">{feature.title}</h3>
                                <p className="feature-info-desp">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SeoFeatureSection;
