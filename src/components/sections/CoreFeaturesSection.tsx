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
}

const CoreFeaturesSection: React.FC<CoreFeaturesProps> = ({
    variant = "style-1",
    bgClass = "",
    title,
}) => {
    return (
        <section className={`core-features-area ${bgClass}`}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="container">
                {title && (
                    <>
                        <SectionHeading title={title} variant="style-1" />
                        <div className="ak-height-50 ak-height-lg-30"></div>
                    </>
                )}
                <div className="core-features">
                    {features.map((feature, index) => (
                        <div
                            className={`core-feature-card ${variant === "style-2" ? "style-2" : ""} fade-animation`}
                            data-delay={0.15 + index * 0.2}
                            key={feature.id}
                        >
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
        </section>
    );
};
export default CoreFeaturesSection;
