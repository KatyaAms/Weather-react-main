import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  let WeatherData = {
    city: "Amsterdam, NL",
    date: "16:40 Sunday, 17 January",
    description: "Snowing",
    temperature: 2,
    humidity: 80,
    wind: 5
  };

  return (
    <div className="landing-wrapper">
      <div className="App">
        <div className="weatherApp">
          <Weather city="Amsterdam"/>
        
          <h2>Current weather in:</h2>
          <form>
            <div className="form-group">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Search City or Zip Code"
                    autoFocus="on"
                  />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Search
                  </button>
                </div>
                <div className="col-8">
                  <button
                    type="button"
                    className="btn btn-info w-100"
                    id="current-location-button"
                  >
                    {" "}
                    Weather in my location
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-8">
              <h5 className="city">{WeatherData.city}</h5>
              <ul>
                <strong>
                  <li className="currentTime">{WeatherData.date}</li>
                  <li className="clouds">{WeatherData.description}</li>
                </strong>
              </ul>
              <br />
              <h1>
                <span className="number">{WeatherData.temperature}</span>
                <a href="#" id="celsius" className="active">
                  °C |
                </a>
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </h1>
              <br />
            </div>
            <div className="col-4">
              <ul>
                <strong>
                  <li> Humidity: {WeatherData.humidity}%</li>
                  <li> Wind: {WeatherData.wind} km/h</li>
                </strong>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
