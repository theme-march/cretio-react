import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import TeamGridSection from "@components/Team/TeamGridSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Team: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Our Team | Cretio – Digital Agency</title>
                <meta name="description" content="Meet the talented individuals behind Cretio." />
            </Helmet>
            <Breadcrumb
                title="Our Exceptional Digital Industrial Team Member"
                highlightWords={["Exceptional", "Team Member"]}
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

