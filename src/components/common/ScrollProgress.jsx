import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-1
        origin-left
        z-[9998]
        bg-gradient-to-r
        from-[#B8860B]
        via-[#D4AF37]
        to-[#FFD700]
      "
    />
  );
}

export default ScrollProgress;