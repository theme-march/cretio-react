import React from "react";
import { Helmet } from "react-helmet-async";
import MinimalStudioHeroSection from "@components/sections/MinimalStudioHeroSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import MinimalAboutSection from "@components/sections/MinimalAboutSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import AwardsSection from "@components/sections/AwardsSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsSection from "@components/sections/NewsSection";
import MarketingContactSection from "@components/sections/MarketingContactSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const MinimalStudio: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Minimal Studio | Cretio – Digital Agency</title>
                <meta name="description" content="Clean and minimalist digital studio experiences by Cretio." />
            </Helmet>
            <MinimalStudioHeroSection />
            <SlidingTextSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MinimalAboutSection />
            <CoreFeaturesSection
                variant="style-2"
                alternateColors={true}
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                description="Our studio is dedicated to crafting minimalist digital experiences that prioritize clarity, aesthetics, and user engagement."
                caption="Top Trio Services"
                showTopGap={true}
                showBottomGap={true}
                headingProps={{
                    titleDirection: "textLeft",
                    titleEase: "back.out(1.7)",
                    titleDuration: 1,
                    descriptionDirection: "right",
                    descriptionDelay: "0.35",
                    captionDirection: "right",
                    captionDelay: "0.55",
                }}
            />
            <AwardsSection 
                showTopGap={true} 
                variant="minimal-studio"
                titleDirection="textLeft"
                titleEase="back.out(1.7)"
                titleDuration={1}
                captionDirection="right"
                captionDelay="0.35"
            />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <ClientLogoSection direction="left" />

            <NewsSection headingVariant="minimal-studio" />
            <MarketingContactSection variant="style-2" />
            <NewsletterSection 
                variant="style-3"
                titleAnimation="text-animation"
                underlineReveal={true}
                formDirection="right"
                formDelay="0.35"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default MinimalStudio;
