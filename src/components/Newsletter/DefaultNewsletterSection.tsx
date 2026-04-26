import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import commonData from "../../dataJson/commonData.json";
import NewsletterForm from "./NewsletterForm";

const data = commonData.newsletter;

const DefaultNewsletterSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className="ak-center newsletter-wapper">
                <div className="theme-border-wrap cta-form-border hover-animation">
                    <div className="b-top-left">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-top-right d-flex">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-bottom-right d-flex flex-end">
                        <div className="horizontal flex-end align-self-end"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-bottom-left">
                        <div className="vertical"></div>
                        <div className="horizontal"></div>
                    </div>

                    <div className="container">
                        <div className="newsletter-content">
                            <div className="newsletter-anim title-anim">
                                <h2 className="newsletter-title anim-line-words">
                                    <ParsedText text={data.title} />
                                </h2>
                            </div>
                            <NewsletterForm id="newsletter-email-default" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DefaultNewsletterSection;
