import SectionHeading from "@components/common/SectionHeading";

const features = [
    {
        id: "01",
        icon: "flaticon-circle",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "02",
        icon: "flaticon-folded",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
    {
        id: "03",
        icon: "flaticon-twirl",
        title: "Strategic Marketing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry.",
    },
];

interface CoreFeaturesProps {
    variant?: "style-1" | "style-2";
    bgClass?: string;
    title?: string;
    description?: string;
    caption?: string;
}

const CoreFeaturesSection: React.FC<CoreFeaturesProps> = ({
    variant = "style-1",
    bgClass = "",
    title,
    description,
    caption,
}) => {
    return (
        <section
            className={`core-features-area ${bgClass} ${variant === "style-2" ? "ak-solidblack-bg" : ""}`}
        >
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                {title && (
                    <SectionHeading
                        title={title}
                        variant={variant === "style-2" ? "style-2" : "style-1"}
                        className={variant === "style-2" ? "bg-black" : ""}
                        description={description}
                        caption={caption}
                    />
                )}
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="core-features">
                    {features.map((feature, index) => (
                        <div
                            className={`core-feature-card ${
                                variant === "style-2"
                                    ? `style-2 ${index % 2 === 0 ? "color-2" : "color-3"}`
                                    : ""
                            } fade-animation`}
                            data-delay={0.15 + index * 0.2}
                            key={feature.id}
                        >
                            {variant === "style-2" && (
                                <>
                                    <div className="b-top-left">
                                        <div className="horizontal"></div>
                                        <div className="verticle"></div>
                                    </div>
                                    <div className="b-top-right d-flex">
                                        <div className="horizontal"></div>
                                        <div className="verticle"></div>
                                    </div>
                                    <div className="b-bottom-right d-flex flex-end">
                                        <div className="horizontal flex-end align-self-end"></div>
                                        <div className="verticle"></div>
                                    </div>
                                    <div className="b-bottom-left">
                                        <div className="verticle"></div>
                                        <div className="horizontal"></div>
                                    </div>
                                </>
                            )}
                            <div className="icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h6 className="core-feature-title">{feature.title}</h6>
                            <p className="core-feature-desp">{feature.description}</p>
                            <p className="core-feature-number">{feature.id}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ak-height-150 ak-height-lg-80"></div>
        </section>
    );
};
export default CoreFeaturesSection;
