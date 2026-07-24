import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Home />
      </main>
    </>
  );
}

export default App;