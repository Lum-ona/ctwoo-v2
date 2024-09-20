import Title from "../../../../components/titles/Title";
import "./WidowhoodData.css";
import graph from "../../../../assets/img/widowhoodData.jpeg";
import img1 from "../../../../assets/img/widowhood/widowhood1.jpeg";
import img2 from "../../../../assets/img/widowhood/widowhood2.jpeg";
import img3 from "../../../../assets/img/widowhood/widowhood3.jpeg";

export default function WidowhoodData() {
  return (
    <div className="widowhood-data">
      <Title title={"Widowhood Data"} />
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-3">
            <img alt="widowhood" className="widowhood-data-img " src={img1} />
            <h3>World bank data</h3>
          </div>

          <div className="col-lg-3">
            <img
              alt="widowhood"
              className="widowhood-data-img col-lg-3"
              src={img2}
            />
            <h3>KNBS data</h3>
          </div>

          <div className="col-lg-3">
            <img
              alt="widowhood"
              className="widowhood-data-img col-lg-3"
              src={img3}
            />
            <h3>CTWOO Data</h3>
          </div>
        </div>
      </div>
      <div className="widowhood-data-content">
        <div className="container h-100">
          <div className="row h-100 d-flex justify-content-between align-items-center">
            <div className="col-lg-3">
              According to the World Bank there are approximately 258 million
              widows worldwide, with over 115 million living in poverty.{" "}
            </div>
            <div className="col-lg-3">
              The Kenya National Bureau of Statistics (KNBS) 2019 gives an
              estimate over 1 million widows in Kenya who remain largely
              voiceless in policymaking and social discussions.
            </div>
            <div className="col-lg-3">
              Over the past 11 years, the Come Together Widows and Orphans
              Organization has approximately 4,100,097 widows through various
              initiatives, including empowerment programs, media outreach, and
              workshops.
            </div>
          </div>
        </div>
      </div>
      <div className="widowhood-stats d-flex justify-content-center align-items-center">
        <img alt="widowhood" className="widowhood-stats-img" src={graph} />
      </div>
    </div>
  );
}
