import React from "react";
import CreativePortfolioHeroSection from "@components/sections/CreativePortfolioHeroSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import GoalSection from "@components/sections/GoalSection";
import FunFactSection from "@components/sections/FunFactSection";
import TeamSection from "@components/sections/TeamSection";
import BlogSection from "@components/sections/BlogSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import PortfolioIsotopeSection from "@components/sections/PortfolioIsotopeSection";

const CreativePortfolio: React.FC = () => {
    return (
        <>
            <div className="ak-height-190 ak-height-lg-80"></div>
            <CreativePortfolioHeroSection />
            <div className="ak-height-150 ak-height-lg-40"></div>
            <SlidingTextSection />
            <PortfolioIsotopeSection />
            <GoalSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <FunFactSection variant="type-3" />
            <TeamSection />
            <BlogSection />
            <NewsletterSection />
        </>
    );
};

export default CreativePortfolio;
