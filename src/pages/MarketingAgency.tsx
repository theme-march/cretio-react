import React from "react";
import { Helmet } from "react-helmet-async";
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
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Marketing Agency | Cretio – Digital Agency</title>
                <meta name="description" content="Specialized marketing solutions to grow your brand and reach." />
            </Helmet>
            <MarketingHeroSection />
            <MarketingAboutSection variant="marketing-agency" />
            <BrandingServicesSection variant="marketing-agency" />
            <FunFactSection />
            <PortfolioSliderSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <AwardsSection 
                titleAnimation="fade-animation"
                titleDirection="right"
                titleOffset="55"
                captionDirection="left"
                captionOffset="55"
            />
            <MarketingVideoSection />
            <TestimonialSection fadeAnimation={true} />
            <TeamSection 
                variant="marketing"
                titleAnimation="fade-animation"
                titleDirection="right"
                titleOffset="55"
                descriptionDirection="left"
                descriptionOffset="55"
                captionDirection="left"
                captionOffset="55"
            />
            <MarketingContactSection />
            <ClientLogoSection direction="left"/>
            <NewsletterSection />
            <MarqueeTextSection />
        </div>
    );
};

export default MarketingAgency;
