import React from "react";

interface MarketingContactSectionProps {
    variant?: "style-1" | "style-2";
}

const MarketingContactSection: React.FC<MarketingContactSectionProps> = ({ variant = "style-1" }) => {
    const isStyle2 = variant === "style-2";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
    };

    return (
        <section className="fade-animation">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container contact-form-container">
                <div className="left-content">
                    <h2 className="contact-title-stroke">
                        Let’s Start Project With Leading Agency
                    </h2>
                </div>
                <div className={`contact-form ${isStyle2 ? "ak-primary-bg" : "ak-black-bg"}`}>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className={`field-group col-12 col-md-6 ${isStyle2 ? "style-2" : ""}`}>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="firstName"
                                    placeholder=" "
                                    name="firstName"
                                    required
                                />
                                <label htmlFor="firstName" className="input-label">First Name</label>
                            </div>
                            <div className={`field-group col-12 col-md-6 ${isStyle2 ? "style-2" : ""}`}>
                                <input
                                    className="input-field"
                                    type="text"
                                    id="lastName"
                                    placeholder=" "
                                    name="lastName"
                                    required
                                />
                                <label htmlFor="lastName" className="input-label">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`field-group col-12 col-md-6 ${isStyle2 ? "style-2" : ""}`}>
                                <input
                                    className="input-field"
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    name="email"
                                    required
                                />
                                <label htmlFor="email" className="input-label">Email</label>
                            </div>
                            <div className={`field-group col-12 col-md-6 ${isStyle2 ? "style-2" : ""}`}>
                                <input
                                    className="input-field"
                                    type="tel"
                                    id="phone"
                                    placeholder=" "
                                    name="phone"
                                    required
                                />
                                <label htmlFor="phone" className="input-label">Phone</label>
                            </div>
                        </div>
                        <div className={`field-group ${isStyle2 ? "style-2" : ""}`}>
                            <input
                                className="input-field"
                                type="text"
                                id="subject"
                                placeholder=" "
                                name="subject"
                                required
                            />
                            <label htmlFor="subject" className="input-label">Subject</label>
                        </div>
                        <div className={`field-group ${isStyle2 ? "style-2" : ""}`}>
                            <textarea
                                className="input-field"
                                id="message"
                                placeholder=" "
                                name="message"
                            ></textarea>
                            <label htmlFor="message" className="input-label">Your Message...</label>
                        </div>
                        <button type="submit" className={`circle-btn ${isStyle2 ? "style-3" : "style-4"} circle-btn-anim`}>
                            <span className="text text-uppercase">
                                Send
                                <i className="flaticon-up-right-arrow"></i>
                                <br />
                                Message
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MarketingContactSection;
