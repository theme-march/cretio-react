import React from "react";
import team1 from "@assets/img/team/team-1.png";
import team2 from "@assets/img/team/team-2.png";
import team3 from "@assets/img/team/team-3.png";
import team4 from "@assets/img/team/team-4.png";
import team5 from "@assets/img/team/team-5.png";
import team6 from "@assets/img/team/team-6.png";
import team7 from "@assets/img/team/team-7.png";
import team8 from "@assets/img/team/team-8.png";

const teamData = [
    { id: 1, name: "Alex Johnson", role: "Creative Director", image: team1 },
    { id: 2, name: "Taylor Smith", role: "Graphic Designer", image: team2 },
    { id: 3, name: "Jamie Lee", role: "Art Director", image: team3 },
    { id: 4, name: "Morgan Brown", role: "UX/UI Designer", image: team4 },
    { id: 5, name: "Benjamin Young", role: "Data Analyst", image: team5 },
    { id: 6, name: "Mia Robinson", role: "Project Manager", image: team6 },
    { id: 7, name: "Noah Williams", role: "Lead Web Developer", image: team7 },
    { id: 8, name: "Amelia Walker", role: "Front-End Developer", image: team8 },
];

const TeamGridSection: React.FC = () => {
    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container-customize">
                <div className="row row-cols-1 row-cols-md-4 g-4 align-items-center">
                    {teamData.map((member) => (
                        <div key={member.id} className="border-0 team-card">
                            <div className="team-img-top ak-parallax">
                                <a href="#"><img src={member.image} alt={member.name} /></a>
                                <div className="team-social-icon">
                                    <a href="#" className="icon">
                                        <i className="flaticon-facebook-logo"></i>
                                    </a>
                                    <a href="#" className="icon">
                                        <i className="flaticon-instagram-logo"></i>
                                    </a>
                                    <a href="#" className="icon">
                                        <i className="flaticon-twitter"></i>
                                    </a>
                                    <a href="#" className="icon">
                                        <i className="flaticon-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="team-body">
                                <h6 className="team-title"><a href="#">{member.name}</a></h6>
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
