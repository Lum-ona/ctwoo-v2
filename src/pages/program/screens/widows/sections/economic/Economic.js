import "./Economic.css";
import Title from "../../../../../../components/titles/Title";
import img1 from "../../../../../../assets/img/economic/img1.jpeg";
import img2 from "../../../../../../assets/img/economic/img2.jpeg";
import img3 from "../../../../../../assets/img/economic/img3.jpeg";
import img4 from "../../../../../../assets/img/economic/img4.jpeg";
import img5 from "../../../../../../assets/img/economic/img5.jpeg";
import img6 from "../../../../../../assets/img/economic/img6.jpeg";
import img7 from "../../../../../../assets/img/economic/img7.jpeg";
import img8 from "../../../../../../assets/img/economic/img8.jpeg";

export default function Economic() {
  return (
    <div className="economic">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column align-items-center justify-content-around">
            <div className="eco-images">
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
                <div
                  className="col img"
                  style={{ backgroundImage: `url(${img5})` }}
                ></div>
                <div
                  className="col img"
                  style={{ backgroundImage: `url(${img6})` }}
                ></div>
              </div>
              <div className="row">
                <div
                  className="col img"
                  style={{ backgroundImage: `url(${img7})` }}
                ></div>
                <div
                  className="col img"
                  style={{ backgroundImage: `url(${img8})` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
