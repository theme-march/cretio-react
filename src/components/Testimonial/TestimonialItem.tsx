import React from "react";
import { ParsedText } from "../../utils/safeHtml";
import { getImagePath } from "@/utils/imageLoader";

export interface Testimonial {
    id: number;
    text: string;
    name: string;
    location: string;
    img: string;
}

interface TestimonialItemProps {
    testimonial: Testimonial;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => {
    return (
        <div className="testmonial-content style-2">
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

export default TestimonialItem;
