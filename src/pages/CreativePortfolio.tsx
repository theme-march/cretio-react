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

const CreativePortfolio: React.FC = () => {
    return (
        <>
            <CreativePortfolioHeroSection />
            <SlidingTextSection />
            <PortfolioIsotopeSection />
            <GoalSection />
            <FunFactSection variant="type-3" />
            <AwardsSection />
            <PricingSection />
            <TeamSection />
            <VideoSection />
            <NewsSection variant="style-2" />
            <ClientLogoSection showTitle={true} />
            <NewsletterSection variant="style-2" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default CreativePortfolio;

