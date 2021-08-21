import React, { useState } from "react";
import axios from "axios";

import SearchEngine from "./components/SearchEngine";
import DayAndTime from "./components/DayAndTime";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Weather.css";

export default function Weather() {
  const [weatherData, setweatherData] = useState({ ready: false });
  function showData(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/w/01d.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <SearchEngine />
              <div className="row">
                <div className="col">
                  <h1 className="city">{weatherData.city}</h1>
                </div>
                <div className="col">
                  <p className="humidity-wind">
                    Humidity: {weatherData.humidity}% <br />
                    Wind: {Math.round(weatherData.wind)} km/h
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="today">
                    <DayAndTime date={weatherData.date} />
                    <span className="current-weather">
                      {weatherData.description}
                    </span>
                    <br />
                    <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                      className="current-icon"
                    />
                    <span className="current-temperature">
                      {Math.round(weatherData.temperature)}
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
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    const apiKey = "ba32fdef5d635b26f61cd641f6ab56c1";
    let city = "Berlin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
    return "Loading...";
  }
}
