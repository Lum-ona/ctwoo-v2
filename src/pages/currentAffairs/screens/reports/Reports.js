import "./Reports.css";
import doc1 from "../../../../assets/documents/doc1.PDF";
import doc2 from "../../../../assets/documents/doc2.PDF";
import doc3 from "../../../../assets/documents/doc3.PDF";
import doc4 from "../../../../assets/documents/doc4.pdf";

import img1 from "../../../../assets/img/reports/2.png";
import img2 from "../../../../assets/img/reports/3.png";
import img3 from "../../../../assets/img/reports/1.png";
import img4 from "../../../../assets/img/reports/4.png";
import Title from "../../../../components/titles/Title";

export default function Reports() {
  const reportCard = ({ title, document, bgImg }) => (
    <a
      className="report-card"
      href={document}
      target={"_blank"}
      rel="noreferrer"
    >
      <div className="image" style={{ backgroundImage: `url(${bgImg})` }}></div>
      <div className="doc-title">{title}</div>
    </a>
  );
  return (
    <div className="reports">
      <Title className="reports" />

      <div className="container">
        {reportCard({
          title: "2023 POST-IWD CELEBRATIONS REPORT",
          document: doc1,
          bgImg: img1,
        })}
        {reportCard({
          title:
            "A REPORT ON 3RD ANNIVERSARY CELEBRATION FOR HOPE FOR WIDOWS IN KAJIADO",
          document: doc2,
          bgImg: img2,
        })}
        {reportCard({
          title: "PRE-IWD 2023 CELEBRATIONS REPORT",
          document: doc3,
          bgImg: img3,
        })}
        {reportCard({
          title: "REPORT ON THE 67TH CSW",
          document: doc4,
          bgImg: img4,
        })}
      </div>
    </div>
  );
}
