import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import testimonialBg2 from "@assets/img/bg/testimonial-bg-2.png";
import testimonialSvg from "@assets/img/shape/testimonial.svg";
import testimonialImg1 from "@assets/img/testmonial/testmonial-1.png";

const testimonials = [
    {
        id: 1,
        text: "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
        name: "Morgan Brown",
        location: "From USA",
        img: testimonialImg1,
    },
    {
        id: 2,
        text: "Working with them has been an absolute <span class=\"highlight\">game-changer</span> for our business. Their innovative strategies, coupled with their deep understanding of our industry, have <span class=\"highlight\">significantly boosted</span> our online presence.",
        name: "Morgan Brown",
        location: "From USA",
        img: testimonialImg1,
    },
];

interface MarketingTestimonialSectionProps {
    variant?: string;
    bgClass?: string;
    sectionStyle?: React.CSSProperties;
}

const MarketingTestimonialSection: React.FC<MarketingTestimonialSectionProps> = ({ variant = "", bgClass = "ak-black-bg", sectionStyle }) => {
    const isStyle2 = variant.includes("style-2");
    const isType2 = variant.includes("type-2");
    const isDesignCompany = variant.includes("design-company");

    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    const renderSwiper = () => (
        <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 5000 }}
            navigation={
                isStyle2 || isDesignCompany
                    ? { prevEl, nextEl }
                    : false
            }
            className={`ak-slider ${isStyle2 || isDesignCompany ? "testmonial-slider-2" : "testmonial-slider-1"} ak-center`}
        >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className={`testmonial-content style-2 ${isType2 ? "type-2" : ""}`}>
                        <div className="testmonial-desp-content">
                            <p className="desp" dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                        <div className="testmonial-person-content">
                            <div className="person-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="person-info">
                                <h6>{item.name}</h6>
                                <p>{item.location}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            {isDesignCompany && (
                <div className="theme-border-wrap">
                    <div className="b-top-left">
                        <div className="horizontal"></div>
                        <div className="verticle"></div>
                    </div>
                    <div className="b-top-right d-flex">
                        <div className="horizontal"></div>
                        <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-right d-flex flex-end">
                        <div className="horizontal flex-end align-self-end"></div>
                        <div className="verticle"></div>
                    </div>
                    <div className="b-bottom-left">
                        <div className="verticle"></div>
                        <div className="horizontal"></div>
                    </div>
                </div>
            )}
        </Swiper>
    );

    const renderControls = () => (
        (isStyle2 || isDesignCompany) && (
            <div className={`testmonial-slider-controller-2 ${isType2 ? "type-2" : ""}`}>
                <div>
                    <div className="testmonial-slider-btn ts-next-2 fade-animation" ref={(node) => setPrevEl(node as HTMLElement)} data-direction="right" data-offset="75">
                        <div className="more-btn style3 arrow-left-style">
                            <span className="svg-icon">
                                <i className="flaticon-left-arrow-1"></i>
                                <i className="flaticon-left-arrow-1"></i>
                            </span>
                            <span className="btn-text color-white"> Previous </span>
                        </div>
                    </div>
                    <div className="testmonial-slider-btn ts-prev-2 fade-animation" ref={(node) => setNextEl(node as HTMLElement)} data-direction="left" data-offset="75">
                        <div className="more-btn style3">
                            <span className="btn-text color-white"> Next </span>
                            <span className="svg-icon style-three">
                                <i className="flaticon-right-arrow-4"></i>
                                <i className="flaticon-right-arrow-4"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );

    const renderBgShape = () => (
        isStyle2 && !isDesignCompany && (
            <span className="testmonial-bg-shape">
                <svg width="1011" height="940" viewBox="0 0 1011 940" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M843.406 262.256C844.988 286.517 833.599 315.433 811.499 347.018C789.403 378.598 756.649 412.772 715.643 447.478C633.635 516.887 518.718 588.344 390.334 645.378C261.95 702.411 144.447 734.204 58.259 739.514C15.1628 742.17 -20.0784 738.202 -44.9335 727.479C-69.7919 716.755 -84.205 699.301 -85.7871 675.04C-87.3692 650.778 -75.9799 621.863 -53.8805 590.278C-31.784 558.697 0.969937 524.523 41.9761 489.817C123.984 420.408 238.901 348.951 367.285 291.918C495.669 234.885 613.172 203.092 699.36 197.781C742.456 195.126 777.697 199.094 802.552 209.817C827.411 220.541 841.824 237.994 843.406 262.256Z"
                        stroke="url(#paint0_radial_2689_283)"
                    />
                    <path
                        d="M756.064 262.255C757.646 286.517 746.257 315.432 724.157 347.017C702.061 378.598 669.307 412.772 628.301 447.478C546.293 516.887 431.376 588.344 302.992 645.377C174.608 702.41 57.105 734.203 -29.083 739.513C-72.1792 742.169 -107.42 738.201 -132.276 727.478C-157.134 716.754 -171.547 699.301 -173.129 675.039C-174.711 650.778 -163.322 621.862 -141.223 590.277C-119.126 558.696 -86.3721 524.523 -45.366 489.816C36.6421 420.408 151.559 348.95 279.943 291.917C408.326 234.884 525.83 203.091 612.018 197.781C655.114 195.125 690.355 199.093 715.21 209.816C740.069 220.54 754.482 237.993 756.064 262.255Z"
                        stroke="url(#paint1_radial_2689_283)"
                    />
                    <path
                        d="M633.564 262.254C635.146 286.516 623.757 315.432 601.658 347.016C579.561 378.597 546.807 412.771 505.801 447.477C423.793 516.886 308.876 588.343 180.492 645.376C52.1086 702.409 -65.3948 734.202 -151.583 739.513C-194.679 742.168 -229.92 738.2 -254.775 727.477C-279.634 716.753 -294.047 699.3 -295.629 675.038C-297.211 650.777 -285.822 621.861 -263.722 590.276C-241.626 558.696 -208.872 524.522 -167.866 489.816C-85.8576 420.407 29.0592 348.95 157.443 291.917C285.827 234.883 403.33 203.09 489.518 197.78C532.614 195.125 567.855 199.092 592.711 209.815C617.569 220.54 631.982 237.993 633.564 262.254Z"
                        stroke="url(#paint2_radial_2689_283)"
                    />
                    <path
                        d="M814.939 264.441C816.521 288.703 805.132 317.618 783.033 349.203C760.936 380.784 728.182 414.958 687.176 449.664C605.168 519.073 490.251 590.53 361.867 647.563C233.483 704.597 115.98 736.389 29.7919 741.7C-13.3042 744.356 -48.5454 740.388 -73.4005 729.665C-98.2589 718.941 -112.672 701.487 -114.254 677.225C-115.836 652.964 -104.447 624.048 -82.3475 592.464C-60.251 560.883 -27.4971 526.709 13.509 492.003C95.5173 422.594 210.434 351.137 338.818 294.103C467.202 237.07 584.705 205.277 670.893 199.967C713.989 197.311 749.23 201.279 774.085 212.003C798.944 222.727 813.357 240.18 814.939 264.441Z"
                        stroke="url(#paint3_radial_2689_283)"
                    />
                    <path
                        d="M727.597 264.441C729.179 288.702 717.79 317.618 695.69 349.202C673.594 380.783 640.84 414.957 599.834 449.663C517.826 519.072 402.909 590.529 274.525 647.562C146.141 704.596 28.638 736.389 -57.5499 741.699C-100.646 744.355 -135.887 740.387 -160.742 729.664C-185.601 718.94 -200.014 701.487 -201.596 677.225C-203.178 652.963 -191.789 624.047 -169.69 592.463C-147.593 560.882 -114.839 526.708 -73.833 492.002C8.17511 422.593 123.092 351.136 251.476 294.103C379.86 237.069 497.363 205.277 583.551 199.966C626.647 197.311 661.888 201.278 686.743 212.002C711.602 222.726 726.015 240.179 727.597 264.441Z"
                        stroke="url(#paint4_radial_2689_283)"
                    />
                    <path
                        d="M605.097 264.439C606.679 288.701 595.29 317.617 573.19 349.201C551.093 380.782 518.339 414.956 477.333 449.662C395.324 519.071 280.407 590.527 152.024 647.561C23.6402 704.594 -93.8631 736.387 -180.051 741.698C-223.147 744.354 -258.388 740.386 -283.243 729.662C-308.102 718.939 -322.515 701.485 -324.097 677.224C-325.679 652.962 -314.29 624.046 -292.191 592.461C-270.094 560.881 -237.34 526.707 -196.334 492.001C-114.326 422.592 0.590825 351.135 128.975 294.101C257.359 237.068 374.862 205.275 461.05 199.965C504.146 197.309 539.387 201.277 564.242 212.001C589.1 222.724 603.514 240.178 605.097 264.439Z"
                        stroke="url(#paint5_radial_2689_283)"
                    />
                    <defs>
                        <radialGradient id="paint0_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(378.81 468.648) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(291.467 468.647) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint2_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(168.967 468.646) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint3_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350.342 470.833) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint4_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(263 470.832) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint5_radial_2689_283" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.499 470.831) rotate(156.047) scale(412.841 1137.36)">
                            <stop stopColor="#FF4A23" offset="0%" />
                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </span>
        )
    );

    return (
        <section className={`${bgClass} overflow-hidden`} style={sectionStyle}>
            {isDesignCompany ? (
                <div className="ak-bg" style={{ backgroundImage: `url(${testimonialSvg})` }}>
                    <div className="testmonial-wrapper">
                        <div className="container">
                            <div className="fade-animation">
                                {renderSwiper()}
                            </div>
                            {renderControls()}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="testmonial-area ak-parallax">
                    <img className="testmonial-area-img ak-bg" src={testimonialBg2} alt="..." />
                    <div className={`testmonial-wrapper ${isStyle2 ? "style2" : "style-1"}`}>
                        <div className="container">
                            <div className="fade-animation">
                                {renderSwiper()}
                            </div>
                            {renderControls()}
                        </div>
                    </div>
                    {renderBgShape()}
                </div>
            )}
        </section>
    );
};

export default MarketingTestimonialSection;

