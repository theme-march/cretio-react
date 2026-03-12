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
            <SlidingTextSection />
            <MinimalAboutSection />
            <CoreFeaturesSection
                variant="style-2"
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                caption="Top Trio Services"
            />
            <AwardsSection />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <TeamSection />
            <BlogSection />
            <NewsletterSection />
        </>
    );
};

export default MinimalStudio;
