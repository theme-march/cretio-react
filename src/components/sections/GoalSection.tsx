import React from "react";
import goalCircleOverlay from "@assets/img/bg/goal-circle-overlay.png";
import useCountUp from "@hooks/useCountUp";

const skills = [
    { title: "UI/UX Design", percentage: 95 },
    { title: "Web Development", percentage: 80 },
    { title: "App Development", percentage: 95 },
    { title: "CMS Development", percentage: 98 },
];

interface SkillBarProps {
    title: string;
    percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ title, percentage }) => {
    const count = useCountUp(percentage);
    return (
        <div className="ak-skill-box type-2">
            <div className="ak-skill-text">
                <p className="ak-skill-title">{title}</p>
                <p className="ak-skill-per">{count}%</p>
            </div>
            <div className="ak-skill-bar">
                <div
                    className="ak-skill-fill"
                    style={{ width: `${count}%` }}
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
                                Maximizing Client
                                <span className="highlight underline-anim text-underline">
                                    {" "}
                                    ROI{" "}
                                </span>
                                Through Data-Driven
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
                        </div>
                    </div>
                </div>
                <div className="ak-height-150 ak-height-lg-80"></div>
            </section>
        </>
    );
};

export default GoalSection;
