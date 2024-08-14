import React from "react";
import "./Header.css";
import logo from "../../assets/img/CTWOO.png";

export default function Header() {
  return (
    <div className="header d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img alt="ctwoo" src={logo} className="logo" />
          </div>
          <nav className="col-8 d-flex justify-content-between align-items-center">
            <div className="nav-option">Home</div>
            <div className="nav-option">About</div>
            <div className="nav-option">Program Directory</div>
            <div className="nav-option">Current Affairs & Updates</div>
            <div className="nav-option">Donate to Our Cause</div>
            <div className="nav-option">Get in Touch</div>
          </nav>
        </div>
      </div>
    </div>
  );
}
