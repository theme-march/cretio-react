import React from "react";
import SeoAgencyHeroSection from "@components/sections/SeoAgencyHeroSection";
import SeoAgencyAboutSection from "@components/sections/SeoAgencyAboutSection";
import SeoServiceSection from "@components/sections/SeoServiceSection";
import SeoFeatureSection from "@components/sections/SeoFeatureSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import SeoAgencyLeadsSection from "@components/sections/SeoAgencyLeadsSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import MethodologySection from "@components/sections/MethodologySection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsSection from "@components/sections/NewsSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const SeoAgency: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <SeoAgencyHeroSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoAgencyAboutSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoServiceSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoFeatureSection />
            <SlidingTextSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoAgencyLeadsSection />
            <MarketingTestimonialSection variant="style-2 type-2" />
            <div className="ak-height-150 ak-height-lg-0"></div>
            <MethodologySection />

            <ClientLogoSection />
            <NewsSection />
            <NewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default SeoAgency;
