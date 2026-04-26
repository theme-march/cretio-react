import React from "react";
import teamDataJson from "../../dataJson/teamMembersData.json";
import { getImagePath } from "../../utils/imageLoader";

const teamData = teamDataJson.standardTeam;

const TeamGridSection: React.FC = () => {
    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container-customize">
                <div className="row row-cols-1 row-cols-md-4 g-4 align-items-center">
                    {teamData.map((member) => (
                        <div key={member.id} className="border-0 team-card">
                            <div className="team-img-top ak-parallax">
                                <div><img src={getImagePath(member.image)} alt={member.name} /></div>
                                <div className="team-social-icon">
                                    <a href="https://facebook.com/" className="icon" aria-label={`${member.name} on Facebook`} target="_blank" rel="noopener noreferrer">
                                        <i className="flaticon-facebook-logo"></i>
                                    </a>
                                    <a href="https://instagram.com/" className="icon" aria-label={`${member.name} on Instagram`} target="_blank" rel="noopener noreferrer">
                                        <i className="flaticon-instagram-logo"></i>
                                    </a>
                                    <a href="https://twitter.com/" className="icon" aria-label={`${member.name} on Twitter`} target="_blank" rel="noopener noreferrer">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                    <a href="https://linkedin.com/" className="icon" aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noopener noreferrer">
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="team-body">
                                <h6 className="team-title"><span>{member.name}</span></h6>
                                <p className="team-text">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGridSection;
