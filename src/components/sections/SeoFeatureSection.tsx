import { useState } from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "@/utils/imageLoader";

interface SeoFeature {
    id: string;
    title: string;
    img: string;
    description?: string;
}

const commonData = {
    // ... skipping other bits of commonData duplication as requested by user
    "seoFeatures": [
        { 
            "id": "01", 
            "title": "Discovery & SEO Comprehensive Strategy", 
            "img": "feature-item-bg-1.png",
            "description": "We analyze your current performance and market trends to build a data-driven roadmap for long-term SEO success."
        },
        { 
            "id": "02", 
            "title": "Implement Strategy & Improve Site Speed", 
            "img": "feature-item-bg-2.png",
            "description": "Executing technical optimizations and infrastructure improvements to ensure your site loads fast and performs perfectly."
        },
        { 
            "id": "03", 
            "title": "Continuously Monitor & Provide Reports", 
            "img": "feature-item-bg-3.png",
            "description": "Keeping a close eye on your rankings and traffic, providing transparent reports that highlight your growth and ROI."
        },
        { 
            "id": "04", 
            "title": "Continually Optimize Site Based on Data", 
            "img": "feature-item-bg-4.png",
            "description": "Evolving our strategy based on real-world performance data to maintain your competitive edge in the search results."
        }
    ]
};

const features: SeoFeature[] = commonData.seoFeatures;

const SeoFeatureSection: React.FC = () => {
    const [activeFeature, setActiveFeature] = useState<SeoFeature>(features[0]);

    return (
        <div 
            className="feature-area"
            onMouseLeave={() => setActiveFeature(features[0])}
        >
            <img className="feature-area-img" src={getImagePath(activeFeature.img)} alt="Active digital strategy feature background" />
            <div className="feature-wapper row row-cols-1 row-cols-md-2 row-cols-xl-4 m-0">
                {features.map((feature: SeoFeature) => (
                    <Link 
                        to="/about" 
                        className={`feature-item p-0 ${activeFeature.id === feature.id ? "active" : ""}`} 
                        key={feature.id}
                        onMouseEnter={() => setActiveFeature(feature)}
                    >
                        <img className="feature-item-bg" src={getImagePath(feature.img)} alt={`${feature.title} background ornament`} />
                        <div className="feature-item-content">
                            <div className="feature-item-number">
                                <h2 className="feature-number">{feature.id}</h2>
                            </div>
                            <div className="feature-info">
                                <h3 className="feature-info-title">{feature.title}</h3>
                                <p className="feature-info-desp">
                                    {feature.description}
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
