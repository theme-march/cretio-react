import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import blogsData from "../../dataJson/blogsData.json";
import { getImagePath } from "../../utils/imageLoader";

const blogPosts = blogsData.slice(0, 4);

const BlogPageMainSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        let ctx = gsap.context((self) => {
            const circleButtons = gsap.utils.toArray<HTMLElement>(".circle-btn-anim");
            circleButtons.forEach((btn) => {
                const strength = 40;
                const text = btn.querySelector(".text");

                const handleMouseMove = (event: MouseEvent) => {
                    const bounding = btn.getBoundingClientRect();
                    const newX = ((event.clientX - bounding.left) / btn.offsetWidth) - 0.5;
                    const newY = ((event.clientY - bounding.top) / btn.offsetHeight) - 0.5;
                    
                    gsap.to(btn, {
                        x: newX * strength,
                        y: newY * strength,
                        ease: "power4.out",
                    });

                    if (text) {
                        gsap.to(text, {
                            x: newX * (strength / 2),
                            y: newY * (strength / 2),
                            ease: "power4.out",
                        });
                    }
                };

                const handleMouseLeave = () => {
                    gsap.to(btn, { x: 0, y: 0, ease: "power2.out" });
                    if (text) {
                        gsap.to(text, { x: 0, y: 0, ease: "power2.out" });
                    }
                };

                btn.addEventListener("mousemove", handleMouseMove as EventListener);
                btn.addEventListener("mouseleave", handleMouseLeave as EventListener);

                self.add(() => {
                    return () => {
                        btn.removeEventListener("mousemove", handleMouseMove as EventListener);
                        btn.removeEventListener("mouseleave", handleMouseLeave as EventListener);
                    };
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef}>
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
                    <Link to="/blog" className="circle-btn circle-btn-anim">
                        <span className="text text-uppercase">
                            Load More<br />
                            Articles
                            <span> <i className="flaticon-up-right-arrow"></i></span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogPageMainSection;
