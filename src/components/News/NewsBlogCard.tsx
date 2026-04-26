import React from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageLoader";
import type { NewsItem } from "./NewsCard";

interface NewsBlogCardProps {
    item: NewsItem;
    headingVariant?: string;
}

const NewsBlogCard: React.FC<NewsBlogCardProps> = ({ item, headingVariant }) => {
    return (
        <Link to="/blog/blog-details" className="news-blog-card">
            <img src={getImagePath(item.image)} alt={item.title} className="news-blog-bg-img" />
            <div className="overlay"></div>
            <h6 className={`news-blog-title ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
            >
                {item.title}
            </h6>
            <p className={`news-blog-desp ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
            >
                {item.description}
            </p>
            <div className="more-btn">
                <span className="morebtn-text"> Read More </span>
                <span className="primary-icon-anim">
                    <i className="flaticon-up-right-arrow"></i>
                    <i className="flaticon-up-right-arrow"></i>
                </span>
            </div>
        </Link>
    );
};

export default NewsBlogCard;
