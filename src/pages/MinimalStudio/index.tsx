import React from "react";
import { Helmet } from "react-helmet-async";
import MinimalStudioHeroSection from "@components/HeroBanner/MinimalStudioHeroSection";
import SlidingTextSection from "@components/Brand/SlidingTextSection";
import MinimalAboutSection from "@components/About/MinimalAboutSection";
import MinimalStudioFeaturesSection from "@components/Feature/MinimalStudioFeaturesSection";
import MinimalStudioAwardsSection from "@components/Awards/MinimalStudioAwardsSection";
import MinimalStudioTestimonialSection from "@components/Testimonial/MinimalStudioTestimonialSection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import MinimalStudioNewsSection from "@components/News/MinimalStudioNewsSection";
import MarketingContactSection from "@components/Contact/MarketingContactSection";
import MinimalStudioNewsletterSection from "@components/Newsletter/MinimalStudioNewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const MinimalStudio: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Minimal Studio | Cretio – Digital Agency</title>
                <meta name="description" content="Clean and minimalist digital studio experiences by Cretio." />
            </Helmet>
            <MinimalStudioHeroSection />
            <SlidingTextSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <MinimalAboutSection />
            <MinimalStudioFeaturesSection />

            <MinimalStudioAwardsSection />

            <MinimalStudioTestimonialSection />

            <ClientLogoSection direction="left" />

            <MinimalStudioNewsSection />
            <MarketingContactSection variant="style-2" />
            <MinimalStudioNewsletterSection />
<div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};
export default MinimalStudio;
