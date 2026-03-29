import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import VideoSection from "@components/sections/VideoSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import AboutContentSection from "@components/sections/AboutContentSection";
import AwardsSection from "@components/sections/AwardsSection";
import GoalSection from "@components/sections/GoalSection";
import TestimonialSection from "@components/sections/TestimonialSection";
import FunFactSection from "@components/sections/FunFactSection";
import CoreFeaturesSection, {
    coreFeaturesData,
} from "@components/sections/CoreFeaturesSection";
import TeamSection from "@components/sections/TeamSection";
import ClientLogoSection from "@components/sections/ClientLogoSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

import aboutVideo from "@assets/videos/about.mp4";

const About: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title='We thrive on <span class="highlight-text">creativity</span> & <span class="highlight-text">innovation</span> in digital presence'
                links={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]}
                videoSrc={aboutVideo}
                variant="style-3"
            />
            <VideoSection isAbout={true} />
            <SlidingTextSection />
            <AboutContentSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <AwardsSection />
            <GoalSection />
            <TestimonialSection />
            <FunFactSection />
            <CoreFeaturesSection 
                variant="style-2" 
                title='Our <span class="highlight">Exceptional</span> Digital Transformation <span class="highlight">Services</span>'
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."}
                caption="Services"
                isSlider={true}
                showTopGap={true}
                showBottomGap={true}
                features={coreFeaturesData}
            />
            <TeamSection />
            <ClientLogoSection showTitle={true} />
            <NewsletterSection variant="style-3" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default About;