import Title from "../../../../../../components/titles/Title";
import "./Education.css";
import img1 from "../../../../../../assets/img/education/img1.jpeg";
import img2 from "../../../../../../assets/img/education/img2.jpeg";
import img7 from "../../../../../../assets/img/education/img7.jpeg";
import img8 from "../../../../../../assets/img/education/img8.jpeg";

export default function Education() {
  return (
    <div className="education">
      <div className="container">
        <Title title={"Education Sponsorship"} />
        <div className="row">
          <div
            style={{ backgroundImage: `url(${img1})` }}
            className="ed-image col-lg-3"
          ></div>
          <div
            style={{ backgroundImage: `url(${img2})` }}
            className="ed-image col-lg-3"
          ></div>
          <div
            style={{ backgroundImage: `url(${img7})` }}
            className="ed-image col-lg-3"
          ></div>
          <div
            style={{ backgroundImage: `url(${img8})` }}
            className="ed-image col-lg-3"
          ></div>
        </div>
        <div className="">
          <div className="content d-flex flex-column justify-content-between">
            <p>
              Education is a powerful tool for breaking the cycle of poverty and
              providing orphans with a brighter future. We offer scholarships
              and sponsorships to ensure that orphans have access to quality
              education from primary school through secondary education. By
              covering tuition fees, school supplies, and other educational
              expenses, we remove financial barriers that often prevent children
              from continuing their studies. Our partnerships with educational
              institutions and government officials help secure additional
              resources and support for these children.
            </p>
            <p className="">
              CTWOO provides mentoring and academic support to help orphans
              succeed in their studies. Our dedicated mentors offer guidance,
              tutoring, and emotional support, fostering a nurturing environment
              where children can thrive academically. By investing in their
              education, we aim to empower orphans with the skills and knowledge
              they need to achieve their full potential and build successful
              futures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
