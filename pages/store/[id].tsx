import React from "react";
import MotionWrapper from "../../components/MotionWrapper";
import { AiOutlineStar } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import product2 from "public/images/product2.jpeg";
import { useRouter } from "next/router";

export default function SingleProductPage() {
  return (
    <MotionWrapper>
      <div className="mt-20"></div>
      <div className="flex h-1/2 flex-wrap  ">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-5xl">House Roast</h1>
          <div className="flex gap-4 mt-1">
            <ul className="flex gap-1 text-2xl text-secondary">
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
            </ul>
            <p className="text-lg font-light">10 reviews</p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-thin">$14.99</p>
          </div>
          <div className="flex gap-3 mt-8">
            <div className="border w-16 ">
              <p className="pt-2 pl-3 pb-2">340g</p>
            </div>
            <div className="border w-16 ">
              <p className="pt-2 pl-5">2lb</p>
            </div>
            <div className="border w-16 ">
              <p className="pt-2 pl-5">5lb</p>
            </div>
          </div>
          <div className="mt-8">
            <motion.div whileTap={{ scale: 0.9 }}>
              <button className="bg-secondary text-background py-4 w-60 rounded-md font-semibold text-xl">
                Add To Cart
              </button>
            </motion.div>
          </div>
          <div className="mt-10 leading-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
        <div className="w-full mb-5 md:mb-0  -order-1  md:ml-auto md:order-last md:w-1/3 lg:w-1/3 2xl:w-1/3  relative">
          <div className="h-1/2">
            <Image
              src={product2}
              className="rounded-md"
              layout="contain"
              objectFit="cover "
              alt="product image"
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
