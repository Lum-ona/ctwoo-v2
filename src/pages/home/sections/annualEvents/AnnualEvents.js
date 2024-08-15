import "./AnnualEvents.css";
import Title from "../../../../components/titles/Title";
import val1 from "../../../../assets/img/events/valentine/img1.jpeg";
import val2 from "../../../../assets/img/events/valentine/img2.jpeg";
import val3 from "../../../../assets/img/events/valentine/img3.jpeg";
import val4 from "../../../../assets/img/events/valentine/img4.jpeg";
import int1 from "../../../../assets/img/events/international/img1.jpeg";
import int2 from "../../../../assets/img/events/international/img2.jpeg";
import int3 from "../../../../assets/img/events/international/img3.jpeg";
import int4 from "../../../../assets/img/events/international/img4.jpeg";
import day1 from "../../../../assets/img/events/16/img1.jpeg";
import day2 from "../../../../assets/img/events/16/img2.jpeg";
import day3 from "../../../../assets/img/events/16/img3.jpeg";
import day4 from "../../../../assets/img/events/16/img4.jpeg";

export default function AnnualEvents() {
  return (
    <div className="annual-events">
      <Title title={"Our Main Annual Events"} />
      <div className="container">
        <div className="row d-flex justify-content-between align-items-start">
          <div className="col-lg-3">
            <div className="images">
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={val1} />
                <img alt="ctwoo event" className="col event-img" src={val2} />
              </div>
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={val3} />
                <img alt="ctwoo event" className="col event-img" src={val4} />
              </div>{" "}
            </div>
            <div className="event-content d-flex flex-column align-items-center justify-content-between">
              <div className="event-title">
                <h3>Valentines Dinner</h3>
              </div>
              <p>
                CTWOO’s valentines dinner events serve as a platform for
                networking, sharing success stories, and discussing future
                collaborations to further our goal of achieving SDG 4.During the
                dinner, CTWOO highlights our ongoing efforts and achievements in
                supporting widows in line with Economic, Social and Legal
                aspects.
              </p>
              <div className="btn">learn more</div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-between">
            <div className="images">
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={int1} />
                <img alt="ctwoo event" className="col event-img" src={int2} />
              </div>
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={int3} />
                <img alt="ctwoo event" className="col event-img" src={int4} />
              </div>
            </div>
            <div className="event-content d-flex flex-column align-items-center justify-content-between">
              <div className="event-title">
                <h3>International Widows Day</h3>
              </div>
              <p>
                Since 2016, Come Together Widows and Orphans Organization has
                hosted annual International Widows Day celebrations in Kenya,
                dedicated to supporting widows and their families. These
                celebrations have provided a platform for empowering widows both
                economically and legally.{" "}
              </p>
              <div className="btn">learn more</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="images">
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={day1} />
                <img alt="ctwoo event" className="col event-img" src={day2} />
              </div>
              <div className="row">
                <img alt="ctwoo event" className="col event-img" src={day3} />
                <img alt="ctwoo event" className="col event-img" src={day4} />
              </div>
            </div>
            <div className="event-content d-flex flex-column align-items-center justify-content-between">
              <div className="event-title">
                <h3>16 Days of Activism</h3>
              </div>
              <p>
                Over the past five years, our 16 Days of Activism Against
                Gender-Based Violence campaigns have made significant strides in
                addressing and combating violence against women and girls. Each
                year, from November 25 to December 10, we have dedicated
                ourselves to advocating for survivors' rights, challenging
                harmful cultural practices, and promoting systemic change.{" "}
              </p>
              <div className="btn">learn more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
