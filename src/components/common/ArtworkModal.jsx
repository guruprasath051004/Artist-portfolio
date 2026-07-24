import { useEffect } from "react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

function ArtworkModal({
  artwork,
  artworks,
  onClose,
  onSelect,
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (!artwork) return;

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

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [artwork, artworks]);

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

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl overflow-hidden max-w-6xl w-full grid lg:grid-cols-2 animate-fade"
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-4xl"
        >
          <HiX />
        </button>

        {/* Previous */}

        <button
          onClick={() => onSelect(prevArtwork)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2"
        >
          <HiChevronLeft size={30} />
        </button>

        {/* Next */}

        <button
          onClick={() => onSelect(nextArtwork)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2"
        >
          <HiChevronRight size={30} />
        </button>

        {/* Image */}

        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />

        {/* Details */}

        <div className="p-10 flex flex-col justify-center">

          <h2
            className="text-5xl font-bold"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            {artwork.title}
          </h2>

          <p className="mt-4 text-xl text-[#B8860B]">
            {artwork.medium}
          </p>

          <div className="space-y-3 mt-8">

            <p>
              <strong>Category:</strong>{" "}
              {artwork.category}
            </p>

            <p>
              <strong>Year:</strong>{" "}
              {artwork.year}
            </p>

            <p>
              <strong>Size:</strong>{" "}
              {artwork.size}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {artwork.status}
            </p>

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            {artwork.description}
          </p>

          <button
            className="
            mt-10
            w-fit
            px-8
            py-4
            rounded-full
            bg-[#B8860B]
            text-white
            hover:bg-[#9b7600]
            transition
            "
          >
            Commission Artwork
          </button>

        </div>

      </div>
    </div>
  );
}

export default ArtworkModal;