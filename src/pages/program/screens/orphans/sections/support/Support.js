import "./Support.css";
import Title from "../../../../../../components/titles/Title";
import img5 from "../../../../../../assets/img/education/img5.jpeg";
import img4 from "../../../../../../assets/img/education/img4.jpeg";

export default function Support() {
  return (
    <div className="support">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Title title="Children’s Home Support" />
            <div
              style={{ backgroundImage: `url(${img4})` }}
              className="support-image mt-lg-4"
            ></div>
          </div>
          <div className="col-lg-6 ">
            <Title title="MENTORSHIP" />
            <div
              style={{ backgroundImage: `url(${img5})` }}
              className="support-image mt-lg-4"
            ></div>
            <div className="mt-4">
              <p></p>
            </div>
          </div>
          <div className="mt-4">
            <p>
              We understand the importance of creating connections and a sense
              of belonging. As part of our Corporate Social Responsibility
              (CSR), we organize regular visits for orphaned and vulnerable
              children to interact with peers in orphanages and children's
              homes. These interactions foster a spirit of unity, empathy, and
              solidarity among children facing similar circumstances. Join us in
              our endeavor to uplift orphaned and vulnerable children, nurture
              their potential, and brighten their paths ahead. Together, we're
              creating a future filled with hope, opportunity, and compassionate
              communities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
