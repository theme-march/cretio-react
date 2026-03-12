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

const PricingSection: React.FC = () => {
    return (
        <section className="container">
            <div className="package-content style3">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="package-one style3">
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
                        <Link to="/contact" className="package-btn-content">
                            <div className="package-btn pt-2">
                                <span className="morebtn-text">Get Started</span>
                                <span className="primary-icon-anim">
                                    <i className="flaticon-up-right-arrow"></i>
                                    <i className="flaticon-up-right-arrow"></i>
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
