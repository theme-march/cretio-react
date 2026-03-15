import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import darkLogo from "@assets/img/logo/dark-logo.svg";
import whiteLogo from "@assets/img/logo/white-logo.svg";
import miniGallery1 from "@assets/img/gallery/mini-gallery-1.png";
import miniGallery2 from "@assets/img/gallery/mini-gallery-2.png";
import miniGallery3 from "@assets/img/gallery/mini-gallery-3.png";
import miniGallery4 from "@assets/img/gallery/mini-gallery-4.png";
import miniGallery5 from "@assets/img/gallery/mini-gallery-5.png";
import miniGallery6 from "@assets/img/gallery/mini-gallery-6.png";

const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});

    const toggleSubmenu = (e: React.MouseEvent, key: string) => {
        e.preventDefault();
        setOpenSubmenus(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Sticky header logic
            if (currentScrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            // Hide/Show logic
            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header
                className={`ak-site_header ak-style1 ak-sticky_header ${isSticky ? "ak-sticky_active" : ""} ${!isVisible ? "ak-header-hide" : ""
                    }`}
            >
                <div className="ak-main_header">
                    <div className="container container-customize">
                        <div className="ak-main_header_in">
                            <div className="ak-main-header-left">
                                <Link className="ak-site_branding dark-logo" to="/">
                                    <img src={darkLogo} alt="Logo" />
                                </Link>
                                <Link className="ak-site_branding white-logo" to="/">
                                    <img src={whiteLogo} alt="Logo" />
                                </Link>
                            </div>
                            <div className="ak-main-header-center">
                                <div className="ak-nav ak-medium">
                                    <ul className={`ak-nav_list ${mobileMenuOpen ? "ak-show" : ""}`}>
                                        <li className={`menu-item-has-children ${openSubmenus['home'] ? 'active' : ''}`}>
                                            <Link to="/">Home</Link>
                                            <span 
                                                className={`ak-munu_dropdown_toggle ${openSubmenus['home'] ? 'active' : ''}`}
                                                onClick={(e) => toggleSubmenu(e, 'home')}
                                            ></span>
                                            <ul style={{ display: openSubmenus['home'] ? 'block' : '' }}>
                                                <li><Link to="/">Digital Agency</Link></li>
                                                <li><Link to="/marketing-agency">Marketing Agency</Link></li>
                                                <li><Link to="/design-company">Design Company</Link></li>
                                                <li><Link to="/creative-portfolio">Creative Portfolio</Link></li>
                                                <li><Link to="/minimal-studio">Minimal Studio</Link></li>
                                                <li><Link to="/seo-agency">SEO Agency</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/about">About</Link></li>
                                        <li className={`menu-item-has-children ${openSubmenus['services'] ? 'active' : ''}`}>
                                            <Link to="/services">Services</Link>
                                            <span 
                                                className={`ak-munu_dropdown_toggle ${openSubmenus['services'] ? 'active' : ''}`}
                                                onClick={(e) => toggleSubmenu(e, 'services')}
                                            ></span>
                                            <ul style={{ display: openSubmenus['services'] ? 'block' : '' }}>
                                                <li><Link to="/services">Services</Link></li>
                                                <li><Link to="/service-details">Services Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`menu-item-has-children ${openSubmenus['portfolio'] ? 'active' : ''}`}>
                                            <Link to="/portfolio">Portfolio</Link>
                                            <span 
                                                className={`ak-munu_dropdown_toggle ${openSubmenus['portfolio'] ? 'active' : ''}`}
                                                onClick={(e) => toggleSubmenu(e, 'portfolio')}
                                            ></span>
                                            <ul style={{ display: openSubmenus['portfolio'] ? 'block' : '' }}>
                                                <li><Link to="/portfolio">Portfolio</Link></li>
                                                <li><Link to="/portfolio-details">Portfolio Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`menu-item-has-children ${openSubmenus['pages'] ? 'active' : ''}`}>
                                            <Link to="#">Pages</Link>
                                            <span 
                                                className={`ak-munu_dropdown_toggle ${openSubmenus['pages'] ? 'active' : ''}`}
                                                onClick={(e) => toggleSubmenu(e, 'pages')}
                                            ></span>
                                            <ul style={{ display: openSubmenus['pages'] ? 'block' : '' }}>
                                                <li><Link to="/blog">Blog</Link></li>
                                                <li><Link to="/blog-details">Blog Details</Link></li>
                                                <li><Link to="/team">Team</Link></li>
                                                <li><Link to="/pricing">Pricing</Link></li>
                                                <li><Link to="/faq">Faq</Link></li>
                                                <li><Link to="/404">404 Page</Link></li>
                                                <li><Link to="/coming-soon">Coming Soon</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                                    <span 
                                        className={`ak-munu_toggle ${mobileMenuOpen ? "ak-toggle_active" : ""}`}
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                    >
                                        <span></span>
                                    </span>
                                </div>

                            </div>
                            <div className="ak-main-header-right">
                                <div className="ak-space-between gap-3">
                                    <div className="btn-wrapper">
                                        <div className="button-container">
                                            <Link to="/contact" className="custom-button ak-center">
                                                <svg width="180px" height="50px" viewBox="0 0 180 50">
                                                    <rect
                                                        x="0"
                                                        y="0"
                                                        width="180"
                                                        height="50"
                                                        rx="30"
                                                        ry="30"
                                                        className="bg-line"
                                                    />
                                                    <rect
                                                        x="0"
                                                        y="0"
                                                        width="180"
                                                        height="50"
                                                        rx="30"
                                                        ry="30"
                                                        className="hl-line"
                                                    />
                                                </svg>
                                                <span>Start Project</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div
                                        className="offcanvaopen-btn"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight"
                                    >
                                        <i className="flaticon-dots-menu"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-bar-border"></div>
            </header>

            {/* Offcanvas Body */}
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
                            We thrive on creativity and innovation. Our team is constantly
                            exploring new.
                        </p>
                        <div className="row row-cols-3 g-3">
                            {[miniGallery1, miniGallery2, miniGallery3, miniGallery4, miniGallery5, miniGallery6].map((img, i) => (
                                <div className="col" key={i}>
                                    <img src={img} className="img-fluid" alt={`Gallery ${i + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className="offcanvas-footer-contant">
                            <p className="short-title">Say hello!</p>
                            <a className="email" href="mailto:info@email.com">info@email.com</a>
                            <a className="email" href="tel:(406)555-0120">(406) 555-0120</a>
                            <a href="#">
                                901 N Pitt Str., Suite 170 <br />
                                Alexandria, USA
                            </a>
                            <div className="ak-height-25 ak-height-lg-25"></div>
                            <p className="short-title">Social:</p>
                            <div className="social-icon">
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-facebook"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-video"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-linkedin"></i>
                                </a>
                                <a href="#" className="icon style-2 dark-mode">
                                    <i className="flaticon-twitter"></i>
                                </a>
                            </div>
                            <div className="ak-height-40 ak-height-lg-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
