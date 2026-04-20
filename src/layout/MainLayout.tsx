import React, { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import ThemeToggle from "@components/common/ThemeToggle";
import Preloader from "@components/common/Preloader";
import ScrollToTop from "@components/common/ScrollToTop";
import LoadingFallback from "@components/common/LoadingFallback";
import Lenis from "lenis";
import { THEME_CONFIG } from "@/config/theme.config";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const navType = useNavigationType();
    const lenisRef = useRef<Lenis | null>(null);
    const scrollPosRef = useRef(0);

    // 1. Initial Scroll Restoration Setup
    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    // 2. Track Scroll Position
    useEffect(() => {
        const handleScroll = () => {
            scrollPosRef.current = window.scrollY;
        };

        const handleGlobalClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link && link.getAttribute("href") === "#") {
                e.preventDefault();
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleGlobalClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleGlobalClick);
        };
    }, []);

    // 3. Save Scroll Position on Navigation
    useEffect(() => {
        const key = location.key;
        return () => {
            try {
                sessionStorage.setItem(`scroll-pos-${key}`, String(scrollPosRef.current));
            } catch (e) {
                // Ignore storage errors (e.g. private mode)
            }
        };
    }, [location.key]);

    // 4. Handle Scroll Restoration on Route Change
    useEffect(() => {
        if (navType !== "POP") {
            scrollPosRef.current = 0;
            if (lenisRef.current) {
                lenisRef.current.scrollTo(0, { immediate: true });
            } else {
                window.scrollTo(0, 0);
            }
            const timer = setTimeout(() => ScrollTrigger.refresh(), 300);
            return () => clearTimeout(timer);
        } else {
            const savedPos = sessionStorage.getItem(`scroll-pos-${location.key}`);
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
                if (savedPos) {
                    const pos = parseInt(savedPos, 10);
                    if (lenisRef.current) {
                        lenisRef.current.scrollTo(pos, { immediate: true });
                    } else {
                        window.scrollTo(0, pos);
                    }
                }
            }, 400); // Slightly faster refresh
            return () => clearTimeout(timer);
        }
    }, [location.key, navType]);

    // 5. Initialize Smooth Scroll (conditional)
    useEffect(() => {
        if (!THEME_CONFIG.smoothScroll) return;

        const lenis = new Lenis({
            duration: 0.4, // Subtle, nearly native duration
            easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth but responsive cubic ease
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1, // Native-feel on touch
            infinite: false,
        });

        lenisRef.current = lenis;

        const onScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onScroll);

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

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
