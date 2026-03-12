import React, { useState } from "react";
import { Link } from "react-router-dom";

import port1 from "@assets/img/portfolio/portfolio-1.png";
import port2 from "@assets/img/portfolio/portfolio-2.png";
import port3 from "@assets/img/portfolio/portfolio-3.png";
import port4 from "@assets/img/portfolio/portfolio-4.png";
import service2 from "@assets/img/services/dc-services-2.png";

const categories = ["All", "UI/UX", "Design", "Web App", "Branding"];

const portfolioItems = [
    { id: 1, title: "Product Launch Campaign", category: "Design", img: port3, tags: ["Design", "Web App"], colClass: "col-md-5" },
    { id: 2, title: "Product Launch Campaign for EcoHome Products", category: "Design", img: port4, tags: ["Design"], colClass: "col-md-7" },
    { id: 3, title: "Exceptional Android App Development", category: "Branding", img: service2, tags: ["Branding"], isServiceStyle: true, colClass: "col-md-12" },
    { id: 4, title: "Campaign for EcoHome Products", category: "Web App", img: port1, tags: ["UI/UX", "Web App"], colClass: "col-md-6" },
    { id: 5, title: "Product Launch", category: "UI/UX", img: port2, tags: ["UI/UX"], colClass: "col-md-6" },
];

const PortfolioIsotopeSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredItems = portfolioItems.filter((item) => {
        if (activeFilter === "All") return true;
        return item.tags.includes(activeFilter);
    });

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
                                Our <span className="highlight">Exceptional </span> Sucessful <br /> <span>Industrial </span>
                                <span className="highlight"> Projects </span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <ul className="isotop-item-menu">
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={`item-title ${activeFilter === cat ? "is-clicked" : ""}`}
                                onClick={() => setActiveFilter(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row justify-content-between g-5 isotop-items-portfolio">
                {filteredItems.map((item) => (
                    <div className={`col-12 ${item.colClass}`} key={item.id}>
                        {item.isServiceStyle ? (
                            <div className="dm-service-items style2 m-0 h-100">
                                <Link to="/portfolio-details" className="width-2 service-item h-100">
                                    <img src={item.img} alt={item.title} />
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
                            <Link to="/portfolio-details" className="portfolio-card style-1 w-100">
                                <div className="portfolio-img">
                                    <img src={item.img} alt={item.title} />
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
