import React from "react";
import SectionHeading from "@components/common/SectionHeading";

const steps = [
    { id: "01", title: "Planning and Idea Validation" },
    { id: "02", title: "Wireframing and Design" },
    { id: "03", title: "Technical Planning & Development" },
    { id: "04", title: "Testing and Quality Assurance" },
];

const ProcessSection: React.FC = () => {
    return (
        <section>
            <div className="container">
                <SectionHeading
                    title='Our <span class="highlight">Exceptional</span> Digital Industrial <span class="highlight">Working Process</span>'
                    caption="Process"
                />
                <div className="ak-height-75 ak-height-lg-50"></div>
                <div className="funfact-content">
                    {steps.map((step) => (
                        <div className="funfact style1" key={step.id}>
                            <div className="funfact-card style-1">
                                <div className="funfact-number">
                                    <span>{step.id.charAt(0)}</span>
                                    <span className="amin_auto_count">{step.id.substring(1)}</span>
                                </div>
                                <p className="funfact-text text-center" dangerouslySetInnerHTML={{ __html: step.title }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
