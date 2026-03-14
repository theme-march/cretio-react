import React from "react";
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

const MinimalStudio: React.FC = () => {
    return (
        <>
            <MinimalStudioHeroSection />
            <SlidingTextSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MinimalAboutSection />
            <CoreFeaturesSection
                variant="style-2"
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                caption="Top Trio Services"
                showTopGap={true}
                showBottomGap={true}
            />
            <AwardsSection showTopGap={true} />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <ClientLogoSection />
            <NewsSection />
            <MarketingContactSection variant="style-2" />
            <NewsletterSection variant="style-3" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default MinimalStudio;
