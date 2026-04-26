import React from "react";
import { SafeText } from "../../utils/safeHtml";
import { Link } from "react-router-dom";

const ServiceDetailsBreadcrumb: React.FC = () => {
    const title = "Our Exceptional Android App Development Services";
    const highlightWords = ["Exceptional", "Services"];
    const links = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
    ];

    const renderTitle = () => {
        let parts: (string | React.ReactNode)[] = [title];
        highlightWords.forEach((word) => {
            const newParts: (string | React.ReactNode)[] = [];
            parts.forEach((part) => {
                if (typeof part === "string") {
                    const split = part.split(new RegExp(`(${word})`, "gi"));
                    newParts.push(...split);
                } else {
                    newParts.push(part);
                }
            });
            parts = newParts;
        });

        return parts.map((part, i) =>
            typeof part === "string" && highlightWords.some((hw) => hw.toLowerCase() === part.toLowerCase()) ? (
                <span key={`Part-${i}`} className="highlight-text">
                    {part}
                </span>
            ) : (
                <span key={`Part-${i}`}>
                    {typeof part === "string" ? <SafeText text={part} /> : part}
                </span>
            )
        );
    };

    return (
        <>
            <div className="ak-height-150 ak-height-lg-120"></div>
            <div className="breadcrumb-area style-2">
                <div className="container">
                    <div className="breadcrumb-wapper style-2">
                        <div className="breadcrumb-title-box">
                            <h1 className="breadcrumb-title">
                                {renderTitle()}
                            </h1>
                            <div className="breadcrumb-caption">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="223" height="12" viewBox="0 0 223 12" fill="none">
                                        <path d="M1.33789 1.18359H221.034L209.173 10.9822" stroke="#FF4A23" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>
                                    {links.map((link, index) => (
                                        <React.Fragment key={link.label}>
                                            {index > 0 && " / "}
                                            {link.path ? <Link to={link.path}>{link.label}</Link> : link.label}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-stroke ">SERVICE</div>
            </div>
        </>
    );
};

export default ServiceDetailsBreadcrumb;
