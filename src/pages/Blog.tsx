import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "@components/common/Breadcrumb";
import BlogSection from "@components/sections/BlogSection";
import useGsapAnimations from "@hooks/useGsapAnimations";

const Blog: React.FC = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    useGsapAnimations(containerRef);
    return (
        <div ref={containerRef}>
            <Helmet>
                <title>Blog | Cretio – Digital Agency</title>
                <meta name="description" content="Read the latest articles and insights from the Cretio team." />
            </Helmet>
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
        </div>
    );
};

export default Blog;
