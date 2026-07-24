import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;