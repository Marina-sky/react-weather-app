import React from "react";

import DayAndTime from "./DayAndTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

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
              <WeatherIcon
                code={props.data.icon}
                className="current-icon"
              />
              <Temperature celsius={props.data.temperature} />
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