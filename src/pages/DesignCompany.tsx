import React from "react";
import DesignCompanyHeroSection from "@components/sections/DesignCompanyHeroSection";
import MarketingAboutSection from "@components/sections/MarketingAboutSection";
import BrandingServicesSection from "@components/sections/BrandingServicesSection";
import DigitalMarketingServicesSection from "@components/sections/DigitalMarketingServicesSection";
import FunFactSection from "@components/sections/FunFactSection";
import AwardsSection from "@components/sections/AwardsSection";
import DesignCompanyPricingSection from "@components/sections/DesignCompanyPricingSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import MarketingVideoSection from "@components/sections/MarketingVideoSection";
import markagVideo from "@assets/videos/markag-video.mp4";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsSection from "@components/sections/NewsSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const DesignCompany: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <DesignCompanyHeroSection />
            <MarketingAboutSection variant="design-company" />
            <BrandingServicesSection />
            <DigitalMarketingServicesSection />
            <FunFactSection variant="type-2" />
            <AwardsSection variant="design-company" />
            <MarketingTestimonialSection variant="design-company" />
            <DesignCompanyPricingSection />
            <MarketingVideoSection videoSrc={markagVideo} />
            <ClientLogoSection />
            <NewsSection />
            <NewsletterSection />
            <MarqueeTextSection />
        </>
    );
};

export default DesignCompany;
