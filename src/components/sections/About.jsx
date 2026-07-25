import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiSparkles,
  HiMapPin,
  HiPaintBrush,
} from "react-icons/hi2";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import artistImage from "../../assets/images/About/Artist photo.JPEG";

const skills = [
  "Tanjore Painting",
  "Heritage Art",
  "Oil Painting",
  "Portraits",
  "Watercolor",
  "Acrylic",
  "Pencil Sketch",
  "Murals",
];

const infoCards = [
  {
    icon: HiAcademicCap,
    title: "Education",
    value: "BFA Painting",
  },
  {
    icon: HiPaintBrush,
    title: "Specialization",
    value: "Traditional Tanjore Art",
  },
  {
    icon: HiSparkles,
    title: "Experience",
    value: "Commission Artworks",
  },
  {
    icon: HiMapPin,
    title: "Location",
    value: "Tamil Nadu, India",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-gradient-to-b from-white to-[#F8F6F2]"
    >
      <Container>
        <SectionTitle
          title="About the Artist"
          subtitle="Celebrating India's artistic heritage through timeless craftsmanship, tradition, and creativity."
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative Border */}

              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#D4AF37] rounded-3xl"></div>

              {/* Image */}

              <img
                src={artistImage}
                alt="Saravana Kumar"
                className="
                  relative
                  max-w-md
                  rounded-3xl
                  border-[10px]
                  border-white
                  shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                  hover:scale-105
                  transition-all
                  duration-700
                "
              />
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#B8860B] font-semibold">
              Traditional Indian Artist
            </p>

            <h2
              className="mt-3 text-5xl font-bold text-[#1F2937]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Saravana Kumar
            </h2>

            {/* Quote */}

            <blockquote
              className="
                mt-8
                border-l-4
                border-[#D4AF37]
                pl-6
                italic
                text-xl
                text-gray-700
                leading-9
              "
              style={{ fontFamily: "Playfair Display" }}
            >
              "Every brushstroke carries a story,
              preserving India's rich artistic heritage
              for generations to come."
            </blockquote>

            {/* Story */}

            <p className="mt-8 text-gray-600 leading-8">
              A Bachelor of Fine Arts (Painting) graduate from
              Alagappa University, Saravana Kumar specializes in
              traditional Indian painting with a strong passion for
              preserving heritage through handcrafted artworks.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              His work combines centuries-old artistic traditions with
              modern creativity, creating paintings that celebrate
              spirituality, culture, and timeless craftsmanship.
            </p>

            {/* Info Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      bg-white
                      rounded-2xl
                      p-5
                      shadow-sm
                      hover:shadow-xl
                      transition-all
                      duration-500
                      border
                      border-transparent
                      hover:border-[#D4AF37]
                    "
                  >
                    <Icon
                      className="text-[#B8860B]"
                      size={26}
                    />

                    <p className="mt-4 text-sm text-gray-500">
                      {item.title}
                    </p>

                    <h4 className="font-semibold mt-1">
                      {item.value}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* Skills */}

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-white
                    border
                    border-[#E5D4A4]
                    hover:bg-[#B8860B]
                    hover:text-white
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Signature */}

            <div className="mt-10">
              <p
                className="text-3xl text-[#B8860B]"
                style={{ fontFamily: "Playfair Display" }}
              >
                — Saravana Kumar
              </p>
            </div>

            {/* Button */}

            <div className="mt-10">
              <a href="#gallery">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                rounded-full
              bg-[#D4A017]
                px-10
                py-4
                text-lg
                font-semibold
              text-white
                shadow-lg
                transition-all
                duration-300
              hover:bg-[#B8860B]
              "
               >
                Explore Gallery
               </motion.button>
              </a>
             
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;