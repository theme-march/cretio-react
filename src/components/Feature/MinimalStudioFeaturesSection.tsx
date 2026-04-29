import React from "react";
import SectionHeading from "@components/Common/SectionHeading";
import CoreFeatureCard from "./CoreFeatureCard";
import type { CoreFeature } from "./CoreFeatureCard";

const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
        description: "We define your unique brand identity and market positioning to ensure your vision with your target audience.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "Digital Experience",
        description: "Our team designs interactions focusing on intuitive navigation and minimalist aesthetics for your users.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Creative Solutions",
        description: "We deliver design concepts that transform complex business challenges into simple, effective visual stories.",
    }
];

const MinimalStudioFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area ak-solidblack-bg">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                    description="Our studio specializes in elevating brands design principles, ensuring every digital touchpoint is highly functional."
                    caption="Top Trio Services"
                    className="bg-black"
                    variant="style-1"
                    descriptionClassName="ak-color-c1c1c1"
                    titleDirection="textLeft"
                    titleEase="back.out(1.7)"
                    titleDuration={1}
                    descriptionDirection="right"
                    descriptionDelay="0.35"
                    captionDirection="right"
                    captionDelay="0.55"
                />
                <div className="ak-height-75 ak-height-lg-50"></div>
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
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default MinimalStudioFeaturesSection;
