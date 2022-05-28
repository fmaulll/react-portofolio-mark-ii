import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Main from "./components/Main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Router>
        <Routes>
          <Route path="/" element={loading ? <Loader onLoading={loading} /> : <Main />} />
        </Routes>
    </Router>
  );
}

export default App;
