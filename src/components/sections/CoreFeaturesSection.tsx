import SectionHeading from "@components/common/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
                    />
                )}
                {!hideHeadingGap && <div className="ak-height-75 ak-height-lg-50"></div>}
                {isSlider ? (
                    <>
                        <Swiper
                            className="core-features ak-slider slider-two"
                            modules={[Pagination]}
                            loop={true}
                            pagination={{
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
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {[...features, ...features].map((feature, index) => (
                                <SwiperSlide key={`${feature.id}-${index}`}>
                                    <div
                                        className={`core-feature-card ${
                                            variant === "style-2" ? "type-1 style-2" : "type-2"
                                        } fade-animation`}
                                        data-delay={0.15 + (index % 3) * 0.2}
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
                        <div className="core-features-swiper-pagination"></div>
                    </>
                ) : variant === "style-3" ? (
                    <div className="core-features">
                        {features.map((feature, index) => (
                            <div
                                className={`core-feature-card type-3 fade-animation theme-border-wrap`}
                                data-delay={0.15 + index * 0.2}
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
                ) : (
                    <div className="core-features">
                        {features.map((feature, index) => (
                            <div
                                className={`core-feature-card ${
                                    variant === "style-2"
                                        ? `style-2 ${index % 2 === 0 ? "color-2" : "color-3"}`
                                        : ""
                                } fade-animation`}
                                data-delay={0.15 + index * 0.2}
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
                )}
            </div>
            {showBottomGap && <div className="ak-height-150 ak-height-lg-80"></div>}
        </section>
    );
};
export default CoreFeaturesSection;
