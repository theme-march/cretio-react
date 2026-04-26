import React, { Suspense, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@layout/header/header";
import Footer from "@layout/footer/footer";
import ThemeToggle from "@components/Common/ThemeToggle";
import Preloader from "@components/Common/Preloader";
import ScrollToTop from "@components/Common/ScrollToTop";
import LoadingFallback from "@components/Common/LoadingFallback";
import Lenis from "lenis";
import { THEME_CONFIG } from "@/config/theme.config";

const MainLayout: React.FC = () => {
    const location = useLocation();
    const navType = useNavigationType();
    const lenisRef = useRef<Lenis | null>(null);
    const scrollPosRef = useRef(0);



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
            duration: 1.2,             // ThemeForest-safe: feels smooth, not sluggish
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease — snappy start, smooth end
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,        // 1 = native wheel speed, no hijacking feel
            touchMultiplier: 1,        // native touch speed
            infinite: false,
        });

        lenisRef.current = lenis;
        (window as any).__lenis = lenis;

        // Keep ScrollTrigger in sync with Lenis scroll position
        lenis.on("scroll", () => ScrollTrigger.update());

        // Use gsap ticker instead of manual RAF — more reliable with GSAP
        const tickerHandler = (time: number) => {
            lenis.raf(time * 1000);
        };
        gsap.ticker.add(tickerHandler);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerHandler);
            lenis.destroy();
            lenisRef.current = null;
            (window as any).__lenis = null;
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

