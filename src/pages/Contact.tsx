import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/common/Breadcrumb";
import ContactFormSection from "@components/sections/ContactFormSection";
import ContactCardSection from "@components/sections/ContactCardSection";
import GoogleMapSection from "@components/sections/GoogleMapSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Contact: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Contact Us | Cretio – Digital Agency</title>
                <meta name="description" content="Get in touch with the Cretio team for your next digital project." />
            </Helmet>
            <Breadcrumb
                title="Get In Touch With our <br class='d-none d-lg-block' /> Digital Professional Team"
                highlightWords={["Get In Touch", "Professional Team"]}
                links={[{ label: "Home", path: "/" }, { label: "Contact Us", path: "/contact" }]}
                variant="style-2"
                showCircle={false}
                strokeText="Contact"
                strokeTextClass="text-normal"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ContactFormSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <ContactCardSection />
            <div className="ak-height-150 ak-height-lg-100"></div>
            <GoogleMapSection />
        </div>
    );
};

export default Contact;
