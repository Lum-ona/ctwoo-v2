import "./OurStrategy.css";
import Title from "../../../../components/titles/Title";
import img1 from "../../../../assets/img/hero/hero1.jpeg";
import img2 from "../../../../assets/img/inspire.jpeg";
import img3 from "../../../../assets/img/empower.jpeg";

export default function OurStrategy() {
  return (
    <div className="our-strategy">
      <div className="strategy-container">
        <div className="strategy-row d-flex flex-column flex-lg-row flex-wrap align-items-center">
          <div className="our-strategy-title">
            <h2>Our Strategy</h2>
          </div>
          <div className="advocate">
            <h2>ADVOCATE</h2>
            <p>
              We employs a multi- faceted advocacy strategy, focusing on raising
              public awareness through community engagement and media campaigns,
              while also lobbying for legislative changes to enhance the rights
              and welfare of widows. By partnering with local and international
              NGOs, we amplify our efforts and ensure a broader impact.
            </p>
            <img alt="advocate" className="our-strategy-img" src={img2} />
          </div>
          <div className="inspire">
            <h2>INSPIRE</h2>
            <p>
              We utilizes the Inspire strategy by implementing community-based
              programs that provide widows with education and economic
              empowerment opportunities, fostering resilience and independence.
              We also focus on creating supportive networks and mentorship
              programs that inspire widows to advocate for their rights and take
              on leadership roles within their communities.
            </p>
            <img alt="advocate" className="our-strategy-img" src={img3} />
          </div>
          <div className="empower">
            <h2>EMPOWER</h2>
            <p>
              We centers on providing widows with access to vocational training
              and financial resources, enabling them to achieve economic self-
              sufficiency. We also offer legal support and advocacy training,
              empowering widows to assert their rights and actively participate
              in policy-making processes that affect their lives.
            </p>
            <img alt="advocate" className="our-strategy-img" src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
}
