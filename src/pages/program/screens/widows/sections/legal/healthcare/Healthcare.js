import "./Healthcare.css";
import Title from "../../../../../../../components/titles/Title";

export default function Healthcare() {
  return (
    <div className="healthcare">
      <div className="container d-flex align-items-center">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-around">
            <img className="image" />
            <div className="content">
              <p>
                We also assist widows in forming cooperative groups and
                registering with SACCOs, enabling them to pool resources and
                access credit facilities. These cooperative groups foster a
                sense of community and mutual support, empowering widows to
                engage in sustainable economic activities. Through continuous
                mentorship and business development training, we aim to help
                widows achieve economic stability and improve their livelihoods,
                ultimately enhancing their self-reliance and dignity.
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-between">
            <Title title={"Healthcare Services"} />
            <img className="image" />
            <div className="content">
              <p>
                Economic independence is crucial for the well-being of widows,
                enabling them to provide for their families and secure a stable
                future. We offer extensive workshops and training sessions that
                equip widows with skills for income-generating activities, such
                as entrepreneurship, handicrafts, and agriculture. By partnering
                with organizations like Woman Enterprise Fund(WEF), National
                Government Affirmative Action Fund(NGAAF) , and Uwezo Fund, we
                facilitate access to financial resources and opportunities for
                business development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
