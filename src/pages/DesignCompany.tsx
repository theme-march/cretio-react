import React from "react";
import DesignCompanyHeroSection from "@components/sections/DesignCompanyHeroSection";
import MarketingAboutSection from "@components/sections/MarketingAboutSection";
import BrandingServicesSection from "@components/sections/BrandingServicesSection";
import DigitalMarketingServicesSection from "@components/sections/DigitalMarketingServicesSection";
import FunFactSection from "@components/sections/FunFactSection";
import AwardsSection from "@components/sections/AwardsSection";
import TeamSection from "@components/sections/TeamSection";
import BlogSection from "@components/sections/BlogSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";

const DesignCompany: React.FC = () => {
    return (
        <>
            <DesignCompanyHeroSection />
            <MarketingAboutSection />
            <BrandingServicesSection />
            <DigitalMarketingServicesSection />
            <FunFactSection />
            <AwardsSection />
            <MarketingTestimonialSection />
            <TeamSection />
            <BlogSection />
            <NewsletterSection />
        </>
    );
};

export default DesignCompany;
