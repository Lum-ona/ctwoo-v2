import "./Highlights.css";
import Title from "../../../../components/titles/Title";
import img1 from "../../../../assets/img/highlights/freemed.jpeg";
import img2 from "../../../../assets/img/highlights/food.jpeg";
import img3 from "../../../../assets/img/highlights/kits.jpeg";

export default function Highlights() {
  const highlights = [
    {
      title: "FREE MEDICAL CAMP",
      img: img1,
      content:
        "CTWOO has introduced Free Medical Camps or widows as a way of enhancing Good Health and Well-Being. This initiative was launchedduring the 9th International Widows Day inVihiga County, in partnership with Aga KhanHospital and Avenue Hospital. The Free MedicalCamp also supported widows in Nairobi and isplanned to be replicated across the entirecountry",
    },
    {
      title: "TREE PLANTING",
      content:
        "To address Climate Change, CTWOO has embraced a tree planting project that is currently being carried out by the Osiligi Le Nkoliae widow  group in Kajiado County. To enhance sustainability  and environmental conservation, CTWOO is  ensuring that widows in their respective  registered groups are also participating in tree planting projects",
    },
    {
      title: "Widows’ Food Assistance",
      img: img2,
      content:
        "CTWOO has been providing food packages to widows in Samburu in response to hunger and drought in the area. The target beneficiaries are elderly and lactating widows from the region. Although this initiative is conducted annually, CTWOO has taken on the additional responsibility of providing food to widows with HIV/AIDS and Cancer from the slums of Nairobi who are unable to feed themselves.",
    },
    {
      title: "PARALEGAL TRAINING",
      content:
        "CTWOO has embraced paralegal training for widows, training them as Trainers of Trainers to address the alarming issue of widow’s rights violations. We have graduated our widows in Nairobi, Kiambu, Nyeri and Meru as advocates of their own rights through our paralegal training program. Through this they are able to speak up whenever their rights are violated.",
    },
    {
      title: "DIGNITY KITS",
      img: img3,
      content:
        "CTWOO makes the efforts to address the specific needs of orphaned boys and girls, reduce absenteeism from school due to lack of hygiene products, and promote their overall wellbeing and self-esteem. CTWOO does this by providing essential hygiene and personal care items including sanitary pads, toiletries and undergarments. This helps to maintain their health dignity and confidence during menstruation and daily life.",
    },
    {
      title: "PUSHING FOR WIDOWS MANUAL ON ECONOMIC EMPOWERMENT",
      content:
        "CTWOO actively engages in deliberations with various stakeholders who assist in the formulation of policies for widowed persons. CTWOO is currently developing a manual on economic empowerment for widows in collaboration with the President's Advisor on Women's Rights, Hon. Harriet Chiggai",
    },
  ];
  return (
    <div className="highlights">
      <Title title="Highlights" />
      <div className="container">
        <div className="row d-flex justify-content-between">
          {highlights.map((item, index) => (
            <div className="content col-lg-5" key={index}>
              <div className="d-flex justify-content-between">
                <img className="" src={item.img} />
                <div className="">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
