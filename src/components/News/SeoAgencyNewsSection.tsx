import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import SectionHeading from "@components/Common/SectionHeading";
import blogsData from "../../dataJson/blogsData.json";
import NewsCard from "./NewsCard";
import type { NewsItem } from "./NewsCard";

const newsItems = blogsData.slice(0, 6) as NewsItem[];
const prefix = "news-logs";

const SeoAgencyNewsSection: React.FC = () => {
    return (
        <section className="seo-news">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">News</span>'
                    description="Discover the latest industry news, expert insights, and essential updates from our creative digital agency."
                    caption="Recent News"
                    variant="style-1"
                    titleAnimation="fade-animation"
                    titleDirection="bottom"
                    titleDuration={1.5}
                    descriptionDirection="bottom"
                    descriptionDelay="0.3"
                    captionDirection="bottom"
                    captionDelay="0.3"
                />
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>
            <div className="news-swiper-controller">
                <div className={`${prefix}-scrollbar`}></div>
                <div className={`${prefix}-navigation`}>
                    <div className={`${prefix}-button-prev`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                            <g clipPath={`url(#clip0_${prefix}_prev)`}>
                                <path d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z" fill="#353535" />
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
                                <path d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z" fill="#353535" />
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
                    navigation={{ nextEl: `.${prefix}-button-next`, prevEl: `.${prefix}-button-prev` }}
                    scrollbar={{ el: `.${prefix}-scrollbar` }}
                    breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
                    className="mt-4 ak-slider ak-news-slider"
                >
                    {newsItems.map((item) => (
                        <SwiperSlide key={item.id} className="p-0">
                            <NewsCard item={item} isSeoAgency={true} headingVariant="seo-agency" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SeoAgencyNewsSection;
