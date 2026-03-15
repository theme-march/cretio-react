import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import ContactFormSection from "@components/sections/ContactFormSection";
import ContactCardSection from "@components/sections/ContactCardSection";

const Contact: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='<span class="highlight-text">Get In Touch</span> With our Digital <span class="highlight-text">Professional Team</span>'
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
            <div className="ak-google-map ak-bg">
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </>
    );
};

export default Contact;
