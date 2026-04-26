import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import BlankLayout from "@layout/BlankLayout";

const Home = React.lazy(() => import("@pages/Home"));
const About = React.lazy(() => import("@pages/About"));
const Services = React.lazy(() => import("@pages/Services"));
const ServiceDetails = React.lazy(() => import("@pages/ServiceDetails"));
const Portfolio = React.lazy(() => import("@pages/Portfolio"));
const PortfolioDetails = React.lazy(() => import("@pages/PortfolioDetails"));
const Blog = React.lazy(() => import("@pages/Blog"));
const BlogDetails = React.lazy(() => import("@pages/BlogDetails"));
const Contact = React.lazy(() => import("@pages/Contact"));
const MarketingAgency = React.lazy(() => import("@pages/MarketingAgency"));
const DesignCompany = React.lazy(() => import("@pages/DesignCompany"));
const CreativePortfolio = React.lazy(() => import("@pages/CreativePortfolio"));
const MinimalStudio = React.lazy(() => import("@pages/MinimalStudio"));
const SeoAgency = React.lazy(() => import("@pages/SeoAgency"));
const Team = React.lazy(() => import("@pages/Team"));
const Pricing = React.lazy(() => import("@pages/Pricing"));
const Faq = React.lazy(() => import("@pages/Faq"));
const NotFound = React.lazy(() => import("@pages/ErrorPages/404"));
const ComingSoon = React.lazy(() => import("@pages/ComingSoon"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "services",
        children: [
          { index: true, element: <Services /> },
          { path: "service-details", element: <ServiceDetails /> },
        ],
      },
      {
        path: "portfolio",
        children: [
          { index: true, element: <Portfolio /> },
          { path: "portfolio-details", element: <PortfolioDetails /> },
        ],
      },
      {
        path: "blog",
        children: [
          { index: true, element: <Blog /> },
          { path: "blog-details", element: <BlogDetails /> },
        ],
      },
      { path: "team", element: <Team /> },
      { path: "pricing", element: <Pricing /> },
      { path: "faq", element: <Faq /> },
      { path: "contact", element: <Contact /> },
      { path: "marketing-agency", element: <MarketingAgency /> },
      { path: "design-company", element: <DesignCompany /> },
      { path: "creative-portfolio", element: <CreativePortfolio /> },
      { path: "minimal-studio", element: <MinimalStudio /> },
      { path: "seo-agency", element: <SeoAgency /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "coming-soon",
    element: <BlankLayout />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <ComingSoon /> }],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
