import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import navItems from "../../dataJson/navitemslist.json";
import { getImagePath } from "../../utils/imageLoader";
import OffCanvasSidebar from "./OffCanvasSidebar";

const logos = {
    dark: "src/assets/img/logo/dark-logo.svg",
    white: "src/assets/img/logo/white-logo.svg",
};


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
                                    <img src={getImagePath(logos.dark)} alt="Logo" />
                                </Link>
                                <Link className="ak-site_branding white-logo" to="/">
                                    <img src={getImagePath(logos.white)} alt="Logo" />
                                </Link>
                            </div>
                            <div className="ak-main-header-center">
                                <div className="ak-nav ak-medium">
                                    <ul className={`ak-nav_list ${mobileMenuOpen ? "ak-show" : ""}`}>
                                        {navItems.map((item) => (
                                            <li key={item.title} className={item.subMenu ? `menu-item-has-children ${openSubmenus[item.title.toLowerCase()] ? 'active' : ''}` : ''}>
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
                                                            {item.subMenu.map((sub) => (
                                                                <li key={sub.title}><Link to={sub.href}>{sub.title}</Link></li>
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

            <OffCanvasSidebar />
        </>
    );
};

export default Header;
