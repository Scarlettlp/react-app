import React from "react";
import Weather from "./Weather";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";

function App() {
  return (
    <div className="App">
      <Weather />
      <ReactAnimatedWeather />
    </div>
  );
}

export default App;
