import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import ProgramDirectory from "./pages/program/ProgramDirectory";
import CurrentAffairs from "./pages/currentAffairs/CurrentAffairs";
import Donate from "./pages/donate/Donate";
import Contact from "./pages/contact/Contact";

function App() {
  function ScrollToTopOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
      const scrollToTop = () => {
        const scrollStep = window.scrollY / 50;

        const scrollInterval = setInterval(() => {
          if (window.scrollY === 0) {
            clearInterval(scrollInterval);
          } else {
            window.scrollBy(0, -scrollStep);
          }
        }, 15); // Adjust the interval for smoother/faster scrolling
      };

      if (location.pathname !== "/") {
        scrollToTop();
      }
    }, [location]);

    return null;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTopOnRouteChange />
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
            path="/current-affairs/:categoryId/:itemsId"
            element={<CurrentAffairs />}
          />
          <Route index path="/donate" element={<Donate />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
