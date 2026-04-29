import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import aboutVideo from "@assets/videos/about.mp4";
import VideoSection from "@components/Video/VideoSection";
import SlidingTextSection from "@components/Brand/SlidingTextSection";
import AboutContentSection from "@components/About/AboutContentSection";
import AwardsSection from "@components/Awards/AwardsSection";
import GoalSection from "@components/Goal/GoalSection";
import TestimonialSection from "@components/Testimonial/TestimonialSection";
import FunFactSection from "@components/Counter/FunFactSection";
import AboutPageFeaturesSection from "@components/Feature/AboutPageFeaturesSection";
import AboutTeamSection from "@components/Team/AboutTeamSection";
import ClientLogoSection from "@components/Brand/ClientLogoSection";
import AboutNewsletterSection from "@components/Newsletter/AboutNewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";



const About: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>About Us | Cretio – Digital Agency</title>
                <meta name="description" content="Learn about the Cretio team and our approach to creative digital solutions." />
            </Helmet>
            <Breadcrumb
                title="We thrive on creativity & innovation in digital presence"
                highlightWords={["creativity", "innovation"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/about" },
                ]}
                variant="style-3"
                videoSrc={aboutVideo}
            />
            <VideoSection variant="about" />
            <SlidingTextSection variant="style-2" />
            <AboutContentSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <AwardsSection />
            <GoalSection />
            <TestimonialSection />
            <FunFactSection />
            <AboutPageFeaturesSection />

            <AboutTeamSection />
 
            <ClientLogoSection variant="about" />
            <AboutNewsletterSection />

            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default About;
