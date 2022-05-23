import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form>
            <input type="search" placeholder="Enter a city..." />
            <input type="submit" value="Search" />
            <input type="submit" value="Current" />
          </form>

          <h1 className="date"> Sunday 07:43</h1>
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  className="float-left"
                />

                <div class="temperature">
                  <span id="temp">22</span>{" "}
                  <a href="/" id="celsius-link" class="active">
                    {" "}
                    °C{" "}
                  </a>
                  |
                  <a href="/">
                    °F
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Humidity: <span id="humidity"> 30</span>%
                </li>
                <li>
                  Wind: <span id="wind"> 21</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <span className="sky" id="description">
                Clear
              </span>
            </div>
            <h2 id="city">San Francisco, California, EU.</h2>
          </div>
          <br />
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a href="https://github.com/Scarlettlp/Weather-app">
            Open-source code
          </a>
          by Scarlett Lara
        </small>
      </div>
    </div>
  );
}
