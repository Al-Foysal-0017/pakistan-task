import React from "react";
import "./_footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__left">
        <p className="footer__left__item">Contact: +923317973573</p>
        <p className="footer__left__item">Email: ayyum1647@gmail.com</p>
      </div>
      <div className="footer__right">
        {" "}
        © 2022 SUFI ACADEMY. All rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
