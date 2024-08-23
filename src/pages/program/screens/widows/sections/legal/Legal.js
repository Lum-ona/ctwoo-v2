import Title from "../../../../../../components/titles/Title";
import "./Legal.css";
import img1 from "../../../../../../assets/img/legal/img1.jpeg";
import img2 from "../../../../../../assets/img/legal/img2.jpeg";
import img3 from "../../../../../../assets/img/legal/img3.jpeg";
import img4 from "../../../../../../assets/img/legal/img4.jpeg";

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
              <div
                className="col img"
                style={{ backgroundImage: `url(${img1})` }}
              ></div>
              <div
                className="col img"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
            </div>
            <div className="row">
              <div
                className="col img"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div
                className="col img"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
            </div>
            {/* <div className="row">
              <div
                className="col img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div
                className="col img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
            <div className="row">
              <div
                className="col img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <div
                className="col img"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div> */}
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
