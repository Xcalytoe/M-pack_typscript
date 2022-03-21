import React from "react";
import PageRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./style/sass/m_pack.scss";
import {
  RecoilRoot,

} from 'recoil';
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <PageRoutes />
      </Router>
    </RecoilRoot>
  );
}

export default App;
