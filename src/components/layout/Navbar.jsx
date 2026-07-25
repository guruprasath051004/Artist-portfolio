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

      const scrollPosition = window.scrollY + 180;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-gray-200/50"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="text-left group"
          >
            <h1
              className="text-3xl md:text-4xl font-bold text-[#1F2937] transition-colors duration-300 group-hover:text-[#B8860B]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Saravana Kumar
            </h1>

            <p className="mt-1 text-[11px] uppercase tracking-[0.45em] text-[#B8860B]">
              Fine Artist
            </p>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);

              return (
                <li key={link.name}>
                  <button
                    onClick={() =>
                      handleNavClick(link.href.substring(1))
                    }
                    className={`group relative pb-2 font-medium transition-colors duration-300 ${
                      active
                        ? "text-[#B8860B]"
                        : "text-gray-700 hover:text-[#B8860B]"
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 -bottom-[2px] h-[2px] bg-[#B8860B] transition-all duration-300 ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-3xl text-[#1F2937] transition hover:text-[#B8860B]"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div
            className={`rounded-3xl bg-white shadow-2xl border border-gray-100 transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <ul className="py-4">
              {navLinks.map((link) => {
                const active =
                  activeSection === link.href.substring(1);

                return (
                  <li key={link.name}>
                    <button
                      onClick={() =>
                        handleNavClick(link.href.substring(1))
                      }
                      className={`w-full text-left px-8 py-4 transition-all duration-300 ${
                        active
                          ? "text-[#B8860B] bg-[#FAF5E6] font-semibold"
                          : "text-gray-700 hover:bg-[#FAF5E6] hover:text-[#B8860B]"
                      }`}
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;