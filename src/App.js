import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/partials/Footer";
import Navigation from "./components/partials/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
