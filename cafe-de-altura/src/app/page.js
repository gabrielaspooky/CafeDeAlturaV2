import React from "react";
import Hero from "./(main)/Hero";
import FeatureSection from "./(main)/FeatureSection";
import ProductCards from "./(main)/HomeProductCards";
import FAQWrapper from "./(main)/FAQsWrapper";
import ContactForm from "./(main)/ContactForm";
import Footer from "../../components/ui/Footer";
import BenefitsSection from "./(main)/BenefitsSection";


const Home = () => {
  return (
    <div>
    <Hero />
    <BenefitsSection />
    <ProductCards />
    <FAQWrapper />
   <FeatureSection />
    <ContactForm />
    <Footer />

    </div>
  );
};

export default Home;