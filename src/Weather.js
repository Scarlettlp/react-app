import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form>
            <input type="search" placeholder="Enter a city..." />
            <input type="submit" value="Search" />
            <input type="submit" value="Current" />
          </form>

          <h1 class="date"> Sunday 07:43</h1>
          <div class="row">
            <div class="col-6">
              <div class="clearfix">
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  id="icon"
                  class="float-left"
                />

                <div class="temperature">
                  <span id="temp">22</span>
                  {" "}
                  <a href="#" id="celsius-link" class="active">
                    {" "}
                    °C{" "}
                  </a>
                  |
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6">
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
          <div class="row">
            <div class="col-2">
              <span class="sky" id="description">
                Clear
              </span>
            </div>
            <h2 id="city">San Francisco, California, EU.</h2>
          </div>
          <br />
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a href="https://github.com/Scarlettlp/Weather-app" target="_blank">
            Open-source code
          </a>
          by Scarlett Lara
        </small>
      </div>
    </div>
  );
}
