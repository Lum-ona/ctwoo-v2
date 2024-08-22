import "./Gallery.css";
import Title from "../../../../components/titles/Title";
import { Link } from "react-router-dom";
import photo from "../../../../assets/img/inspire.jpeg";
import video from "../../../../assets/img/empower.jpeg";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <Title title="Gallery" />
        </div>
        <div className="row gy-5">
          <Link
            to="/current-affairs/gallery/photos"
            className="col-xl-6 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="service-item">
              <div className="img">
                <img src={photo} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <h3>Photos</h3>
              </div>
            </div>
          </Link>

          <Link
            to="/current-affairs/gallery/photos"
            className="col-xl-6 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="service-item">
              <div className="img">
                <img src={video} className="img-fluid" alt="" />
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>

                <h3>Videos</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
