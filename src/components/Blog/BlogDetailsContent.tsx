import React, { useState } from "react";
import blog1 from "@assets/img/blogs/blog-detail-1.png";
import blog2 from "@assets/img/blogs/blog-detail-2.png";
import blog3 from "@assets/img/blogs/blog-detail-3.png";
import blog4 from "@assets/img/blogs/blog-detail-4.png";
import person1 from "@assets/img/blogs/comment-person-1.png";
import quoteBg from "@assets/img/bg/quote-text-bg.png";

interface BlogDetailsContentProps {
    disableParallax?: boolean;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ disableParallax = false }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };
    return (
        <div className="container blogs-details-wapper">
            <div className="blogs-details">
                <h2 className="blogs-details-main-title">
                    Partnering for Success Choosing the Right Digital Agency
                </h2>
                <div className="ak-height-30 ak-height-lg-30"></div>
                <p className="blogs-details-desp-text">
                    Choosing the right digital agency is a critical decision that can define your brand's future. It's not just about finding a service provider, but a strategic partner who understands your vision and has the technical expertise to turn it into reality.
                </p>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="row gy-4">
                    <div className={`col-md-6 ${disableParallax ? "" : "ak-parallax"}`}>
                        <img src={blog1} className="blogs-details-img h-100 w-100" alt="Blog detail feature image 1" />
                    </div>
                    <div className={`col-md-6 ${disableParallax ? "" : "ak-parallax"}`}>
                        <img src={blog2} className="blogs-details-img h-100 w-100" alt="Blog detail feature image 2" />
                    </div>
                </div>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className={`blogs-details-quote-text ${disableParallax ? "" : "ak-parallax"}`}>
                    <img src={quoteBg} alt="Quote decoration background" />
                    <p>
                        <span className="dot-text"></span>
                        “Success in the digital landscape isn't discovered; it's built through consistent innovation, meticulous data analysis, and a relentless focus on creating authentic user experiences that resonate.”
                    </p>
                </div>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="row gy-4">
                    <div className={`col-md-4 ${disableParallax ? "" : "ak-parallax"}`}>
                        <img src={blog3} className="blogs-details-img h-100 w-100" alt="Blog detail showcase image 1" />
                    </div>
                    <div className={`col-md-8 ${disableParallax ? "" : "ak-parallax"}`}>
                        <img src={blog4} className="blogs-details-img h-100 w-100" alt="Blog detail showcase image 2" />
                    </div>
                </div>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="d-flex gap-3 align-items-center">
                    <p className="ak-black-color">Share:</p>
                    <div className="social-icon">
                        <a href="https://facebook.com/" className="icon style-2 dark-mode" aria-label="Share on Facebook" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a>
                        <a href="https://youtube.com/" className="icon style-2 dark-mode" aria-label="Share on YouTube" target="_blank" rel="noopener noreferrer"><i className="flaticon-video"></i></a>
                        <a href="https://linkedin.com/" className="icon style-2 dark-mode" aria-label="Share on LinkedIn" target="_blank" rel="noopener noreferrer"><i className="flaticon-linkedin"></i></a>
                        <a href="https://twitter.com/" className="icon style-2 dark-mode" aria-label="Share on Twitter" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a>
                    </div>
                </div>
                <div className="ak-height-100 ak-height-lg-50"></div>
                <div className="comments-box-content">
                    <div className="comments-content">
                        <h5 className="comments-title">Comments</h5>
                        <div className="comments-info">
                            <div className="person-info">
                                <img className="person-img" src={person1} alt=".." />
                                <div>
                                    <h6 className="person-name">Mostahid Ahmed</h6>
                                    <p className="person-title">2 hour ago</p>
                                </div>
                            </div>
                            <p className="person-desp">
                                Such a great insight! Finding an agency that actually listens to your specific business needs rather than just offering cookie-cutter solutions is rare.
                            </p>
                            <div className="d-flex gap-1">
                                <button type="submit" className="comment-reply-btn">
                                    Reply Comment
                                </button>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M11.9995 9.62567H5.80945L8.52945 6.90567C8.81945 6.61567 8.81945 6.13567 8.52945 5.84567C8.23945 5.55567 7.75945 5.55567 7.46945 5.84567L3.46945 9.84567C3.17945 10.1357 3.17945 10.6157 3.46945 10.9057L7.46945 14.9057C7.61945 15.0557 7.80945 15.1257 7.99945 15.1257C8.18945 15.1257 8.37945 15.0557 8.52945 14.9057C8.81945 14.6157 8.81945 14.1357 8.52945 13.8457L5.80945 11.1257H11.9995C14.8995 11.1257 17.2495 13.4857 17.2495 16.3757V18.3757C17.2495 18.7857 17.5895 19.1257 17.9995 19.1257C18.4095 19.1257 18.7495 18.7857 18.7495 18.3757V16.3757C18.7495 12.6557 15.7195 9.62567 11.9995 9.62567Z" fill="#FF4A23"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="ak-height-80 ak-height-lg-50"></div>
                    <div className="contact-form-wapper style-2">
                        <h5 className="contact-title">Post Your Comment</h5>
                        <div className="ak-height-30 ak-height-lg-30"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label htmlFor="blog-comment-name" className="visually-hidden">Name</label>
                                    <input required id="blog-comment-name" type="text" className="input-text style-2" placeholder="Name" name="name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="blog-comment-email" className="visually-hidden">Email</label>
                                    <input required id="blog-comment-email" type="email" className="input-text style-2" placeholder="Email" name="email" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="blog-comment-message" className="visually-hidden">What's on your mind</label>
                                    <textarea id="blog-comment-message" name="message" className="textarea-text style-2" rows={5} placeholder="What's on your mind..."></textarea>
                                </div>
                            </div>
                            <div className="ak-height-40 ak-height-lg-30"></div>
                             <button type="submit" className="circle-btn style-1 circle-btn-anim">
                                <span className="text text-uppercase">Post <i className="flaticon-up-right-arrow"></i><br />Comments</span>
                            </button>
                            {isSubmitted && (
                                <div className="mt-3 text-success fade-animation">
                                    Your comment has been posted successfully! It will appear after moderation.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsContent;
