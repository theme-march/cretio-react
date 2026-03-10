import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import FaqSection from "@components/sections/FaqSection";
import NewsletterSection from "@components/sections/NewsletterSection";
import SlidingTextSection from "@components/sections/SlidingTextSection";

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
            />
            <FaqSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <NewsletterSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <SlidingTextSection />
        </>
    );
};

export default Faq;
