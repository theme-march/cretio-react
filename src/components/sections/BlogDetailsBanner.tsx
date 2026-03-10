import React from "react";
import bannerImg from "@assets/img/team/td-main-img.png";

const BlogDetailsBanner: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="portfolio-main-img ak-center ak-parallax">
                <img src={bannerImg} className="td-main-img" alt="..." />
            </div>
        </>
    );
};

export default BlogDetailsBanner;
