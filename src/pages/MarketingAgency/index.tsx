import React from "react";
import { Helmet } from "react-helmet-async";
import MarketingHeroSection from "@components/HeroBanner/MarketingHeroSection";
import MarketingAgencyAboutSection from "@components/About/MarketingAgencyAboutSection";
import MarketingAgencyBrandingSection from "@components/Services/MarketingAgencyBrandingSection";
import FunFactSection from "@components/Counter/FunFactSection";
import PortfolioSliderSection from "@components/Portfolio/PortfolioSliderSection";
import MarketingAwardsSection from "@components/Awards/MarketingAwardsSection";
import MarketingAgencyTeamSection from "@components/Team/MarketingAgencyTeamSection";
import MarketingVideoSection from "@components/Video/MarketingVideoSection";
import MarketingTestimonialSection from "@components/Testimonial/MarketingTestimonialSection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import MarqueeTextSection from "@components/Brand/MarqueeTextSection";
import DefaultNewsletterSection from "@components/Newsletter/DefaultNewsletterSection";
import MarketingContactSection from "@components/Contact/MarketingContactSection";
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
            <MarketingTestimonialSection />
            <MarketingAgencyTeamSection />
            <MarketingContactSection />
            <ClientLogoSection direction="left"/>
            <DefaultNewsletterSection />
            <MarqueeTextSection />
        </div>
    );
};

export default MarketingAgency;
