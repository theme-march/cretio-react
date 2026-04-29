import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import { getImagePath } from "@/utils/imageLoader";

const testimonials = [
    {
        id: 1,
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        name: "Mostahid Jackma",
        location: "From USA",
        img: "testmonial-1.png"
    },
    {
        id: 2,
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        name: "Morgan Brown",
        location: "From USA",
        img: "testmonial-2.png"
    },
    {
        id: 3,
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        name: "Mostahid Jackma",
        location: "From USA",
        img: "testmonial-1.png"
    },
    {
        id: 4,
        text: "“Working with them has been an absolute game-changer for our business. Their innovative strategies, coupled with their deep understanding of our industry, have significantly boosted our online presence.”",
        name: "Morgan Brown",
        location: "From USA",
        img: "testmonial-2.png"
    }
];

const MarketingTestimonialSection: React.FC = () => {
    return (
        <section className="fade-animation">
            <div className="container">
                <div className="testmonial-slider ak-slider">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        autoplay={{ delay: 5000 }}
                        slidesPerView={1}
                        breakpoints={{
                            991: {
                                slidesPerView: 2,
                            },
                        }}
                        navigation={{
                            nextEl: ".testmonial-button-next",
                            prevEl: ".testmonial-button-prev",
                        }}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="testmonial-content style-1">
                                    <div className="testmonial-card">
                                        <div className="ak-height-100 ak-height-lg-50"></div>
                                        <p className="testmonial-desp">{item.text}</p>
                                        <div className="ak-height-50 ak-height-lg-30"></div>
                                        <div className="testmonial-info">
                                            <img
                                                className="testmonial-img"
                                                src={getImagePath(item.img)}
                                                alt={item.name}
                                            />
                                            <h6 className="testmonial-title">{item.name}</h6>
                                            <p className="testmonial-shot-desp">{item.location}</p>
                                        </div>
                                        <div className="ak-height-100 ak-height-lg-50"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div>
                <div className="testmonial-swiper-controller">
                    <div className="testmonial-button-prev">
                        <div>
                            <span className="svg-icon">
                                <i className="flaticon-left-up"></i>
                            </span>
                            <span> Previous </span>
                        </div>
                    </div>
                    <div className="testmonial-button-next">
                        <div>
                             <span> Next </span>
                            <span className="svg-icon">
                                <i className="flaticon-up-right-arrow"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingTestimonialSection;
