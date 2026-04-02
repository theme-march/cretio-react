import React, { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ThemeToggle from "@components/common/ThemeToggle";
import Preloader from "@components/common/Preloader";
import ScrollToTop from "@components/common/ScrollToTop";
import LoadingFallback from "@components/common/LoadingFallback";

const MainLayout: React.FC = () => {
    return (
        <ReactLenis root>
            <ScrollRestoration />
            <Preloader />
            <ThemeToggle />
            <ScrollToTop />
            <Header />
            <main>
                <Suspense fallback={<LoadingFallback />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default MainLayout;
