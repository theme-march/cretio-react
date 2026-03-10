import React from "react";

const ContactCardSection: React.FC = () => {
    return (
        <div className="container">
            <div className="ak-center">
                <div className="contact-cards">
                    <div className="contact-card">
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                <g clipPath="url(#clip0_2385_90)">
                                    <path d="M12.7442 25.9029L12.735 25.8885L12.7253 25.8745C10.8478 23.1543 9.88672 20.2845 9.88672 17.0669C9.88672 8.59315 16.7565 1.95361 25 1.95361C33.3326 1.95361 40.1133 8.73432 40.1133 17.0669C40.1133 20.21 39.1534 23.2283 37.3328 25.802L37.3197 25.8205L37.3075 25.8396L25.3914 44.4162L25.3906 44.4174C25.2089 44.7016 24.791 44.7015 24.6093 44.4174L24.6088 44.4166L12.7442 25.9029ZM11.9022 26.4425L23.7669 44.9562L38.1492 26.3795C40.0891 23.6372 41.1133 20.4172 41.1133 17.0669C41.1133 8.18203 33.8849 0.953613 25 0.953613C16.2144 0.953613 8.88672 8.03076 8.88672 17.0669C8.88672 20.5046 9.91973 23.57 11.9022 26.4425ZM16.6758 17.0669C16.6758 21.6576 20.4093 25.3911 25 25.3911C29.5907 25.3911 33.3242 21.6576 33.3242 17.0669C33.3242 12.4762 29.5907 8.74268 25 8.74268C20.4093 8.74268 16.6758 12.4762 16.6758 17.0669Z" stroke="#FF4A23" strokeWidth="2" />
                                    <path d="M29.9172 46.6871L29.9179 46.686L36.91 35.7544C39.7677 36.4741 42.0239 37.4351 43.5744 38.5343C45.2513 39.7232 45.9727 40.9699 45.9727 42.1646C45.9727 43.2238 45.4578 44.2345 44.3729 45.1991C43.2772 46.1732 41.6604 47.0396 39.6449 47.7581C35.6201 49.1929 30.247 49.9536 25 49.9536C19.753 49.9536 14.3799 49.1929 10.3551 47.7581C8.33959 47.0396 6.72284 46.1732 5.62714 45.1991C4.54224 44.2345 4.02734 43.2238 4.02734 42.1646C4.02734 40.9708 4.74773 39.7249 6.4222 38.5367C7.97035 37.4382 10.2234 36.4775 13.0773 35.7576L20.081 46.6895L20.0812 46.6897C22.3741 50.2666 27.6138 50.2783 29.9172 46.6871Z" stroke="#FF4A23" strokeWidth="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2385_90">
                                        <rect width="50" height="50" fill="white" transform="translate(0 0.953613)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h3 className="contact-title">Address</h3>
                        <p className="contact-text">901 N Pitt Str., Suite 170<br />Alexandria, USA</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                <path d="M33.4217 ... " stroke="white" strokeWidth="2" />
                                <path d="M25.8704 ... " stroke="white" strokeWidth="2" />
                                <path d="M39.9902 ... " stroke="white" strokeWidth="2" />
                            </svg>
                        </div>
                        <h3 className="contact-title">Phone</h3>
                        <p className="contact-text">(408) 555-0120<br />(408) 555-0120</p>
                    </div>

                    <div className="contact-card">
                        <div className="contact-icon email">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="41" viewBox="0 0 70 41" fill="none">
                                <path d="M63.4598 ... " fill="#FF4A23" />
                            </svg>
                        </div>
                        <h3 className="contact-title">Email</h3>
                        <p className="contact-text">example@webmail.com<br />info@webmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCardSection;
