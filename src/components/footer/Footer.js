import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="footer-content col-lg-3">
            <h3>CTWOO</h3>
            <p>
              1st Floor, Room 110, Blessed House,
              <br />
              Thika Superhighway Next to Astrol Petrol Station
              <br />
              Kenya <br />
              <br />
              <strong>Phone:</strong> +254789577476
              <br />
              <strong>Phone:</strong> +254702577477
              <br />
              <strong>Email:</strong> info@cometogewoo.org
              <br />
            </p>
          </div>
          <div className="footer-content col-lg-2">
            <h3>Our Work</h3>
          </div>
          <div className="footer-content col-lg-2">
            <h3>Socials</h3>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/cometogetherwidowsandorphans?mibextid=ZbWKwL"
                target={"_blank"}
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              Facebook
            </div>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/cometogetherwidowsandorphans?mibextid=ZbWKwL"
                target={"_blank"}
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              Instagram
            </div>

            <div className="footer-social">
              <a
                href="https://twitter.com/Cometogether_Wi?t=nrNaPO8apLmPUSaFENY-Ew&s=08"
                target={"_blank"}
                rel="noreferrer"
              >
                <TwitterIcon />
              </a>
              Twitter
            </div>

            <div className="footer-social">
              <a
                href="https://www.instagram.com/dianah_kamande/"
                target={"_blank"}
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              Linkedin
            </div>
          </div>
          <div className="footer-content col-lg-5">
            <h3>Where We At</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9000610596336!2d36.87439907938717!3d-1.2292835323437514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1507d6673e71%3A0xd3970af731f0ccd1!2sBlessed%20House-%20OFC%20Building%20Thika%20Road!5e0!3m2!1sen!2ske!4v1692371455230!5m2!1sen!2ske"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0, width: "100%", height: "290px" }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom clearfix d-flex">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>CTWOO</span>
            </strong>
            . All Rights Reserved.
          </div>
          <div className="credits">
            Designed by
            <a href="https://wansenziroz.com/" target="_blank" rel="noreferrer">
              Wansenrizo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
