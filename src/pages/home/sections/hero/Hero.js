import "./Hero.css";
import { useEffect, useState } from "react";
import hero1 from "../../../../assets/img/hero/hero1.jpeg";
import hero2 from "../../../../assets/img/hero/hero2.jpeg";
import hero3 from "../../../../assets/img/hero/hero3.jpeg";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageClass, setImageClass] = useState("slide-in");
  const backgroundImagesList = [hero1, hero2, hero3];

  useEffect(() => {
    const getRandomIndexExcluding = (excludeIndex) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * backgroundImagesList.length);
      } while (randomIndex === excludeIndex);
      return randomIndex;
    };

    const slideAndChangeImages = () => {
      setImageClass("slide-out");
      setTimeout(() => {
        const newCurrentImage = getRandomIndexExcluding(currentImage);
        setCurrentImage(newCurrentImage);
        setImageClass("slide-in");
      }, 1); // Match the timeout to the slide-out duration
    };

    const intervalId = setInterval(slideAndChangeImages, 5000); // 10 seconds
    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="hero">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="left-hero h-100 col-lg-4">
            <div className="container h-100 d-flex justify-content-evenly align-items-center">
              <div className="content h-100 d-flex flex-column justify-content-evenly align-items-center text-center">
                <h1>Come Together Widows and Orphans Organization.</h1>
                <p>
                  Champions for the protection of Human Rights and Uphold the
                  Dignity of Widows, in alignment with international standards
                  including the Convention on the Elimination of All Forms of
                  Discrimination against Women (CEDAW) and the Convention on the
                  Rights of The Child. A core aspect of our mandate involves
                  Advocating for the resolution of challenges faced by widows in
                  Kenya
                </p>
                <div className="hero-button">Get Started</div>
              </div>
            </div>
          </div>
          <div className={`right-hero col-lg-8 `}>
            <div
              className={`right-hero-image ${imageClass}`}
              style={{
                backgroundImage: `url(${backgroundImagesList[currentImage]})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
