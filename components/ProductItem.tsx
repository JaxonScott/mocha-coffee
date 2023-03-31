import Image, { StaticImageData } from "next/image";

import Link from "next/link";

export default function ProductItem({ img }: { img: StaticImageData }) {
  return (
    <Link href="/store/1">
      <div className=" h-full w-full rounded-md">
        <Image
          src={img}
          className="rounded-md"
          layout="fill"
          objectFit="cover"
          alt="product image"
          placeholder="blur"
        />
        <div className="absolute bottom-0 justify-between w-full bg-background bg-opacity-95 flex p-4">
          <div>
            <h1 className="text-lg font-semibold">Latte Bundle</h1>
            <p className="text-sm font-light">popular latte flavours</p>
          </div>
          <div className="my-auto ">
            <p className="text-2xl">$45</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
