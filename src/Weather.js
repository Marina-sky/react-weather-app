import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast"
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./layouts/Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "52aff220e2b3cb2c09cdc02a62ee2add";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showData(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-8">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter a city"
                      aria-label="Enter a city"
                      autoComplete="off"
                      autoFocus="on"
                      onChange={handleCityChange}
                    />
                  </div>
                  <div className="col-2">
                    <input
                      type="submit"
                      value="Search"
                      className="form-control btn btn-secondary"
                    />
                  </div>
                  <div className="col-2">
                    <button type="button" className="btn btn-danger">
                      <i className="fas fa-map-pin"></i>
                    </button>
                  </div>
                </div>
              </form>
              <WeatherInfo data={weatherData} />
              <Forecast coordinates={weatherData.coordinates} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <Loader
        className="loader align-items-center"
        type="Rings"
        color="#4682B4"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
