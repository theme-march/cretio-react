import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "@components/common/SectionHeading";

import blog1 from "@assets/img/blogs/blog-1.png";
import blog2 from "@assets/img/blogs/blog-2.png";
import blog3 from "@assets/img/blogs/blog-3.png";
import blog4 from "@assets/img/blogs/blog-4.png";

const blogPosts = [
    {
        image: blog1,
        author: "Alex Johnson",
        date: "01/07/2024",
        title: "Partnering for Success Choosing the Right Digital Agency",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry and typesetting.",
    },
    {
        image: blog2,
        author: "Taylor Smith",
        date: "15/08/2023",
        title: "Building the Future How Digital Agencies Drive Innovation",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry and typesetting.",
    },
    {
        image: blog3,
        author: "Jamie Lee",
        date: "02/04/2024",
        title: "Digital Mastery How Agencies Turn Ideas into Reality",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry and typesetting.",
    },
    {
        image: blog4,
        author: "Casey Miller",
        date: "09/08/2024",
        title: "The Art of Digital Marketing Agency Strategies for Growth",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been industry and typesetting.",
    },
];

interface BlogSectionProps {
    showHeading?: boolean;
    showLoadMore?: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ showHeading = true, showLoadMore = false }) => {
    return (
        <section>
            {showHeading && (
                <div className="container">
                    <div className="ak-height-150 ak-height-lg-80"></div>
                    <SectionHeading
                        title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">News</span>'
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                        caption="Recent News"
                    />
                    <div className="ak-height-75 ak-height-lg-50"></div>
                </div>
            )}
            <div className="container">
                <div className="blogs-content fade-animation">
                    {blogPosts.map((post, index) => (
                        <Link to="/blog-details" className="blog-card" key={index}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
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
                            <a href="#" className="circle-btn circle-btn-anim">
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
