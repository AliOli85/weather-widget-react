import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  return (
    <div className="App weather-box rounded">
      <div className="row">
        <div className="col-6">
          <form id="search-city">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                autocomplete="off"
                autofocus="on"
                id="search-text-input"
              />
              <input type="submit" value="Search" className="btn btn-info" />

              <button id="currentPositionButton" className="btn btn-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#f6f6f6"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="col-6 text-end">
          <div className="current-date fs-5">Saturday, 6 March 2021</div>

          <div className="current-time fs-6">9:35 AM</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="Clear"
            id="icon"
            className="main-weather-icon"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h1 id="city" className="fw-bold">
            Madrid
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h3>
            <span id="temperature">16</span>
            <a href="\" id="celsius-link" className="active">
              °C
            </a>
            |
            <a href="\" id="fahrenheit-link" className="link">
              °F
            </a>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h6 id="main">Cloudy</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <p>
            Wind
            <span id="wind"></span>
            km/h
          </p>
        </div>
        <div className="col-4 text-center">
          <p>
            Humidity
            <span id="humidity"></span>%
          </p>
        </div>
        <div className="col-4 text-center">
          <p>
            Clouds
            <span id="clouds"></span>%
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="weather-forecast" id="forecast"></div>
      </div>
      <small>
        <a
          className="repo-link"
          href="https://github.com/AliOli85/weather-widget"
          target="_blank"
        >
          Open-source code
        </a>
        by Alicia Garcia
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
