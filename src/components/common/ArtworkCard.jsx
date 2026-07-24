import { motion } from "framer-motion";
import { HiEye, HiCalendar, HiPhotograph } from "react-icons/hi";

function ArtworkCard({ artwork, onClick }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      onClick={() => onClick(artwork)}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        cursor-pointer
        bg-white
        shadow-lg
        hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)]
        transition-all
        duration-500
      "
    >
      {/* Category Badge */}

      <div
        className="
          absolute
          top-5
          left-5
          z-20
          px-4
          py-1.5
          rounded-full
          bg-white/90
          backdrop-blur-md
          text-xs
          font-semibold
          tracking-wider
          uppercase
          text-[#B8860B]
          shadow-md
        "
      >
        {artwork.category}
      </div>

      {/* Image */}

      <div className="relative overflow-hidden">

        <motion.img
          src={artwork.image}
          alt={artwork.title}
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            w-full
            aspect-[4/5]
            object-cover
          "
        />

        {/* Gradient Overlay */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        />

        {/* View Button */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
        >
          <motion.div
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#B8860B]
              text-white
              font-semibold
              shadow-xl
            "
          >
            <HiEye />

            View Artwork
          </motion.div>
        </div>

      </div>

      {/* Content */}

      <div className="p-6">

        <h3
          className="
            text-2xl
            font-bold
            text-[#1F2937]
            group-hover:text-[#B8860B]
            transition-colors
          "
          style={{ fontFamily: "Playfair Display" }}
        >
          {artwork.title}
        </h3>

        <p className="mt-2 text-[#B8860B] font-medium">
          {artwork.medium}
        </p>

        <div className="mt-6 h-px bg-gray-200"></div>

        <div className="mt-5 flex justify-between text-sm text-gray-500">

          <div className="flex items-center gap-2">
            <HiCalendar />
            <span>{artwork.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <HiPhotograph />
            <span>{artwork.size}</span>
          </div>

        </div>

      </div>

      {/* Gold Bottom Accent */}

      <div
        className="
          h-1
          w-0
          bg-gradient-to-r
          from-[#B8860B]
          to-[#D4AF37]
          group-hover:w-full
          transition-all
          duration-500
        "
      />

    </motion.div>
  );
}

export default ArtworkCard;