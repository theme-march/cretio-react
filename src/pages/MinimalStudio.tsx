import React from "react";
import MinimalStudioHeroSection from "@components/sections/MinimalStudioHeroSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import MinimalAboutSection from "@components/sections/MinimalAboutSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import AwardsSection from "@components/sections/AwardsSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import TeamSection from "@components/sections/TeamSection";
import BlogSection from "@components/sections/BlogSection";
import NewsletterSection from "@components/sections/NewsletterSection";

const MinimalStudio: React.FC = () => {
    return (
        <>
            <MinimalStudioHeroSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SlidingTextSection />
            <MinimalAboutSection />
            <CoreFeaturesSection
                variant="style-2"
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
            />
            <AwardsSection variant="type-2" />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <TeamSection />
            <BlogSection />
            <NewsletterSection />
        </>
    );
};

export default MinimalStudio;
