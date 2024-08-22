import Climate from "./sections/climate/Climate";
import Economic from "./sections/economic/Economic";
import Healthcare from "./sections/legal/healthcare/Healthcare";
import Legal from "./sections/legal/Legal";
import Psychological from "./sections/psychological/Psychological";
import Skills from "./sections/skills/Skills";
import "./Widows.css";

export default function Widows() {
  return (
    <div>
      <Psychological />
      <Economic />
      <Legal />
      <Healthcare />
      <Climate />
      <Skills />
    </div>
  );
}
