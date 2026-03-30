import React from "react";
import MarketingHeroSection from "@components/sections/MarketingHeroSection";
import MarketingAboutSection from "@components/sections/MarketingAboutSection";
import BrandingServicesSection from "@components/sections/BrandingServicesSection";
import FunFactSection from "@components/sections/FunFactSection";
import PortfolioSliderSection from "@components/sections/PortfolioSliderSection";
import TestimonialSection from "@components/sections/TestimonialSection";
import TeamSection from "@components/sections/TeamSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import AwardsSection from "@components/sections/AwardsSection";
import MarketingVideoSection from "@components/sections/MarketingVideoSection";
import MarketingContactSection from "@components/sections/MarketingContactSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const MarketingAgency: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <MarketingHeroSection />
            <MarketingAboutSection />
            <BrandingServicesSection />
            <FunFactSection />
            <PortfolioSliderSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <AwardsSection />
            <MarketingVideoSection />
            <TestimonialSection />
            <TeamSection />
            <MarketingContactSection />
            <ClientLogoSection />
            <NewsletterSection />
            <MarqueeTextSection />
        </>
    );
};

export default MarketingAgency;
