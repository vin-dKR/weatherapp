import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import "./App.css";
import CurrentWeather from "./components/Current-weather";
import Search from "./components/search/search";
import Forcast from "./components/Forcast";
import "./components/responsive.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [foreCast, setForeCast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const foreCastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForeCast({ city: searchData.label, ...forecastResponse });
    })
    .catch((err) =>{
      console.log(err);
    })
  };


  
  return (
    <div className="container">
      {/* //on typing input it loading... */}
      <Search onSearchChange={handleOnSearchChange} className="search" />

      {/* currentWeather Card */}
      {currentWeather && <CurrentWeather data={currentWeather} className="current-weather" />}

      {/* weatherForecast Details */}
      {foreCast && <Forcast data={foreCast} className="weather-forecast" />}
    </div>
  );
}

export default App;
