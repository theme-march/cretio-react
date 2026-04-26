import React from "react";
import { getImagePath } from "@/utils/imageLoader";

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}

interface TeamCardProps {
    member: TeamMember;
    variant?: "default" | "marketing";
    index?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, variant = "default", index = 0 }) => {
    if (variant === "marketing") {
        return (
            <div
                className="team-card fade-animation h-100"
                data-direction="bottom"
                data-delay={0.15 + (index * 0.2)}
                data-offset="55"
            >
                <div className="team-img-top ak-parallax" style={{ width: "100%", aspectRatio: "306 / 372", overflow: "hidden" }}>
                    <a href="https://facebook.com/"><img src={getImagePath(member.image)} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></a>
                    <div className="team-social-icon">
                        <a href="https://facebook.com/" className="icon"><i className="flaticon-facebook-logo"></i></a>
                        <a href="https://instagram.com/" className="icon"><i className="flaticon-instagram-logo"></i></a>
                        <a href="https://twitter.com/" className="icon"><i className="flaticon-twitter"></i></a>
                    </div>
                </div>
                <div className="team-body" style={{ width: "100%", marginTop: "30px" }}>
                    <h6 className="team-title"><a href="https://facebook.com/">{member.name}</a></h6>
                    <p className="team-text text-capitalize fs-6 fw-normal mb-0 opacity-75">{member.role}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="border-0 team-card">
            <div className="team-img-top ak-parallax">
                <a href="https://facebook.com/"><img src={getImagePath(member.image)} alt={member.name} /></a>
                <div className="team-social-icon">
                    <a href="https://facebook.com/" className="icon"><i className="flaticon-facebook-logo"></i></a>
                    <a href="https://instagram.com/" className="icon"><i className="flaticon-instagram-logo"></i></a>
                    <a href="https://twitter.com/" className="icon"><i className="flaticon-twitter"></i></a>
                    <a href="https://linkedin.com/" className="icon"><i className="flaticon-linkedin"></i></a>
                </div>
            </div>
            <div className="team-body team-name-parallax" style={{ marginTop: "30px" }}>
                <h6 className="team-title"><a href="https://facebook.com/">{member.name}</a></h6>
                <p className="team-text text-capitalize fs-6 fw-normal mb-0 opacity-75">{member.role}</p>
            </div>
        </div>
    );
};

export default TeamCard;
