import { getImagePath } from "@/utils/imageLoader";

const BlogDetailsBanner: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="portfolio-main-img ak-center ak-parallax">
                <img src={getImagePath("team/td-main-img.png")} className="td-main-img" alt="Blog post main feature banner" />
            </div>
        </>
    );
};

export default BlogDetailsBanner;
