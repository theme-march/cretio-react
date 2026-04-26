import React from "react";
import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageLoader";
import SectionHeading from "@components/Common/SectionHeading";
import blogsData from "../../dataJson/blogsData.json";

interface BlogItem {
    id: number;
    image: string;
    author: string;
    date: string;
    title: string;
    description: string;
}

const homeBlogs = blogsData.slice(0, 4) as BlogItem[];

const HomeNewsSection: React.FC = () => {
    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">News</span>'
                    description="Discover the latest industry news, expert insights, and essential updates from our creative digital agency."
                    caption="Recent News"
                    variant="style-1"
                    titleAnimation="text-animation"
                    titleDirection="textTop"
                    rightAnimation="fade-animation"
                    rightDirection="bottom"
                    rightDelay="0.3"
                    captionDelay="0.3"
                />
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="blogs-content fade-animation">
                    {homeBlogs.map((blog) => (
                        <Link to="/blog/blog-details" className="blog-card" key={blog.id}>
                            <div className="blog-image">
                                <img src={getImagePath(blog.image)} alt={blog.title} />
                            </div>
                            <div className="blog-info">
                                <div className="blog-heading">
                                    <div className="meta-info">
                                        <span className="admin-tag">{blog.author}</span>
                                        <span className="date-tag">{blog.date}</span>
                                    </div>
                                    <h4 className="blog-title">{blog.title}</h4>
                                    <p className="blog-description">{blog.description}</p>
                                </div>
                                <div className="blog-card-btn">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeNewsSection;
