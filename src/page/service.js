import React from "react";
import IntroSection from "../components/intro";
import SearchBar from "../components/introcomponents/searchBar";
import MarketingPlanSection from "../components/MarketingPlan";
import ProcessSection from "../components/process";
import BuyingProcessSection from "../components/buyingprocess";
import AboutSection from "../components/about";
import MarketingStrategySection from "../components/marketingStrategy";
import WorkwithusSection from "../components/workwithus";
import Footer from "../components/footer";

const ServicePage = () => {
    return(
        <div>
            <IntroSection />
            <MarketingPlanSection />
            <ProcessSection />
            <BuyingProcessSection />
            <AboutSection />
            <MarketingStrategySection />
            <WorkwithusSection />
            <Footer />
        </div>

    )
}

export default ServicePage;

