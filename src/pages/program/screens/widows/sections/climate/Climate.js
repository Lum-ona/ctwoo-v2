import "./Climate.css";
import Title from "../../../../../../components/titles/Title";
import img1 from "../../../../../../assets/img/climate/img1.jpeg";
import img2 from "../../../../../../assets/img/climate/img2.jpeg";
import img3 from "../../../../../../assets/img/climate/img3.jpeg";
import img4 from "../../../../../../assets/img/climate/img4.jpeg";
import img5 from "../../../../../../assets/img/climate/img5.jpeg";
import img6 from "../../../../../../assets/img/climate/img6.jpeg";
import img7 from "../../../../../../assets/img/climate/img7.jpeg";
import img8 from "../../../../../../assets/img/climate/img8.jpeg";
import img9 from "../../../../../../assets/img/climate/img9.jpeg";
import img10 from "../../../../../../assets/img/climate/img10.jpeg";
import img11 from "../../../../../../assets/img/climate/img11.jpeg";
import img12 from "../../../../../../assets/img/climate/img12.jpeg";

export default function Climate() {
  return (
    <div className="climate">
      <div className="container">
        <div className="row ">
          <div className="climate-content col-lg-6 d-flex flex-column align-items-center">
            <Title title="Emergency Relief" />
            <div className="climate-images">
              <div className="images row mt-1">
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img1})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img2})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img3})` }}
                ></div>
              </div>
              <div className="images row mt-3">
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img4})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img5})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img6})` }}
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <p>
                In times of natural disasters and other crises, we are committed
                to providing immediate and effective relief to affected widows
                and orphans. Our humanitarian efforts include distributing food,
                clean water, clothing, and medical supplies to those in need. We
                also offer temporary shelter and assistance with rebuilding
                efforts, helping communities recover and rebuild their lives
              </p>
              <p>
                We work tirelessly to ensure that aid reaches the most
                vulnerable individuals during critical times. Beyond immediate
                relief, we focus on long-term recovery and resilience-building.
                We work with affected communities to develop sustainable
                solutions that address the root causes of vulnerability.
              </p>
            </div>
          </div>
          <div className="climate-content col-lg-6 d-flex flex-column align-items-center">
            <Title title="Climate Action Response" />
            <div className="climate-images">
              <div className="images row mt-1">
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img7})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img8})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img9})` }}
                ></div>
              </div>
              <div className="images row mt-3">
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img10})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img11})` }}
                ></div>
                <div
                  className="col image"
                  style={{ backgroundImage: `url(${img12})` }}
                ></div>
              </div>
            </div>
            <div className="mt-4">
              <p>
                We recognize the importance of environmental sustainability and
                its impact on the future. Our climate action programs focus on
                tree planting initiatives, aimed at combating deforestation and
                promoting a greener environment. We engage with local widows
                groups to raise awareness about climate change and encourage
                sustainable practices that protect our natural resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
