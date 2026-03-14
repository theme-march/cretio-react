import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const methodologyData = [
    {
        id: "01",
        title: "Technical SEO Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        hasBgText: true,
    },
    {
        id: "02",
        title: "Keyword Optimization & Internal Linking",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
        id: "03",
        title: "Social Media Engagement & Online",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
    {
        id: "04",
        title: "Content Strategy & Creation",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    },
];

const MethodologySection: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                "(min-width: 1200px)": function () {
                    const pbmitpanels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
                    if (pbmitpanels.length === 0 || !wrapperRef.current) return;

                    const spacer = 0;
                    let pbmitheight = pbmitpanels[0].offsetHeight + 125;

                    pbmitpanels.forEach((pbmitpanel, i) => {
                        gsap.set(pbmitpanel, { left: `${i * 25}%` });
                        ScrollTrigger.create({
                            trigger: pbmitpanel,
                            start: () => "top 125px",
                            endTrigger: wrapperRef.current,
                            end: `bottom top+=${pbmitheight + pbmitpanels.length * spacer}`,
                            pin: true,
                            pinSpacing: false,
                        });
                    });
                },
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <div className="methodology-wrapper">
                <div className="container-fluid">
                    <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-1 g-4 flex-row flex-xl-column">
                        {methodologyData.map((item, index) => (
                            <div 
                                className="col" 
                                key={item.id} 
                                ref={(el) => { panelsRef.current[index] = el; }}
                            >
                                <div className="methodology-card">
                                    {item.hasBgText && <div className="background-text">METHODOLOGY</div>}
                                    <h4 className="methodology-number">{item.id}</h4>
                                    <div className="methodology-info">
                                        <h5 className="methodology-title">{item.title}</h5>
                                        <p className="methodology-desp">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MethodologySection;
