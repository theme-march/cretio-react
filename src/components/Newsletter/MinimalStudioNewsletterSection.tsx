import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import commonData from "../../dataJson/commonData.json";
import NewsletterForm from "./NewsletterForm";

const data = commonData.newsletter;

const MinimalStudioNewsletterSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className="container newsletter-wapper">
                <div className="newsletter-content style-2">
                    <div className="newsletter-title-content newsletter-anim">
                        <h2 
                            className="newsletter-title text-animation"
                            data-direction="textLeft"
                            data-duration="1.2"
                        >
                            <ParsedText text={data.title.replace('text-underlines', 'text-underlines underline-anim')} />
                        </h2>
                    </div>
                    <NewsletterForm 
                        id="newsletter-email-minimal-studio"
                        inputClassName="style-2"
                        disableAnimation={true}
                    />
                </div>
            </section>
        </>
    );
};

export default MinimalStudioNewsletterSection;
