import React from "react";
import portfolioBanner from "@assets/img/portfolio/portfolio-banner.jpg";

const PortfolioMainImage: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="portfolio-main-img ak-center ak-parallax">
                <img src={portfolioBanner} className="pd-main-img" alt="Main portfolio project showcase banner" />
                <div className="image-content">
                    <h4 className="image-content-title me-5">Exceptional Android App Development</h4>
                    <div className="image-content-box">
                        <div className="image-info">
                            <h6 className="image-info-title">Published:</h6>
                            <p className="image-info-desp">08/07/2024</p>
                        </div>
                        <div className="image-info">
                            <h6 className="image-info-title">Industry:</h6>
                            <p className="image-info-desp">Business Management</p>
                        </div>
                    </div>
                    <div className="image-content-box justify-content-xl-end">
                        <div className="image-info">
                            <h6 className="image-info-title">Services:</h6>
                            <p className="image-info-desp">Android App Dev</p>
                        </div>
                        <div className="image-info">
                            <h6 className="image-info-title">Client:</h6>
                            <p className="image-info-desp">Mostahid Kanon</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioMainImage;
