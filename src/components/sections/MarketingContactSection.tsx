import React from "react";

const MarketingContactSection: React.FC = () => {
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
                <div className="contact-form ak-black-bg">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="field-group col-12 col-md-6">
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
                            <div className="field-group col-12 col-md-6">
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
                            <div className="field-group col-12 col-md-6">
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
                            <div className="field-group col-12 col-md-6">
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
                        <div className="field-group">
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
                        <div className="field-group">
                            <textarea
                                className="input-field"
                                id="message"
                                placeholder=" "
                                name="message"
                            ></textarea>
                            <label htmlFor="message" className="input-label">Your Message...</label>
                        </div>
                        <button type="submit" className="circle-btn style-4 circle-btn-anim">
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
