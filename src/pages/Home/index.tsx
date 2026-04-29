import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@components/HeroBanner/HeroSection";
import AboutSection from "@components/About/AboutSection";
import ServicesSection from "@components/Services/ServicesSection";
import HomeFeaturesSection from "@components/Feature/HomeFeaturesSection";
import PortfolioSection from "@components/Portfolio/PortfolioSection";
import FunFactSection from "@components/Counter/FunFactSection";
import AwardsSection from "@components/Awards/AwardsSection";
import VideoSection from "@components/Video/VideoSection";
import TestimonialSection from "@components/Testimonial/TestimonialSection";
import HomeTeamSlider from "@components/Team/HomeTeamSlider";
import MarqueeTextSection from "@components/Brand/MarqueeTextSection";
import HomeNewsSection from "@components/News/HomeNewsSection";
import HomeNewsletterSection from "@components/Newsletter/HomeNewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Home: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Home | Cretio – Digital Agency</title>
                <meta name="description" content="Cretio is a creative digital agency delivering innovative design and strategic digital solutions." />
            </Helmet>
            <div className="ak-height-190 ak-height-lg-80"></div>
            <HeroSection />
            <AboutSection />
            <ServicesSection highlightWords={["Exceptional", "Services"]} />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <HomeFeaturesSection />
            <PortfolioSection />
            <FunFactSection />
            <AwardsSection />
            <VideoSection />
            <TestimonialSection />
            <HomeTeamSlider />
            <MarqueeTextSection variant="style2" />
            <HomeNewsSection />
            <HomeNewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default Home;
