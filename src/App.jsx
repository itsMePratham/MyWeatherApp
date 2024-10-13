import { useState } from "react";
import Search from "./components/search/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecasts from "./components/forecast/Forecast";

import { WEATHER_API_KEY } from "./api";
import { WEATHER_API_URL } from "./api";



function App() {
  const [count, setCount] = useState(0);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [Forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const ForcastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([CurrentWeatherFetch, ForcastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange}></Search>
        {currentWeather && (
          <CurrentWeather dataCurrent={currentWeather}></CurrentWeather>
        )}

        
        {  Forecast && ( <Forecasts forecastData={Forecast}></Forecasts>)} 
        
      </div>
    </>
  );
}

export default App;
