import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const clients = [
    { "id": 1, "img": "client-1.png", "title": "Partner Agency", "subtitle": "Portfolio Template", "delay": 0.15 },
    { "id": 2, "img": "client-2.png", "title": "Vixan Dev", "subtitle": "Portfolio Template", "delay": 0.35 },
    { "id": 3, "img": "client-3.png", "title": "Enfhess Star", "subtitle": "NFT Market Star Point", "delay": 0.55 },
    { "id": 4, "img": "client-1.png", "title": "Partner Agency", "subtitle": "Portfolio Template", "delay": 0.75 },
    { "id": 5, "img": "client-4.png", "title": "Fingcon Con", "subtitle": "Consulting Hub GloBAL", "delay": 0.95 },
    { "id": 6, "img": "client-2.png", "title": "Vixan Dev", "subtitle": "Portfolio Template", "delay": 0.15 },
    { "id": 7, "img": "client-1.png", "title": "Partner Agency", "subtitle": "Portfolio Template", "delay": 0.35 },
    { "id": 8, "img": "client-4.png", "title": "Fingcon Con", "subtitle": "Consulting Hub GloBAL", "delay": 0.55 },
    { "id": 9, "img": "client-1.png", "title": "Partner Agency", "subtitle": "Portfolio Template", "delay": 0.75 },
    { "id": 10, "img": "client-3.png", "title": "Enfhess Star", "subtitle": "NFT Market Star Point", "delay": 0.95 }
];
import { getImagePath } from "@/utils/imageLoader";

interface ClientLogoSectionProps {
    showTitle?: boolean;
    direction?: "left" | "right" | "top" | "bottom";
    variant?: "default" | "about";
    limit?: number;
}

const ClientLogoSection: React.FC<ClientLogoSectionProps> = ({
    showTitle = false,
    direction = "bottom",
    variant = "default",
    limit,
}) => {
    const displayedClients = limit ? clients.slice(0, limit) : clients;

    if (variant === "about") {
        return (
            <>
                <div className="ak-height-150 ak-height-lg-80"></div>
                <section className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="w-25">Our Trusted Partner</h6>
                        <div className="ak-border-width w-75"></div>
                    </div>
                    <div className="ak-slider client-logo-slider">
                        <Swiper
                            className="swiper-wrapper row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 flex-nowrap"
                            modules={[Navigation]}
                            loop={true}
                            navigation={{
                                nextEl: ".client-logo-next",
                                prevEl: ".client-logo-prev",
                            }}
                            spaceBetween={20}
                            breakpoints={{
                                320: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                        >
                            {displayedClients.map((client) => (
                                <SwiperSlide key={client.id}>
                                    <div className="client-logo border-0">
                                        <img src={getImagePath(client.img)} alt={client.title} />
                                        <div className="client-info">
                                            <h6 className="client-title">{client.title}</h6>
                                            <p className="client-shot-title">{client.subtitle}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="ak-border-width w-75"></div>
                        <div className="d-flex gap-3">
                            <div className="arrow-circle-btn prev client-logo-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                    <g clipPath="url(#clip0_2423272_379)">
                                        <path d="M0.716728 5.58228L6.17073 1.58728V5.24028L26.5947 5.58228L6.17073 5.92428V9.57728L0.716728 5.58228Z" fill="#353535" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2423272_379">
                                            <rect width="27" height="9" fill="white" transform="matrix(-1 0 0 1 27.4551 0.949463)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="arrow-circle-btn next client-logo-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
                                    <g clipPath="url(#clip0_2272434234_376)">
                                        <path d="M27.1934 5.58228L21.7394 1.58728V5.24028L1.31543 5.58228L21.7394 5.92428V9.57728L27.1934 5.58228Z" fill="#353535" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2272434234_376">
                                            <rect width="27" height="9" fill="white" transform="translate(0.455078 0.949463)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className="container">
                {showTitle && (
                    <>
                        <h4 className="ak-center">
                            <span className="me-2"> Our Trusted</span>
                            <span className="ak-primary-color ak-secondary-font ak-font-italic ak-normal text-decoration-underline">
                                Partner
                            </span>
                        </h4>
                        <div className="ak-height-30 ak-height-lg-30"></div>
                    </>
                )}
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
                    {displayedClients.map((client) => (
                        <div className="col" key={client.id}>
                            <div
                                className={`client-logo fade-animation`}
                                data-offset="40"
                                data-delay={client.delay}
                                data-direction={direction}
                                data-duration="0.75"
                            >
                                <img src={getImagePath(client.img)} alt={client.title} />
                                <div className="client-info">
                                    <h6 className="client-title">{client.title}</h6>
                                    <p className="client-shot-title">{client.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ClientLogoSection;
