import "./Reports.css";
import doc1 from "../../../../assets/documents/reports/doc1.PDF";
import doc2 from "../../../../assets/documents/reports/doc2.PDF";
import doc3 from "../../../../assets/documents/reports/doc3.PDF";
import doc4 from "../../../../assets/documents/reports/doc4.pdf";
import doc5 from "../../../../assets/documents/reports/doc5.pdf";
import doc6 from "../../../../assets/documents/reports/doc6.pdf";
import doc7 from "../../../../assets/documents/reports/doc7.pdf";
import doc8 from "../../../../assets/documents/reports/doc8.pdf";
import doc9 from "../../../../assets/documents/reports/doc9.pdf";
import doc10 from "../../../../assets/documents/reports/doc10.pdf";
import doc11 from "../../../../assets/documents/reports/doc11.pdf";
import doc12 from "../../../../assets/documents/reports/doc12.pdf";
import doc13 from "../../../../assets/documents/reports/doc13.pdf";
import doc14 from "../../../../assets/documents/reports/doc14.pdf";

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

      <div className="report-container">
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
        {reportCard({
          title: "CTWOO 7TH PREVALENTINES DINNER",
          document: doc5,
          bgImg: img4,
        })}
        {reportCard({
          title: "CSW 68 REPORT",
          document: doc6,
          bgImg: img3,
        })}
        {reportCard({
          title:
            "REPORT ON A TREE PLANTING EXERCISE HELD AT KIRISIA FOREST, SAMBURU COUNTY ON 13TH DECEMBER 2023",
          document: doc7,
          bgImg: img2,
        })}
        {reportCard({
          title:
            "REPORT ON A VISIT TO MARY IMMACULATE GIRLS RESCUE CENTRE ON 10TH DECEMBER 2023",
          document: doc8,
          bgImg: img1,
        })}
        {reportCard({
          title:
            "REPORT ON THE POST -16 DAYS OF ACTIVISM CAMPAIGN AND ANNUAL GOAT-GIVING CEREMONY HELD IN MARALAL WARD SAMBURU COUNTY ON 14TH DECEMBER 2023",
          document: doc9,
          bgImg: img1,
        })}
        {reportCard({
          title:
            "REPORT ON THE WIDOWS ECONOMIC EMPOWERMENT TRAINING CONDUCTED IN SAMBURU COUNTY ON 12TH DECEMBER 2023",
          document: doc10,
          bgImg: img2,
        })}

        {reportCard({
          title:
            "A REPORT ON THE 16 DAYS OF ACTIVISM CAMPAIGN HELD ON 2ND DECEMBER 2023 IN KASARANI NAIROBI COUNTY DURING BETHEL WIDOWS GRADUATION CEREMONY",
          document: doc11,
          bgImg: img4,
        })}
        {reportCard({
          title: "INTERNATIONAL WIDOWS DAY 2024 ACTIVITIES SUMMARY REPORT 2024",
          document: doc12,
          bgImg: img4,
        })}
        {reportCard({
          title: "COMBINED REPORTS OF PRE, MAIN & POST IWD CELEBRATIONS",
          document: doc13,
          bgImg: img1,
        })}
        {reportCard({
          title: "16 DAYS OF ACTIVISM MAIN REPORT 2023",
          document: doc14,
          bgImg: img2,
        })}
      </div>
    </div>
  );
}
