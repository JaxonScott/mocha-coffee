import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import MotionWrapper from "./MotionWrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <>{props.children}</>
    </>
  );
}
