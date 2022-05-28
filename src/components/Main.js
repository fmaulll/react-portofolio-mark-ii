import React from "react";
import About from "./partials/About/About";
import Comment from "./partials/Comments/Comment";
import Footer from "./partials/Footer";
import Hero from "./partials/Hero/Hero";
import Navigation from "./partials/Navigation";

const Main = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Comment />
      <Footer />
    </>
  );
};

export default Main;
