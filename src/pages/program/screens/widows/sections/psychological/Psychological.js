import Title from "../../../../../../components/titles/Title";
import "./Psychological.css";
import img1 from "../../../../../../assets/img/pyschological/img1.jpeg";
import img2 from "../../../../../../assets/img/pyschological/img2.jpeg";
import img3 from "../../../../../../assets/img/pyschological/img3.jpeg";
import img4 from "../../../../../../assets/img/pyschological/img4.jpeg";
import img5 from "../../../../../../assets/img/pyschological/img5.jpeg";
import img6 from "../../../../../../assets/img/pyschological/img6.jpeg";

export default function Psychological() {
  return (
    <div className="psychological">
      <div className="purple-bg row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <Title title={"Psychological Support"} />
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
            <div className="row">
              <div
                className="col img"
                style={{ backgroundImage: `url(${img5})` }}
              ></div>
              <div
                className="col img"
                style={{ backgroundImage: `url(${img6})` }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6 pt-4">
            <p>
              We understand that coping with loss and grief can be an
              overwhelming journey for widows. To address this, we provide
              compassionate counseling services and support groups aimed at
              fostering emotional healing and resilience. Our trained counselors
              offer one-on-one therapy sessions to help widows process their
              grief, while our peer support groups create a safe space for
              sharing experiences and mutual encouragement. By engaging in these
              programs, widows can find solace and strength in a community of
              understanding.
            </p>
            <p>
              In addition to counseling, we organize workshops and seminars that
              teach coping strategies and stress management techniques. These
              sessions are designed to empower widows with practical tools to
              navigate their emotional challenges. By promoting mental health
              awareness and providing ongoing emotional support, we aim to
              improve the overall well-being and quality of life for widows in
              our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
