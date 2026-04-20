import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import navItems from "../../dataJson/navitemslist.json";
import siteSettings from "../../dataJson/siteSettings.json";
import { getImagePath } from "../../utils/imageLoader";

const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
    const location = useLocation();

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

            if (currentScrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            if (window.innerWidth <= 991) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 300) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        setMobileMenuOpen(false);
        setOpenSubmenus({});
    }, [location]);


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
                                    <img src={getImagePath(siteSettings.logos.dark)} alt="Logo" />
                                </Link>
                                <Link className="ak-site_branding white-logo" to="/">
                                    <img src={getImagePath(siteSettings.logos.white)} alt="Logo" />
                                </Link>
                            </div>
                            <div className="ak-main-header-center">
                                <div className="ak-nav ak-medium">
                                    <ul className={`ak-nav_list ${mobileMenuOpen ? "ak-show" : ""}`}>
                                        {navItems.map((item, index) => (
                                            <li key={index} className={item.subMenu ? `menu-item-has-children ${openSubmenus[item.title.toLowerCase()] ? 'active' : ''}` : ''}>
                                                <Link to={item.href}>{item.title}</Link>
                                                {item.subMenu && (
                                                    <>
                                                        <button 
                                                            className={`ak-munu_dropdown_toggle ${openSubmenus[item.title.toLowerCase()] ? 'active' : ''}`}
                                                            onClick={(e) => toggleSubmenu(e, item.title.toLowerCase())}
                                                            aria-label={`Toggle ${item.title} submenu`}
                                                            aria-expanded={openSubmenus[item.title.toLowerCase()]}
                                                        ></button>
                                                        <ul style={{ display: openSubmenus[item.title.toLowerCase()] ? 'block' : '' }}>
                                                            {item.subMenu.map((sub, subIndex) => (
                                                                <li key={subIndex}><Link to={sub.href}>{sub.title}</Link></li>
                                                            ))}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        className={`ak-munu_toggle ${mobileMenuOpen ? "ak-toggle_active" : ""}`}
                                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                        aria-label="Toggle mobile menu"
                                        aria-expanded={mobileMenuOpen}
                                    >
                                        <span></span>
                                    </button>
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
                                        role="button"
                                        aria-label="Open Sidebar Menu"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") {
                                                const el = document.getElementById('offcanvasRight');
                                                if (el) {
                                                    // This is handled by Bootstrap JS, but for accessibility we can add intent
                                                }
                                            }
                                        }}
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
                                <img src={getImagePath(siteSettings.logos.dark)} alt="Logo" />
                            </Link>
                            <Link className="ak-site_branding white-logo" to="/">
                                <img src={getImagePath(siteSettings.logos.white)} alt="Logo" />
                            </Link>
                        </div>
                        <p className="desp">
                            {siteSettings.company.description.replace(/<span>|<\/span>/g, '')}
                        </p>
                        <div className="row row-cols-3 g-3">
                            {siteSettings.gallery.map((img, i) => (
                                <div className="col" key={i}>
                                    <img src={getImagePath(img)} className="img-fluid" alt={`Gallery ${i + 1}`} />
                                </div>
                            ))}
                        </div>

                        <div className="offcanvas-footer-contant">
                            <p className="short-title">Say hello!</p>
                            <a className="email" href={`mailto:${siteSettings.cta.email}`}>{siteSettings.cta.email}</a>
                            <a className="email" href={siteSettings.contact.phoneLink}>{siteSettings.contact.phone}</a>
                            <a href="javascript:void(0)">
                                {siteSettings.contact.address}
                            </a>
                            <div className="ak-height-25 ak-height-lg-25"></div>
                            <p className="short-title">Social:</p>
                            <div className="social-icon">
                                {siteSettings.socials.map((social, index) => (
                                    <a key={index} href={social.link} className="icon style-2 dark-mode" aria-label={`Follow us on ${social.title}`}>
                                        <i className={social.icon}></i>
                                    </a>
                                ))}
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
