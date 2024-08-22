import img1 from "../../../../../assets/img/highlights/food.jpeg";
import "./Videos.css";

export default function Videos() {
  const portfolioContainer = () => (
    <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-ah">
      <img
        src={img1}
        className="img-fluid"
        alt="Antelop - Alphabet Series - WildNow Foundation"
      />
      <h1
        style={{
          color: "rgba(255, 255, 255, 0.787)",
          fontSize: 200,
          position: "absolute",
          top: "30%",
          left: "36%",
        }}
      >
        {/* A */}
      </h1>
      <div className="portfolio-info">
        {/* <h4>Antelope</h4> */}
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
    <div className="portfolio">
      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          className="portfolio-isotope "
          data-portfolio-filter=".filter-ah"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <div className="row g-0 portfolio-container">
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
            {portfolioContainer()}
          </div>
        </div>
      </div>
    </div>
  );
}
