import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { REDIRECT_FALSE, REMOVE_MESSAGE } from "../../store/types";
import Container from "../../components/container/index";
import Heading from "../../layout/home/heading/Heading";
import Hero from "../../layout/home/hero/Hero";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Heading />
      <Footer />
    </Container>
  );
};

export default Home;
