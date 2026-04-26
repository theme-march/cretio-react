import React from "react";

import CoreFeatureCard, { type CoreFeature } from "./CoreFeatureCard";

const homeFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
        description: "We develop data-driven marketing strategies that amplify your brand's reach and engage your target audience effectively."
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "Brand Identity",
        description: "Our team crafts unique visual identities and brand stories that resonate with customers and build long-term loyalty."
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Digital Growth",
        description: "We leverage cutting-edge technology and creative solutions to accelerate your business growth in the digital landscape."
    }
];

const HomeFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area">


            <div className="container">
                <div className="core-features">
                    {homeFeaturesData.map((feature, index) => (
                        <CoreFeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                            variant="style-1"
                            cardAnimation="fade-animation"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeFeaturesSection;
