import React from "react";

import "../styles/Temperature.css";

export default function Temperature() {
  let data = {
    date: "Sunday, 12:50",
    description: "Clear sky",
    temperature: 30,
    imgUrl: "https://openweathermap.org/img/w/01d.png",
  };
  return (
    <div className="row">
      <div className="col">
        <p className="today">
          {data.date} <br />
          <span className="current-weather">{data.description}</span>
          <br />
          <img
            src={data.imgUrl}
            alt={data.description}
            className="current-icon"
          />
          <span className="current-temperature">{data.temperature}</span>
          <span className="units">
            <a href="/" className="active">
              °C
            </a>{" "}
            |<a href="/">°F</a>
          </span>
        </p>
      </div>
      <div className="col">
        <p className="quote">The message from the sun was enlightening.</p>
      </div>
    </div>
  );
}
