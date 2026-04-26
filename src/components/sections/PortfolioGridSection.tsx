import React from "react";
import { Link } from "react-router-dom";
import projectsData from "@/dataJson/projectsData.json";
import { getImagePath } from "@/utils/imageLoader";

const portfolioItems = projectsData.gridProjects;

interface PortfolioGridSectionProps {
    disableAnimationCount?: number;
}

const PortfolioGridSection: React.FC<PortfolioGridSectionProps> = ({ 
    disableAnimationCount = 0 
}) => {
    return (
        <div className="container">
            <div className="portfolio-wapper">
                <div className="row justify-content-between align-items-center g-5 overflow-hidden">
                    {portfolioItems.map((item, index) => (
                        <div className={item.col} key={item.id}>
                            <Link to="/portfolio/portfolio-details" className="portfolio-card overflow-hidden">
                                <div 
                                    className={`portfolio-top-img ${index < disableAnimationCount ? (item.id === 5 ? "" : "ak-parallax") : "img-anim-left-show"}`}
                                    data-no-parallax={item.id === 5}
                                >
                                    <img src={getImagePath(item.image)} alt={item.title} className="w-100" />
                                </div>
                                <div className="portfolio-content">
                                    <h6 className="portfolio-title">{item.title}</h6>
                                    <div className="portfolio-btn">
                                        <i className="flaticon-up-right-arrow"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="ak-center">
                    <Link to="/portfolio" className="circle-btn style-1 circle-btn-anim">
                        <span className="text text-uppercase">
                            Load More
                            <br />
                            Project
                            <i className="flaticon-up-right-arrow"></i>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGridSection;
