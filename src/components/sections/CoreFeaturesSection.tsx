import SectionHeading from "@components/common/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const features = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
];

interface CoreFeaturesProps {
    variant?: "style-1" | "style-2";
    bgClass?: string;
    title?: string;
    description?: string;
    caption?: string;
    isSlider?: boolean;
}

const CoreFeaturesSection: React.FC<CoreFeaturesProps> = ({
    variant = "style-1",
    bgClass = "",
    title,
    description,
    caption,
    isSlider = false,
}) => {
    return (
        <section
            className={`core-features-area ${bgClass} ${variant === "style-2" ? "ak-solidblack-bg" : ""}`}
        >
            <div className="ak-height-150 ak-height-lg-80"></div>
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
                <div className="ak-height-75 ak-height-lg-50"></div>
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
                                        className={`core-feature-card type-1 ${
                                            variant === "style-2"
                                                ? `style-2`
                                                : ""
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
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};
export default CoreFeaturesSection;
