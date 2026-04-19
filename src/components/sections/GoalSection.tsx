import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import goalCircleOverlay from "@assets/img/bg/goal-circle-overlay.png";

import commonData from "@/dataJson/commonSectionsData.json";

const skills = commonData.skills;

interface SkillBarProps {
    title: string;
    percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ title, percentage }) => {
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const counter = { value: 0 };
            gsap.to(barRef.current, {
                width: `${percentage}%`,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: barRef.current,
                    start: "top 90%",
                },
            });

            gsap.to(counter, {
                value: percentage,
                duration: 2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: barRef.current,
                    start: "top 90%",
                },
                onUpdate: () => {
                    if (textRef.current) {
                        textRef.current.innerText = `${Math.floor(counter.value)}%`;
                    }
                },
            });
        });
        return () => ctx.revert();
    }, [percentage]);

    return (
        <div className="ak-skill-box type-2">
            <div className="ak-skill-text">
                <p className="ak-skill-title">{title}</p>
                <p className="ak-skill-per" ref={textRef}>0%</p>
            </div>
            <div className="ak-skill-bar">
                <div
                    className="ak-skill-fill"
                    ref={barRef}
                    style={{ width: "0%" }}
                ></div>
            </div>
        </div>
    );
};

const GoalSection: React.FC = () => {
    return (
        <>
            <div className="ak-height-150 ak-height-lg-80"></div>
            <section className="ak-solidblack-bg">
                <div className="ak-height-150 ak-height-lg-80"></div>
                <div className="container">
                    <div className="ak-section-heading ak-style-1 bg-black">
                        <div className="ak-section-left">
                            <h2 className="ak-section-title text-animation">
                                <span className="highlight underline-anim text-white text-underline-white">
                                    Our Goal{" "}
                                </span>
                                <span> Maximizing Client </span>
                                <span className="highlight underline-anim text-underline">
                                    {" "}
                                    ROI{" "}
                                </span>
                                <span> Through Data-Driven </span>
                                <span className="highlight underline-anim text-white text-underline-white">
                                    Campaigns
                                </span>
                            </h2>
                        </div>
                        <div className="ak-section-right">
                            <div className="ak-section-caption">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="223"
                                        height="12"
                                        viewBox="0 0 223 12"
                                        fill="none"
                                    >
                                        <path
                                            d="M1.33789 1.18359H221.034L209.173 10.9822"
                                            stroke="#FF4A23"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                                <span> Straight Goal </span>
                            </div>
                            <p className="ak-section-desp">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled.
                            </p>
                        </div>
                    </div>
                    <div className="ak-height-75 ak-height-lg-50"></div>
                    <div className="progress-goal">
                        <div className="progress-container">
                            {skills.map((skill, index) => (
                                <SkillBar
                                    key={index}
                                    title={skill.title}
                                    percentage={skill.percentage}
                                />
                            ))}
                        </div>
                        <div className="goal-circle-container">
                            <div className="goal-circle">
                                <div className="goal-circle-overlay">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="238"
                                        height="237"
                                        viewBox="0 0 238 237"
                                        fill="none"
                                    >
                                        <path
                                            opacity="0.5"
                                            d="M202.545 35.0658C180.23 12.7513 150.543 0.446655 119 0.446655C87.457 0.446655 57.7695 12.7513 35.4551 35.0658C13.1406 57.3802 0.835938 87.0677 0.835938 118.611C0.835938 150.154 13.1406 179.841 35.4551 202.156C57.7695 224.47 87.457 236.775 119 236.775C150.543 236.775 180.23 224.47 202.545 202.156C224.859 179.841 237.164 150.154 237.164 118.611C237.164 87.0677 224.859 57.3802 202.545 35.0658ZM36.8223 200.788C14.8984 178.816 2.78906 149.665 2.78906 118.611C2.78906 87.556 14.8984 58.4056 36.8223 36.433C53.082 20.1732 73.2969 9.33337 95.2695 4.79236C80.9629 10.2123 67.8281 20.515 57.0371 35.1635C40.582 57.4779 31.5 87.1166 31.5 118.611C31.5 150.105 40.582 179.744 57.0371 202.058C67.8281 216.658 80.9629 227.009 95.2695 232.429C73.2969 227.888 53.082 217.048 36.8223 200.788ZM33.4531 118.611C33.4531 58.8939 66.8027 9.52869 109.527 3.1322C101.178 7.86853 93.5605 18.9525 87.5059 35.4076C79.3027 57.6244 74.7617 87.2142 74.7617 118.611C74.7617 150.007 79.3027 179.597 87.5059 201.814C93.5605 218.269 101.178 229.353 109.527 234.089C66.8027 227.693 33.4531 178.328 33.4531 118.611ZM118.023 234.822C107.281 234.138 97.125 222.273 89.3125 201.179C81.1582 179.158 76.7148 149.861 76.7148 118.66C76.7148 87.4584 81.207 58.1615 89.3125 36.14C97.125 14.9974 107.281 3.1322 118.023 2.44861V234.822Z"
                                            fill="url(#paint0_radial_goal)"
                                        />
                                        <defs>
                                            <radialGradient
                                                id="paint0_radial_goal"
                                                cx="0"
                                                cy="0"
                                                r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(119 118.611) rotate(180) scale(95.8638 806.41)"
                                            >
                                                <stop stopColor="#FF4A23" offset="0%" />
                                                <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <img src={goalCircleOverlay} alt="Team Working" />
                            </div>
                            <div className="goal-shape">
                                <svg
                                    width="38"
                                    height="236"
                                    viewBox="0 0 38 236"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.43478 235.611C2.85261 235.611 3.26987 235.45 3.5898 235.132L33.1457 205.578C33.7768 204.946 33.7768 203.9 33.1457 203.269L5.92429 176.044L34.3456 147.624C34.9738 146.992 34.9738 145.953 34.3456 145.315L7.22382 118.204L35.7826 89.6482C36.4167 89.0101 36.4167 87.9751 35.7826 87.3393L8.55949 60.1168L36.9796 31.6978C37.6166 31.062 37.6166 30.0253 36.9796 29.3895L8.91846 1.33423C8.28326 0.696697 7.24306 0.696697 6.61019 1.33423C5.97441 1.97001 5.97441 3.00497 6.61019 3.6425L33.5128 30.5451L5.11485 58.9466C4.47849 59.5841 4.47849 60.6191 5.11485 61.2549C5.15797 61.298 5.20867 61.3137 5.25821 61.3505C5.31415 61.4285 5.34329 61.5195 5.41788 61.5882L32.324 88.4955L3.92371 116.896C3.5222 117.299 3.40389 117.854 3.50821 118.373C3.49772 118.803 3.64865 119.244 3.9779 119.574L30.8916 146.484L2.47325 174.876C1.84097 175.508 1.84097 176.553 2.47325 177.185C2.51987 177.229 2.57231 177.252 2.61776 177.274C2.67662 177.35 2.70635 177.446 2.78094 177.51L29.683 204.418L1.28327 232.813C0.64516 233.451 0.64516 234.487 1.28327 235.122C1.59388 235.456 2.01171 235.611 2.43478 235.611Z"
                                        fill="url(#paint0_radial_shape1)"
                                    />
                                    <defs>
                                        <radialGradient
                                            id="paint0_radial_shape1"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(19.131 118.233) rotate(180) scale(14.8677 801.041)"
                                        >
                                            <stop stopColor="#FF4A23" offset="0%" />
                                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <svg
                                    width="38"
                                    height="236"
                                    viewBox="0 0 38 236"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.43478 235.611C2.85261 235.611 3.26987 235.45 3.5898 235.132L33.1457 205.578C33.7768 204.946 33.7768 203.9 33.1457 203.269L5.92429 176.044L34.3456 147.624C34.9738 146.992 34.9738 145.953 34.3456 145.315L7.22382 118.204L35.7826 89.6482C36.4167 89.0101 36.4167 87.9751 35.7826 87.3393L8.55949 60.1168L36.9796 31.6978C37.6166 31.062 37.6166 30.0253 36.9796 29.3895L8.91846 1.33423C8.28326 0.696697 7.24306 0.696697 6.61019 1.33423C5.97441 1.97001 5.97441 3.00497 6.61019 3.6425L33.5128 30.5451L5.11485 58.9466C4.47849 59.5841 4.47849 60.6191 5.11485 61.2549C5.15797 61.298 5.20867 61.3137 5.25821 61.3505C5.31415 61.4285 5.34329 61.5195 5.41788 61.5882L32.324 88.4955L3.92371 116.896C3.5222 117.299 3.40389 117.854 3.50821 118.373C3.49772 118.803 3.64865 119.244 3.9779 119.574L30.8916 146.484L2.47325 174.876C1.84097 175.508 1.84097 176.553 2.47325 177.185C2.51987 177.229 2.57231 177.252 2.61776 177.274C2.67662 177.35 2.70635 177.446 2.78094 177.51L29.683 204.418L1.28327 232.813C0.64516 233.451 0.64516 234.487 1.28327 235.122C1.59388 235.456 2.01171 235.611 2.43478 235.611Z"
                                        fill="url(#paint0_radial_shape2)"
                                    />
                                    <defs>
                                        <radialGradient
                                            id="paint0_radial_shape2"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(19.131 118.233) rotate(180) scale(14.8677 801.041)"
                                        >
                                            <stop stopColor="#FF4A23" offset="0%" />
                                            <stop offset="1" stopColor="#FF4A23" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ak-height-150 ak-height-lg-80"></div>
            </section>
        </>
    );
};

export default GoalSection;
