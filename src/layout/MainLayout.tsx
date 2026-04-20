import React, { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import ThemeToggle from "@components/common/ThemeToggle";
import Preloader from "@components/common/Preloader";
import ScrollToTop from "@components/common/ScrollToTop";
import LoadingFallback from "@components/common/LoadingFallback";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const navType = useNavigationType();

    
    const scrollPosRef = useRef(0);

    useEffect(() => {
       
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            scrollPosRef.current = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const key = location.key;
        return () => {
            sessionStorage.setItem(`scroll-pos-${key}`, String(scrollPosRef.current));
        };
    }, [location.key]);

    useEffect(() => {
        if (navType !== "POP") {
            scrollPosRef.current = 0;
            window.scrollTo(0, 0);
            const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
            return () => clearTimeout(timer);
        } else {
            const savedPos = sessionStorage.getItem(`scroll-pos-${location.key}`);
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
                if (savedPos) {
                    window.scrollTo(0, parseInt(savedPos, 10));
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [location.key, navType]);

    const handleLoadingComplete = () => {
        ScrollTrigger.refresh();
    };

    return (
        <>
            <Preloader onLoadingComplete={handleLoadingComplete} />
            <ThemeToggle />
            <ScrollToTop />
            <Header />
            <main>
                <Suspense fallback={<LoadingFallback />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
