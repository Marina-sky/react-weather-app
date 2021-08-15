import React from "react";

import "../styles/HumidityWind.css";

export default function HumidityWind() {
  let data = {
    city: "Berlin",
    humidity: 47,
    wind: 4,
  };
  return (
    <div className="row">
      <div className="col">
        <h1 className="city">{data.city}</h1>
      </div>
      <div className="col">
        <p className="humidity-wind">
          Humidity: {data.humidity}% <br />
          Wind: {data.wind} km/h
        </p>
      </div>
    </div>
  );
}
