import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "ba32fdef5d635b26f61cd641f6ab56c1";
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
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
