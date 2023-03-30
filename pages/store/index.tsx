import React from "react";
import MotionWrapper from "../../components/MotionWrapper";
import ProductItem from "../../components/ProductItem";

export default function StorePage() {
  return (
    <MotionWrapper>
      <div className="mt-20"></div>
      <div>
        <h1 className="text-5xl">Bags</h1>
        <div className="my-4 border-b border-texthover"></div>
        <div className="mb-4">
          <p className="font-light text-texthover">8 products</p>
        </div>
        <div className="flex flex-col w-full gap-10">
          <div className="w-1/4 h-1/4 flex absolute ">
            <div className="h-full w-full">
              <ProductItem />
            </div>
          </div>
        
        </div>
      </div>
    </MotionWrapper>
  );
}
