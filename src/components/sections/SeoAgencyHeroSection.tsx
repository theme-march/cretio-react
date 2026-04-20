import React from "react";
import seoHeroImg from "@assets/img/hero/seo-agency.png";

const SeoAgencyHeroSection: React.FC = () => {
    return (
        <section className="seo-agency-hero-area ak-parallax">
            <img src={seoHeroImg} className="ak-bg seo-agency-hero-area-bg" alt="SEO Agency Hero Background" />
            <div className="container">
                <div className="seo-agency-wrapper">
                    <div className="sa-title-box">
                        <div className="title-anim" data-delay="0.1">
                            <h1 className="sa-title anim-line-words">
                                <span className="highlight">Skyrocket Your</span>
                            </h1>
                            <h1 className="sa-title anim-line-words">Website Traffic</h1>
                        </div>
                        <div className="sa-animated-rounded-badge fade-animation" data-ease="bounce.out" data-delay="1.7" data-direction="top">
                            <div className="rounded-text rotating">
                                <svg viewBox="0 0 200 200">
                                    <path
                                        id="textPath"
                                        d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                                        transform="translate(100,100)"
                                        fill="none"
                                        strokeWidth="0"
                                    ></path>
                                    <g fontSize="22.1px">
                                        <text textAnchor="start">
                                            <textPath className="coloring" xlinkHref="#textPath" startOffset="0%">
                                                DIGITAL PRESENCE CREATIVITY & INNOVATION I N &nbsp;
                                            </textPath>
                                        </text>
                                    </g>
                                </svg>
                            </div>
                            <div className="ms-ceneter-text"></div>
                        </div>
                    </div>
                    <div className="sa-contact-info fade-animation" data-delay="1.2">
                        <div className="sa-email">
                            <p>Say hello!</p>
                            <a href="mailto:info@email.com">info@email.com</a>
                        </div>
                        <div className="sa-phone">
                            <p>Say hello!</p>
                            <a href="tel:+14065550120">(406) 555-0120</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sa-left-text-content">
                <p className="sa-left-text">901 N Pitt Str., Suite 170 Alexandria, USA</p>
            </div>
            <ul className="sa-social-links">
                <li className="sa-social-item"><a href="#" aria-label="Follow us on Facebook">FACEBOOK </a></li>
                <li className="sa-social-item"><a href="#" aria-label="Follow us on Instagram">INSTAGRAM </a></li>
                <li className="sa-social-item"><a href="#" aria-label="Follow us on LinkedIn">LINKEDIN </a></li>
                <li className="sa-social-item"><a href="#" aria-label="Follow us on Twitter">TWITTER </a></li>
            </ul>
        </section>
    );
};

export default SeoAgencyHeroSection;
