import { motion } from "framer-motion";

function FadeInSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -60
          : direction === "right"
          ? 60
          : 0,
      y:
        direction === "up"
          ? 50
          : direction === "down"
          ? -50
          : 0,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInSection;