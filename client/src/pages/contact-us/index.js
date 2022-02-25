import React from "react";
import Container from "../../components/container";
import "./_contact.scss";
import contact from "../../assets/images/contact.png";
import Footer from "../../components/footer/Footer";
import Map from "../../components/map";

const ContactUs = () => {
  return (
    <Container className="contact">
      <div className="contact__heading">Contact Us</div>
      <div className="contact__container">
        <div className="contact__container__left">
          <img className="contact__container__left__img" src={contact} alt="" />
        </div>
        <div className="contact__container__right">
          <div className="contact__container__right__header">Contact</div>
          <div className="contact__container__right__item">+923317973573</div>
          <div style={{ marginTop: "2rem" }} />
          <div className="contact__container__right__header">Email</div>
          <div className="contact__container__right__item">
            ayyum1647@gmail.com
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </Container>
  );
};

export default ContactUs;
