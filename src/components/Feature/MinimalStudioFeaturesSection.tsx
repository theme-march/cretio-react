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

const MinimalStudioFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area">
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                    description="Our studio is dedicated to crafting minimalist digital experiences that prioritize clarity, aesthetics, and user engagement."
                    caption="Top Trio Services"
                    variant="style-1"
                    titleDirection="textLeft"
                    titleEase="back.out(1.7)"
                    titleDuration={1}
                    descriptionDirection="right"
                    descriptionDelay="0.35"
                    captionDirection="right"
                    captionDelay="0.55"
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
                            variant="style-2"
                            cardAnimation="fade-animation"
                            alternateColors={true}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MinimalStudioFeaturesSection;
