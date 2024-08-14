import "./Home.css";
import Hero from "./sections/hero/Hero";
import AboutUs from "./sections/aboutus/AboutUs";
import OurProgress from "./sections/ourProgress/OurProgress";
import WidowhoodData from "./sections/widowhoodData/WidowhoodData";
import OurStrategy from "./sections/ourStrategy/OurStrategy";
import Highlights from "./sections/highlights/Highlights";
import AnnualEvents from "./sections/annualEvents/AnnualEvents";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WidowhoodData />
      <OurStrategy />
      <Highlights />
      <OurProgress />
      <AnnualEvents />
    </div>
  );
}
