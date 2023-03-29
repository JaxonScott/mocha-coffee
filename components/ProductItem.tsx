import Image from "next/image";
import product1 from "public/images/product1.jpeg";
import Link from "next/link";

export default function ProductItem() {
  return (
    <Link href="/store/1">
      <div className="relative h-full w-full rounded-md">
        <Image
          src={product1}
          className="rounded-md"
          layout="fill"
          objectFit="cover"
          alt="product image"
        />
        <div className="absolute bottom-0 justify-between w-full bg-background bg-opacity-95 flex p-4">
          <div>
            <h1 className="text-lg font-semibold">Latte Buiundle</h1>
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
