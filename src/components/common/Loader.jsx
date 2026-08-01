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
                scale: [0.85, 1.08, 0.85],
                y: [0, -6, 0],
                filter: [
                  "drop-shadow(0 0 4px rgba(212,175,55,0.3))",
                  "drop-shadow(0 0 18px rgba(212,175,55,0.8))",
                  "drop-shadow(0 0 4px rgba(212,175,55,0.3))",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-6 flex justify-center"
            >
              <svg
                width="90"
                height="90"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Center petal */}
                <path
                  d="M50 12C39 28 37 43 50 58C63 43 61 28 50 12Z"
                  fill="#D4AF37"
                />

                {/* Inner petals */}
                <path
                  d="M30 27C29 43 35 55 50 63C48 46 41 34 30 27Z"
                  fill="#C99700"
                />

                <path
                  d="M70 27C71 43 65 55 50 63C52 46 59 34 70 27Z"
                  fill="#C99700"
                />

                {/* Outer petals */}
                <path
                  d="M14 43C20 61 31 70 50 72C43 55 31 46 14 43Z"
                  fill="#B8860B"
                />

                <path
                  d="M86 43C80 61 69 70 50 72C57 55 69 46 86 43Z"
                  fill="#B8860B"
                />

                {/* Bottom petals */}
                <path
                  d="M7 62C18 78 33 84 50 78C38 66 24 61 7 62Z"
                  fill="#D4AF37"
                />

                <path
                  d="M93 62C82 78 67 84 50 78C62 66 76 61 93 62Z"
                  fill="#D4AF37"
                />

                {/* Base */}
                <path
                  d="M25 82C38 88 62 88 75 82"
                  stroke="#B8860B"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
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