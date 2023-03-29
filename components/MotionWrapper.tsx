import type { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotionWrapper(props: PropsWithChildren) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
        >
          {props.children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
