import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Footer from "./components/partials/Footer";
import Navigation from "./components/partials/Navigation";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader onLoading={loading} />
      ) : (
        <div>
          <Navigation />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
