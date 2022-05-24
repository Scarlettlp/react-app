import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="App">
          <form>
            <input type="search" placeholder="Enter a city..." />
            <input type="submit" value="Search" />
            <input type="submit" value="Current" />
          </form>
        </div>
        <div className="weather-summary">
          <div className="weather-summary-header">
            <div className="weather-summary-header">
              <h1>Paris</h1>
              <div className="weather-detail-text"> Monday 06:51</div>
              <div className="weather-detail-text"> Clouds</div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="clearfix">
                  <div className="float-left weather-icon">
                    <canvas width="38" height="38"></canvas>
                  </div>
                  <div className="weather-temp-today">15</div>
                  <div className="Weather-unit">°C</div>
                </div>
              </div>
              <div className="col-6">
                <div className="weather-detail">Precipitation: 32%</div>
                <div className="weather-detail">Wind: 3km/h</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <div class="forecast-day">Tue</div>
              <div class="forecast-icon">
                <canvas width="38" height="38"></canvas>
              </div>
              <div class="forecast-temperature">15°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Wed</div>
              <div class="forecast-icon">
                <canvas width="38" height="38"></canvas>
              </div>
              <div class="forecast-temperature">17°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Thu</div>
              <div class="forecast-icon">
                <canvas width="38" height="38"></canvas>
              </div>
              <div class="forecast-temperature">21°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Fri</div>
              <div class="forecast-icon">
                <canvas width="38" height="38"></canvas>
              </div>
              <div class="forecast-temperature">21°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Sat</div>
              <div class="forecast-icon">
                <canvas width="38" height="38"></canvas>
              </div>
              <div class="forecast-temperature">19°</div>
            </div>
          </div>
          </div>
        </div>
        <small>
          <a href="https://github.com/Scarlettlp/Weather-app">
            Open-source code
          </a>
          by Scarlett Lara
        </small>
      </div>
    
  );
}
