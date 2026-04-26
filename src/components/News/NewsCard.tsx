import React from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageLoader";

export interface NewsItem {
    id: number;
    image: string;
    date: string;
    title: string;
    description: string;
    author: string;
}

interface NewsCardProps {
    item: NewsItem;
    isDesignCompany?: boolean;
    isSeoAgency?: boolean;
    headingVariant?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
    item, 
    isDesignCompany, 
    isSeoAgency, 
    headingVariant 
}) => {
    return (
        <Link to="/blog/blog-details" className="news-card">
            {isDesignCompany ? (
                <div className="news-img-top" style={{ overflow: "hidden" }}>
                    <img src={getImagePath(item.image)} alt={item.title} />
                </div>
            ) : (
                <div className="news-img-content">
                    <div className={`news-img-top ${!isSeoAgency ? "ak-parallax" : ""}`}>
                        <img src={getImagePath(item.image)} alt={item.title} />
                    </div>
                </div>
            )}
            <div className={`news-body ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
            >
                <h6 className="news-title">{item.title}</h6>
                <p className="news-text">{item.description} </p>
                <div className="more-btn">
                    <span className="morebtn-text"> Read More </span>
                    <span className="primary-icon-anim">
                        <i className="flaticon-up-right-arrow"></i>
                        <i className="flaticon-up-right-arrow"></i>
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
