import React from "react";

const ContactFormSection: React.FC = () => {
    return (
        <section>
            <div className="ak-center">
                <div className="theme-border-wrap contact-form-border hover-animation">
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

                    <div className="container">
                        <div className="ak-center">
                            <div className="contact-form-box">
                                <div className="contact-form-wapper style-2">
                                    <h5 className="contact-title text-center">Drop a Message</h5>
                                    <div className="ak-height-30 ak-height-lg-30"></div>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="input-text style-2"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="input-text style-2"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className="input-text style-2"
                                                    placeholder="Email"
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="text"
                                                    className="input-text style-2"
                                                    placeholder="Phone"
                                                    name="phone"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    className="input-text style-2"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <textarea
                                                    name="message"
                                                    className="textarea-text style-2"
                                                    rows={5}
                                                    placeholder="Your Message..."
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="ak-height-40 ak-height-lg-30"></div>
                                        <div className="d-inline">
                                            <button type="submit" className="contact-us-btn">
                                                <span className="ak-center">Send Message</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ak-height-75 ak-height-lg-40"></div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
