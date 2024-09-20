import "./Videos.css";
import vid1 from "../../../../../assets/vid/vid1.mp4";
import vid2 from "../../../../../assets/vid/vid2.mp4";
import vid3 from "../../../../../assets/vid/vid3.mp4";
import vid4 from "../../../../../assets/vid/vid4.mp4";
import vid5 from "../../../../../assets/vid/vid5.mp4";
import vid6 from "../../../../../assets/vid/vid6.mp4";

export default function Videos() {
  const videos = [vid1, vid2, vid3, vid4, vid5, vid6];
  const portfolioContainer = ({ vid, keyIndex }) => (
    <div
      key={keyIndex}
      className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-ah"
    >
      <video controls>
        <source src={vid} type="video/mp4" />
        <source src={vid.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <h1
        style={{
          color: "rgba(255, 255, 255, 0.787)",
          fontSize: 200,
          position: "absolute",
          top: "30%",
          left: "36%",
        }}
      ></h1>
      <div className="portfolio-info">
        <a
          href="https://www.youtube.com/watch?v=LHsq9y2PibM"
          className="glightbox btn-watch-video d-flex align-items-center"
        >
          <i className="bi bi-play-circle"></i>
          <span></span>
        </a>
        <a
          style={{ marginTop: 3 }}
          href="https://images.pexels.com/photos/1499596/pexels-photo-1499596.jpeg?auto=compress&cs=tinysrgb&w=800"
          title="antelope"
          data-gallery="portfolio-gallery"
          className="glightbox preview-link"
        >
          <i className="bi bi-zoom-in"></i>
        </a>
      </div>
    </div>
  );
  return (
    <div className="video-gallery">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          className="portfolio-isotope "
          data-portfolio-filter=".filter-ah"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <div className="row g-0 portfolio-container">
            {videos.map((item, index) =>
              portfolioContainer({ vid: item, keyIndex: index })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
