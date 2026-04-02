import React, { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import LoadingFallback from "@components/common/LoadingFallback";

const BlankLayout: React.FC = () => {
    return (
        <>
            <ScrollRestoration />
            <Suspense fallback={<LoadingFallback />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default BlankLayout;
