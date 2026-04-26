import React from "react";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <title>FAQ | Cretio – Digital Agency</title>
                <meta name="description" content="Frequently asked questions about Cretio's services and processes." />
            </Helmet>
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
