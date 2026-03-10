import React, { useEffect, useState } from "react";

interface PreloaderProps {
    onComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let interval: any;
        if (percent < 100) {
            interval = setInterval(() => {
                setPercent((prev) => Math.min(prev + 1, 100));
            }, 20);
        } else {
            setTimeout(() => {
                setIsLoaded(true);
                if (onComplete) onComplete();
            }, 500);
        }
        return () => clearInterval(interval);
    }, [percent, onComplete]);

    if (isLoaded) return null;

    return (
        <div id="preloader" className="preloader">
            <div className="txt-loading">
                <div className="preloader-text">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 800 300"
                        className="preloader-text-svg"
                    >
                        <defs>
                            <linearGradient
                                id="textGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#000" />
                                <stop offset="50%" stopColor="#000" />
                                <stop offset="100%" stopColor="#000" />
                            </linearGradient>
                        </defs>
                        <text className="svg-text" id="svgText" x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            cretio
                        </text>
                    </svg>
                </div>
                <div className="loading-percent">{percent}%</div>
            </div>
        </div>
    );
};

export default Preloader;
