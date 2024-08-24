import React from 'react'
import BenefitsSection from '../(main)/BenefitsSection'
import Footer from '../../../components/ui/Footer'
import CopyrightFooter from '../../../components/ui/CopyrightFooter'

const shop = () => {
  return (
    <div>
    <div className="min-h-[603.39px] flex flex-col bg-white">
      <h2 className="text-2xl text-center font-medium text-[#2A5B45] leading-7 w-[120px] whitespace-nowrap justify-center items-center">
        Últimos orígenes
      </h2>
    <BenefitsSection />
    <Footer />
    <CopyrightFooter />
    </div>
    </div>
  )
}

export default shop