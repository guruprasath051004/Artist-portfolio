import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ArtworkCard from "../common/ArtworkCard";
import ArtworkModal from "../common/ArtworkModal";
import galleryData from "../../data/galleryData";

const categories = [
  "All",
  ...new Set(galleryData.map((item) => item.category)),
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArtworks = useMemo(() => {
    if (selectedCategory === "All") return galleryData;

    return galleryData.filter(
      (artwork) => artwork.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 py-28 bg-gradient-to-b from-[#F8F6F2] via-[#FAF8F4] to-white overflow-hidden"
    >
      {/* Decorative Background */}

      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <Container>

        <SectionTitle
          title="Featured Collection"
          subtitle="A curated collection of traditional artworks celebrating India's heritage."
        />

        {/* Category Filters */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-7
                py-3
                rounded-full
                font-medium
                transition-all
                duration-300
                shadow-sm

                ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-[#FAF5E6]"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}

        <AnimatePresence mode="wait">

          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{
              opacity: 0,
            }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={cardVariants}
              >
                <ArtworkCard
                  artwork={artwork}
                  onClick={setSelectedArtwork}
                />
              </motion.div>
            ))}
          </motion.div>

        </AnimatePresence>

        <ArtworkModal
          artwork={selectedArtwork}
          artworks={filteredArtworks}
          onClose={() => setSelectedArtwork(null)}
          onSelect={setSelectedArtwork}
        />

      </Container>
    </section>
  );
}

export default Gallery;