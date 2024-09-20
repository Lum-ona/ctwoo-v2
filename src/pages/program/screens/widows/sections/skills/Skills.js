import Title from "../../../../../../components/titles/Title";
import "./Skills.css";
import img1 from "../../../../../../assets/img/skills/img1.jpeg";
import img2 from "../../../../../../assets/img/skills/img2.jpeg";
import img3 from "../../../../../../assets/img/skills/img3.jpeg";
import img4 from "../../../../../../assets/img/skills/img4.jpeg";

export default function Skills() {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-between flex-column">
            <Title title={"Skills Training"} />
            <p>
              At Come Together Widows and Orphans Organization, we are dedicated
              to empowering widows through skill development. Our comprehensive
              program encompasses a range of valuable skills, including bakery,
              tailoring, weaving and hairdressing. With a strong commitment to
              creating opportunities for widows, we believe in the
              transformative power of skill acquisition. By providing training
              in weaving and hairdressing, we equip widows with the tools they
              need to build sustainable livelihoods and secure their futures.
              Our efforts are rooted in the belief that skill empowerment is a
              key to breaking the cycle of dependency and fostering
              self-sufficiency.
            </p>
            <p>
              We as well embrace the cottage industries including beadwork,
              knitting and crocket to widows. For instance, we have skills
              training centers in different counties like in Nairobi and Kiambu
              where we train widows and equip them with skills like tailoring
              skills, computer skills and knitting skills, after which they
              graduate .Join us in our mission to uplift widows, enhance their
              self-esteem, and pave the way for brighter tomorrows.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row skills-images">
              <div
                className="col image"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div
                className="col image"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>
            <div className="row skills-images">
              <div
                className="col image"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div
                className="col image"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
