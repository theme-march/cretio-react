import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import TestimonialItem from "./TestimonialItem";
import type { Testimonial } from "./TestimonialItem";
import testimonialBg2 from "@assets/img/bg/testimonial-bg-2.png";

const testimonials: Testimonial[] = [
    {
        "id": 1,
        "text": "The SEO strategies implemented have been an absolute <span class=\"highlight\">game-changer</span> for our growth. Their innovative approach significantly boosted our organic traffic and conversions.",
        "name": "Morgan Brown",
        "location": "From USA",
        "img": "testmonial-1.png"
    },
    {
        "id": 2,
        "text": "Exceptional attention to detail and <span class=\"highlight\">technical expertise</span>. They delivered a high-performance platform that exceeded our expectations and perfectly represents our brand.",
        "name": "David Smith",
        "location": "From Canada",
        "img": "testmonial-2.png"
    }
];

interface MarketingTestimonialSectionProps {
    bgClass?: string;
    sectionStyle?: React.CSSProperties;
}

const MarketingTestimonialSection: React.FC<MarketingTestimonialSectionProps> = ({ bgClass = "ak-black-bg", sectionStyle }) => {
    return (
        <section className={`${bgClass} overflow-hidden`} style={sectionStyle}>
            <div className="testmonial-area ak-parallax">
                <img className="testmonial-area-img ak-bg" src={testimonialBg2} alt="Testimonial background shape" />
                <div className="testmonial-wrapper style-1">
                    <div className="container">
                        <div className="fade-animation">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                className="ak-slider testmonial-slider-1 ak-center"
                            >
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <TestimonialItem testimonial={item} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingTestimonialSection;
