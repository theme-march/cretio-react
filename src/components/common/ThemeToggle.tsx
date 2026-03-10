import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState<"dark" | "light">(() => {
        return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={`mode-toggle ${isOpen ? "active" : ""}`}>
            <div className="setting-mode" style={{ right: isOpen ? "35px" : "0" }}>
                <button id="open" onClick={toggleOpen} style={{ display: isOpen ? "none" : "block" }}>
                    <i className="flaticon-sun"></i>
                </button>
                <button id="clecel" onClick={toggleOpen} style={{ display: isOpen ? "block" : "none" }}>
                    <i className="flaticon-close-button-1"></i>
                </button>
            </div>
            <div className="mode-btn js-mode-type" style={{ right: isOpen ? "0" : "-40px", display: "flex" }}>
                <button
                    data-mode="light"
                    className={`mode-light ${theme === "light" ? "active" : ""}`}
                    onClick={() => setTheme("light")}
                >
                    <i className="flaticon-sun"></i>
                </button>
                <button
                    data-mode="dark"
                    className={`mode-dark ${theme === "dark" ? "active" : ""}`}
                    onClick={() => setTheme("dark")}
                >
                    <i className="flaticon-night-mode"></i>
                </button>
            </div>
        </div>
    );
};

export default ThemeToggle;
