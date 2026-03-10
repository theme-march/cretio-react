import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import BlogDetailsBanner from "@components/sections/BlogDetailsBanner";
import BlogDetailsContent from "@components/sections/BlogDetailsContent";

const BlogDetails: React.FC = () => {
    return (
        <>
            <Breadcrumb
                title='Our <span class="highlight-text"> Exceptional</span> Digital Industrial <span class="highlight-text">Recent News</span>'
                highlightWords={["Exceptional", "News"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Blog Details", path: "" },
                ]}
                variant="style-2"
                strokeText="ARTICLES"
            />
            <BlogDetailsBanner />
            <div className="ak-height-85 ak-height-lg-50"></div>
            <BlogDetailsContent />
        </>
    );
};

export default BlogDetails;
