import React from "react";
import { Helmet } from "react-helmet-async";
import MarketingHeroSection from "@components/HeroBanner/MarketingHeroSection";
import MarketingAgencyAboutSection from "@components/About/MarketingAgencyAboutSection";
import MarketingAgencyBrandingSection from "@components/Services/MarketingAgencyBrandingSection";
import FunFactSection from "@components/Counter/FunFactSection";
import PortfolioSliderSection from "@components/Project/PortfolioSliderSection";
import TestimonialSection from "@components/Testimonial/TestimonialSection";
import MarketingAgencyTeamSection from "@components/Team/MarketingAgencyTeamSection";
import DefaultNewsletterSection from "@components/Newsletter/DefaultNewsletterSection";

import MarketingAwardsSection from "@components/Awards/MarketingAwardsSection";
import MarketingVideoSection from "@components/VideoModal/MarketingVideoSection";
import MarketingContactSection from "@components/Contact/MarketingContactSection";
import ClientLogoSection from "@components/Testimonial/ClientLogoSection";
import MarqueeTextSection from "@components/Brand/MarqueeTextSection";
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
            <MarketingAgencyAboutSection />
            <MarketingAgencyBrandingSection />

            <FunFactSection />
            <PortfolioSliderSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MarketingAwardsSection />

            <MarketingVideoSection />
            <TestimonialSection fadeAnimation={true} />
            <MarketingAgencyTeamSection />

            <MarketingContactSection />
            <ClientLogoSection direction="left"/>
            <DefaultNewsletterSection />
            <MarqueeTextSection />
        </div>
    );
};

export default MarketingAgency;


