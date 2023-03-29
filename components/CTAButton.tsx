import type { PropsWithChildren } from "react";

export default function CTAButton(props: PropsWithChildren) {
  return (
    <button className="bg-secondary font-semibold text-background rounded-md px-8 py-3.5">{props.children}</button>
  );
}
