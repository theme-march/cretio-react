import React from "react";
import SectionHeading from "@components/Common/SectionHeading";
import TeamCard from "./TeamCard";
import teamData from "@/dataJson/teamMembersData.json";

const MarketingAgencyTeamSection: React.FC = () => {
    return (
        <section>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container" style={{ maxWidth: "1296px" }}>
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">Team Members</span>'
                    description="Meet our team of digital experts committed to delivering excellence through innovation, creative strategy, and technical precision."
                    caption="426+ Team Members"
                    variant="style-1"
                    titleAnimation="fade-animation"
                    titleDirection="right"
                    titleOffset="55"
                    descriptionDirection="left"
                    descriptionOffset="55"
                    captionDirection="left"
                    captionOffset="55"
                />
            </div>
            <div className="ak-height-75 ak-height-lg-50"></div>

            <div className="container" style={{ maxWidth: "1296px" }}>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gy-4 justify-content-center">
                    {teamData.marketingTeam.map((member, index) => (
                        <div key={member.name}>
                            <TeamCard member={member} variant="marketing" index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingAgencyTeamSection;
