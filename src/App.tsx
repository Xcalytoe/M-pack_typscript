import React from "react";
import PageRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/sass/m_pack.scss";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <PageRoutes />
      </Router>
    </>
  );
}

export default App;
