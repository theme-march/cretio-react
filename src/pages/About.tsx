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
                title="We thrive on creativity & innovation in digital presence"
                highlightWords={["creativity", "innovation"]}
                links={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]}
                videoSrc={aboutVideo}
                variant="style-3"
            />
            <VideoSection isAbout />
            <SlidingTextSection variant="style-2" />
            <AboutContentSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <AwardsSection />
            <GoalSection />
            <TestimonialSection />
            <FunFactSection />
            <CoreFeaturesSection
                variant="style-2"
                title="Our Exceptional Digital Transformation Services"
                description="We deliver end-to-end digital solutions that drive growth, enhance user experience, and position your brand at the forefront of innovation."
                caption="Services"
                isSlider={true}
                showTopGap={true}
                showBottomGap={true}
                headingProps={{
                    highlightWords: ["Exceptional", "Services"],
                    disableDespAnimation: true,
                    disableCaptionAnimation: true,
                    titleDirection: "textLeft",
                }}
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
