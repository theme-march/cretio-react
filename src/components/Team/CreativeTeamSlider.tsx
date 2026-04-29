import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SectionHeading from "@components/Common/SectionHeading";
import TeamCard from "./TeamCard";
import teamData from "@/dataJson/teamMembersData.json";

import "swiper/css";
import "swiper/css/scrollbar";

const CreativeTeamSlider: React.FC = () => {
    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">Team Members</span>'
                    description="Meet our team of digital experts committed to delivering excellence through innovation and technical precision."
                    caption="426+ Team Members"
                    variant="style-1"
                    titleDirection="textLeft"
                    descriptionDirection="none"
                    disableDespAnimation={true}
                    disableCaptionAnimation={true}
                />
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>

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
                    {teamData.standardTeam.map((member) => (
                        <SwiperSlide key={member.name} className="ak-team-slide">
                            <TeamCard member={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CreativeTeamSlider;
