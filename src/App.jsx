import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Loader from "./components/common/Loader";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Small delay for smoother loader exit
      setTimeout(() => {
        setLoading(false);
      }, 400);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <Loader loading={loading} />

      {/* Main Website */}
      <div
        className={`min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8F6F2] text-[#1F2937] transition-opacity duration-700 ${
          loading
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        {/* Progress Bar */}
        <ScrollProgress />

        {/* Floating Back-to-Top Button */}
        <BackToTop />

        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="pt-24">
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;