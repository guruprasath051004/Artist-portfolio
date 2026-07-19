import Navbar from "./components/layout/Navbar";
import Container from "./components/common/Container";
import SectionTitle from "./components/common/SectionTitle";
import Button from "./components/common/Button";

function App() {
  return (
    <>
      <Navbar />

      <Container>
        <div className="pt-44 pb-24">

          <SectionTitle
            title="Artist Portfolio"
            subtitle="Creating timeless art through sketches, portraits, murals, and imagination."
          />

          <div className="flex justify-center mt-8">
            <Button>
              Explore Gallery
            </Button>
          </div>

        </div>
      </Container>
    </>
  );
}

export default App;