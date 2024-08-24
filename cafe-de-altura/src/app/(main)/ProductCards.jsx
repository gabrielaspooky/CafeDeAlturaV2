"use client";
import React, { useContext } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Cards from "../../../components/ui/CardProduct";
// import { FormContext } from "@/context/FormContext";
const ProductCards = () => {
    // const {dataCoffee} = useContext(FormContext)
  return (
    <div className="min-h-[603.39px] flex flex-col justify-center items-center gap-10 bg-white">
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 w-[120px]">
        Novedades
      </h2>
      <div className="flex max-w-[1200px] min-h-[391.39px] gap-6 justify-between items-center">
        <Cards>

        </Cards>
        {/* {dataCoffee.slice(0, 4).map((card, i) => {
          return <CardProduct key={i} data={card} />;
        })} */}
      </div>
      <div>
        <Link
          className="flex justify-between items-center gap-4 text-sm font-semibold text-black"
          href={"/shop"}
        >
          Ver todos
          <ArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;