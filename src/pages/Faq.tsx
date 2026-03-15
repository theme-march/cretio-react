import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import FaqSection from "@components/sections/FaqSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import MarqueeTextSection from "@/components/sections/MarqueeTextSection";

const Faq: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='<span class="highlight-text">Frequently</span> Asked Every Questions To Know'
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
            <FaqSection />
            <NewsletterSection />
            <MarqueeTextSection variant="style2" />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Faq;
