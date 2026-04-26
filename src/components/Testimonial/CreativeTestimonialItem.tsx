import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import { getImagePath } from "@/utils/imageLoader";
import type { Testimonial } from "./TestimonialItem";

interface CreativeTestimonialItemProps {
    testimonial: Testimonial;
}

const CreativeTestimonialItem: React.FC<CreativeTestimonialItemProps> = ({ testimonial }) => {
    return (
        <div className="testmonial-content style-2 type-2">
            <div className="testmonial-desp-content">
                <p className="desp"><ParsedText text={testimonial.text} /></p>
            </div>
            <div className="testmonial-person-content">
                <div className="person-img">
                    <img src={getImagePath(testimonial.img)} alt={testimonial.name} />
                </div>
                <div className="person-info">
                    <h6>{testimonial.name}</h6>
                    <p>{testimonial.location}</p>
                </div>
            </div>
        </div>
    );
};

export default CreativeTestimonialItem;
