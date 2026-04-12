import React, { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import LoadingFallback from "@components/common/LoadingFallback";

const BlankLayout: React.FC = () => {
    return (
        <ReactLenis root>
            <ScrollRestoration />
            <Suspense fallback={<LoadingFallback />}>
                <Outlet />
            </Suspense>
        </ReactLenis>
    );
};

export default BlankLayout;
