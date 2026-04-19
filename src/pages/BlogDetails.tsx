import React from "react";
import Breadcrumb from "@components/common/Breadcrumb";
import BlogDetailsBanner from "@components/sections/BlogDetailsBanner";
import BlogDetailsContent from "@components/sections/BlogDetailsContent";
import useGsapAnimations from "@hooks/useGsapAnimations";

const BlogDetails: React.FC = () => {
    useGsapAnimations();
    return (
        <>
            <Breadcrumb
                title="Our Exceptional Digital Industrial Recent News"
                highlightWords={["Exceptional", "News"]}
                links={[
                    { label: "Home", path: "/" },
                    { label: "Blog Details", path: "" },
                ]}
                variant="style-2"
                strokeText="ARTICLES"
                showCircle={false}
                strokeTextClass="text-normal"
            />
            <BlogDetailsBanner />
            <div className="ak-height-85 ak-height-lg-50"></div>
            <BlogDetailsContent disableParallax={true} />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </>
    );
};

export default BlogDetails;
