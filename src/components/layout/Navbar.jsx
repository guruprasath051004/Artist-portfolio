import Container from "../common/Container";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <Container>
        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Artist
          </h1>

          {/* Navigation */}

          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

            <li className="hover:text-black cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-black cursor-pointer transition">
              About
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Gallery
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-black cursor-pointer transition">
              Contact
            </li>

          </ul>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;