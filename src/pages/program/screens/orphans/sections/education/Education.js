import Title from "../../../../../../components/titles/Title";
import "./Education.css";

export default function Education() {
  return (
    <div className="education">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="ed-image" />
            <img className="ed-image mt-lg-4" />
          </div>
          <div className="col-lg-6">
            <Title title={"Education Sponsorship"} />
            <div className="content d-flex flex-column justify-content-between">
              <p>
                Education is a powerful tool for breaking the cycle of poverty
                and providing orphans with a brighter future. We offer
                scholarships and sponsorships to ensure that orphans have access
                to quality education from primary school through secondary
                education. By covering tuition fees, school supplies, and other
                educational expenses, we remove financial barriers that often
                prevent children from continuing their studies. Our partnerships
                with educational institutions and government officials help
                secure additional resources and support for these children.
              </p>
              <p className="mt-lg-5">
                CTWOO provides mentoring and academic support to help orphans
                succeed in their studies. Our dedicated mentors offer guidance,
                tutoring, and emotional support, fostering a nurturing
                environment where children can thrive academically. By investing
                in their education, we aim to empower orphans with the skills
                and knowledge they need to achieve their full potential and
                build successful futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
