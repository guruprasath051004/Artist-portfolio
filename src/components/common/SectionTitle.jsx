function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-20">
      {/* Small Label */}

      <p
        className="
          uppercase
          tracking-[0.45em]
          text-sm
          font-semibold
          text-[#B8860B]
          mb-4
        "
      >
        Traditional Indian Art
      </p>

      {/* Heading */}

      <h2
        className="
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          text-[#1F2937]
          leading-tight
        "
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h2>

      {/* Decorative Divider */}

      <div className="flex justify-center mt-6">
        <div className="w-20 h-[2px] bg-[#D4AF37] rounded-full"></div>
      </div>

      {/* Subtitle */}

      <p
        className="
          mt-8
          max-w-3xl
          mx-auto
          text-lg
          leading-8
          text-gray-600
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;