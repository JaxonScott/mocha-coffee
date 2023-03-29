import Image from "next/image";
import logo from "public/images/ logo.png";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-red-200 py-12 flex justify-between">
      <Link href="/">
        <Image src={logo} className="w-40 " alt="logo" />
      </Link>
      <div>
        <ul className="text-lighttext flex gap-4 pt-3">
          <NavItem>
            <span className="text-secondary">HOME</span>
          </NavItem>
          <NavItem>STORE</NavItem>
          <NavItem>CONTACT</NavItem>
          <NavItem>CART</NavItem>
        </ul>
      </div>
    </div>
  );
}
