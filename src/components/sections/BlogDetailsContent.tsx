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
                        <a href="#" className="icon style-2 dark-mode"><i className="flaticon-facebook"></i></a>
                        <a href="#" className="icon style-2 dark-mode"><i className="flaticon-video"></i></a>
                        <a href="#" className="icon style-2 dark-mode"><i className="flaticon-linkedin"></i></a>
                        <a href="#" className="icon style-2 dark-mode"><i className="flaticon-twitter"></i></a>
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
                            <button type="submit" className="comment-reply-btn">Reply Comment</button>
                        </div>
                    </div>
                    <div className="ak-height-80 ak-height-lg-50"></div>
                    <div className="contact-form-wapper style-2">
                        <h5 className="contact-title">Post Your Comment</h5>
                        <div className="ak-height-30 ak-height-lg-30"></div>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <input required type="text" className="input-text style-2" placeholder="Name" name="name" />
                                </div>
                                <div className="col-md-6">
                                    <input required type="email" className="input-text style-2" placeholder="Email" name="email" />
                                </div>
                                <div className="col-md-12">
                                    <textarea name="massage" className="textarea-text style-2" rows={5} placeholder="What's on your mind..."></textarea>
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
