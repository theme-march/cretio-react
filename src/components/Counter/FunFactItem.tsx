import React from "react";
import funfactBg from "@assets/img/bg/funfact-bg.png";

export interface FunFact {
    id: string;
    number: number;
    suffix: string;
    label: string;
}

interface FunFactItemProps {
    fact: FunFact;
    variant?: "style-1" | "type-2" | "type-3";
    index?: number;
}

const FunFactItem: React.FC<FunFactItemProps> = ({ fact, variant = "style-1", index = 0 }) => {
    const { number, suffix, label } = fact;

    return (
        <div className="funfact style1">
            <div
                className={`funfact-card style-1 ${variant === "type-2" ? "type-2" : ""} ${variant === "type-3" ? "type-3" : ""
                    }`}
            >
                {variant === "type-3" && (
                    <p className="funfact-text">
                        {label} <br />
                        {index === 0
                            ? "130+ Niches"
                            : index === 1
                                ? "256+ Country"
                                : index === 2
                                    ? "145+ Members"
                                    : "75+ Tech Sectors"}
                    </p>
                )}
                <div
                    className={`funfact-number ${variant === "type-2" ? "img-clip-text ak-bg" : ""}`}
                    style={variant === "type-2" ? { backgroundImage: `url(${funfactBg})` } : {}}
                >
                    <span className="amin_auto_count">{number}</span>
                    <span>{suffix}</span>
                </div>
                {variant !== "type-3" && <p className="funfact-text">{label}</p>}
            </div>
        </div>
    );
};

export default FunFactItem;
