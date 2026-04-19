import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { getImagePath } from "../../utils/imageLoader";
import footerBg from "@assets/img/bg/footer-bg.png";
import footerBgShape from "@assets/img/bg/footer-bgshape.png";
import siteSettings from "../../dataJson/siteSettings.json";
import { splitText } from "../../utils/textSplitter";

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".footer-cta-title, .footer-cta-title-two", {
                y: "100%",
                duration: 1.5,
                stagger: 0.3,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".footer-cta",
                    start: "top 90%",
                },
            });

            const footerTitleTwo = footerRef.current?.querySelector(".footer-cta-title-two") as HTMLElement;
            if (footerTitleTwo) {
                const splitRes = splitText(footerTitleTwo, "chars");
                
                const footerTimeline = gsap.timeline({ delay: 1, repeat: -1, yoyo: true });
                footerTimeline.from(splitRes.chars, {
                    duration: 2.5,
                    x: -10,
                    autoAlpha: 0,
                    stagger: 0.02,
                    ease: "elastic.out(1, 0.3)",
                });
            }
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="ak-footer style-1 ak-bg"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className="ak-height-120 ak-height-lg-50"></div>
            <img
                src={footerBgShape}
                className="ak-bg footer-bgshape"
                alt="bgshape"
            />
            <div className="container">
                <div className="ak-footer-container">
                    <div className="footer-cta">
                        <div className="footer-cta-info ak-mask-text">
                            <h1 className="footer-cta-title">{siteSettings.cta.title}</h1>
                            <h2 className="footer-cta-title-two"><span>work</span> Together</h2>
                        </div>
                        <div className="footer-btn-email">
                            <div className="footer-btn-content">
                                <Link to={siteSettings.cta.btnLink} className="footer-btn circle-btn-anim">
                                    <span className="text">
                                        {siteSettings.cta.btnText.split(' ')[0]} <i className="flaticon-up-right-arrow"></i>
                                        <br />
                                        <span>{siteSettings.cta.btnText.split(' ')[1]}</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="footer-email">
                                <p className="email-short-title">{siteSettings.cta.emailTitle}</p>
                                <a href={`mailto:${siteSettings.cta.email}`}> {siteSettings.cta.email}</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="about-company">
                            <img
                                className="footer-logo"
                                src={getImagePath(siteSettings.logos.footer)}
                                alt="Logo"
                            />
                            <p className="about-company-desp" dangerouslySetInnerHTML={{ __html: siteSettings.company.description }}></p>
                        </div>

                        <div className="address-phn">
                            <a href={siteSettings.contact.phoneLink} className="phn">
                                <span>
                                    <i className="flaticon-telephone"> </i> 
                                </span>
                                {siteSettings.contact.phone}
                            </a>
                            <p className="address">{siteSettings.contact.address}</p>
                        </div>

                        <div className="footer-list-content">
                            <ul className="footer-list-menu">
                                {siteSettings.menu.map((item, index) => (
                                    <li key={index}><Link to={item.href}>{item.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-95 ak-height-lg-50"></div>
            <div className="copy-right-content">
                <div className="container">
                    <div className="ak-space-between">
                        <div className="social-icon">
                            {siteSettings.socials.map((social, index) => (
                                <a key={index} href={social.link} className="icon">
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                        <p className="copy-right-text" dangerouslySetInnerHTML={{ __html: siteSettings.copyright }}></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
