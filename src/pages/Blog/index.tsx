import React from "react";
import { Helmet } from "react-helmet-async";
import BlogBreadcrumb from "@components/Common/BlogBreadcrumb";
import BlogPageMainSection from "@components/Blog/BlogPageMainSection";
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
            <BlogBreadcrumb />
            <div className="ak-height-150 ak-height-lg-80"></div>
            <BlogPageMainSection />
            <div className="ak-height-150 ak-height-lg-80"></div>
        </div>
    );
};

export default Blog;
