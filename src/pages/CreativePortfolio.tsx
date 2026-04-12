import React from "react";
import CreativePortfolioHeroSection from "@components/sections/CreativePortfolioHeroSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import PortfolioIsotopeSection from "@components/sections/PortfolioIsotopeSection";
import GoalSection from "@components/sections/GoalSection";
import FunFactSection from "@components/sections/FunFactSection";
import AwardsSection from "@components/sections/AwardsSection";
import PricingSection from "@components/sections/PricingSection";
import TeamSection from "@components/sections/TeamSection";
import VideoSection from "@components/sections/VideoSection";
import NewsSection from "@components/sections/NewsSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const CreativePortfolio: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <CreativePortfolioHeroSection />
            <SlidingTextSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PortfolioIsotopeSection />
            <GoalSection />
            <FunFactSection variant="type-3" />
            <AwardsSection variant="design-company" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MarketingTestimonialSection 
                variant="design-company" 
                bgClass="ak-gray-bg" 
                sectionStyle={{ height: "686.285px" }} 
            />
            <PricingSection />
            <TeamSection variant="creative-portfolio" />
            <VideoSection variant="creative-portfolio" />
            <NewsSection variant="style-2" headingVariant="creative-portfolio" />
            <ClientLogoSection showTitle={true} direction="left" />
            <NewsletterSection variant="style-2" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default CreativePortfolio;

