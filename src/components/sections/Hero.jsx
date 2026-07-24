import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import heroImage from "../../assets/images/Hero image.JPEG";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#F8F6F2] via-[#F5F2EA] to-[#EFE8DC]"
    >
      {/* Background Decorations */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-full blur-3xl"
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24">

          {/* LEFT CONTENT */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >

            {/* Badge */}

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-8"
            >
              <span className="uppercase tracking-[0.35em] text-xs font-semibold text-[#B8860B]">
                Traditional Indian Artist
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1F2937]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Crafting
              <br />

              <span className="text-[#B8860B]">
                Timeless
              </span>

              <br />

              Tanjore Paintings
            </motion.h1>

            {/* Subtitle */}

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-2xl md:text-3xl text-gray-700"
              style={{ fontFamily: "Playfair Display" }}
            >
              Inspired by India's Heritage
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-9 text-gray-600"
            >
              Every artwork is handcrafted with passion,
              blending centuries-old Indian traditions with
              contemporary artistic expression.

              Each painting reflects culture,
              devotion,
              and timeless craftsmanship.
            </motion.p>

            {/* Buttons */}

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5"
            >
              <Button href="#gallery">
                Explore Collection
              </Button>

              <a href="#gallery">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    px-8
                    py-4
                    rounded-full
                    border-2
                    border-[#B8860B]
                    text-[#B8860B]
                    font-semibold
                    hover:bg-[#B8860B]
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Commission Artwork
                </motion.button>
              </a>
            </motion.div>

            {/* Stats */}

            <motion.div
              variants={fadeUp}
              className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
            >
              {[
                ["50+", "Artworks"],
                ["20+", "Happy Clients"],
                ["5+", "Years Experience"],
              ].map(([number, label]) => (
                <motion.div
                  key={label}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <h3 className="text-4xl font-bold text-[#B8860B]">
                    {number}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
                    {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="show"
            className="relative flex justify-center items-center"
          >
            {/* Decorative Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[90%] h-[90%] rounded-[40px] bg-[#D4AF37]/15 blur-2xl"
            />

            {/* Gold Frame */}

            <motion.div
              animate={{
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -top-6
                -left-6
                w-full
                h-full
                border-2
                border-[#D4AF37]
                rounded-3xl
              "
            />

            {/* Floating Artwork */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              className="
                relative
                rounded-3xl
                overflow-hidden
                shadow-[0_40px_90px_rgba(0,0,0,0.18)]
              "
            >
              <img
                src={heroImage}
                alt="Saravana Kumar Artwork"
                className="
                  w-full
                  max-w-lg
                  aspect-[4/5]
                  object-cover
                  border-[10px]
                  border-white
                  rounded-3xl
                "
              />

              {/* Premium Overlay */}

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                  flex
                  items-end
                  justify-center
                  pb-8
                "
              >
                <span
                  className="text-white text-lg tracking-widest uppercase"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Original Artwork
                </span>
              </motion.div>
            </motion.div>

            {/* Experience Badge */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="
                absolute
                -bottom-6
                -left-8
                bg-white
                rounded-2xl
                shadow-2xl
                px-6
                py-4
                border
                border-[#D4AF37]/20
              "
            >
              <h3 className="text-3xl font-bold text-[#B8860B]">
                100%
              </h3>

              <p className="text-gray-600 text-sm">
                Handcrafted
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-[#B8860B]"
        >
          <span className="text-xs tracking-[0.35em] uppercase">
            Scroll
          </span>

          <span className="mt-2 text-2xl">
            ↓
          </span>
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;