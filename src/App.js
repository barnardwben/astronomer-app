import * as React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Resources from "./Resources";
import Company from "./Company";
import GetStarted from "./GetStarted";

function App() {
  return (
    <div>
      <Navbar />
      <Routes className="App">
        <Route exact path="/" element={<Home />} />

        <Route exact path="/product" element={<Product />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/get-started" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
