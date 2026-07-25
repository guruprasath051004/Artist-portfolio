import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiX,
  HiCalendar,
  HiCollection,
  HiPhotograph,
  HiCheckCircle,
} from "react-icons/hi";

function ArtworkModal({
  artwork,
  artworks,
  onClose,
  onSelect,
}) {
  useEffect(() => {
    if (!artwork) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();

      const index = artworks.findIndex(
        (a) => a.id === artwork.id
      );

      if (e.key === "ArrowRight") {
        onSelect(
          artworks[(index + 1) % artworks.length]
        );
      }

      if (e.key === "ArrowLeft") {
        onSelect(
          artworks[
            (index - 1 + artworks.length) %
              artworks.length
          ]
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener(
        "keydown",
        handleKey
      );
    };
  }, [artwork, artworks, onClose, onSelect]);

  if (!artwork) return null;

  const currentIndex = artworks.findIndex(
    (a) => a.id === artwork.id
  );

  const prevArtwork =
    artworks[
      (currentIndex - 1 + artworks.length) %
        artworks.length
    ];

  const nextArtwork =
    artworks[
      (currentIndex + 1) %
        artworks.length
    ];

  const info = [
    {
      icon: HiCollection,
      label: "Category",
      value: artwork.category,
    },
    {
      icon: HiCalendar,
      label: "Year",
      value: artwork.year,
    },
    {
      icon: HiPhotograph,
      label: "Size",
      value: artwork.size,
    },
    {
      icon: HiCheckCircle,
      label: "Status",
      value: artwork.status,
    },
  ];

  return (
    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-8"
      >

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.95,
          }}
          transition={{
            duration: 0.35,
          }}
          onClick={(e) => e.stopPropagation()}
          className="relative overflow-hidden rounded-[32px] bg-white w-full max-w-7xl grid lg:grid-cols-[1.2fr_0.8fr]"
        >

          {/* Close */}

          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-all duration-300"
          >
            <HiX size={24} />
          </button>

          {/* Counter */}

          <div className="absolute left-6 top-6 z-30 bg-black/60 backdrop-blur-lg text-white px-5 py-2 rounded-full text-sm tracking-widest">
            {currentIndex + 1} / {artworks.length}
          </div>

          {/* Previous */}

          <button
            onClick={() => onSelect(prevArtwork)}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-all duration-300"
          >
            <HiChevronLeft size={26} />
          </button>

          {/* Next */}

          <button
            onClick={() => onSelect(nextArtwork)}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-all duration-300"
          >
            <HiChevronRight size={26} />
          </button>

          {/* LEFT IMAGE */}

          <div className="relative bg-[#F8F6F2] flex items-center justify-center p-10 overflow-hidden">

            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <motion.img
              key={artwork.id}
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              whileHover={{
                scale: 1.03,
              }}
              src={artwork.image}
              alt={artwork.title}
              className="relative max-h-[80vh] object-contain rounded-2xl border-8 border-white shadow-[0_40px_80px_rgba(0,0,0,0.25)]"
            />
          </div>
                    {/* RIGHT DETAILS */}

          <div className="flex flex-col justify-center p-8 lg:p-12">

            <span className="inline-flex w-fit items-center rounded-full bg-[#B8860B]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
              {artwork.medium}
            </span>

            <h2
              className="mt-6 text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight"
              style={{ fontFamily: "Playfair Display" }}
            >
              {artwork.title}
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              {artwork.description}
            </p>

            {/* Information */}

            <div className="grid grid-cols-2 gap-5 mt-10">
              {info.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -4,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-gray-200
                      bg-[#FAFAFA]
                      p-5
                      transition-all
                      duration-300
                      hover:border-[#D4AF37]
                      hover:shadow-lg
                    "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B8860B]/10">
                        <Icon
                          className="text-[#B8860B]"
                          size={22}
                        />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          {item.label}
                        </p>

                        <h4 className="font-semibold text-[#1F2937]">
                          {item.value}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}

            <div className="my-10 h-px bg-gradient-to-r from-[#D4AF37] via-gray-200 to-transparent" />

            {/* Quote */}

            <blockquote
              className="italic text-gray-600 leading-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              "Every artwork is handcrafted with patience,
              devotion, and respect for India's timeless
              artistic traditions."
            </blockquote>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-[#B8860B]
                  to-[#D4AF37]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Request Commission →
              </button>

              <button
                onClick={onClose}
                className="
                  rounded-full
                  border-2
                  border-[#B8860B]
                  px-8
                  py-4
                  font-semibold
                  text-[#B8860B]
                  transition-all
                  duration-300
                  hover:bg-[#B8860B]
                  hover:text-white
                "
              >
                Back to Gallery
              </button>

            </div>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default ArtworkModal;