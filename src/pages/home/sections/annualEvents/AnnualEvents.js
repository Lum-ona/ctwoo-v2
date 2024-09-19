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

import valDoc from "../../../../assets/documents/events/doc1.pdf";
import intDoc from "../../../../assets/documents/events/doc2.pdf";
import dayDoc from "../../../../assets/documents/events/doc3.pdf";

export default function AnnualEvents() {
  const annualEvent = ({
    title,
    description,
    img1,
    img2,
    img3,
    img4,
    docRef,
  }) => (
    <div className="event d-flex flex-column align-items-center ">
      <div className="images">
        <div className="d-flex">
          <img alt="ctwoo event" className="col event-img" src={img1} />
          <img alt="ctwoo event" className="col event-img" src={img2} />
        </div>
        <div className="d-flex">
          <img alt="ctwoo event" className="col event-img" src={img3} />
          <img alt="ctwoo event" className="col event-img" src={img4} />
        </div>{" "}
      </div>
      <div className="event-content d-flex flex-column align-items-center justify-content-between">
        <div className="event-title">
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <a href={docRef} target={"_blank"} rel="noreferrer" className="btn">
          learn more
        </a>
      </div>
    </div>
  );

  return (
    <div className="annual-events">
      <Title title={"Our Main Annual Events"} />
      <div className="annual-container">
        <div className="d-flex flex-wrap align-items-start">
          {annualEvent({
            title: "Valentines Dinner",
            description:
              "CTWOO’s valentines dinner events serve as a platform for networking, sharing success stories, and discussing future collaborations to further our goal of achieving SDG 4.During the dinner, CTWOO highlights our ongoing efforts and achievements in supporting widows in line with Economic, Social and Legal aspects.",
            img1: val1,
            img2: val2,
            img3: val3,
            img4: val4,
            docRef: valDoc,
          })}
          {annualEvent({
            title: "International Widows Day",
            description:
              "Since 2016, Come Together Widows and Orphans Organization has hosted annual International Widows Day celebrations in Kenya, dedicated to supporting widows and their families. These celebrations have provided a platform for empowering widows both economically and legally.",
            img1: int1,
            img2: int2,
            img3: int3,
            img4: int4,
            docRef: intDoc,
          })}
          {annualEvent({
            title: "16 Days of Activism",
            description:
              "Over the past five years, our 16 Days of Activism Against Gender-Based Violence campaigns have made significant strides in addressing and combating violence against women and girls. Each year, from November 25 to December 10, we have dedicated ourselves to advocating for survivors' rights, challenging harmful cultural practices, and promoting systemic change.",
            img1: day1,
            img2: day2,
            img3: day3,
            img4: day4,
            docRef: dayDoc,
          })}
        </div>
      </div>
    </div>
  );
}
