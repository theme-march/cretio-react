import React from "react";
import { Link } from "react-router-dom";

const pricingPlans = [
    {
        title: "Starter",
        duration: "Monthly Package",
        price: 199,
        maxPrice: 249,
        features: [
            "Custom Home Page Design",
            "Responsive Layout",
            "Basic SEO Optimization",
            "3 Portfolio Project Pages",
            "Contact Form Integration",
        ],
    },
    {
        title: "Professional",
        duration: "Monthly Package",
        price: 399,
        maxPrice: 449,
        features: [
            "Custom Home Page Design",
            "Responsive Layout",
            "Basic SEO Optimization",
            "3 Portfolio Project Pages",
            "Contact Form Integration",
        ],
    },
    {
        title: "Premium",
        duration: "Monthly Package",
        price: 699,
        maxPrice: 749,
        features: [
            "Custom Home Page Design",
            "Responsive Layout",
            "Basic SEO Optimization",
            "3 Portfolio Project Pages",
            "Contact Form Integration",
        ],
    },
];

import { useState } from "react";

const DesignCompanyPricingSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <>
            <section className="container">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="ak-center">
                    <div className="ak-section-heading ak-style-1 ak-w-50 text-center">
                        <div className="ak-section-left">
                            <h2 className="ak-section-title text-animation" data-duration="1.5">
                                <span className="highlight"> Get Start </span>
                                <span> With our Digital Affordable </span>
                                <span className="highlight"> Pricing Plan</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="fade-animation">
                    <div className="package-content" onMouseLeave={() => setActiveIndex(1)}>
                        {pricingPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`package-one style2 hover-active-class ${activeIndex === index ? "active" : ""}`}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="package-head-info">
                                    <h6 className="title">{plan.title}</h6>
                                    <p className="duration">{plan.duration}</p>
                                </div>
                                <ul className="package-list">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex}>
                                            <i className="flaticon-check-mark"></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="package-price-info">
                                    <h5 className="price">
                                        ${plan.price}
                                        <span className="max-price">/ ${plan.maxPrice}</span>
                                    </h5>
                                </div>
                                <Link to="/contact" className="common-btn style-3">
                                    <span> Get Started</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DesignCompanyPricingSection;
