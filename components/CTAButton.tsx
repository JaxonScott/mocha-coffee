import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
export default function CTAButton(props: PropsWithChildren) {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <button className="bg-secondary font-semibold text-background rounded-md px-8 py-3.5 ">
        {props.children}
      </button>
    </motion.div>
  );
}
