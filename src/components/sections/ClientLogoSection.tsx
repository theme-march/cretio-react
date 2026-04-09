import React from "react";

import client1 from "@assets/img/client/client-1.png";
import client2 from "@assets/img/client/client-2.png";
import client3 from "@assets/img/client/client-3.png";
import client4 from "@assets/img/client/client-4.png";

const clients = [
    { id: 1, img: client1, title: "Credesign", subtitle: "Portfolio Template", delay: 0.15 },
    { id: 2, img: client2, title: "Vixan Dev", subtitle: "Portfolio Template", delay: 0.35 },
    { id: 3, img: client3, title: "Enfhess Star", subtitle: "NFT Market Star Point", delay: 0.55 },
    { id: 4, img: client1, title: "Credesign", subtitle: "Portfolio Template", delay: 0.75 },
    { id: 5, img: client4, title: "Fingcon Con", subtitle: "Consulting Hub GloBAL", delay: 0.95 },
    { id: 6, img: client2, title: "Vixan Dev", subtitle: "Portfolio Template", delay: 0.15 },
    { id: 7, img: client1, title: "Credesign", subtitle: "Portfolio Template", delay: 0.35 },
    { id: 8, img: client4, title: "Fingcon Con", subtitle: "Consulting Hub GloBAL", delay: 0.55 },
    { id: 9, img: client1, title: "Credesign", subtitle: "Portfolio Template", delay: 0.75 },
    { id: 10, img: client3, title: "Enfhess Star", subtitle: "NFT Market Star Point", delay: 0.95 },
];

interface ClientLogoSectionProps {
    showTitle?: boolean;
}

const ClientLogoSection: React.FC<ClientLogoSectionProps> = ({ showTitle = false }) => {
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
                    {clients.map((client) => (
                        <div className="col" key={client.id}>
                            <div
                                className={`client-logo fade-animation`}
                                data-offset="40"
                                data-delay={client.delay}
                                data-direction="bottom"
                                data-duration="0.75"
                            >
                                <img src={client.img} alt={client.title} />
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
