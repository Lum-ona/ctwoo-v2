import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import logo from "../../assets/img/CTWOO2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const homeRef = useRef();
  const aboutRef = useRef();
  const programRef = useRef();
  const currentRef = useRef();
  const donateRef = useRef();

  useEffect(() => {
    if (pathname.split("/").includes("about")) {
      aboutRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      programRef.current.classList.remove("active");
      currentRef.current.classList.remove("active");
      donateRef.current.classList.remove("active");
    } else if (pathname.split("/").includes("program-directory")) {
      programRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      currentRef.current.classList.remove("active");
      donateRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    } else if (pathname.split("/").includes("current-affairs")) {
      currentRef.current.classList.add("active");
      homeRef.current.classList.remove("active");
      programRef.current.classList.remove("active");
      donateRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    } else if (pathname.split("/").includes("donate")) {
      donateRef.current.classList.add("active");
      currentRef.current.classList.remove("active");
      homeRef.current.classList.remove("active");
      programRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    } else {
      homeRef.current.classList.add("active");
      programRef.current.classList.remove("active");
      currentRef.current.classList.remove("active");
      donateRef.current.classList.remove("active");
      aboutRef.current.classList.remove("active");
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const dropDownMouseIn = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const dropDownMouseLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };

  const scrollToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        const targetRect = target.getBoundingClientRect();
        const offset = 0.15 * window.innerHeight;
        const scrollPosition = window.pageYOffset + targetRect.top - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <div className="header d-flex justify-content-between align-items-center">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div>
          <img alt="ctwoo" src={logo} className="logo" />
        </div>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
          <span className={`icon-bar ${isMobileMenuOpen ? "open" : ""}`}></span>
        </div>
        <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <Link to="/" className="nav-option" ref={homeRef}>
            Home
          </Link>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div
              className="nav-option"
              ref={aboutRef}
              onClick={() => scrollToSection("about-us")}
              onMouseEnter={(e) => dropDownMouseIn(e)}
              onMouseLeave={(e) => dropDownMouseLeave(e)}
            >
              About
            </div>
            <div className="drop-down">
              {/* <Link to="/about/our-founder" className="drop-down-option">
                Our Founder
              </Link> */}
              <Link to="/about/our-board" className="drop-down-option">
                Our Board
              </Link>
              <Link
                to="/about/our-team"
                className="drop-down-option"
                onMouseEnter={(e) => dropDownMouseIn(e)}
                onMouseLeave={(e) => dropDownMouseLeave(e)}
              >
                Our Team
                <div className="drop-down-drop-down">
                  <Link
                    to="/about/our-interns"
                    className="drop-down-drop-down-option"
                  >
                    Our Interns
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div className="nav-option" ref={programRef}>
              Program Directory
            </div>
            <div className="drop-down">
              <Link
                to="/program-directory/widow-support-program"
                className="drop-down-option"
              >
                Widow Support Program
              </Link>
              <Link
                to="/program-directory/orphans"
                className="drop-down-option"
              >
                Orphans and vulnerable children
              </Link>
            </div>
          </div>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div className="nav-option" ref={currentRef}>
              Current Affairs & Updates
            </div>
            <div className="drop-down">
              <Link
                to={"/current-affairs/gallery"}
                className="drop-down-option"
                onMouseEnter={(e) => dropDownMouseIn(e)}
                onMouseLeave={(e) => dropDownMouseLeave(e)}
              >
                Gallery
                <div className="drop-down-drop-down">
                  <Link
                    to="/current-affairs/gallery/photos"
                    className="drop-down-drop-down-option"
                  >
                    Photos
                  </Link>
                  <Link
                    to="/current-affairs/gallery/videos"
                    className="drop-down-drop-down-option"
                  >
                    Videos
                  </Link>
                </div>
              </Link>
              <Link to="/current-affairs/reports" className="drop-down-option">
                Reports
              </Link>
            </div>
          </div>
          <Link to="/donate" className="nav-option" ref={donateRef}>
            Donate to Our Cause
          </Link>
          {/* <Link to="/contact" className="nav-option">
            Get in Touch
          </Link> */}
        </nav>
      </div>
    </div>
  );
}
