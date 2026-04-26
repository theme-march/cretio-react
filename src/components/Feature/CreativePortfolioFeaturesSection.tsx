import React from "react";
import SectionHeading from "@components/Common/SectionHeading";
import CoreFeatureCard from "./CoreFeatureCard";
import type { CoreFeature } from "./CoreFeatureCard";

const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Web Development",
        description: "We build fast, scalable, and maintainable web applications tailored to your business goals and user needs.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "UI/UX Design",
        description: "Our design team crafts intuitive interfaces that balance aesthetics with functionality for a seamless user journey.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Web Design",
        description: "From landing pages to full websites, we create visually compelling designs that reflect your brand identity.",
    }
];

const CreativePortfolioFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area">
            <div className="container">
                <SectionHeading
                    title="Core Features"
                    description="Comprehensive digital solutions tailored to your unique business needs."
                    caption="Core Features"
                    variant="style-1"
                />
            </div>

            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container">
                <div className="core-features">
                    {coreFeaturesData.slice(0, 3).map((feature, index) => (
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

export default CreativePortfolioFeaturesSection;
