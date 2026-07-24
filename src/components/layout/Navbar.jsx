import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../common/Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="group leading-none">
            <h1
              className="text-4xl font-bold text-[#1F2937] transition-all duration-300 group-hover:text-[#B8860B]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Saravana Kumar
            </h1>

            <p className="mt-2 text-[11px] uppercase tracking-[0.45em] text-[#B8860B]">
              Traditional Indian Artist
            </p>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative font-medium transition-all duration-300 pb-1 ${
                      active
                        ? "text-[#B8860B]"
                        : "text-gray-700 hover:text-[#B8860B]"
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#B8860B] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#1F2937]"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 pb-5" : "max-h-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl">
            <ul className="flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 font-medium text-gray-700 hover:bg-[#FAF5E6] hover:text-[#B8860B] transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;