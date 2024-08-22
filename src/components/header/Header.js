import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/img/CTWOO.png";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
          <Link to="/" className="nav-option">
            Home
          </Link>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div
              className="nav-option"
              onClick={() => scrollToSection("about-us")}
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
              <Link to="/about/our-team" className="drop-down-option">
                Our Team
              </Link>
            </div>
          </div>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div className="nav-option">Program Directory</div>
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
                Orphans
              </Link>
            </div>
          </div>
          <div
            className="navs"
            onMouseEnter={(e) => dropDownMouseIn(e)}
            onMouseLeave={(e) => dropDownMouseLeave(e)}
          >
            <div className="nav-option">Current Affairs & Updates</div>
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
          <Link to="/donate" className="nav-option">
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
