import React, { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import projectsData from "../../dataJson/projectsData.json";
import { getImagePath } from "../../utils/imageLoader";

const categories = projectsData.categories;
const portfolioItems = projectsData.mainProjects;

const PortfolioIsotopeSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("*");
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredItems = portfolioItems.filter(item => {
        if (activeFilter === "*") return true;
        const filterClass = activeFilter.replace(".", "");
        return item.tags.includes(filterClass);
    });

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {});
        if (containerRef.current) {
            ctx.add(() => {
                gsap.fromTo(
                    ".isotope-item",
                    {
                        opacity: 0,
                        scale: 0.3,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.35,
                        stagger: 0.05,
                        ease: "power2.out",
                        clearProps: "all"
                    }
                );
            });
        }
        return () => ctx.revert();
    }, [activeFilter]);

    return (
        <section className="container">
            <div className="row">
                <div className="text-center">
                    <div className="ak-section-caption mb-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span className="ms-2"> 426+ Projects </span>
                    </div>
                    <div className="ak-section-heading ak-style-1 justify-content-center">
                        <div className="ak-section-left">
                            <h2 className="ak-section-title text-animation text-center">
                                Our <span className="highlight">Exceptional</span> Sucessful <br />
                                Industrial <span className="highlight">Projects</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="isotop-item-menu">
                        {categories.map((cat) => (
                            <li
                                key={cat.name}
                                className={`item-title ${activeFilter === cat.filter ? "is-clicked" : ""}`}
                                onClick={() => setActiveFilter(cat.filter)}
                            >
                                {cat.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row justify-content-between g-5 isotop-items-portfolio" ref={containerRef}>
                {filteredItems.map((item) => (
                    <div className={`col-12 isotope-item ${item.colClass} ${item.tags}`} key={item.id}>
                        {item.isServiceStyle ? (
                            <div className="dm-service-items style2 m-0 h-100">
                                <Link to="/portfolio/portfolio-details" className="width-2 service-item h-100">
                                    <img src={getImagePath(item.image)} alt={item.title} />
                                    <div className="service-hover-info">
                                        <div className="left-content">
                                            <p className="mini-title">Brand</p>
                                            <h5 className="title">{item.title}</h5>
                                        </div>
                                        <div className="service-icon-btn">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M18.0635 2.5788H3.06348C2.71848 2.5788 2.43848 2.8588 2.43848 3.2038C2.43848 3.5488 2.71848 3.8288 3.06348 3.8288H16.5544L2.6216 17.7619C2.37754 18.006 2.37754 18.4016 2.6216 18.6457C2.74379 18.7679 2.90348 18.8288 3.06348 18.8288C3.22348 18.8288 3.38348 18.7679 3.50535 18.6457L17.4385 4.71255V18.2038C17.4385 18.5488 17.7185 18.8288 18.0635 18.8288C18.4085 18.8288 18.6885 18.5488 18.6885 18.2038V3.2038C18.6885 2.8588 18.4085 2.5788 18.0635 2.5788Z" fill="#FF4A23" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <Link to="/portfolio/portfolio-details" className="portfolio-card style-1 w-100">
                                <div className="portfolio-img">
                                    <img src={getImagePath(item.image)} alt={item.title} />
                                </div>
                                <div className="portfolio-info">
                                    <div className="portfolio-subtitle">{item.category}</div>
                                    <div className="portfolio-text style-1">
                                        <h4 className="portfolio-title">{item.title}</h4>
                                        <div className="portfolio-btn">
                                            <i className="flaticon-up-right-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PortfolioIsotopeSection;
