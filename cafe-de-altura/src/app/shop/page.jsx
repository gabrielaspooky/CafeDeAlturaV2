"use client";
import React from 'react';
import BenefitsSection from '../(main)/BenefitsSection';
import Footer from '../../../components/ui/Footer';
import CopyrightFooter from '../../../components/ui/CopyrightFooter';
import ProductFetcher from '../../../components/ProductFetcher';

const Shop = () => {
  return (
    <div className="min-h-[603.39px] flex flex-col bg-white px-4">
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 text-center my-8">
        Últimos orígenes
      </h2>
      <ProductFetcher className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] w-full mx-auto">
      </ProductFetcher>
      <BenefitsSection />
      <Footer />
    </div>
  );
};

export default Shop;
