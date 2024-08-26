import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import CurrentAffairs from "./pages/currentAffairs/CurrentAffairs";
import Donate from "./pages/donate/Donate";
import ProgramDirectory from "./pages/program/ProgramDirectory";
import Contact from "./pages/contact/Contact";
import Preloader from "./components/preloader/Preloader";

function App() {
  function ScrollToTopOnRouteChange() {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname !== "/") {
        window.scrollTo(0, 0);
      }
    }, [location]);
    return null;
  }

  const [loading, setLoading] = useState(true); // State to manage the loading status

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulate data fetching)
    }, 2000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading ? (
          <Preloader />
        ) : (
          <>
            {" "}
            <Header />
            <ScrollToTopOnRouteChange />
            <main>
              <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/about/:id" element={<About />} />
                <Route
                  index
                  path="/program-directory/:id"
                  element={<ProgramDirectory />}
                />
                <Route
                  index
                  path="/current-affairs/:categoryId/:itemsId?"
                  element={<CurrentAffairs />}
                />
                <Route index path="/donate" element={<Donate />} />
                <Route index path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
