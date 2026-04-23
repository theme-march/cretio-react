import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { getImagePath } from "../../utils/imageLoader";
import footerBg from "@assets/img/bg/footer-bg.png";
import footerBgShape from "@assets/img/bg/footer-bgshape.png";
import { splitText } from "../../utils/textSplitter";
import { SafeText } from "../../utils/safeHtml";
import useGsapAnimations from "../../hooks/useGsapAnimations";

const logos = {
    footer: "src/assets/img/logo/footer-logo.svg",
};

const cta = {
    title: "Let's",
    titleTwo: "<span>work</span> Together",
    btnText: "Start Project",
    btnLink: "/contact",
    emailTitle: "Say hello!",
    email: "info@email.com",
};

const company = {
    description: "We thrive on creativity and <span>innovation</span>. Our team is constantly exploring new ideas and approaches to ensure your <span> digital presence </span> is fresh.",
};

const contact = {
    phone: "(406) 555-0120",
    phoneLink: "tel:(406)555-0120",
    address: "901 N Pitt Str., Suite 170 Alexandria, USA",
};

const footerMenu = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact Us", href: "/contact" },
];

const socials = [
    { title: "Facebook", icon: "flaticon-facebook", link: "#" },
    { title: "Video/YouTube", icon: "flaticon-video", link: "#" },
    { title: "LinkedIn", icon: "flaticon-linkedin", link: "#" },
];

const copyright = "© 2025 <span>Thememarch.</span> All rights reserved.";


const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null);
    useGsapAnimations(footerRef);

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
                            <h1 className="footer-cta-title">{cta.title}</h1>
                            <h2 className="footer-cta-title-two"><span>work</span> Together</h2>
                        </div>
                        <div className="footer-btn-email">
                            <div className="footer-btn-content">
                                <Link to={cta.btnLink} className="footer-btn circle-btn-anim">
                                    <span className="text">
                                        {cta.btnText.split(' ')[0]} <i className="flaticon-up-right-arrow"></i>
                                        <br />
                                        <span>{cta.btnText.split(' ')[1]}</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="footer-email">
                                <p className="email-short-title">{cta.emailTitle}</p>
                                <a href={`mailto:${cta.email}`}> {cta.email}</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="about-company">
                            <img
                                className="footer-logo"
                                src={getImagePath(logos.footer)}
                                alt="Logo"
                            />
                            <p className="about-company-desp"><SafeText text={company.description} /></p>
                        </div>

                        <div className="address-phn">
                            <a href={contact.phoneLink} className="phn">
                                <span>
                                    <i className="flaticon-telephone"> </i> 
                                </span>
                                {contact.phone}
                            </a>
                            <p className="address">{contact.address}</p>
                        </div>

                        <div className="footer-list-content">
                            <ul className="footer-list-menu">
                                {footerMenu.map((item) => (
                                    <li key={item.title}><Link to={item.href}>{item.title}</Link></li>
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
                            {socials.map((social) => (
                                <a key={social.title} href={social.link} className="icon" target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.title}`}>
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                        <p className="copy-right-text"><SafeText text={copyright} /></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
