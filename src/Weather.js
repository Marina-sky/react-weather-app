import React from "react";

import HumidityWind from "./components/HumidityWind";
import SearchEngine from "./components/SearchEngine";
import Temperature from "./components/Temperature";
import Footer from "./components/Footer";

import "./styles/Weather.css";

export default function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchEngine />
            <HumidityWind />
            <Temperature />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
