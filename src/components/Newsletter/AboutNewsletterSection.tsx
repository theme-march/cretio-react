import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import commonData from "../../dataJson/commonData.json";
import NewsletterForm from "./NewsletterForm";

const data = commonData.newsletter;

const AboutNewsletterSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className="container">
                <div className="newsletter-content style-2">
                    <div className="newsletter-title-content newsletter-anim text-animation" data-direction="textRight">
                        <h2 className="newsletter-title anim-line-words">
                            <ParsedText text={data.title} />
                        </h2>
                    </div>
                    <NewsletterForm 
                        id="newsletter-email-about"
                        inputClassName="style-2"
                        disableAnimation={true}
                    />
                </div>
            </section>
        </>
    );
};

export default AboutNewsletterSection;
