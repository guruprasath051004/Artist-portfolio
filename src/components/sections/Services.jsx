import { motion } from "framer-motion";
import {
  HiOutlinePaintBrush,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const services = [
  {
    icon: HiOutlinePaintBrush,
    title: "Custom Paintings",
    description:
      "Personalized paintings crafted according to your vision, style, and artistic preferences.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Portrait Commissions",
    description:
      "Handcrafted portraits that capture personality, emotion, and timeless memories.",
  },
  {
    icon: HiOutlineHome,
    title: "Interior Art",
    description:
      "Elegant traditional artworks designed for homes, temples, offices, and luxury interiors.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Restoration & Heritage",
    description:
      "Preserving traditional artistic styles while creating museum-quality handcrafted masterpieces.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-white to-[#F8F6F2] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <Container>
        <SectionTitle
          title="Artistic Services"
          subtitle="Every artwork is handcrafted with dedication, precision, and a deep respect for India's artistic heritage."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                "
              >
                {/* Top Accent */}

                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]" />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#B8860B]/10
                    text-[#B8860B]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#B8860B]
                    group-hover:text-white
                  "
                >
                  <Icon size={32} />
                </div>

                <h3
                  className="mt-8 text-2xl font-bold text-[#1F2937] group-hover:text-[#B8860B] transition-colors"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {service.description}
                </p>

                <button
                  className="
                    mt-8
                    font-semibold
                    text-[#B8860B]
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-24
            rounded-[32px]
            bg-gradient-to-r
            from-[#1F2937]
            to-[#374151]
            px-10
            py-16
            text-center
            text-white
          "
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Have a Unique Vision?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-8">
            Whether you're looking for a traditional Tanjore painting,
            a custom portrait, or an exclusive commissioned artwork,
            let's create something timeless together.
          </p>

          <a
            href="#contact"
            className="
              inline-block
              mt-10
              rounded-full
              bg-[#B8860B]
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#D4AF37]
            "
          >
            Request a Commission
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Services;