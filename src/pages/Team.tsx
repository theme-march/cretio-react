import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import TeamGridSection from "@components/sections/TeamGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Team: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Breadcrumb
                title="Our Exceptional Digital Industrial Team Member"
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
        </div>
    );
};

export default Team;
