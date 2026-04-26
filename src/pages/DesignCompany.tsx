import React from "react";
import { Helmet } from "react-helmet-async";
import DesignCompanyHeroSection from "@components/sections/DesignCompanyHeroSection";
import MarketingAboutSection from "@components/sections/MarketingAboutSection";
import BrandingServicesSection from "@components/sections/BrandingServicesSection";
import DigitalMarketingServicesSection from "@components/sections/DigitalMarketingServicesSection";
import FunFactSection from "@components/sections/FunFactSection";
import AwardsSection from "@components/sections/AwardsSection";
import DesignCompanyPricingSection from "@components/sections/DesignCompanyPricingSection";
import MarketingTestimonialSection from "@components/sections/MarketingTestimonialSection";
import MarketingVideoSection from "@components/sections/MarketingVideoSection";
import markagVideo from "@assets/videos/markag-video.mp4";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsSection from "@components/sections/NewsSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarqueeTextSection from "@components/sections/MarqueeTextSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const DesignCompany: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Design Company | Cretio – Digital Agency</title>
                <meta name="description" content="Creative design solutions for modern brands and businesses." />
            </Helmet>
            <DesignCompanyHeroSection />
            <MarketingAboutSection variant="design-company" />
            <BrandingServicesSection variant="design-company" />
            <DigitalMarketingServicesSection />
            <FunFactSection variant="type-2" />
            <AwardsSection variant="design-company" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MarketingTestimonialSection variant="design-company" />
            <DesignCompanyPricingSection />
            <MarketingVideoSection videoSrc={markagVideo} />
            <ClientLogoSection direction="left"/>
            <NewsSection headingVariant="design-company" />
            <NewsletterSection />
            <MarqueeTextSection />
        </div>
    );
};

export default DesignCompany;
