import { useLocation } from "react-router-dom";
import OurFounder from "./screens/ourFounder/OurFounder";
import OurTeam from "./screens/ourTeam/OurTeam";
import OurBoard from "./screens/ourBoard/OurBoard";
import Interns from "./screens/interns/Interns";

export default function About() {
  const { pathname } = useLocation();

  const screens = {
    "our-founder": OurFounder,
    "our-interns": Interns,
    "our-board": OurBoard,
    "our-team": OurTeam,
  };
  const ScreenToRender = screens[pathname.split("/").pop()];
  if (!ScreenToRender === null) {
    return;
  }
  return (
    <div>
      <ScreenToRender />
    </div>
  );
}
