import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@components/common/SectionHeading";

import blogsData from "../../dataJson/blogsData.json";
import { getImagePath } from "../../utils/imageLoader";

const blogPosts = blogsData.slice(0, 4);

interface BlogSectionProps {
    showHeading?: boolean;
    showLoadMore?: boolean;
    disableAnimation?: boolean;
    title?: string;
    highlightWords?: string[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
    showHeading = true, 
    showLoadMore = false, 
    disableAnimation = false,
    title = "Our Exceptional Digital Industrial News",
    highlightWords = ["Exceptional", "News"],
}) => {
    return (
        <section>
            {showHeading && (
                <div className="container">
                    <div className="ak-height-150 ak-height-lg-80"></div>
                    <SectionHeading
                        title={title}
                        highlightWords={highlightWords}
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                        caption="Recent News"
                        disableDespAnimation={true}
                    />
                    <div className="ak-height-75 ak-height-lg-50"></div>
                </div>
            )}
            <div className="container">
                <div className={`blogs-content ${disableAnimation ? "" : "fade-animation"}`}>
                    {blogPosts.map((post, index) => (
                        <Link to="/blog/blog-details" className="blog-card" key={index}>
                            <div className="blog-image">
                                <img src={getImagePath(post.image)} alt={post.title} />
                            </div>
                            <div className="blog-info">
                                <div className="blog-heading">
                                    <div className="meta-info">
                                        <span className="admin-tag">{post.author}</span>
                                        <span className="date-tag">{post.date}</span>
                                    </div>
                                    <h4 className="blog-title">{post.title}</h4>
                                    <p className="blog-description">{post.description}</p>
                                </div>
                                <div className="blog-card-btn">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {showLoadMore && (
                    <>
                        <div className="ak-height-100 ak-height-lg-50"></div>
                        <div className="ak-center">
                            <a href="javascript:void(0)" className="circle-btn circle-btn-anim">
                                <span className="text text-uppercase">
                                    Load More<br />
                                    Articles
                                    <i className="flaticon-up-right-arrow"></i>
                                </span>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};


export default BlogSection;
