import type { PropsWithChildren } from "react";

export default function NavItem(props: PropsWithChildren) {
  return (
    <li className="text-lighttext hover:text-texthover">{props.children}</li>
  );
}
