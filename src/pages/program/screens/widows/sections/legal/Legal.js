import Title from "../../../../../../components/titles/Title";
import "./Legal.css";

export default function Legal() {
  return (
    <div className="legal">
      <div className="purple-bg row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <Title title={"legal aid Support"} />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="images col-lg-6">
            <div className="row">
              <img className="col" />
              <img className="col" />
            </div>
            <div className="row">
              <img className="col" />
              <img className="col" />
            </div>
            <div className="row">
              <img className="col" />
              <img className="col" />
            </div>
            <div className="row">
              <img className="col" />
              <img className="col" />
            </div>
          </div>
          <div className="col-lg-6 pt-4">
            <p>
              Navigating legal complexities can be daunting for widows,
              especially when dealing with issues related to property rights and
              inheritance. To ensure their rights are protected, we partner with
              esteemed legal organizations such as FIDA and KHCR. Our legal aid
              services include
            </p>
            <p>
              pro bono legal representation, guidance on legal procedures, and
              advocacy for widows' rights. By providing these services, we help
              widows secure their entitlements and access justice. Our legal
              support extends beyond individual cases; we also conduct awareness
              campaigns and educational workshops to inform widows about their
              legal rights and available resources. These initiatives aim to
              empower widows with the knowledge and confidence to advocate for
              themselves. By fostering a supportive legal environment, we strive
              to create a society where widows' rights are respected and upheld.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
