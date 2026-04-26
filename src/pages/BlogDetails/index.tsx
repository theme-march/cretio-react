import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/Common/Breadcrumb";
import BlogDetailsBanner from "@components/Blog/BlogDetailsBanner";
import BlogDetailsContent from "@components/Blog/BlogDetailsContent";
import useGsapAnimations from "@hooks/useGsapAnimations";

const BlogDetails: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Blog Details | Cretio – Digital Agency</title>
                <meta name="description" content="Full article from the Cretio blog." />
            </Helmet>
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
        </div>
    );
};

export default BlogDetails;

