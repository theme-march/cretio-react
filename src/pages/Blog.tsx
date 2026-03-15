import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import BlogSection from "@components/sections/BlogSection";

const Blog: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text">Exceptional</span> Digital Industrial <span class="highlight-text">Recent News</span>'
                links={[{ label: "Home", path: "/" }, { label: "Recent News", path: "/blog" }]}
                variant="style-2"
                showCircle={false}
                strokeText="Articles"
                strokeTextClass="text-normal"
            />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <BlogSection showHeading={false} showLoadMore={true} />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default Blog;
