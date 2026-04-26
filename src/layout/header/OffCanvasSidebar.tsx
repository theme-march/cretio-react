import React from "react";
import { Link } from "react-router-dom";
import commonData from "../../dataJson/commonData.json";
import darkLogo from "@assets/img/logo/dark-logo.svg";
import whiteLogo from "@assets/img/logo/white-logo.svg";
import gallery1 from "@assets/img/gallery/mini-gallery-1.png";
import gallery2 from "@assets/img/gallery/mini-gallery-2.png";
import gallery3 from "@assets/img/gallery/mini-gallery-3.png";
import gallery4 from "@assets/img/gallery/mini-gallery-4.png";
import gallery5 from "@assets/img/gallery/mini-gallery-5.png";
import gallery6 from "@assets/img/gallery/mini-gallery-6.png";

const company = {
    description: "We thrive on creativity and innovation. Our team is constantly exploring new ideas and approaches to ensure your digital presence is fresh.",
};

const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const OffCanvasSidebar: React.FC = () => {
    return (
        <div
            className="offcanvas offcanvas-end style-1"
            tabIndex={-1}
            id="offcanvasRight"
        >
            <div className="offcanvas-header">
                <button
                    type="button"
                    className="btn-close btn-close-black ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <div className="offcanvas-body-coustom-style">
                    <div className="offcanvas-logo-content">
                        <Link className="ak-site_branding dark-logo" to="/">
                            <img src={darkLogo} alt="Logo" />
                        </Link>
                        <Link className="ak-site_branding white-logo" to="/">
                            <img src={whiteLogo} alt="Logo" />
                        </Link>
                    </div>
                    <p className="desp">
                        {company.description}
                    </p>
                    <div className="row row-cols-3 g-3">
                        {gallery.map((img: string) => (
                            <div className="col" key={img}>
                                <img src={img} className="img-fluid" alt="Gallery item" />
                            </div>
                        ))}
                    </div>

                    <div className="offcanvas-footer-contant">
                        <p className="short-title">Say hello!</p>
                        <a className="email" href={`mailto:${commonData.contactInfo.email}`}>{commonData.contactInfo.email}</a>
                        <a className="email" href={commonData.contactInfo.phoneLink}>{commonData.contactInfo.phone}</a>
                        <span>
                            {commonData.contactInfo.address}
                        </span>
                        <div className="ak-height-25 ak-height-lg-25"></div>
                        <p className="short-title">Social:</p>
                        <div className="social-icon">
                            {commonData.socialLinks.map((social) => (
                                <a key={social.title} href={social.link} className="icon style-2 dark-mode" target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.title}`}>
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                        <div className="ak-height-40 ak-height-lg-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasSidebar;
