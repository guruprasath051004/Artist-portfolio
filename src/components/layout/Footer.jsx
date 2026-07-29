import { FaInstagram, FaHeart } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 text-center lg:text-left lg:grid-cols-3">

        {/* Brand */}

        <div>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Saravana Kumar
          </h2>

          <p className="mt-6 text-gray-300 leading-8 max-w-sm mx-auto lg:mx-0">
            Preserving India's artistic heritage through
            handcrafted Tanjore paintings, portraits,
            and timeless works of art.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <a href="#home" className="hover:text-[#D4AF37]">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#D4AF37]">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-[#D4AF37]">
                Gallery
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#D4AF37]">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#D4AF37]">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="text-xl font-semibold mb-6">
            Get in Touch
          </h3>

          <div className="space-y-5 flex flex-col items-center lg:items-start">

            <div className="flex gap-3 items-center">
              <HiOutlineLocationMarker size={22} />
              <span className="text-gray-300">
                Karaikudi, Tamil Nadu
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <HiOutlineMail size={22} />
              <a
                href="mailto:saravanans24869@gmail.com"
                className="text-gray-300 hover:text-[#D4AF37]"
              >
                saravanans24869@gmail.com
              </a>
            </div>

            <a
              href="https://instagram.com/msk_arts_07"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-3 text-gray-300 hover:text-[#D4AF37]"
            >
              <FaInstagram size={22} />
              @msk_arts_07
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © {year} Saravana Kumar. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;