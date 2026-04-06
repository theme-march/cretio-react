import React from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeading from "@components/common/SectionHeading";

import team1 from "@assets/img/team/team-1.png";
import team2 from "@assets/img/team/team-2.png";
import team3 from "@assets/img/team/team-3.png";
import team4 from "@assets/img/team/team-4.png";

import markagTeam1 from "@assets/img/team/markag-team-1.png";
import markagTeam2 from "@assets/img/team/markag-team-2.png";
import markagTeam3 from "@assets/img/team/markag-team-3.png";
import markagTeam4 from "@assets/img/team/markag-team-4.png";

const standardTeam = [
    { name: "Alex Johnson", role: "Creative Director", image: team1 },
    { name: "Taylor Smith", role: "Graphic Designer", image: team2 },
    { name: "Jamie Lee", role: "Art Director", image: team3 },
    { name: "Morgan Brown", role: "UX/UI Designer", image: team4 },
    { name: "Alex Johnson", role: "Creative Director", image: team1 },
    { name: "Taylor Smith", role: "Graphic Designer", image: team2 },
    { name: "Jamie Lee", role: "Art Director", image: team3 },
    { name: "Morgan Brown", role: "UX/UI Designer", image: team4 },
    { name: "Alex Johnson", role: "Creative Director", image: team1 },
];

const marketingTeam = [
    { name: "Jennifer Alexandria", role: "CEO & Founder", image: markagTeam1 },
    { name: "Jonathan Christopher", role: "Marketing Officer", image: markagTeam2 },
    { name: "Michael Alexander", role: "Marketing Manager", image: markagTeam3 },
    { name: "William Anthony", role: "Social Manager", image: markagTeam4 },
];

const TeamSection: React.FC = () => {
    const location = useLocation();
    const isMarketingAgency = location.pathname === "/marketing-agency";
    const teamMembers = isMarketingAgency ? marketingTeam : standardTeam;

    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container" style={isMarketingAgency ? { maxWidth: "1296px" } : {}}>
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">Team Members</span>'
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. has been industry and typesetting of the printing ."
                    caption="426+ Team Members"
                    variant="style-1"
                    disableDespAnimation={true}
                />
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container" style={isMarketingAgency ? { maxWidth: "1296px" } : {}}>
                {isMarketingAgency && (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gy-4 justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="fade-animation" data-direction="bottom" data-delay={index * 0.1}>
                                <div className="border-0 team-card h-100">
                                    <div className="team-img-top ak-parallax" style={{ width: "306px", margin: "0 auto", aspectRatio: "306 / 372", overflow: "hidden" }}>
                                        <a href="#"><img src={member.image} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></a>
                                        <div className="team-social-icon">
                                            <a href="#" className="icon"><i className="flaticon-facebook-logo"></i></a>
                                            <a href="#" className="icon"><i className="flaticon-instagram-logo"></i></a>
                                            <a href="#" className="icon"><i className="flaticon-twitter"></i></a>
                                        </div>
                                    </div>
                                    <div className="team-body" style={{ width: "306px", margin: "30px auto 0" }}>
                                        <h6 className="team-title"><a href="#">{member.name}</a></h6>
                                        <p className="team-text text-capitalize fs-6 fw-normal mb-0 opacity-75">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {!isMarketingAgency && (
                <div className="team-swiper-controller">
                    <div className="team-logs-scrollbar"></div>
                    <div className="team-logs-navigation">
                        <div className="team-logs-button-prev">
                            <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                                <path
                                    d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z"
                                    fill="#353535"
                                />
                            </svg>
                        </div>
                        <div className="team-logs-button-next">
                            <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                                <path
                                    d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z"
                                    fill="#353535"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
            {!isMarketingAgency && (
                <div className="mt-4 ak-slider ak-team-slider">
                    <Swiper
                        modules={[Navigation, Scrollbar]}
                        loop={true}
                        spaceBetween={30}
                        navigation={{
                            nextEl: ".team-logs-button-next",
                            prevEl: ".team-logs-button-prev",
                        }}
                        scrollbar={{
                            el: ".team-logs-scrollbar",
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                            1200: { slidesPerView: 4.5 },
                        }}
                        className="swiper-container"
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="border-0 team-card">
                                    <div className="team-img-top ak-parallax">
                                        <a href="#"><img src={member.image} alt={member.name} /></a>
                                        <div className="team-social-icon">
                                            <a href="#" className="icon"><i className="flaticon-facebook-logo"></i></a>
                                            <a href="#" className="icon"><i className="flaticon-instagram-logo"></i></a>
                                            <a href="#" className="icon"><i className="flaticon-twitter"></i></a>
                                            <a href="#" className="icon"><i className="flaticon-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="team-body team-name-parallax" style={{ marginTop: "30px" }}>
                                        <h6 className="team-title"><a href="#">{member.name}</a></h6>
                                        <p className="team-text text-capitalize fs-6 fw-normal mb-0 opacity-75">{member.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </section>
    );
};

export default TeamSection;
