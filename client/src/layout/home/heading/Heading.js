import React from "react";
import "./_heading.scss";
import freeLerning from "../../../assets/images/NoPaid.png";
import freeSupport from "../../../assets/images/freeSupport.png";
import bestTeachers from "../../../assets/images/bestTeachers.png";

const Heading = () => {
  return (
    <>
      <div className="home-heading">
        GET LEARN URDU
        <br /> WITH US
      </div>
      <section className="home-section">
        <img className="home-section__img" src={bestTeachers} alt="" />
        <h1 className="home-section__content">1. Best Teachers.</h1>
      </section>
      <section className="home-section">
        <img className="home-section__img" src={freeLerning} alt="" />
        <h1 className="home-section__content">2. No Paid.</h1>
      </section>
      <section className="home-section">
        <img className="home-section__img" src={freeSupport} alt="" />
        <h1 className="home-section__content">3. Free Support.</h1>
      </section>
      {/* <section>
        <img src={freeLerning} alt="" />
        <h1>Free Lerning, No Paid.</h1>
      </section>
      <section>
        <img src={freeSupport} alt="" />
        <h1>Free Lerning, No Paid.</h1>
      </section> */}
    </>
  );
};

export default Heading;
