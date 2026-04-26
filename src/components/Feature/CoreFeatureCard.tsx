import React from "react";

export interface CoreFeature {
    id: string;
    icon: string;
    title: string;
    description: string;
}

interface BorderDecorProps {
    variant: "style-2" | "style-3" | "other";
}

const BorderDecor: React.FC<BorderDecorProps> = ({ variant }) => {
    if (variant !== "style-2" && variant !== "style-3") return null;
    return (
        <>
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
        </>
    );
};

interface CoreFeatureCardProps {
    feature: CoreFeature;
    index: number;
    variant: "style-1" | "style-2" | "style-3";
    cardAnimation: string;
    cardDirection?: string;
    fullWidth?: boolean;
    alternateColors?: boolean;
}

const CoreFeatureCard: React.FC<CoreFeatureCardProps> = ({
    feature,
    index,
    variant,
    cardAnimation,
    cardDirection,
    fullWidth,
    alternateColors,
}) => {
    const cardTypeClass =
        variant === "style-3"
            ? "type-3 theme-border-wrap"
            : variant === "style-2"
            ? (alternateColors ? "style-2" : "type-1 style-2")
            : variant === "style-1"
            ? "style-2"
            : "type-2";

    const colorClass = alternateColors && variant === "style-2" ? (index % 2 === 0 ? "color-2" : "color-3") : "";

    return (
        <div
            className={`core-feature-card ${cardTypeClass} ${colorClass} ${cardAnimation}`}
            style={fullWidth ? { maxWidth: "100%" } : undefined}
            data-delay={cardAnimation === "fade-animation" ? 0.15 + (index % 3) * 0.2 : undefined}
            data-direction={cardDirection}
        >
            <BorderDecor variant={variant === "style-2" || variant === "style-3" ? variant : "other"} />
            <div className="icon">
                <i className={feature.icon}></i>
            </div>
            <h6 className="core-feature-title">{feature.title}</h6>
            <p className="core-feature-desp">{feature.description}</p>
            <p className="core-feature-number">{feature.id}</p>
        </div>
    );
};

export default CoreFeatureCard;
