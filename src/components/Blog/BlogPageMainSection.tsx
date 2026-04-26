import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../../dataJson/blogsData.json";
import { getImagePath } from "../../utils/imageLoader";

const blogPosts = blogsData.slice(0, 4);

const BlogPageMainSection: React.FC = () => {
    return (
        <section>
            <div className="container">
                <div className="blogs-content">
                    {blogPosts.map((post) => (
                        <Link to="/blog/blog-details" className="blog-card" key={post.title}>
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
                <div className="ak-height-100 ak-height-lg-50"></div>
                <div className="ak-center">
                    <button type="button" className="circle-btn circle-btn-anim border-0 bg-transparent p-0">
                        <span className="text text-uppercase">
                            Load More<br />
                            Articles
                            <i className="flaticon-up-right-arrow"></i>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogPageMainSection;
