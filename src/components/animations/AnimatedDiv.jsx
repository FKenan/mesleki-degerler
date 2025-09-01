import { useMemo } from "react";
import { motion } from "framer-motion";

const motionTransition = { duration: 0.4 };
const motionDivStyle = { width: "100%" };

function AnimatedDiv({ children, direction }) {
  const pageVariants = useMemo(
    () => ({
      initial: {
        opacity: 0,
        x: direction === "forward" ? 100 : -100,
      },
      in: {
        opacity: 1,
        x: 0,
      },
      out: {
        opacity: 0,
        x: direction === "forward" ? -100 : 100,
      },
    }),
    [direction]
  );

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={motionTransition}
      style={motionDivStyle}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedDiv;
