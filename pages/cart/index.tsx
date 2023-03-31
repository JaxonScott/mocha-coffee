import Link from "next/link";
import MotionWrapper from "../../components/MotionWrapper";
import product3 from "public/images/product3.jpeg";
import Image from "next/image";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function index() {
  const [quantity, setQuantity] = useState(1);
  return (
    <MotionWrapper>
      <div className="mt-10 md:mt-20"></div>
      <div className="flex flex-wrap md:gap-20 ">
        <div className="w-full  md:w-1/2 flex flex-col flex-wrap md:-order-1">
        <div className="mt-10 md:mt-0"></div>
          <h1 className="text-lg text-secondary font-semibold">
            Shipping details
          </h1>
          <form className="flex flex-col gap-5">
            <div className="w-1/2 ml-auto ">
              <input

                className="hidden md:flex w-full rounded-md py-3 px-3 text-background outline-none"
                placeholder="123, Fake st"
              />
            </div>
            <div className="w-full  ">
              <label className="text-texthover">First line of address</label>
              <input
                className="w-full rounded-md py-3 px-3 mt-2 text-background outline-none"
                placeholder="123"
              />
            </div>
            <div className="w-full ml-auto ">
              <label className="text-texthover">Street name</label>
              <input
                className="w-full rounded-md py-3 px-3 mt-2 text-background outline-none"
                placeholder="Fake st"
              />
            </div>
            <div className="w-full flex gap-10">
              <div className="w-1/3">
                <label className="text-texthover">Postcode</label>
                <input
                  className="w-full rounded-md py-3 px-3 mt-2 text-background outline-none"
                  placeholder="123, Fake st"
                />
              </div>
              <div className="w-full">
                <label className="text-texthover">Select shipping</label>
                <input
                  className="w-full rounded-md py-3 px-3 mt-2 text-background outline-none"
                  placeholder="ABC - 123"
                />
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-10">
              <Link href="/" className="text-texthover my-auto">
                Cancel order
              </Link>
              <button className="bg-secondary text-background text-lg font-semibold px-10 py-3 rounded-md">
                Payment
              </button>
            </div>
          </form>
        </div>
        <div className=" w-full  md:w-1/3 flex flex-col ml-auto -order-1  ">
          <p className="font-semibold text-end mb-4 text-secondary text-lg">
            Order Summary{" "}
          </p>
          <div className="flex flex-col ">
            <div className="relative py-24">
              <Image
                src={product3}
                className="rounded-md"
                layout="fill"
                objectFit="cover"
                alt="product image"
              />
            </div>
            <div className="mt-2"></div>
            <div className="flex justify-between">
              <p className="text-xl">House Specail</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 py-auto pl-2 rounded-md border bg-backgroundlight border-texthover"
                >
                  <AiOutlinePlus />
                </button>
                <div className="my-auto text-xl">{quantity}</div>
                <button
                  onClick={() =>
                    setQuantity(quantity === 1 ? quantity : quantity - 1)
                  }
                  className="w-8 h-8 py-auto pl-2 text-white  rounded-md border border-texthover"
                >
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg">$14.99</p>
            </div>
            <div className="mt-8"></div>
            <label className="text-texthover text-sm">
              Gift Card / Discount Code
            </label>
            <div className="mt-2"></div>
            <div className="flex gap-5">
              <div className=" border w-2/3 py-4 border-texthover rounded-md">
                <input className="bg-background border-texthover rounded-md h-full outline-none w-full" />
              </div>
              <button className="w-1/3 border-2 border-secondary rounded-md text-secondary font-semibold">
                Apply
              </button>
            </div>
            <div className="mt-5"></div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <p>Sub total</p>
                <p className="text-lg ">$14.99</p>
              </div>
              <div className="flex justify-between">
                <p>Tax</p>
                <p className="text-lg ">$1.95</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p className="text-lg  text-secondary">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <p className="text-lg ">$16.95</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10 md:mb-0"></div>
    </MotionWrapper>
  );
}
