import React, { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import Header from "@layout/Header";
import Footer from "@layout/Footer";
import ThemeToggle from "@components/common/ThemeToggle";
import Preloader from "@components/common/Preloader";
import ScrollToTop from "@components/common/ScrollToTop";
import LoadingFallback from "@components/common/LoadingFallback";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const lenis = useLenis();
    const navType = useNavigationType();

    
    const scrollPosRef = useRef(0);

    useEffect(() => {
       
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useEffect(() => {
        if (!lenis) return;
        const handleScroll = (e: any) => {
            scrollPosRef.current = e.scroll;
        };
        lenis.on("scroll", handleScroll);
        return () => lenis.off("scroll", handleScroll);
    }, [lenis]);

    useEffect(() => {
        const key = location.key;
        return () => {
            sessionStorage.setItem(`scroll-pos-${key}`, String(scrollPosRef.current));
        };
    }, [location.key]);

   
    useEffect(() => {
        if (navType !== "POP") {
            scrollPosRef.current = 0;
            if (lenis) {
                lenis.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
            const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
            return () => clearTimeout(timer);
        } else {
            const savedPos = sessionStorage.getItem(`scroll-pos-${location.key}`);
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
                if (savedPos && lenis) {
                    lenis.scrollTo(parseInt(savedPos, 10), { immediate: true });
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [location.key, lenis, navType]);

    const handleLoadingComplete = () => {
        ScrollTrigger.refresh();
    };

    return (
        <ReactLenis root>
            <Preloader onLoadingComplete={handleLoadingComplete} />
            <ThemeToggle />
            <ScrollToTop />
            <Header />
            <main style={{ minHeight: "101vh" }}>
                <Suspense fallback={<LoadingFallback />}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default MainLayout;
