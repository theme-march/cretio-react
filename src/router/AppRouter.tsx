import { Routes, Route } from "react-router-dom";
import MainLayout from "@layout/MainLayout";
import Home from "@pages/Home";
import About from "@pages/About";
import Services from "@pages/Services";
import ServiceDetails from "@pages/ServiceDetails";
import Portfolio from "@pages/Portfolio";
import PortfolioDetails from "@pages/PortfolioDetails";
import Blog from "@pages/Blog";
import BlogDetails from "@pages/BlogDetails";
import Contact from "@pages/Contact";
import MarketingAgency from "@pages/MarketingAgency";
import DesignCompany from "@pages/DesignCompany";
import CreativePortfolio from "@pages/CreativePortfolio";
import MinimalStudio from "@pages/MinimalStudio";
import SeoAgency from "@pages/SeoAgency";
import Team from "@pages/Team";
import Pricing from "@pages/Pricing";
import Faq from "@pages/Faq";
import NotFound from "@pages/NotFound";
import ComingSoon from "@pages/ComingSoon";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="service-details" element={<ServiceDetails />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="portfolio-details" element={<PortfolioDetails />} />
                <Route path="blog" element={<Blog />} />
                <Route path="blog-details" element={<BlogDetails />} />
                <Route path="team" element={<Team />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} />
                <Route path="marketing-agency" element={<MarketingAgency />} />
                <Route path="design-company" element={<DesignCompany />} />
                <Route path="creative-portfolio" element={<CreativePortfolio />} />
                <Route path="minimal-studio" element={<MinimalStudio />} />
                <Route path="seo-agency" element={<SeoAgency />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="coming-soon" element={<ComingSoon />} />
        </Routes>
    );
};

export default AppRouter;
