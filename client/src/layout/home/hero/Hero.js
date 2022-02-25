import React from "react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import projects from "../../../assets/image/projects.png";
// import { Subtitle } from "../../../components";
// import { useScroll } from "../../../hooks/useScroll";
// import { cardAnimation } from "../../../utils/Animations";
// import useWindowDimensions from "../../../hooks/useWindowDimensions";
import "./_hero.scss";
import hero from "../../../assets/images/hero.png";

const Hero = () => {
  // const [element, controls] = useScroll();
  // const { width } = useWindowDimensions();
  return (
    <>
      <div
        className="home-hero"
        // ref={element}
      >
        <div className="home-hero__content">
          <h1 className="">
            SUFI <br /> ACADEMY
          </h1>
          <div className="home-hero__content__paragraph">
            <p className="home-hero__content__paragraph__item">
              Best Platform For Learning Urdu.
            </p>
          </div>
          <Link to="/lectures">
            <button className="home-hero__content__btn">Get Started</button>
          </Link>
        </div>
        <div
          className="home-hero__projectImg"
          // variants={cardAnimation}
          // animate={controls}
          // transition={{ type: "tween", duration: 0.5 }}
        >
          <img src={hero} alt="home-hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
