import React, { useState } from "react";
import { Link } from "react-router-dom";
import commonData from "@/dataJson/commonSectionsData.json";
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
