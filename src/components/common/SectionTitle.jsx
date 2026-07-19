function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: "Playfair Display" }}
      >
        {title}
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;