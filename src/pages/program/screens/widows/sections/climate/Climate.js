import "./Climate.css";
import Title from "../../../../../../components/titles/Title";

export default function Climate() {
  return (
    <div className="climate">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Title title="Emergency Relief" />
            <div className="climate-images">
              <div className="images row mt-1">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
              <div className="images row mt-3">
                <img className="col" />
                <img className="col" />
                <img className="col" />
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
          <div className="col-lg-6 ">
            <Title title="Climate Action Response" />
            <div className="climate-images">
              <div className="images row mt-1">
                <img className="col" />
                <img className="col" />
                <img className="col" />
              </div>
              <div className="images row mt-3">
                <img className="col" />
                <img className="col" />
                <img className="col" />
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
