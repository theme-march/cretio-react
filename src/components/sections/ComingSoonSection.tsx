import React, { useState } from "react";
import logoWhite from "@assets/img/logo/white-logo.svg";
import { Link } from "react-router-dom";

const ComingSoonSection: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
    });

    React.useEffect(() => {
        const targetDate = new Date("2026-08-31T00:00:00").getTime();

        const updateCountdown = () => {
            const now = Date.now();
            const timeRemaining = targetDate - now;

            if (timeRemaining <= 0) {
                setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0 });
                return;
            }

            const msPerMinute = 1000 * 60;
            const msPerHour = msPerMinute * 60;
            const msPerDay = msPerHour * 24;
            const msPerMonth = msPerDay * 30.44;

            const months = Math.floor(timeRemaining / msPerMonth);
            const days = Math.floor((timeRemaining % msPerMonth) / msPerDay);
            const hours = Math.floor((timeRemaining % msPerDay) / msPerHour);
            const minutes = Math.floor((timeRemaining % msPerHour) / msPerMinute);

            setTimeLeft({ months, days, hours, minutes });
        };

        const interval = setInterval(updateCountdown, 60000);
        updateCountdown();

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="upcomming-soon-container">
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="ak-center">
                <div className="upcomming-soon-wapper">
                    <div className="theme-border-wrap upcomming-soon-border">
                        <div className="b-top-left type2">
                            <div className="horizontal"></div>
                            <div className="vertical"></div>
                        </div>
                        <div className="b-top-right type2 d-flex">
                            <div className="horizontal"></div>
                            <div className="vertical"></div>
                        </div>
                        <div className="b-bottom-right type2 d-flex flex-end">
                            <div className="horizontal flex-end align-self-end"></div>
                            <div className="vertical"></div>
                        </div>
                        <div className="b-bottom-left type2">
                            <div className="vertical"></div>
                            <div className="horizontal"></div>
                        </div>
                        <div className="container">
                            <div className="brand-logo ak-center">
                                <Link to="/" className="ak-site_branding white-logo">
                                    <img src={logoWhite} alt="Cretio company logo white" />
                                </Link>
                            </div>
                            <div className="ak-height-75 ak-height-lg-50"></div>
                            <div className="upcomming-soon-content">
                                <div className="time-counter">
                                    <div className="funfact-content">
                                        <div className="funfact style1">
                                            <div className="funfact-card style-1">
                                                <div className="funfact-number">
                                                    <span>{timeLeft.months}</span>
                                                </div>
                                                <p className="funfact-text">Months</p>
                                            </div>
                                        </div>
                                        <div className="funfact style1">
                                            <div className="funfact-card style-1">
                                                <div className="funfact-number">
                                                    <span>{timeLeft.days}</span>
                                                </div>
                                                <p className="funfact-text">Days</p>
                                            </div>
                                        </div>
                                        <div className="funfact style1">
                                            <div className="funfact-card style-1">
                                                <div className="funfact-number">
                                                    <span>{timeLeft.hours}</span>
                                                </div>
                                                <p className="funfact-text">Hours</p>
                                            </div>
                                        </div>
                                        <div className="funfact style1">
                                            <div className="funfact-card style-1">
                                                <div className="funfact-number">
                                                    <span>{timeLeft.minutes}</span>
                                                </div>
                                                <p className="funfact-text">Minutes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="upcomming-soon-info">
                                    <h3 className="upcomming-soon-title">
                                        Coming <span className="highlight">Soon</span>
                                    </h3>
                                    <p className="upcomming-soon-desp">
                                        We're working hard to bring you an exciting new experience.
                                        Stay tuned!
                                    </p>
                                </div>
                            </div>
                            <div className="ak-height-75 ak-height-lg-50"></div>
                        </div>
                    </div>
                    <div className="social-wapper">
                        <div className="social-content">
                            <h5 className="social-title">
                                Join Our
                                <span className="heghtlight underline">Newsletter</span> for the
                                Latest <span className="heghtlight">Exclusive</span> Content
                            </h5>
                            <div className="social-icon">
                                <a href="https://facebook.com/" className="icon style-2" aria-label="Follow us on Facebook" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a>
                                <a href="https://linkedin.com/" className="icon style-2" aria-label="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer"><i className="flaticon-linkedin"></i></a>
                                <a href="https://instagram.com/" className="icon style-2" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram-logo"></i></a>
                                <a href="https://twitter.com/" className="icon style-2" aria-label="Follow us on Twitter" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a>
                            </div>
                        </div>
                        <div className="email-send-form">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="coming-soon-email" className="visually-hidden">Enter your email</label>
                                <input required id="coming-soon-email" type="email" name="email" placeholder="Enter your email..." />
                                 <div className="email-send-btn">
                                    <button type="submit" className="more-btn style3 border-0">
                                        <span className="morebtn-text"> Newsletter </span>
                                        <span className="primary-icon-anim">
                                            <i className="flaticon-up-right-arrow"></i>
                                            <i className="flaticon-up-right-arrow"></i>
                                        </span>
                                    </button>
                                </div>
                                {isSubmitted && (
                                    <div className="mt-3 text-success fade-animation text-center">
                                        Thank you for subscribing!
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default ComingSoonSection;
