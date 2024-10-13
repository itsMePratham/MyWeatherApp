import React from "react";
import "./CurrentWeather.css";
function CurrentWeather({ dataCurrent}) {


  
  

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{dataCurrent.city}</p>
          <p className="weather-description">{dataCurrent.weather[0].description}</p>
        </div>
        <img src={`icons/${dataCurrent.weather[0].icon}.png`} alt="Weather-icon" className="weather-icon" />
      </div>

      <div className="Bottom">
        <p className="temperature">{Math.round(dataCurrent.main.temp)}&deg;c</p>
        <div className="details">
                 <div className="parameter-row">
                    <span className="Parameter-label">Detail:</span>
                 </div>
                 <div className="parameter-row">
                     <span className="Parameter-label">fells like</span>
                     <span className="parameter-value">{Math.round(dataCurrent.main.feels_like)}&deg;c</span>
                 </div>
                 <div className="parameter-row">
                     <span className="Parameter-label">Wind</span>
                     <span className="parameter-value">{dataCurrent.wind.speed} m/s</span>
                 </div>
                 <div className="parameter-row">
                     <span className="Parameter-label">Humidity</span>
                     <span className="parameter-value">{dataCurrent.main.humidity}%</span>
                 </div>
                 <div className="parameter-row">
                     <span className="Parameter-label">Pressure</span>
                     <span className="parameter-value">{dataCurrent.main.pressure}hPa</span>
                 </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
