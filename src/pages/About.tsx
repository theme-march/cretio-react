import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import VideoSection from "@components/sections/VideoSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";
import AboutContentSection from "@components/sections/AboutContentSection";
import AwardsSection from "@components/sections/AwardsSection";
import GoalSection from "@components/sections/GoalSection";
import TestimonialSection from "@components/sections/TestimonialSection";

import aboutVideo from "@assets/videos/about.mp4";

const About: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='We thrive on <span class="highlight-text">creativity</span> & <span class="highlight-text">innovation</span> in digital presence'
                links={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]}
                videoSrc={aboutVideo}
            />
            <VideoSection />
            <SlidingTextSection />
            <AboutContentSection />
            <AwardsSection />
            <GoalSection />
            <TestimonialSection />
        </>
    );
};

export default About;
