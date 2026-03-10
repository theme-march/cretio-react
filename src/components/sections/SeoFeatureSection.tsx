import React from "react";
import { Link } from "react-router-dom";
import featureBgMain from "@assets/img/services/feature-item-bg-1.png";
import featureBg1 from "@assets/img/services/feature-item-bg-1.png";
import featureBg2 from "@assets/img/services/feature-item-bg-2.png";
import featureBg3 from "@assets/img/services/feature-item-bg-3.png";
import featureBg4 from "@assets/img/services/feature-item-bg-4.png";

const features = [
    { id: "01", title: "Discovery & SEO Comprehensive Strategy", img: featureBg1 },
    { id: "02", title: "Implement Strategy & Improve Site Speed", img: featureBg2 },
    { id: "03", title: "Continuously Monitor & Provide Reports", img: featureBg3 },
    { id: "04", title: "Continually Optimize Site Based on Data", img: featureBg4 },
];

const SeoFeatureSection: React.FC = () => {
    return (
        <div className="feature-area">
            <img className="feature-area-img" src={featureBgMain} alt="..." />
            <div className="feature-wapper row row-cols-1 row-cols-md-2 row-cols-xl-4 m-0">
                {features.map((feature) => (
                    <Link to="/about" className="feature-item p-0" key={feature.id}>
                        <img className="feature-item-bg" src={feature.img} alt="..." />
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
