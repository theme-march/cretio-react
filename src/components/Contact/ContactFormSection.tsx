import React, { useRef, useState } from "react";

const ContactFormSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section ref={sectionRef}>
            <div className="ak-center">
                <div className="theme-border-wrap contact-form-border hover-animation">
                    <div className="b-top-left">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-top-right d-flex">
                        <div className="horizontal"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-bottom-right d-flex flex-end">
                        <div className="horizontal flex-end align-self-end"></div>
                        <div className="vertical"></div>
                    </div>
                    <div className="b-bottom-left">
                        <div className="vertical"></div>
                        <div className="horizontal"></div>
                    </div>

                    <div className="container p-3">
                        <div className="ak-center p-0">
                            <div className="contact-form-box">
                                <div className="contact-form-wapper style-2">
                                    <h5 className="contact-title text-center">Drop a Message</h5>
                                    <div className="ak-height-30 ak-height-lg-30"></div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <label htmlFor="firstName" className="visually-hidden">First name</label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="input-text style-2"
                                                    placeholder="First name"
                                                    name="firstName"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="lastName" className="visually-hidden">Last name</label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="input-text style-2"
                                                    placeholder="Last name"
                                                    name="lastName"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="visually-hidden">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="input-text style-2"
                                                    placeholder="Email"
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="phone" className="visually-hidden">Phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    className="input-text style-2"
                                                    placeholder="Phone"
                                                    name="phone"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="subject" className="visually-hidden">Subject</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    className="input-text style-2"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label htmlFor="message" className="visually-hidden">Your Message</label>
                                                <textarea
                                                    id="message"
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
                                        {isSubmitted && (
                                            <div className="mt-3 text-success fade-animation">
                                                Your message has been sent successfully! Our team will contact you shortly.
                                            </div>
                                        )}
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
