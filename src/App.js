import React from "react";
import Home from "./home/home";
import Company from "./Company/company"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/company/:id" element={<Company/>} exact/>
        <Route path="/" element={<Home/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;