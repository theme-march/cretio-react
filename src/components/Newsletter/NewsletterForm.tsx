import React, { useState } from "react";

interface NewsletterFormProps {
    id: string;
    className?: string;
    inputClassName?: string;
    formDirection?: string;
    formDelay?: string;
    disableAnimation?: boolean;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
    id,
    className = "",
    inputClassName = "",
    formDirection,
    formDelay,
    disableAnimation = false,
}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    if (isSubmitted) {
        return (
            <div className="ak-success-message" style={{ color: "var(--ak-primary-color)", padding: "20px" }}>
                <p>Thanks for subscribing!</p>
            </div>
        );
    }

    return (
        <form 
            className={`newsletter-form ${disableAnimation ? "" : "fade-animation"} ${className}`} 
            data-direction={formDirection}
            data-delay={formDelay}
            onSubmit={handleSubmit}
        >
            <label htmlFor={id} className="visually-hidden">Enter your email</label>
            <input
                id={id}
                type="email"
                className={`newsletter-input ${inputClassName}`}
                placeholder="Enter your email..."
                required
            />
            <button type="submit" className="newsletter-btn">
                <span className="newbtn-text"> Newsletter </span>
                <span className="primary-icon-anim">
                    <i className="flaticon-up-right-arrow"></i>
                    <i className="flaticon-up-right-arrow"></i>
                </span>
            </button>
        </form>
    );
};

export default NewsletterForm;
