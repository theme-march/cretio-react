import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import TeamGridSection from "@components/sections/TeamGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Team: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text"> Exceptional</span> Digital Industrial <span class="highlight-text">Team Member</span>'
                highlightWords={["Exceptional", "Member"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Team Member", path: "" },
                ]}
                variant="style-2"
                strokeText="TEAM"
                showCircle={false}
                strokeTextClass="text-normal"
            />
            <TeamGridSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Team;
