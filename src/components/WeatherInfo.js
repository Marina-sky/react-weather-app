import React from "react";

import DayAndTime from "./DayAndTime";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <div className="row">
          <div className="col">
            <h1 className="city">{props.data.city}</h1>
          </div>
          <div className="col">
            <p className="humidity-wind">
              Humidity: {props.data.humidity}% <br />
              Wind: {Math.round(props.data.wind)} km/h
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="today">
              <DayAndTime date={props.data.date} />
              <span className="current-weather">{props.data.description}</span>
              <br />
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="current-icon"
              />
              <span className="current-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
            </div>
          </div>
          <div className="col">
            <p className="quote">
              It is a great day for naps. Followed by naps.
            </p>
          </div>
        </div>
      </div>
    );
}