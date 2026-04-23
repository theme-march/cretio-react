import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import FaqSection from "@components/sections/FaqSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarqueeTextSection from "@/components/sections/MarqueeTextSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Faq: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Breadcrumb
                title="Frequently Asked Every Questions To Know"
                highlightWords={["Frequently"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "FAQ", path: "" },
                ]}
                variant="style-2"
                strokeText="FAQ"
                showCircle={false}
                strokeTextClass="text-normal"
            />
            <FaqSection disableParallax={true} />
            <NewsletterSection />
            <MarqueeTextSection variant="style2" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default Faq;
