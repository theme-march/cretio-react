import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import BlogSection from "@components/sections/BlogSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Blog: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title="Our Exceptional Digital Industrial Recent News"
                highlightWords={["Exceptional", "News"]}
                links={[{ label: "Home", path: "/" }, { label: "Blog", path: "" }]}
                variant="style-2"
                showCircle={false}
                strokeText="Articles"
                strokeTextClass="text-normal"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <BlogSection showHeading={false} showLoadMore={true} disableAnimation={true} />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Blog;
