import React from "react";
import { Link } from "react-router-dom";
import projectsData from "../../dataJson/projectsData.json";
import { getImagePath } from "../../utils/imageLoader";

const PortfolioSection: React.FC = () => {
    const portfolioItems = projectsData.mainProjects.slice(0, 4);

    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="portfolio-content">
                <div className="d-flex flex-lg-column flex-column-reverse">
                    <div className="portfolio-content-top">
                        {portfolioItems.slice(0, 2).map((item) => (
                            <Link to="/portfolio/portfolio-details" className="portfolio-card style-1" key={item.id}>
                                <div className="portfolio-img img-anim-left-show">
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
                        ))}
                    </div>
                    <div className="ak-height-lg-60"></div>

                    <h2 className="portfolio-title-content">
                        Our <span className="highlight">Exceptional</span> Sucessfull
                        <br />
                        <span className="highlight style-2">Projects</span>
                    </h2>
                    <div className="ak-height-lg-80"></div>
                </div>
                <div className="ak-height-lg-60"></div>
                <div className="portfolio-content-bottom">
                    {portfolioItems.slice(2, 4).map((item, index) => (
                        <Link to="/portfolio/portfolio-details" className={`portfolio-card style-1 ${index === 0 ? "mb-0 mb-md-5" : ""}`} key={item.id}>
                            <div className="portfolio-img img-anim-left-show">
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
