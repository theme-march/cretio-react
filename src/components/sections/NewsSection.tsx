import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import SectionHeading from "@components/common/SectionHeading";

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
    headingVariant?: "default" | "creative-portfolio" | "seo-agency";
}

const NewsSection: React.FC<NewsSectionProps> = ({ variant = "style-1", headingVariant = "default" }) => {
    const isStyle2 = variant === "style-2";
    const isSeoAgency = headingVariant === "seo-agency";
    const prefix = isStyle2 ? "news-blog" : "news-logs";
    const sliderClass = isStyle2 ? "ak-news-blog-slider" : "ak-news-slider";

    return (
        <section className={isSeoAgency ? "seo-news" : ""}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">News</span>'
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                    caption="Recent News"
                    variant="style-1"
                    titleAnimation={isSeoAgency ? "fade-animation" : "text-animation"}
                    titleDirection={isSeoAgency ? "none" : (headingVariant === "creative-portfolio" ? "textLeft" : "textTop")}
                    titleDuration={headingVariant === "creative-portfolio" ? 1.0 : 1.5}
                    disableDespAnimation={headingVariant === "creative-portfolio"}
                    disableCaptionAnimation={headingVariant === "creative-portfolio"}
                    {...(isSeoAgency && {
                        descriptionDirection: "bottom",
                        descriptionDelay: "0.35",
                        captionDelay: "0.55"
                    })}
                    {...(!isSeoAgency && headingVariant !== "creative-portfolio" && {
                        rightAnimation: "fade-animation",
                        rightDirection: "bottom",
                        rightDelay: "0.3",
                        captionDelay: "0.3"
                    })}
                />
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
            <div className={`container ${headingVariant === "creative-portfolio" ? "" : "fade-animation"}`} {...(headingVariant !== "creative-portfolio" && { "data-delay": "0.35" })}>
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
                                            <h6 className={`news-blog-title ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                                                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
                                            >
                                                {item.title}
                                            </h6>
                                            <p className={`news-blog-desp ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                                                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
                                            >
                                                {item.description}
                                            </p>
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
                                            <div className="news-img-content">
                                                <div className={`news-img-top ${!isSeoAgency ? "ak-parallax" : ""}`}>
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                            </div>
                                            <div className={`news-body ${headingVariant === "creative-portfolio" ? "" : "team-name-parallax"}`} 
                                                {...(headingVariant !== "creative-portfolio" && { "data-parallax-y-start": "20", "data-parallax-y-end": "-50" })}
                                            >
                                                <h6 className="news-title">{item.title}</h6>
                                                <p className="news-text">{item.description} </p>
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

