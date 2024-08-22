import "./Support.css";
import Title from "../../../../../../components/titles/Title";

export default function Support() {
  return (
    <div className="support">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Title title="Children’s Home Support" />
            <div className="support-images">
              <div className="images row mt-1">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
              <div className="images row mt-3">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
            </div>
            <div className="mt-4">
              <p>
                We understand the importance of creating connections and a sense
                of belonging. As part of our Corporate Social Responsibility
                (CSR), we organize regular visits for orphaned and vulnerable
                children to interact with peers in orphanages and children's
                homes. These interactions foster a spirit of unity, empathy, and
                solidarity among children facing similar circumstances. Join us
                in our endeavor to uplift orphaned and vulnerable children,
                nurture their potential, and brighten their paths ahead.
                Together, we're creating a future filled with hope, opportunity,
                and compassionate communities
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <Title title="MENTORSHIP" />
            <div className="support-images">
              <div className="images row mt-1">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
              <div className="images row mt-3">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
            </div>
            <div className="mt-4">
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
