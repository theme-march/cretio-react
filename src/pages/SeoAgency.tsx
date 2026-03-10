import React from "react";
import SeoAgencyHeroSection from "@components/sections/SeoAgencyHeroSection";
import SeoAgencyAboutSection from "@components/sections/SeoAgencyAboutSection";
import SeoServiceSection from "@components/sections/SeoServiceSection";
import SeoFeatureSection from "@components/sections/SeoFeatureSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import TeamSection from "@components/sections/TeamSection";
import BlogSection from "@components/sections/BlogSection";
import NewsletterSection from "@components/sections/NewsletterSection";

const SeoAgency: React.FC = () => {
    return (
        <>
            <div className="ak-height-190 ak-height-lg-80"></div>
            <SeoAgencyHeroSection />
            <SeoAgencyAboutSection />
            <SeoServiceSection />
            <SeoFeatureSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SlidingTextSection />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <TeamSection />
            <BlogSection />
            <NewsletterSection />
        </>
    );
};

export default SeoAgency;
