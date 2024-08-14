import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
