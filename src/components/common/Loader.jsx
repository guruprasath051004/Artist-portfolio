import { AnimatePresence, motion } from "framer-motion";

function Loader({ loading }) {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8F6F2]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">

            {/* Logo */}

            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                },
                scale: {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              className="mb-6 text-6xl"
            >
              🎨
            </motion.div>

            {/* Name */}

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold text-[#1F2937]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Saravana Kumar
            </motion.h1>

            {/* Subtitle */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="mt-4 uppercase tracking-[0.35em] text-[#B8860B]"
            >
              Crafting Timeless Art
            </motion.p>

            {/* Progress Bar */}

            <div className="mx-auto mt-10 h-1.5 w-60 overflow-hidden rounded-full bg-gray-200">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading Text */}

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-5 text-sm tracking-[0.2em] text-gray-500"
            >
              LOADING PORTFOLIO...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;