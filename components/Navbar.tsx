import Image from "next/image";
import logo from "public/images/ logo.png";
import NavItem from "./NavItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Transition } from "@headlessui/react";
import { clsx } from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const { asPath } = useRouter();
  useEffect(() => {
    const path = asPath.split("/")[1];
    setCurrentPath(path);
  }, [asPath]);

  return (
    <>
      <div className="w-full  pt-8 flex justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image src={logo} className="w-40 " alt="logo" />
        </Link>
        <div className="hidden md:flex">
          <ul className="text-lighttext flex gap-4 pt-3">
            <Link href="/">
              <NavItem>
                {currentPath === "" ? (
                  <span className="text-secondary">HOME</span>
                ) : (
                  "HOME"
                )}
              </NavItem>
            </Link>
            <Link href="/store">
              <NavItem>
                {" "}
                {currentPath === "store" ? (
                  <span className="text-secondary">STORE</span>
                ) : (
                  "STORE"
                )}
              </NavItem>
            </Link>
            <NavItem>
              {" "}
              {currentPath === "contact" ? (
                <span className="text-secondary">CONTACT</span>
              ) : (
                "CONTACT"
              )}
            </NavItem>
            <Link href="/cart">
              <NavItem>
                {" "}
                {currentPath === "cart" ? (
                  <span className="text-secondary">CART</span>
                ) : (
                  "CART"
                )}
              </NavItem>
            </Link>
          </ul>
        </div>
        <div className="my-auto md:hidden text-3xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      <div className={clsx({ ["hidden"]: !isOpen, ["relative"]: isOpen })}>
        <div className="absolute bg-background w-full py-10 rounded-b-md">
          <Transition
            show={isOpen}
            enter="transition ease-out duration-400"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition-opacity duration-150"
            leaveFrom=" opacity-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <ul className="text-lighttext flex gap-4 pt-3 flex-col">
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                <NavItem>
                  {currentPath === "" ? (
                    <span className="text-secondary">HOME</span>
                  ) : (
                    "HOME"
                  )}
                </NavItem>
              </Link>
              <Link href="/store" onClick={() => setIsOpen(!isOpen)}>
                <NavItem>
                  {" "}
                  {currentPath === "store" ? (
                    <span className="text-secondary">STORE</span>
                  ) : (
                    "STORE"
                  )}
                </NavItem>
              </Link>
              <NavItem>
                {" "}
                {currentPath === "contact" ? (
                  <span className="text-secondary">CONTACT</span>
                ) : (
                  "CONTACT"
                )}
              </NavItem>
              <Link href="/cart" onClick={() => setIsOpen(!isOpen)}>
                <NavItem>
                  {" "}
                  {currentPath === "cart" ? (
                    <span className="text-secondary">CART</span>
                  ) : (
                    "CART"
                  )}
                </NavItem>
              </Link>
            </ul>
          </Transition>
        </div>
      </div>
    </>
  );
}
