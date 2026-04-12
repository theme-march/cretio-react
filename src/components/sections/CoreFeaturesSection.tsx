import SectionHeading from "@components/common/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";

export interface CoreFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "UI/UX Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Web Design",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "04",
        icon: "flaticon-twirl",
        title: "App Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "05",
        icon: "flaticon-twirl",
        title: "E-commerce Solutions",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
];

interface CoreFeaturesProps {
    variant?: "style-1" | "style-2" | "style-3";
    bgClass?: string;
    title?: string;
    description?: string;
    caption?: string;
    isSlider?: boolean;
    showTopGap?: boolean;
    showBottomGap?: boolean;
    hideHeadingGap?: boolean;
    features?: CoreFeature[];
    descriptionDirection?: string;
    descriptionDelay?: string;
    captionDirection?: string;
    captionDelay?: string;
    titleDirection?: string;
    titleEase?: string;
    titleDuration?: number;
    disableDescriptionAnimation?: boolean;
    disableCaptionAnimation?: boolean;
    cardAnimation?: string;
    cardDirection?: string;
    titleAnimation?: "text-animation" | "fade-animation" | "anim-title-2" | "";
    titleSplitText?: string;
    sliderType?: "dots" | "navigation";
    fullWidth?: boolean;
}

const CoreFeaturesSection: React.FC<CoreFeaturesProps> = ({
    variant = "style-1",
    bgClass = "",
    title,
    description,
    caption,
    isSlider = false,
    showTopGap = false,
    showBottomGap = false,
    hideHeadingGap = false,
    features = coreFeaturesData.slice(0, 3),
    descriptionDirection,
    descriptionDelay,
    captionDirection,
    captionDelay,
    titleDirection,
    titleEase,
    titleDuration,
    disableDescriptionAnimation = false,
    disableCaptionAnimation = false,
    cardAnimation = "fade-animation",
    cardDirection,
    titleAnimation = "text-animation",
    titleSplitText,
    sliderType = "dots",
    fullWidth = false,
}) => {
    return (
        <section
            className={`core-features-area ${bgClass} ${variant === "style-2" ? "ak-solidblack-bg" : ""}`}
        >
            {showTopGap && <div className="ak-height-150 ak-height-lg-80"></div>}
            <div className="container">
                {title && (
                    <SectionHeading
                        title={title}
                        variant={variant === "style-2" ? "style-2" : "style-1"}
                        className={variant === "style-2" ? "bg-black" : ""}
                        description={description}
                        caption={caption}
                        descriptionDirection={descriptionDirection}
                        descriptionDelay={descriptionDelay}
                        captionDirection={captionDirection}
                        captionDelay={captionDelay}
                        titleDirection={titleDirection}
                        titleEase={titleEase}
                        titleDuration={titleDuration}
                        titleAnimation={titleAnimation}
                        titleSplitText={titleSplitText}
                        disableDespAnimation={disableDescriptionAnimation}
                        disableCaptionAnimation={disableCaptionAnimation}
                    />
                )}
            </div>
            {!hideHeadingGap && <div className="ak-height-75 ak-height-lg-50"></div>}
            {isSlider ? (
                <>
                    {sliderType === "navigation" && (
                        <>
                            <div className={fullWidth ? "" : "container"}>
                                <div className="core-features-swiper-controller">
                                    <div className="core-features-scrollbar"></div>
                                    <div className="core-features-navigation">
                                        <div className="core-features-button-prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                                <path d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z" fill="#353535" />
                                            </svg>
                                        </div>
                                        <div className="core-features-button-next">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                                <path d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z" fill="#353535" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ak-height-75 ak-height-lg-50"></div>
                        </>
                    )}
                    <div className={fullWidth ? "" : "container"}>
                        <Swiper
                            className={sliderType === "navigation" ? "core-features style2 ak-slider" : "core-features ak-slider slider-two"}
                            modules={sliderType === "navigation" ? [Navigation, Scrollbar] : [Pagination]}
                            loop={true}
                            {...(sliderType === "navigation" ? {
                                navigation: {
                                    nextEl: ".core-features-button-next",
                                    prevEl: ".core-features-button-prev",
                                },
                                scrollbar: {
                                    el: ".core-features-scrollbar",
                                    draggable: true,
                                }
                            } : {
                                pagination: {
                                    el: ".core-features-swiper-pagination",
                                    clickable: true,
                                    type: "custom",
                                    renderCustom: (swiper, _current, _total) => {
                                        let dots = "";
                                        const realCurrent = swiper.realIndex % 3;
                                        for (let i = 0; i < 3; i++) {
                                            dots += `<span class="swiper-pagination-bullet ${
                                                i === realCurrent
                                                    ? "swiper-pagination-bullet-active"
                                                    : ""
                                            }"></span>`;
                                        }
                                        return dots;
                                    },
                                }
                            })}
                            spaceBetween={30}
                            breakpoints={
                                sliderType === "navigation"
                                    ? {
                                          400: { slidesPerView: 1 },
                                          580: { slidesPerView: 2 },
                                          991: { slidesPerView: 3 },
                                          1199: { slidesPerView: 3 },
                                          1399: { slidesPerView: 4 },
                                          1499: { slidesPerView: 5 },
                                      }
                                    : {
                                          320: { slidesPerView: 1 },
                                          580: { slidesPerView: 1 },
                                          768: { slidesPerView: 2 },
                                          1024: { slidesPerView: 3 },
                                      }
                            }
                        >
                            {[...features, ...features].map((feature, index) => (
                                <SwiperSlide key={`${feature.id}-${index}`}>
                                    <div
                                        className={`core-feature-card ${
                                            variant === "style-2" ? "type-1 style-2" : "type-2"
                                        } ${cardAnimation}`}
                                        style={fullWidth ? { maxWidth: "100%" } : undefined}
                                        data-delay={cardAnimation === "fade-animation" ? 0.15 + (index % 3) * 0.2 : undefined}
                                        data-direction={cardDirection}
                                    >
                                        {variant === "style-2" && (
                                            <>
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
                                            </>
                                        )}
                                        <div className="icon">
                                            <i className={feature.icon}></i>
                                        </div>
                                        <h6 className="core-feature-title">{feature.title}</h6>
                                        <p className="core-feature-desp">{feature.description}</p>
                                        <p className="core-feature-number">{feature.id}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {sliderType === "dots" && <div className="core-features-swiper-pagination"></div>}
                    </div>
                </>
            ) : variant === "style-3" ? (
                <div className="container">
                    <div className="core-features">
                        {features.map((feature, index) => (
                            <div
                                className={`core-feature-card type-3 ${cardAnimation} theme-border-wrap`}
                                data-delay={cardAnimation === "fade-animation" ? 0.15 + index * 0.2 : undefined}
                                data-direction={cardDirection}
                                key={feature.id}
                            >
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
                                <div className="icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h6 className="core-feature-title">{feature.title}</h6>
                                <p className="core-feature-desp">{feature.description}</p>
                                <p className="core-feature-number">{feature.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={fullWidth ? "" : "container"}>
                    <div 
                        className="core-features" 
                        style={fullWidth ? { flexDirection: "column", gap: "30px" } : undefined}
                    >
                        {features.map((feature, index) => (
                            <div
                                className={`core-feature-card ${
                                    variant === "style-2"
                                        ? `style-2 ${index % 2 === 0 ? "color-2" : "color-3"}`
                                        : ""
                                } ${cardAnimation}`}
                                style={fullWidth ? { maxWidth: "100%" } : undefined}
                                data-delay={cardAnimation === "fade-animation" ? 0.15 + index * 0.2 : undefined}
                                data-direction={cardDirection}
                                key={feature.id}
                            >
                                {variant === "style-2" && (
                                    <>
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
                                    </>
                                )}
                                <div className="icon">
                                    <i className={feature.icon}></i>
                                </div>
                                <h6 className="core-feature-title">{feature.title}</h6>
                                <p className="core-feature-desp">{feature.description}</p>
                                <p className="core-feature-number">{feature.id}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showBottomGap && <div className="ak-height-150 ak-height-lg-80"></div>}
        </section>
    );
};
export default CoreFeaturesSection;
