import React from "react";
import SectionHeading from "@components/Common/SectionHeading";
import CoreFeatureCard from "./CoreFeatureCard";
import type { CoreFeature } from "./CoreFeatureCard";

const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
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

const  ServicesPageFeaturesSection: React.FC = () => {
    return (
        <section className="core-features-area ak-gray-bg">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title="Our Exceptional Digital Transformation Services"
                    description="Explore our digital marketing and development services designed to help your brand stand out in a competitive market."
                    caption="Top Trio Services"
                    variant="style-1"
                    highlightWords={["Exceptional", "Services"]}
                    titleDirection="textLeft"
                    titleDuration={1.2}
                    disableDespAnimation={true}
                    disableCaptionAnimation={true}
                />
            </div>

            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container">
                <div className="core-features">
                    {coreFeaturesData.map((feature, index) => (
                        <CoreFeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}
                            variant="style-3"
                            cardAnimation="fade-animation"
                        />
                    ))}
                </div>
            </div>

            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};

export default ServicesPageFeaturesSection;
