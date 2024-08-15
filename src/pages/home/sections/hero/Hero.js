import "./Hero.css";
import { useEffect, useState } from "react";
import hero1 from "../../../../assets/img/hero/hero1.jpeg";
import hero2 from "../../../../assets/img/hero/hero2.jpeg";
import hero3 from "../../../../assets/img/hero/hero3.jpeg";

export default function Hero() {
  const [cardBgImage, setCardBgImage] = useState(null);

  useEffect(() => {
    const backgroundImagesList = [hero1, hero2, hero3];
    let intervalId;

    const getRandomIndexExcluding = (excludeIndex) => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * backgroundImagesList.length);
      } while (randomIndex === excludeIndex);
      return randomIndex;
    };

    const flipAndChangeImages = () => {
      const frontRandomIndex = Math.floor(
        Math.random() * backgroundImagesList.length
      );
      const cardRandomIndex = getRandomIndexExcluding(frontRandomIndex);

      setCardBgImage(`url(${backgroundImagesList[cardRandomIndex]})`);
    };

    // Initial flip and image change
    flipAndChangeImages();

    // Set an interval to trigger the flip and image change every 10 seconds
    intervalId = setInterval(() => {
      flipAndChangeImages();
    }, 5000); // 10 seconds in milliseconds

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="left-hero h-100  col-lg-6">
            <div className="container h-100  d-flex justify-content-evenly align-items-center">
              <div className="content h-100 d-flex flex-column justify-content-evenly align-items-center text-center">
                <h1>Come Together Widows and Orphans Organization.</h1>
                <p>
                  Champions for the protection of Human Rights and Uphold the
                  Dignity of Widows, in alighnment with international standards
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
          <div
            className="right-hero col-lg-6"
            style={{ backgroundImage: cardBgImage }}
          ></div>
        </div>
      </div>
    </div>
  );
}
