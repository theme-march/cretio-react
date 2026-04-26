import React from "react";
import { Helmet } from "react-helmet-async";
import DesignCompanyHeroSection from "@components/HeroBanner/DesignCompanyHeroSection";
import DesignCompanyAboutSection from "@components/About/DesignCompanyAboutSection";
import DesignCompanyBrandingSection from "@components/Services/DesignCompanyBrandingSection";
import DigitalMarketingServicesSection from "@components/Services/DigitalMarketingServicesSection";
import DesignCompanyFunFactSection from "@components/Counter/DesignCompanyFunFactSection";
import DesignCompanyAwardsSection from "@components/Awards/DesignCompanyAwardsSection";
import DesignCompanyPricingSection from "@components/Pricing/DesignCompanyPricingSection";
import DesignCompanyTestimonialSection from "@components/Testimonial/DesignCompanyTestimonialSection";
import MarketingVideoSection from "@components/VideoModal/MarketingVideoSection";
import markagVideo from "@assets/videos/markag-video.mp4";
import ClientLogoSection from "@components/Testimonial/ClientLogoSection";
import DesignCompanyNewsSection from "@components/News/DesignCompanyNewsSection";
import DefaultNewsletterSection from "@components/Newsletter/DefaultNewsletterSection";
import MarqueeTextSection from "@components/Brand/MarqueeTextSection";
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
            <DesignCompanyAboutSection />
            <DesignCompanyBrandingSection />
            <DigitalMarketingServicesSection />
            <DesignCompanyFunFactSection />
            <DesignCompanyAwardsSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <DesignCompanyTestimonialSection />
            <DesignCompanyPricingSection />
            <MarketingVideoSection videoSrc={markagVideo} />
            <ClientLogoSection direction="left"/>
            <DesignCompanyNewsSection />
            <DefaultNewsletterSection />
            <MarqueeTextSection />
        </div>
    );
};

export default DesignCompany;


