import React from "react";
import { Link } from "react-router-dom";
import port1 from "@assets/img/portfolio/portfolio-top-img-1.png";
import port2 from "@assets/img/portfolio/portfolio-top-img-2.png";
import port3 from "@assets/img/portfolio/portfolio-top-img-3.png";
import port4 from "@assets/img/portfolio/portfolio-top-img-4.png";
import port5 from "@assets/img/portfolio/portfolio-top-img-5.png";
import port6 from "@assets/img/portfolio/portfolio-top-img-6.png";
import port7 from "@assets/img/portfolio/portfolio-top-img-7.png";

const portfolioItems = [
    { id: 1, title: "Empowering Brands Redefining Digital Excellence", img: port1, col: "col-md-5" },
    { id: 2, title: "Shaping the Future of Digital Innovation and Leadership", img: port2, col: "col-md-7" },
    { id: 3, title: "Pioneering Innovation and Redefining Standards", img: port3, col: "col-md-5" },
    { id: 4, title: "Elevating Digital Frontiers: Crafting Strategic Online Solutions", img: port4, col: "col-md-7" },
    { id: 5, title: "Driving Digital Transformation: Pioneering Strategies to Redesign Digital Horizons and Define New Standards in Online Innovation", img: port5, col: "col-md-12" },
    { id: 6, title: "Product Launch Campaign for EcoHome", img: port6, col: "col-md-6" },
    { id: 7, title: "Transforming Brands Through Strategic Initiatives", img: port7, col: "col-md-6" },
];

const PortfolioGridSection: React.FC = () => {
    return (
        <div className="container">
            <div className="portfolio-wapper">
                <div className="row justify-content-between align-items-center g-5 overflow-hidden">
                    {portfolioItems.map((item) => (
                        <div className={item.col} key={item.id}>
                            <Link to={`/portfolio/${item.id}`} className="portfolio-card overflow-hidden">
                                <div className="portfolio-top-img img-anim-left-show ak-parallax">
                                    <img src={item.img} alt={item.title} className="w-100" />
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
                    <button className="circle-btn style-1 circle-btn-anim">
                        <span className="text text-uppercase">
                            Load More
                            <br />
                            Project
                            <i className="flaticon-up-right-arrow"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGridSection;
