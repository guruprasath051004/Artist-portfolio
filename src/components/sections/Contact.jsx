import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";


function Contact() {

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        from_name: "",
        from_email: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      setStatus("error");

    } finally {

      setLoading(false);

    }
  };
  return (
    <section
      id="contact"
      className="py-32 bg-[#F8F6F2]"
    >
      <Container>
        <SectionTitle
          title="Let's Create Something Beautiful"
          subtitle="Interested in a custom painting or have a question? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-4xl font-bold text-[#1F2937]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Commission an Artwork
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Whether you're looking for a traditional
              Tanjore painting, a custom portrait, or an
              original artwork for your home or office,
              feel free to get in touch.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center">
                  <HiOutlineLocationMarker
                    className="text-[#B8860B]"
                    size={28}
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Location
                  </h4>
                  <p className="text-gray-600">
                    Pudukkottai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center">
                  <HiOutlineMail
                    className="text-[#B8860B]"
                    size={28}
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:yourmail@gmail.com"
                    className="text-[#B8860B] hover:underline"
                  >
                    saravanans24869@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#B8860B]/10 flex items-center justify-center">
                  <FaInstagram
                    className="text-[#B8860B]"
                    size={26}
                  />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Instagram
                  </h4>

                  <a
                    href="https://instagram.com/msk_arts_7"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B8860B] hover:underline"
                  >
                    @msk_arts_7
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-white p-10 shadow-xl"
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "Playfair Display" }}
            >
              Send a Message
            </h3>

            <form 
            onSubmit={sendEmail}
            className="space-y-6"
            >

              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-xl border p-4 outline-none focus:border-[#B8860B]"
                required
              />

              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border p-4 outline-none focus:border-[#B8860B]"
                required
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your artwork idea..."
                className="w-full rounded-xl border p-4 outline-none resize-none focus:border-[#B8860B]"
                required
              />
              {status === "success" && (
                <div className="rounded-xl border border-green-300 bg-green-100 p-4 text-green-700">
                 ✅ Your message has been sent successfully.
                </div>
              )}

              {status === "error" && (
               <div className="rounded-xl border border-red-300 bg-red-100 p-4 text-red-700">
                 ❌ Failed to send your message.
               </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                rounded-full
              bg-[#B8860B]
                py-4
                font-semibold
              text-white
                transition-all
                duration-300
              hover:bg-[#D4AF37]
                disabled:opacity-70
                disabled:cursor-not-allowed
              "
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;