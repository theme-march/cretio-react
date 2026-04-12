import React from "react";
import HeroSection from "@components/sections/HeroSection";
import AboutSection from "@components/sections/AboutSection";
import ServicesSection from "@components/sections/ServicesSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import PortfolioSection from "@components/sections/PortfolioSection";
import FunFactSection from "@components/sections/FunFactSection";
import AwardsSection from "@components/sections/AwardsSection";
import VideoSection from "@components/sections/VideoSection";
import TestimonialSection from "@components/sections/TestimonialSection";
import TeamSection from "@components/sections/TeamSection";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import BlogSection from "@components/sections/BlogSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Home: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <div className="ak-height-190 ak-height-lg-80"></div>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <CoreFeaturesSection hideHeadingGap={true} cardDirection="left" />
            <PortfolioSection />
            <FunFactSection />
            <AwardsSection />
            <VideoSection />
            <TestimonialSection />
            <TeamSection />
            <MarqueeTextSection variant="style2" />
            <BlogSection />
            <NewsletterSection variant="style-3" headingVariant="minimal-studio" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Home;
