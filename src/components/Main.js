import React from "react";
import About from "./partials/About/About";
import Comment from "./partials/Comments/Comment";
import Hero from "./partials/Hero/Hero";

const Main = () => {
  return (
    <div>
      <Hero />
      {/* <Divider/> */}
      <About />
      <Comment />
    </div>
  );
};

export default Main;
