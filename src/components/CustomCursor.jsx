import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const checkHover = (e) => {
      const interactive = e.target.closest("a, button, input, textarea, [data-cursor]");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white mix-blend-difference" />
      </motion.div>

      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.5 : 1 }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 rounded-full border border-white mix-blend-difference"
          />
        </div>
      </motion.div>
    </>
  );
}

export default CustomCursor;