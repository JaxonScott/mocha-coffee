import CTAButton from "../components/CTAButton";
import ProductItem from "../components/ProductItem";
import MotionWrapper from "../components/MotionWrapper";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <MotionWrapper>
      <div className="h-3/4">
        <div className="mt-16 md:mt-20 "></div>
        <div className=" md:flex  gap-8">
          <div className="w-full md:w-1/2 h-3/4">
            <h1 className="text-5xl md:text-6xl">
              Quality Caffeine <br /> Without the price tag
            </h1>
            <p className="mt-6 leading-6 md:leading-loose text-md ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
            <div className="mt-10"></div>
            <div className=" md:flex gap-9">
              <CTAButton>Browse our products</CTAButton>
              <Link
                href={"/store"}
                className="mt-4 md:mt-0 pt-3 font-light text-lg flex gap-2 hover:text-texthover"
              >
                View Spring Flavours{" "}
                <span className="pt-1.5">
                  <AiOutlineArrowRight />
                </span>
              </Link>
            </div>
            <div className="mt-24"></div>
            <div className="hidden w-full  md:flex border p-6 gap-2 border-lighttext rounded-lg">
              <p className="w-1/4 my-auto text-5xl font-extralight">10Y</p>
              <p className=" w-2/3 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 hidden md:flex  gap-4">
            <div className="w-full h-full relative">
              <div className="h-full w-full">
                <ProductItem />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full h-full flex relative">
                <div className="h-full w-full">
                  <ProductItem />
                </div>
              </div>
              <div className="w-full h-full flex relative">
                <div className="h-full w-full">
                  <ProductItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
