import { motion } from "framer-motion";
import {
  HiOutlineBadgeCheck,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineHeart,
} from "react-icons/hi";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const reasons = [
  {
    icon: HiOutlineSparkles,
    title: "Authentic Craftsmanship",
    description:
      "Every painting is carefully handcrafted using traditional techniques that preserve the beauty of Indian heritage.",
  },
  {
    icon: HiOutlineHeart,
    title: "Made with Passion",
    description:
      "Each artwork is created with patience, devotion, and attention to every fine detail, making every piece unique.",
  },
  {
    icon: HiOutlineClock,
    title: "Timeless Quality",
    description:
      "Designed to be treasured for generations, using premium materials and meticulous finishing.",
  },
  {
    icon: HiOutlineBadgeCheck,
    title: "Custom Commissions",
    description:
      "Personalized paintings tailored to your ideas, interior spaces, gifts, and cultural celebrations.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-b from-[#F8F6F2] to-white"
    >
      <Container>
        <SectionTitle
          title="Why Choose My Artwork"
          subtitle="More than a painting — every artwork tells a story, preserves tradition, and is created to last for generations."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                "
              >
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
                    group-hover:bg-[#B8860B]
                    group-hover:text-white
                  "
                >
                  <Icon size={30} />
                </div>

                <h3
                  className="mt-8 text-2xl font-bold text-[#1F2937]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 rounded-[32px] bg-[#1F2937] px-10 py-16 text-center text-white"
        >
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Bringing Tradition to Life
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
            My mission is to preserve India's rich artistic heritage through
            handcrafted paintings that inspire, connect, and become treasured
            heirlooms for generations.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default Testimonials;