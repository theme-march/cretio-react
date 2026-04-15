import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import VideoSection from "@components/sections/VideoSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import AboutContentSection from "@components/sections/AboutContentSection";
import AwardsSection from "@components/sections/AwardsSection";
import GoalSection from "@components/sections/GoalSection";
import TestimonialSection from "@components/sections/TestimonialSection";
import FunFactSection from "@components/sections/FunFactSection";
import CoreFeaturesSection from "@components/sections/CoreFeaturesSection";
import coreFeaturesJSON from "@/dataJson/coreFeaturesData.json";
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
            <SlidingTextSection variant="style-2" />
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
                features={coreFeaturesJSON}
                disableDescriptionAnimation={true}
                disableCaptionAnimation={true}
                cardAnimation=""
                titleDirection="textLeft"
            />
            <TeamSection 
                titleDirection="textLeft"
                disableDescriptionAnimation={true}
                disableCaptionAnimation={true}
            />
            <ClientLogoSection variant="about" />
            <NewsletterSection 
                variant="style-3" 
                titleAnimation="text-animation"
                titleDirection="textRight"
                disableFormAnimation={true}
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default About;