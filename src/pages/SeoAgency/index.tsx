import React from "react";
import { Helmet } from "react-helmet-async";
import SeoAgencyHeroSection from "@components/HeroBanner/SeoAgencyHeroSection";
import SeoAgencyAboutSection from "@components/About/SeoAgencyAboutSection";
import SeoServiceSection from "@components/Services/SeoServiceSection";
import SeoFeatureSection from "@components/Feature/SeoFeatureSection";
import SlidingTextSection from "@components/Brand/SlidingTextSection";
import SeoAgencyLeadsSection from "@components/About/SeoAgencyLeadsSection";
import SeoAgencyTestimonialSection from "@components/Testimonial/SeoAgencyTestimonialSection";
import MethodologySection from "@components/Methodology/MethodologySection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import SeoAgencyNewsSection from "@components/News/SeoAgencyNewsSection";
import DefaultNewsletterSection from "@components/Newsletter/DefaultNewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const SeoAgency: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>SEO Agency | Cretio – Digital Agency</title>
                <meta name="description" content="Data-driven SEO strategies to boost your online visibility." />
            </Helmet>
            <SeoAgencyHeroSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoAgencyAboutSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoServiceSection variant="seo-agency" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoFeatureSection />
            <SlidingTextSection variant="seo" />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoAgencyLeadsSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SeoAgencyTestimonialSection />
            <div className="ak-height-150 ak-height-lg-0"></div>
            <MethodologySection />
            <ClientLogoSection limit={5} />
            <SeoAgencyNewsSection />
            <DefaultNewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default SeoAgency;


