import Title from "../../../../components/titles/Title";
import "./AboutUs.css";
import sdg1 from "../../../../assets/img/sdgs/sdg1.png";
import sdg2 from "../../../../assets/img/sdgs/sdg2.png";
import sdg3 from "../../../../assets/img/sdgs/sdg3.png";
import sdg4 from "../../../../assets/img/sdgs/sdg4.png";
import sdg5 from "../../../../assets/img/sdgs/sdg5.png";
import sdg6 from "../../../../assets/img/sdgs/sdg6.png";
import sdg10 from "../../../../assets/img/sdgs/sdg10.png";
import sdg13 from "../../../../assets/img/sdgs/sdg13.jpeg";
import sdg16 from "../../../../assets/img/sdgs/sdg16.png";
import sdg17 from "../../../../assets/img/sdgs/sdg17.png";

export default function AboutUs() {
  const sdgs = [sdg1, sdg2, sdg3, sdg4, sdg5, sdg6, sdg10, sdg13, sdg16, sdg17];
  return (
    <div className="aboutus">
      <Title title={"About us"} />
      <div className="content row d-flex flex-sm-column-reverse flex-lg-row justify-content-evenly">
        <div className="aboutus-left col-lg-3">
          <div className="aboutus-img"></div>
        </div>
        <div className="col-lg-7">
          <div className="container">
            <p>
              CTWOO is a registered Non-Profit Organization in Kenya, officially
              recognized by the NGO Co-ordination Board under the
              Non-Governmental Organizations Act since January 2019. Our journey
              began as a Community- Based Organization on 10th October 2013, and
              over time, we evolved into an NGO, empowering us to extend our
              services to Widows and Orphans across the entire country.
            </p>
            <p>
              Our initiatives are in line with the United Nations Sustainable
              Development Goals, specifically (SDG 1) No poverty, (SDG2) Zero
              Hunger, (SDG 3) Good health and well-being, (SDG 4) Quality
              Education, (SDG 5) Gender Equality, (SDG 6) Clean water and
              Sanitation, (SDG 10) Reduced Inequality, (SDG 13) Climate Action,(
              SDG 16) Peace, Justice and strong institutions and (SDG 17)
              Building Partnerships for goals, ensuring that our efforts
              contribute to broader global development objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="row sdgs">
        <div className="col-lg-5"></div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="row d-flex align-items-center justify-content-center">
            {sdgs.map((item, index) => (
              <img src={item} key={index} className="sdg-img col-lg-2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
