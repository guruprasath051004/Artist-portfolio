import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-[#B8860B]
            text-white
            shadow-xl
            transition-colors
            hover:bg-[#D4AF37]
          "
          aria-label="Back to top"
        >
          <HiArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;