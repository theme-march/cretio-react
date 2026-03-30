import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import footerLogo from "@assets/img/logo/footer-logo.svg";
import footerBg from "@assets/img/bg/footer-bg.png";
import footerBgShape from "@assets/img/bg/footer-bgshape.png";
import { splitText } from "../utils/textSplitter";

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

            // Character level repeating animation for "work Together"
            const footerTitleTwo = footerRef.current?.querySelector(".footer-cta-title-two") as HTMLElement;
            if (footerTitleTwo) {
                const splitRes = splitText(footerTitleTwo, "chars");
                const footerTimeline = gsap.timeline({ delay: 1.5, repeat: -1, yoyo: true });
                footerTimeline.from(splitRes.chars, {
                    duration: 2.5,
                    x: -20,
                    autoAlpha: 0,
                    stagger: 0.05,
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
                            <h1 className="footer-cta-title">Let’s</h1>
                            <h2 className="footer-cta-title-two"><span>work</span> Together</h2>
                        </div>
                        <div className="footer-btn-email">
                            <div className="footer-btn-content">
                                <Link to="/contact" className="footer-btn circle-btn-anim">
                                    <span className="text">
                                        Start <i className="flaticon-up-right-arrow"></i>
                                        <br />
                                        <span>Project</span>
                                    </span>
                                </Link>
                            </div>
                            <div className="footer-email">
                                <p className="email-short-title">Say hello!</p>
                                <a href="mailto:info@email.com"> info@email.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content">
                        <div className="about-company">
                            <img
                                className="footer-logo"
                                src={footerLogo}
                                alt="Logo"
                            />
                            <p className="about-company-desp">
                                We thrive on creativity and <span>innovation</span>. Our team is
                                constantly exploring new ideas and approaches to ensure your
                                <span> digital presence </span> is fresh.
                            </p>
                        </div>

                        <div className="address-phn">
                            <a href="tel:(406)555-0120" className="phn">
                                <span>
                                    <i className="flaticon-telephone"> </i> 
                                </span>
                                 (406) 555-012
                            </a>
                            <p className="address">901 N Pitt Str., Suite 170 Alexandria, USA</p>
                        </div>

                        <div className="footer-list-content">
                            <ul className="footer-list-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
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
                            <a href="#" className="icon">
                                <i className="flaticon-facebook"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="flaticon-video"></i>
                            </a>
                            <a href="#" className="icon">
                                <i className="flaticon-linkedin"></i>
                            </a>
                        </div>
                        <p className="copy-right-text">
                            © 2025 <span>Thememarch.</span> All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
