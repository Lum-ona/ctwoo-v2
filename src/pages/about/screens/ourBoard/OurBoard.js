import "./OurBoard.css";
import Title from "../../../../components/titles/Title";

export default function OurBoard() {
  const boards = [
    {
      img: "",
      name: "Dr. Dianah Kamande HSC",
      role: "FOUNDER & EXECUTIVE DIRECTOR",
      profile:
        "rovide guidance, support, and direction to the team, fostering collaboration and ensuring project goals are achieved.",
    },
    {
      img: "",
      name: "Mr. Peter Nyagah",
      role: "CHAIRPERSON",
      profile:
        "He holds a Bachelor of Arts in Business and Procurement from Presbyterian University and is the Executive Director and Founder of Certified Homes Limited. His extensive experience in business management and procurement has significantly enhanced the mission of Come Together Widows and Orphans Organization (CTWOO) to support widows and orphans in Kenya.",
    },
    {
      img: "",
      name: "MS. Nkatha Mwenda",
      role: "SECRETARY & BOARD MEMBER",
      profile:
        "Nkatha Mwenda is a nutritionist with 15 plus years of experience and a NACADA Trained RecoveryCoach.She holds a Bachelor of Science Degree in Food, Nutrition and Dietetics from Kenyatta University, a Certificate of Proficiency from the College of Insurance ",
    },
    {
      img: "",
      name: "Dr. Rashid Ali Omar, PHD",
      role: "BOARD MEMBER",
      profile:
        "Rashid Ali Omar is Former the Deputy chief kadhi of the republic of kenya. He Holds PhD in (Sociology) from Mount Kenya University, MA (Social Development and Management) from Maseno University, BA (Islamic Sharia) from Islamic University of Madina. He is also certified mediator from (MTI) with over 24 Years experience in dispute resolution, application of Islamic law in all contentious and non- contentious matters.",
    },
    {
      img: "",
      name: "Ms. Faith Owiyo ",
      role: "BOARD MEMBER",
      profile:
        "Ms. Faith Owiyo is a passionate advocate for gender equality, youth voice, and social justice. Currently pursuing her Master of Arts in Gender and Development Studies at the University of Nairobi, she holds a Bachelor’s Degree in the same field from Kenyatta University. As a Probation Officer in Kenya’s justice system, Faith brings compassion to matters of justice and equity",
    },
    {
      img: "",
      name: "Raphael Okwama ",
      role: "BOARD MEMBER",
      profile:
        "Create visually compelling designs that effectively convey messages and align with client or project requirements.",
    },
  ];

  const dropDownMouseIn = (e) => {
    e.currentTarget.classList.add("hovered");
  };

  const dropDownMouseLeave = (e) => {
    e.currentTarget.classList.remove("hovered");
  };
  return (
    <div className="our-board">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-2 d-flex justify-content-center">
            <Title title={"Our Board"} />
          </div>
          <div className="col-lg-10">
            <div className="d-flex flex-wrap justify-content-between">
              {boards.map((item, index) => (
                <div
                  className="board-member d-flex align-items-center flex-column text-center"
                  key={index}
                  onMouseEnter={(e) => dropDownMouseIn(e)}
                  onMouseLeave={(e) => dropDownMouseLeave(e)}
                >
                  <img src={item.img} alt={`${item.name}`} />
                  <h3>{item.name}</h3>
                  <h4>{item.role}</h4>
                  <div className="board-profile">
                    <p>{item.profile}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
