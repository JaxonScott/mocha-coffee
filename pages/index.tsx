import CTAButton from "../components/CTAButton";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-14"></div>
      <div>
        <div className="w-1/2">
          <h1 className="text-6xl">
            Quality Caffeine <br /> Without the price tag
          </h1>
          <p className="mt-6 leading-loose text-md ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="mt-7"></div>
          <div className="flex gap-9">
            <CTAButton>Browse our products</CTAButton>
            <Link
              href={"/store"}
              className="pt-3 font-light text-lg flex gap-2"
            >
              View Spring Flavours{" "}
              <span className="pt-1.5">
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="mt-14"></div>
          <div className="w-full flex border p-6 gap-2 border-lighttext rounded-lg">
            <p className="w-1/4 my-auto text-5xl font-extralight">10Y</p>
            <p className=" w-2/3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
