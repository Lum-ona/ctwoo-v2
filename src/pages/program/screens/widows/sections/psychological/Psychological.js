import Title from "../../../../../../components/titles/Title";
import "./Psychological.css";

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
