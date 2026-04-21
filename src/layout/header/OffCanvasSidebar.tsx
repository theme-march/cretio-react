import { Link } from "react-router-dom";
import { getImagePath } from "../../utils/imageLoader";

const logos = {
    dark: "src/assets/img/logo/dark-logo.svg",
    white: "src/assets/img/logo/white-logo.svg",
};

const company = {
    description: "We thrive on creativity and innovation. Our team is constantly exploring new ideas and approaches to ensure your digital presence is fresh.",
};

const gallery = [
    "src/assets/img/gallery/mini-gallery-1.png",
    "src/assets/img/gallery/mini-gallery-2.png",
    "src/assets/img/gallery/mini-gallery-3.png",
    "src/assets/img/gallery/mini-gallery-4.png",
    "src/assets/img/gallery/mini-gallery-5.png",
    "src/assets/img/gallery/mini-gallery-6.png",
];

const cta = {
    email: "info@email.com",
};

const contact = {
    phone: "(406) 555-012",
    phoneLink: "tel:(406)555-0120",
    address: "901 N Pitt Str., Suite 170 Alexandria, USA",
};

const socials = [
    { title: "Facebook", icon: "flaticon-facebook", link: "#" },
    { title: "Video/YouTube", icon: "flaticon-video", link: "#" },
    { title: "LinkedIn", icon: "flaticon-linkedin", link: "#" },
];

const OffCanvasSidebar: React.FC = () => {
    return (
        <div
            className="offcanvas offcanvas-end style-1"
            tabIndex={-1}
            id="offcanvasRight"
        >
            <div className="offcanvas-header">
                <button
                    type="button"
                    className="btn-close btn-close-black ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <div className="offcanvas-body-coustom-style">
                    <div className="offcanvas-logo-content">
                        <Link className="ak-site_branding dark-logo" to="/">
                            <img src={getImagePath(logos.dark)} alt="Logo" />
                        </Link>
                        <Link className="ak-site_branding white-logo" to="/">
                            <img src={getImagePath(logos.white)} alt="Logo" />
                        </Link>
                    </div>
                    <p className="desp">
                        {company.description}
                    </p>
                    <div className="row row-cols-3 g-3">
                        {gallery.map((img: string) => (
                            <div className="col" key={img}>
                                <img src={getImagePath(img)} className="img-fluid" alt="Gallery item" />
                            </div>
                        ))}
                    </div>

                    <div className="offcanvas-footer-contant">
                        <p className="short-title">Say hello!</p>
                        <a className="email" href={`mailto:${cta.email}`}>{cta.email}</a>
                        <a className="email" href={contact.phoneLink}>{contact.phone}</a>
                        <a href="#">
                            {contact.address}
                        </a>
                        <div className="ak-height-25 ak-height-lg-25"></div>
                        <p className="short-title">Social:</p>
                        <div className="social-icon">
                            {socials.map((social) => (
                                <a key={social.title} href={social.link} className="icon style-2 dark-mode" target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.title}`}>
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                        <div className="ak-height-40 ak-height-lg-40"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffCanvasSidebar;
