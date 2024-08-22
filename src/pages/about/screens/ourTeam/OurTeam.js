import "./OurTeam.css";
import Title from "../../../../components/titles/Title";

export default function OurTeam() {
  const teams = [
    {
      img: "",
      role: "Programs Manager ",
      name: "Sheryl Otieno ",
      profile:
        "Ms. Sheryl Otieno is a dynamic and compassionate Community development officer with a Bachelor of Science in Community Development from Chuka University.",
    },
    {
      img: "",
      role: "Psycho-Social support officer ",
      name: " Alice Wambui Chomba",
      profile:
        "Ms. Alice Wambui is a passionate educator with a year of teaching experience, during which she also served as a guidance and counselling teacher.. As a Mastercard Foundation Scholar at the United States International University of Africa (USIU-A), she is currently pursuing a Bachelor of Arts in Psychology with a minor in Health Psychology.",
    },
    {
      img: "",
      role: "Tech- Facilitated GBV Youths Program Officer",
      name: "Praise Nyokabi ",
      profile:
        "She is currently pursuing a degree in Gender and Development at Kenyatta University. Praise is dedicated to leveraging technology to address Gender-Based Violence among the youths, contributing to the empowerment and protection of Orphans and Widows children.",
    },
    {
      img: "",
      role: "communications",
      name: "George Munala",
      profile:
        "Has spent the last three (3) years Advocating for the Rights of Widows and Orphans Organization through his adept media and communication skills. He is dedicated to elevating the voices and tales of widows and orphans in order to highlight their struggles, victories, and resilience. ",
    },
    {
      img: "",
      role: "DRIVER",
      name: "Boaz Ndung’u",
      profile:
        "Boaz Ndungu Njenga is a dedicated driver at Come Together Widows and Orphans Organization (CTWOO). In addition to his role at CTWOO, he also works with Business and Online Cabs, showcasing his versatility and commitment to providing reliable transportation services",
    },
    {
      img: "",
      role: "Programs Department",
      name: "Florance Akinyi",
      profile:
        "Ms. Florance Akinyi, is pursuing Bachelor of Arts in Development Studies in the Technical University of Mombasa. ",
    },
    {
      img: "",
      role: "Resource Mobilization Officer",
      name: "Ruth Moraa Ombui",
      profile:
        "Ms. Ruth Moraa is a dynamic young professional armed with a Bachelor's degree in Community Development & specializing in resource mobilization, boasting more than 2 years of hands-on experience in the field.",
    },
    {
      img: "",
      role: "Spiritual and Mental Health Officer",
      name: "Rev. Patrick",
      profile:
        "Pastor Patrick is a trained pastor with over 11 years of experience providing counseling services to church and community members. ",
    },
    {
      img: "",
      role: "IT Department",
      name: "Shema (Nzabakamira) Manasseh",
      profile:
        "He studied information Technology at the United States International University Africa, where he is also a Software Engineering student. Shema is a participant in The Duke of Edinburgh International Award at the Gold level and a MasterCard Foundation Scholar.",
    },
    {
      img: "",
      role: "Country Director, Kenya ",
      name: "Mr. Fredrick Onyambu",
      profile:
        "He holds a BCOM degree in Finance and boasts a range of certifications in mediation, leadership, and program management.",
    },
    {
      img: "",
      role: "Chief Editor",
      name: "Delvine Awuor",
      profile:
        "She holds a Bachelor of Arts in Development Studies from Maseno University and a Diploma in Procurement and Supply Chain Management from Meru National Polytechnic.",
    },
    {
      img: "",
      role: "Project Field Officer",
      name: " Peter Musau",
      profile:
        "Peter Musau is a dedicated and results-oriented professional holding a Bachelor of Science in Community Development from Chuka University. With a robust background spanning over three years",
    },
    {
      img: "",
      role: "Project Field Officer - ",
      name: "Beth Mburu",
      profile:
        "Backed by a Bachelor's degree in Community Development from Chuka University, she has added a solid foundation of knowledge to her duties and responsibilities. Her academic background supplements her hands-on experience.",
    },
    {
      img: "",
      role: "Media Personnel",
      name: "Alex Kiogora",
      profile:
        "Diploma in Communication and Media Studies from Zetech University. He is a creative media professional with over three years of experience in photography, videography, graphic design, and editing.",
    },
    {
      img: "",
      role: "Project Field Officer-",
      name: " Betty Christine Nkatha",
      profile:
        "She holds a diploma in Community Development and Social Work from Chuka University. Her hands-on approach and deep understanding of community needs make her an invaluable asset in driving social and economic transformation.",
    },
  ];
  return (
    <div className="our-team">
      <Title title={"Our CTWOO Team Members"} />
      <div className="container">
        <div className="row d-flex justify-content-between">
          {teams.map((item, index) => (
            <div
              className="team-member col-lg-3 d-flex flex-column align-items-center"
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
