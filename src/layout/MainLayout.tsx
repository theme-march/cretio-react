import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ThemeToggle from "@components/common/ThemeToggle";
import Preloader from "@components/common/Preloader";
import ScrollToTop from "@components/common/ScrollToTop";

const MainLayout: React.FC = () => {

    return (
        <>
            <Preloader />
            <ThemeToggle />
            <ScrollToTop />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
