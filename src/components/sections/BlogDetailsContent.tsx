import React from "react";
import blog1 from "@assets/img/blogs/blog-detail-1.png";
import blog2 from "@assets/img/blogs/blog-detail-2.png";
import blog3 from "@assets/img/blogs/blog-detail-3.png";
import blog4 from "@assets/img/blogs/blog-detail-4.png";
import person1 from "@assets/img/blogs/comment-person-1.png";
import quoteBg from "@assets/img/bg/quote-text-bg.png";

const BlogDetailsContent: React.FC = () => {
    return (
        <div className="container blogs-details-wapper">
            <div className="blogs-details">
                <h2 className="blogs-details-main-title">
                    Partnering for Success Choosing the Right Digital Agency
                </h2>
                <div className="ak-height-30 ak-height-lg-30"></div>
                <p className="blogs-details-desp-text">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using 'Content here, content here.
                </p>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="row gy-4">
                    <div className="col-md-6 ak-parallax">
                        <img src={blog1} className="blogs-details-img h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-6 ak-parallax">
                        <img src={blog2} className="blogs-details-img h-100 w-100" alt="..." />
                    </div>
                </div>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="blogs-details-quote-text ak-parallax">
                    <img src={quoteBg} alt="..." />
                    <p>
                        <span className="dot-text"></span>
                        “Making it look like readable web 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have evolved over
                        the years, sometimes by accident, sometimes on purpose (injected
                        humour and the like) web page editors now.”
                    </p>
                </div>
                <div className="ak-height-50 ak-height-lg-50"></div>
                <div className="row gy-4">
                    <div className="col-md-4 ak-parallax">
                        <img src={blog3} className="blogs-details-img h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-8 ak-parallax">
                        <img src={blog4} className="blogs-details-img h-100 w-100" alt="..." />
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
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by
                                injected humour.
                            </p>
                            <button type="submit" className="comment-reply-btn">Reply Comment</button>
                        </div>
                    </div>
                    <div className="ak-height-80 ak-height-lg-50"></div>
                    <div className="contact-form-wapper style-2">
                        <h5 className="contact-title">Post Your Comment</h5>
                        <div className="ak-height-30 ak-height-lg-30"></div>
                        <form onSubmit={(e) => e.preventDefault()}>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsContent;
