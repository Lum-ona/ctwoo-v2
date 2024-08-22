import "./Economic.css";
import Title from "../../../../../../components/titles/Title";

export default function Economic() {
  return (
    <div className="economic">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-around">
            <div className="eco-images">
              <div className="row">
                <img className="col" />
                <img className="col" />
              </div>
              <div className="row">
                <img className="col" />
                <img className="col" />
              </div>
            </div>

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
            <Title title={"Economic Empowerment"} />
            <div className="content">
              <p className="">
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
            <div className="eco-images">
              <div className="row">
                <img className="col" />
                <img className="col" />
              </div>
              <div className="row">
                <img className="col" />
                <img className="col" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
