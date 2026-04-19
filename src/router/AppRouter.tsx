import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import BlankLayout from "@layout/BlankLayout";

const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Services = lazy(() => import("@pages/Services"));
const ServiceDetails = lazy(() => import("@pages/ServiceDetails"));
const Portfolio = lazy(() => import("@pages/Portfolio"));
const PortfolioDetails = lazy(() => import("@pages/PortfolioDetails"));
const Blog = lazy(() => import("@pages/Blog"));
const BlogDetails = lazy(() => import("@pages/BlogDetails"));
const Contact = lazy(() => import("@pages/Contact"));
const MarketingAgency = lazy(() => import("@pages/MarketingAgency"));
const DesignCompany = lazy(() => import("@pages/DesignCompany"));
const CreativePortfolio = lazy(() => import("@pages/CreativePortfolio"));
const MinimalStudio = lazy(() => import("@pages/MinimalStudio"));
const SeoAgency = lazy(() => import("@pages/SeoAgency"));
const Team = lazy(() => import("@pages/Team"));
const Pricing = lazy(() => import("@pages/Pricing"));
const Faq = lazy(() => import("@pages/Faq"));
const NotFound = lazy(() => import("@pages/ErrorPages/404"));
const ComingSoon = lazy(() => import("@pages/ComingSoon"));

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
