import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import news1 from "@assets/img/news/news-1.png";
import news2 from "@assets/img/news/news-2.png";
import news3 from "@assets/img/news/news-3.png";

const newsItems = [
    {
        id: 1,
        image: news1,
        title: "Partnering for Success Choosing the Right Master Digital Agency.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 2,
        image: news2,
        title: "Digital Mastery How Digital Agencies Turn Ideas into Digital World Reality.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 3,
        image: news3,
        title: "The Art of Digital Agency Strategies for Growth of Client Business.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 4,
        image: news1,
        title: "Partnering for Success Choosing the Right Master Digital Agency.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 5,
        image: news2,
        title: "Digital Mastery How Digital Agencies Turn Ideas into Digital World Reality.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        id: 6,
        image: news3,
        title: "The Art of Digital Agency Strategies for Growth of Client Business.",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];

interface NewsSectionProps {
    variant?: "style-1" | "style-2";
}

const NewsSection: React.FC<NewsSectionProps> = ({ variant = "style-1" }) => {
    const isStyle2 = variant === "style-2";
    const prefix = isStyle2 ? "news-blog" : "news-logs";
    const sliderClass = isStyle2 ? "ak-news-blog-slider" : "ak-news-slider";

    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <div className="ak-section-heading ak-style-1">
                    <div className="ak-section-left">
                        <h2 className="ak-section-title text-animation" data-duration="1.5">
                            <span>Our </span>
                            <span className="highlight">Exceptional</span>
                            <span> Digital Industrial </span>
                            <span className="highlight">News</span>
                        </h2>
                    </div>
                    <div className="ak-section-right fade-animation" data-direction="left" data-delay="0.35">
                        <p className="ak-section-desp">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing .
                        </p>
                        <div className="ak-section-caption">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                    <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                </svg>
                            </span>
                            <span> Recent News</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className={`${isStyle2 ? "news-blog" : "news"}-swiper-controller`}>
                <div className={`${prefix}-scrollbar`}></div>
                <div className={`${prefix}-navigation`}>
                    <div className={`${prefix}-button-prev`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                            <g clipPath={`url(#clip0_${prefix}_prev)`}>
                                <path
                                    d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z"
                                    fill="#353535"
                                />
                            </g>
                            <defs>
                                <clipPath id={`clip0_${prefix}_prev`}>
                                    <rect width="27" height="9" fill="white" transform="matrix(-1 0 0 1 27.4551 0.949463)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={`${prefix}-button-next`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                            <g clipPath={`url(#clip0_${prefix}_next)`}>
                                <path
                                    d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z"
                                    fill="#353535"
                                />
                            </g>
                            <defs>
                                <clipPath id={`clip0_${prefix}_next`}>
                                    <rect width="27" height="9" fill="white" transform="translate(0.455078 0.949463)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="container fade-animation" data-delay="0.35">
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    loop={true}
                    spaceBetween={30}
                    navigation={{
                        nextEl: `.${prefix}-button-next`,
                        prevEl: `.${prefix}-button-prev`,
                    }}
                    scrollbar={{
                        el: `.${prefix}-scrollbar`,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                    className={`mt-4 ak-slider ${sliderClass}`}
                >
                        {newsItems.map((item) => (
                            <SwiperSlide key={item.id} className="p-0">
                                <Link to="/blog/blog-details" className={isStyle2 ? "news-blog-card" : "news-card"}>
                                    {isStyle2 ? (
                                        <>
                                                <img src={item.image} alt={item.title} className="news-blog-bg-img" />
                                            <div className="overlay"></div>
                                            <h6 className="news-blog-title team-name-parallax" data-parallax-y-start="20" data-parallax-y-end="-50">{item.title}</h6>
                                            <p className="news-blog-desp team-name-parallax" data-parallax-y-start="20" data-parallax-y-end="-50">{item.description}</p>
                                            <div className="more-btn">
                                                <span className="morebtn-text"> Read More </span>
                                                <span className="primary-icon-anim">
                                                    <i className="flaticon-up-right-arrow"></i>
                                                    <i className="flaticon-up-right-arrow"></i>
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="news-img-top">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="news-body team-name-parallax" data-parallax-y-start="20" data-parallax-y-end="-50">
                                                <h6 className="news-title">{item.title}</h6>
                                                <p className="news-text">{item.description}</p>
                                                <div className="more-btn">
                                                    <span className="morebtn-text"> Read More </span>
                                                    <span className="primary-icon-anim">
                                                        <i className="flaticon-up-right-arrow"></i>
                                                        <i className="flaticon-up-right-arrow"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
        </section>
    );
};

export default NewsSection;

