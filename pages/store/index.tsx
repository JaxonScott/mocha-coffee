import React from "react";
import MotionWrapper from "../../components/MotionWrapper";
import product3 from "public/images/product3.jpeg";
import Image from "next/image";

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
        <div className="flex gap-4 flex-wrap">
          <div className="w-full  md:w-1/4 py-32 relative ">
            <Image
              className="rounded-md"
              alt="product img"
              src={product3}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute  flex bottom-0 px-4 bg-background bg-opacity-95 gap-2 w-full py-8">
              <div>
                <h1 className="text-lg font-semibold">House Specail</h1>
                <p className="text-sm font-light">Our house Specail beans</p>
              </div>
              <div className="my-auto">
                <h1 className="text-xl">$44</h1>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" w-full md:w-1/4 py-32 relative ">
            <Image
              className="rounded-md"
              alt="product img"
              src={product3}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute  flex bottom-0 px-4 bg-background bg-opacity-95 gap-2 w-full py-8">
              <div>
                <h1 className="text-lg font-semibold">House Specail</h1>
                <p className="text-sm font-light">Our house Specail beans</p>
              </div>
              <div className="my-auto">
                <h1 className="text-xl">$44</h1>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
