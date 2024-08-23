import img1 from "../../../../../assets/img/highlights/food.jpeg";
import img2 from "../../../../../assets/img/hero/hero1.jpeg";
import img3 from "../../../../../assets/img/hero/hero2.jpeg";
import img4 from "../../../../../assets/img/hero/hero3.jpeg";
import img5 from "../../../../../assets/img/health/img1.jpeg";
import img6 from "../../../../../assets/img/health/img2.jpeg";
import img7 from "../../../../../assets/img/events/16/img1.jpeg";
import img8 from "../../../../../assets/img/events/16/img2.jpeg";
import img9 from "../../../../../assets/img/events/16/img3.jpeg";
import img10 from "../../../../../assets/img/education/img1.jpeg";
import img11 from "../../../../../assets/img/education/img2.jpeg";
import img12 from "../../../../../assets/img/education/img3.jpeg";
import img13 from "../../../../../assets/img/education/img4.jpeg";
import img14 from "../../../../../assets/img/education/img5.jpeg";
import img15 from "../../../../../assets/img/economic/img1.jpeg";
import img16 from "../../../../../assets/img/economic/img2.jpeg";
import "./Photos.css";

export default function Photos() {
  const portfolioContainer = ({ img }) => (
    <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-ah">
      <img
        src={img}
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
            {portfolioContainer({ img: img1 })}
            {portfolioContainer({ img: img2 })}
            {portfolioContainer({ img: img3 })}
            {portfolioContainer({ img: img4 })}
            {portfolioContainer({ img: img5 })}
            {portfolioContainer({ img: img6 })}
            {portfolioContainer({ img: img7 })}
            {portfolioContainer({ img: img8 })}
            {portfolioContainer({ img: img9 })}
            {portfolioContainer({ img: img10 })}
            {portfolioContainer({ img: img11 })}
            {portfolioContainer({ img: img12 })}
            {portfolioContainer({ img: img13 })}
            {portfolioContainer({ img: img14 })}
            {portfolioContainer({ img: img15 })}
            {portfolioContainer({ img: img16 })}
          </div>
        </div>
      </div>
    </div>
  );
}
