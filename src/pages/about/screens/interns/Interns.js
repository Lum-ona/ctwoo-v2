import "./Interns.css";
import Title from "../../../../components/titles/Title";

export default function Interns() {
  const teams = [
    {
      img: "",
      role: "Finance Manager -",
      name: " Mr. Joshua Moganda",
      profile:
        "He owns a degree in Bachelor of commerce (finance) from Kenyatta University which solidifies his experience and equips him with required knowledge to work. He has strong communication skills, team work and good time and financial management skills that makes him pursue his duties and responsibilities effectively.",
    },
  ];
  return (
    <div className="our-intern">
      <Title title={"Our CTWOO Intern Members"} />
      <div className="container">
        <div className="row d-flex justify-content-between">
          {teams.map((item, index) => (
            <div
              className="intern-member col-lg-3 d-flex flex-column align-items-center"
              key={index}
            >
              <img src={item.img} alt={item.name} />
              <div className="role-div">
                <h3>{item.role}</h3>
              </div>
              <h4>{item.name}</h4>
              <p>{item.profile}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
