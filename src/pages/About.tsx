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
const coreFeaturesJSON = [
    {
        "id": "01",
        "icon": "flaticon-circle",
        "title": "Web Development",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry."
    },
    {
        "id": "02",
        "icon": "flaticon-folded",
        "title": "UI/UX Design",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry."
    },
    {
        "id": "03",
        "icon": "flaticon-twirl",
        "title": "Web Design",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry."
    },
    {
        "id": "04",
        "icon": "flaticon-twirl",
        "title": "App Development",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry."
    },
    {
        "id": "05",
        "icon": "flaticon-twirl",
        "title": "E-commerce Solutions",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry."
    }
];
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
                title="Our Exceptional Digital Transformation Services"
                highlightWords={["Exceptional", "Services"]}
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