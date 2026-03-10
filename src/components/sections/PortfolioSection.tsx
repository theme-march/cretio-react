import React from "react";
import { Link } from "react-router-dom";
import portfolio1 from "@assets/img/portfolio/portfolio-1.png";
import portfolio2 from "@assets/img/portfolio/portfolio-2.png";
import portfolio3 from "@assets/img/portfolio/portfolio-3.png";
import portfolio4 from "@assets/img/portfolio/portfolio-4.png";

const PortfolioSection: React.FC = () => {
    return (
        <section className="container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="portfolio-content">
                <div className="d-flex flex-lg-column flex-column-reverse">
                    <div className="portfolio-content-top">
                        <Link to="/portfolio-details" className="portfolio-card style-1">
                            <div className="portfolio-img img-anim-left-show">
                                <img src={portfolio1} alt="Portfolio 1" />
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-subtitle">Google Marketing</div>
                                <div className="portfolio-text style-1">
                                    <h4 className="portfolio-title">Campaign for EcoHome Products</h4>
                                    <div className="portfolio-btn">
                                        <i className="flaticon-up-right-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/portfolio-details" className="portfolio-card style-1">
                            <div className="portfolio-img img-anim-left-show">
                                <img src={portfolio2} alt="Portfolio 2" />
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-subtitle">Google Marketing</div>
                                <div className="portfolio-text style-1">
                                    <h4 className="portfolio-title">Product Launch</h4>
                                    <div className="portfolio-btn">
                                        <i className="flaticon-up-right-arrow"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <h2 className="portfolio-title-content">
                        Our <span className="highlight">Exceptional</span> Sucessfull
                        <br />
                        <span className="highlight style-2">Projects</span>
                    </h2>
                    <div className="ak-height-lg-80"></div>
                </div>
                <div className="portfolio-content-bottom">
                    <Link to="/portfolio-details" className="portfolio-card style-1 mb-0 mb-md-5">
                        <div className="portfolio-img img-anim-left-show">
                            <img src={portfolio3} alt="Portfolio 3" />
                        </div>
                        <div className="portfolio-info">
                            <div className="portfolio-subtitle">Google Marketing</div>
                            <div className="portfolio-text style-1">
                                <h4 className="portfolio-title">Product Launch Campaign</h4>
                                <div className="portfolio-btn">
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/portfolio-details" className="portfolio-card style-1">
                        <div className="portfolio-img img-anim-left-show">
                            <img src={portfolio4} alt="Portfolio 4" />
                        </div>
                        <div className="portfolio-info">
                            <div className="portfolio-subtitle">Google Marketing</div>
                            <div className="portfolio-text style-1">
                                <h4 className="portfolio-title">
                                    Product Launch Campaign for EcoHome Products
                                </h4>
                                <div className="portfolio-btn">
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
