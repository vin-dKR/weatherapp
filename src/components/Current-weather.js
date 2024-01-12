import React from "react";
import "../components/Current-weather.css";
import "./responsive.css"

function CurrentWeather(data) {
 
  
  return (
    <div className="weather">
      <div className="weather-top">
        <div>
          <p className="city">{ data.data.city }</p>
          <p className="halchal">{data.data.weather[0].description}</p>
        </div>
        <img src={`weather-ico/${data.data.weather[0].icon}.png`} className="wearher-icon" alt="img" />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.data.main.temp)}°C</p>
        <div className="temp-details">
          <div className="parameter-row">
            <span className="parameter-label detail">Details</span>
          </div>
          <hr />
          <div className="parameter-row">
            <span className="parameter-label">Feels Like </span>
            <span className="parameter-value">{data.data.main.feels_like} °C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.data.main.pressure} mb</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
