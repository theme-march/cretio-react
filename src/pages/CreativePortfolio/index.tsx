import React from "react";
import { Helmet } from "react-helmet-async";
import CreativePortfolioHeroSection from "@components/HeroBanner/CreativePortfolioHeroSection";
import SlidingTextSection from "@components/Brand/SlidingTextSection";
import PortfolioIsotopeSection from "@components/Portfolio/PortfolioIsotopeSection";
import GoalSection from "@components/Goal/GoalSection";
import CreativeFunFactSection from "@components/Counter/CreativeFunFactSection";
import AwardsSection from "@components/Awards/AwardsSection";
import PricingSection from "@components/Pricing/PricingSection";
import CreativeTeamSlider from "@components/Team/CreativeTeamSlider";
import VideoSection from "@components/Video/VideoSection";
import CreativePortfolioFeaturesSection from "@components/Feature/CreativePortfolioFeaturesSection";
import CreativeNewsSection from "@components/News/CreativeNewsSection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import CreativeNewsletterSection from "@components/Newsletter/CreativeNewsletterSection";
import MarketingTestimonialSection from "@components/Testimonial/MarketingTestimonialSection";
import TestimonialSection from "@components/Testimonial/TestimonialSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const CreativePortfolio: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Creative Portfolio | Cretio – Digital Agency</title>
                <meta name="description" content="Showcasing our most creative and innovative digital works." />
            </Helmet>
            <CreativePortfolioHeroSection />
            <SlidingTextSection variant="style-3" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <PortfolioIsotopeSection />
            <GoalSection />
            <CreativeFunFactSection />
            <AwardsSection variant="style-2" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <TestimonialSection variant="style-2" fadeAnimation={true} />
            <PricingSection />
            <CreativeTeamSlider />
            <VideoSection variant="creative-portfolio" />
            <CreativeNewsSection />
            <ClientLogoSection showTitle={true} direction="left" />
            <CreativeNewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default CreativePortfolio;
