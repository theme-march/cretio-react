import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Pagination, Navigation, Scrollbar } from "swiper/modules";
import SectionHeading from "@components/common/SectionHeading";

const coreFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Web Development",
        description: "We build fast, scalable, and maintainable web applications tailored to your business goals and user needs.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "UI/UX Design",
        description: "Our design team crafts intuitive interfaces that balance aesthetics with functionality for a seamless user journey.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Web Design",
        description: "From landing pages to full websites, we create visually compelling designs that reflect your brand identity.",
    },
    {
        id: "04",
        icon: "flaticon-twirl",
        title: "App Development",
        description: "We develop robust mobile and desktop applications that deliver consistent performance across all platforms.",
    },
    {
        id: "05",
        icon: "flaticon-twirl",
        title: "E-commerce Solutions",
        description: "We build conversion-optimized online stores with secure payment systems and smooth shopping experiences.",
    },
];

const homeFeaturesData: CoreFeature[] = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
    }
];

export interface CoreFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

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
    highlightWords?: string[];
}

// --- Extracted reusable card subcomponents ---

interface BorderDecorProps {
    variant: "style-2" | "style-3" | "other";
}

const BorderDecor: React.FC<BorderDecorProps> = ({ variant }) => {
    if (variant !== "style-2" && variant !== "style-3") return null;
    return (
        <>
            <div className="b-top-left">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
            <div className="b-top-right d-flex">
                <div className="horizontal"></div>
                <div className="vertical"></div>
            </div>
            <div className="b-bottom-right d-flex flex-end">
                <div className="horizontal flex-end align-self-end"></div>
                <div className="vertical"></div>
            </div>
            <div className="b-bottom-left">
                <div className="vertical"></div>
                <div className="horizontal"></div>
            </div>
        </>
    );
};

interface CoreFeatureCardProps {
    feature: CoreFeature;
    index: number;
    variant: "style-1" | "style-2" | "style-3";
    cardAnimation: string;
    cardDirection?: string;
    fullWidth?: boolean;
}

const CoreFeatureCard: React.FC<CoreFeatureCardProps> = ({
    feature,
    index,
    variant,
    cardAnimation,
    cardDirection,
    fullWidth,
}) => {
    const cardTypeClass =
        variant === "style-3"
            ? "type-3 theme-border-wrap"
            : variant === "style-2"
            ? "type-1 style-2"
            : variant === "style-1"
            ? "style-2"
            : "type-2";

    return (
        <div
            className={`core-feature-card ${cardTypeClass} ${cardAnimation}`}
            style={fullWidth ? { maxWidth: "100%" } : undefined}
            data-delay={cardAnimation === "fade-animation" ? 0.15 + (index % 3) * 0.2 : undefined}
            data-direction={cardDirection}
        >
            <BorderDecor variant={variant === "style-2" || variant === "style-3" ? variant : "other"} />
            <div className="icon">
                <i className={feature.icon}></i>
            </div>
            <h6 className="core-feature-title">{feature.title}</h6>
            <p className="core-feature-desp">{feature.description}</p>
            <p className="core-feature-number">{feature.id}</p>
        </div>
    );
};



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
    features,
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
    highlightWords = [],
}) => {
    const defaultData = features ? features : (variant === "style-1" && !isSlider ? homeFeaturesData : (isSlider ? coreFeaturesData : coreFeaturesData.slice(0, 3)));
    const featuresToDisplay = defaultData;

    return (
        <section
            className={`core-features-area ${bgClass} ${variant === "style-2" ? "ak-solidblack-bg" : ""}`}
        >
            {showTopGap && <div className="ak-height-150 ak-height-lg-80"></div>}

            <div className="container">
                {title && (
                    <SectionHeading
                        title={title}
                        highlightWords={highlightWords}
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
                            className={
                                sliderType === "navigation"
                                    ? "core-features style2 ak-slider"
                                    : "core-features ak-slider slider-two"
                            }
                            modules={sliderType === "navigation" ? [Navigation, Scrollbar] : [Pagination]}
                            loop={true}
                            {...(sliderType === "navigation"
                                ? {
                                      navigation: {
                                          nextEl: ".core-features-button-next",
                                          prevEl: ".core-features-button-prev",
                                      },
                                      scrollbar: {
                                          el: ".core-features-scrollbar",
                                          draggable: true,
                                      },
                                  }
                                : {
                                      pagination: {
                                          el: ".core-features-swiper-pagination",
                                          clickable: true,
                                          type: "custom" as const,
                                          renderCustom: (swiper: { realIndex: number }, _current: number, _total: number) => {
                                              let dots = "";
                                              const realCurrent = swiper.realIndex % 3;
                                              for (let i = 0; i < 3; i++) {
                                                  dots += `<span class="swiper-pagination-bullet ${
                                                      i === realCurrent ? "swiper-pagination-bullet-active" : ""
                                                  }"></span>`;
                                              }
                                              return dots;
                                          },
                                      },
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
                            {featuresToDisplay.map((feature, index) => (
                                <SwiperSlide key={feature.id}>
                                    <CoreFeatureCard
                                        feature={feature}
                                        index={index}
                                        variant={variant}
                                        cardAnimation={cardAnimation}
                                        cardDirection={cardDirection}
                                        fullWidth={fullWidth}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {sliderType === "dots" && <div className="core-features-swiper-pagination"></div>}
                    </div>
                </>
            ) : variant === "style-3" ? (
                <div className="container">
                    <div className="core-features">
                        {featuresToDisplay.map((feature, index) => (
                            <CoreFeatureCard
                                key={feature.id}
                                feature={feature}
                                index={index}
                                variant={variant}
                                cardAnimation={cardAnimation}
                                cardDirection={cardDirection}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className={fullWidth ? "" : "container"}>
                    <div
                        className="core-features"
                        style={fullWidth ? { flexDirection: "column", gap: "30px" } : undefined}
                    >
                        {featuresToDisplay.map((feature, index) => (
                            <CoreFeatureCard
                                key={feature.id}
                                feature={feature}
                                index={index}
                                variant={variant}
                                cardAnimation={cardAnimation}
                                cardDirection={cardDirection}
                                fullWidth={fullWidth}
                            />
                        ))}
                    </div>
                </div>
            )}

            {showBottomGap && <div className="ak-height-150 ak-height-lg-80"></div>}
        </section>
    );
};

export default CoreFeaturesSection;
