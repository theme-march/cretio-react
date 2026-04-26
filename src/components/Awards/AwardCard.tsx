import React from "react";
import { getImagePath } from "@/utils/imageLoader";

export interface Award {
    id: number;
    title: string;
    type: string;
    category: string;
    hoverImg: string;
    awardImg: string;
}

interface AwardCardProps {
    award: Award;
    onMouseEnter: (imgSrc: string) => void;
    onMouseLeave: () => void;
    onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
}

const AwardCard: React.FC<AwardCardProps> = ({
    award,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
}) => {
    return (
        <div
            className="awards-card fade-animation"
            data-direction="bottom"
            onMouseEnter={() => onMouseEnter(getImagePath(award.hoverImg))}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
        >
            <h6 className="awards-title">
                {award.id < 10 ? `0${award.id}` : award.id}. {award.title}
            </h6>
            <p className="awards-type">{award.type}</p>
            <p className="awards-category">{award.category}</p>
            <div className="awards-img">
                <img src={getImagePath(award.awardImg)} alt={`${award.title} trophy icon`} />
            </div>
        </div>
    );
};

export default AwardCard;
